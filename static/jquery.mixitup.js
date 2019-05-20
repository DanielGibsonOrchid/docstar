
/*
* MIXITUP - A CSS3 and JQuery Filter & Sort Plugin
* Version: 1.5.4
* License: Creative Commons Attribution-NoDerivs 3.0 Unported - CC BY-ND 3.0
* http://creativecommons.org/licenses/by-nd/3.0/
* This software may be used freely on commercial and non-commercial projects with attribution to the author/copyright holder.
* Author: Patrick Kunka
* Copyright 2012-2013 Patrick Kunka, Barrel LLC, All Rights Reserved
* 
* http://mixitup.io
*/

jQuery(document).ready(function(){

	// DECLARE METHODS
 
	var methods = {

		// "INIT" METHOD
	
	    init: function(settings){

			return this.each(function(){
				
				// BUILD CONFIG OBJECT

				var config = {
					
					// PUBLIC PROPERTIES
					
					targetSelector : '',
					filterSelector : '.filter',
					sortSelector : '.sort',
					buttonEvent: 'click',
					effects : ['fade'],
					listEffects : null,
					easing : 'smooth',
					layoutMode: 'grid',
					targetDisplayGrid : 'inline-block',
					targetDisplayList: 'block',
					listClass : '',
					gridClass : '',
					transitionSpeed : 200,
					showOnLoad : 'all',
					sortOnLoad : false,
					multiFilter : false,
					filterLogic : 'or',
					resizeContainer : true,
					minHeight : 0,
					failClass : 'fail',
					perspectiveDistance : '3000',
					perspectiveOrigin : '50% 50%',
					animateGridList : true,
					onMixLoad: null,
					onMixStart : null,
					onMixEnd : null,

					// MISC

					container : null,
					origOrder : [],
					startOrder : [],
					newOrder : [],
					origSort: [],
					checkSort: [],
					filter : '',
					mixing : false,
					origDisplay : '',
					origLayout: '',
					origHeight : 0, 
					newHeight : 0,
					isTouch : false,
					resetDelay : 0,
					failsafe : null,

					// CSS
					
					prefix : '',
					easingFallback : 'ease-in-out',
					transition : {}, 
					perspective : {}, 
					clean : {},
					fade : '1',
					scale : '',
					rotateX : '',
					rotateY : '',
					rotateZ : '',
					blur : '',
					grayscale : ''
				};
				
				if(settings){
					jQuery.extend(config, settings);
				};

				// ADD CONFIG OBJECT TO CONTAINER OBJECT PER INSTANTIATION
				
				this.config = config;
				
				// DETECT TOUCH
				
				jQuery.support.touch = 'ontouchend' in document;

				if (jQuery.support.touch) {
					config.isTouch = true;
					config.resetDelay = 350;
				};
				
				// LOCALIZE CONTAINER
	
				config.container = jQuery(this);
				var jQuerycont = config.container;
				
				// GET VENDOR PREFIX
				
				config.prefix = prefix(jQuerycont[0]);
				config.prefix = config.prefix ? '-'+config.prefix.toLowerCase()+'-' : '';
				
				// CACHE 'DEFAULT' SORTING ORDER
			
				jQuerycont.find(config.targetSelector).each(function(){
					config.origOrder.push(jQuery(this));
				});
				
				// PERFORM SORT ON LOAD 
				
				if(config.sortOnLoad){
					var sortby, order;
					if(jQuery.isArray(config.sortOnLoad)){
						sortby = config.sortOnLoad[0], order = config.sortOnLoad[1];
						jQuery(config.sortSelector+'[data-sort='+config.sortOnLoad[0]+'][data-order='+config.sortOnLoad[1]+']').addClass('active');
					} else {
						jQuery(config.sortSelector+'[data-sort='+config.sortOnLoad+']').addClass('active');
						sortby = config.sortOnLoad, config.sortOnLoad = 'desc';
					};
					sort(sortby, order, jQuerycont, config);
				};
				
				// BUILD TRANSITION AND PERSPECTIVE OBJECTS
				
				for(var i = 0; i<2; i++){
					var a = i==0 ? a = config.prefix : '';
					config.transition[a+'transition'] = 'all '+config.transitionSpeed+'ms ease-in-out';
					config.perspective[a+'perspective'] = config.perspectiveDistance+'px';
					config.perspective[a+'perspective-origin'] = config.perspectiveOrigin;
				};
				
				// BUILD TRANSITION CLEANER
				
				for(var i = 0; i<2; i++){
					var a = i==0 ? a = config.prefix : '';
					config.clean[a+'transition'] = 'none';
				};
	
				// CHOOSE GRID OR LIST
	
				if(config.layoutMode == 'list'){
					jQuerycont.addClass(config.listClass);
					config.origDisplay = config.targetDisplayList;
				} else {
					jQuerycont.addClass(config.gridClass);
					config.origDisplay = config.targetDisplayGrid;
				};
				config.origLayout = config.layoutMode;
				
				// PARSE 'SHOWONLOAD'
				
				var showOnLoadArray = config.showOnLoad.split(' ');
				
				// GIVE ACTIVE FILTER ACTIVE CLASS
				
				jQuery.each(showOnLoadArray, function(){
					jQuery(config.filterSelector+'[data-filter="'+this+'"]').addClass('active');
				});
				
				// RENAME "ALL" CATEGORY TO "MIX_ALL"
	
				jQuerycont.find(config.targetSelector).addClass('mix_all');
				if(showOnLoadArray[0]  == 'all'){
					showOnLoadArray[0] = 'mix_all',
					config.showOnLoad = 'mix_all';
				};
				
				// FADE IN 'SHOWONLOAD'
				
				var jQueryshowOnLoad = jQuery();
				jQuery.each(showOnLoadArray, function(){
					jQueryshowOnLoad = jQueryshowOnLoad.add(jQuery('.'+this))
				});
				
				jQueryshowOnLoad.each(function(){
					var jQueryt = jQuery(this);
					if(config.layoutMode == 'list'){
						jQueryt.css('display',config.targetDisplayList);
					} else {
						jQueryt.css('display',config.targetDisplayGrid);
					};
					jQueryt.css(config.transition);
				});
				
				// WRAP FADE-IN TO PREVENT RACE CONDITION
				
				var delay = setTimeout(function(){
					
					config.mixing = true;
					
					jQueryshowOnLoad.css('opacity','1');
					
					// CLEAN UP
					
					var reset = setTimeout(function(){
						if(config.layoutMode == 'list'){
							jQueryshowOnLoad.removeStyle(config.prefix+'transition, transition').css({
								display: config.targetDisplayList,
								opacity: 1
							});
						} else {
							jQueryshowOnLoad.removeStyle(config.prefix+'transition, transition').css({
								display: config.targetDisplayGrid,
								opacity: 1
							});
						};
						
						// FIRE "ONMIXLOAD" CALLBACK
						
						config.mixing = false;

						if(typeof config.onMixLoad == 'function') {
							var output = config.onMixLoad.call(this, config);

							// UPDATE CONFIG IF DATA RETURNED

							config = output ? output : config;
						};
						
					},config.transitionSpeed);
				},10);
				
				// PRESET ACTIVE FILTER
				
				config.filter = config.showOnLoad;
			
				// BIND SORT CLICK HANDLERS
			
				jQuery(config.sortSelector).bind(config.buttonEvent,function(){
					
					if(!config.mixing){
						
						// PARSE SORT ARGUMENTS FROM BUTTON CLASSES
						
						var jQueryt = jQuery(this),
						sortby = jQueryt.attr('data-sort'),
						order = jQueryt.attr('data-order');
						
						if(!jQueryt.hasClass('active')){
							jQuery(config.sortSelector).removeClass('active');
							jQueryt.addClass('active');
						} else {
							if(sortby != 'random')return false;
						};
						
						jQuerycont.find(config.targetSelector).each(function(){
							config.startOrder.push(jQuery(this));
						});
				
						goMix(config.filter,sortby,order,jQuerycont, config);
				
					};
				
				});

				// BIND FILTER CLICK HANDLERS

				jQuery(config.filterSelector).bind(config.buttonEvent,function(){
				
					if(!config.mixing){
						
						var jQueryt = jQuery(this);
						
						// PARSE FILTER ARGUMENTS FROM BUTTON CLASSES
		
						if(config.multiFilter == false){
							
							// SINGLE ACTIVE BUTTON
							
							jQuery(config.filterSelector).removeClass('active');
							jQueryt.addClass('active');
						
							config.filter = jQueryt.attr('data-filter');
						
							jQuery(config.filterSelector+'[data-filter="'+config.filter+'"]').addClass('active');

						} else {
						
							// MULTIPLE ACTIVE BUTTONS
							
							var thisFilter = jQueryt.attr('data-filter'); 
						
							if(jQueryt.hasClass('active')){
								jQueryt.removeClass('active');
								
								// REMOVE FILTER FROM SPACE-SEPERATED STRING
								
								var re = new RegExp('(\\s|^)'+thisFilter);
								config.filter = config.filter.replace(re,'');
							} else {
								
								// ADD FILTER TO SPACE-SEPERATED STRING
								
								jQueryt.addClass('active');
								config.filter = config.filter+' '+thisFilter;
								
							};
						};
						
						// GO MIX
						
						goMix(config.filter, null, null, jQuerycont, config);

					};
				
				});
					
			});
		},
	
		// "TOGRID" METHOD
	
		toGrid: function(){
			return this.each(function(){
				var config = this.config;
				if(config.layoutMode != 'grid'){
					config.layoutMode = 'grid';
					goMix(config.filter, null, null, jQuery(this), config);
				};
			});
		},
	
		// "TOLIST" METHOD
	
		toList: function(){
			return this.each(function(){
				var config = this.config;
				if(config.layoutMode != 'list'){
					config.layoutMode = 'list';
					goMix(config.filter, null, null, jQuery(this), config);
				};
			});
		},
	
		// "FILTER" METHOD
	
		filter: function(arg){
			return this.each(function(){
				var config = this.config;
				if(!config.mixing){	
					jQuery(config.filterSelector).removeClass('active');
					jQuery(config.filterSelector+'[data-filter="'+arg+'"]').addClass('active');
					goMix(arg, null, null, jQuery(this), config);
				};
			});	
		},
	
		// "SORT" METHOD
	
		sort: function(args){
			return this.each(function(){
				var config = this.config,
					jQueryt = jQuery(this);
				if(!config.mixing){
					jQuery(config.sortSelector).removeClass('active');
					if(jQuery.isArray(args)){
						var sortby = args[0], order = args[1];
						jQuery(config.sortSelector+'[data-sort="'+args[0]+'"][data-order="'+args[1]+'"]').addClass('active');
					} else {
						jQuery(config.sortSelector+'[data-sort="'+args+'"]').addClass('active');
						var sortby = args, order = 'desc';
					};
					jQueryt.find(config.targetSelector).each(function(){
						config.startOrder.push(jQuery(this));
					});
					
					goMix(config.filter,sortby,order, jQueryt, config);
				
				};
			});
		},
		
		// "MULTIMIX" METHOD
		
		multimix: function(args){
			return this.each(function(){
				var config = this.config,
					jQueryt = jQuery(this);
					multiOut = {
						filter: config.filter,
						sort: null,
						order: 'desc',
						layoutMode: config.layoutMode
					};
				jQuery.extend(multiOut, args);
				if(!config.mixing){
					jQuery(config.filterSelector).add(config.sortSelector).removeClass('active');
					jQuery(config.filterSelector+'[data-filter="'+multiOut.filter+'"]').addClass('active');
					if(typeof multiOut.sort !== 'undefined'){
						jQuery(config.sortSelector+'[data-sort="'+multiOut.sort+'"][data-order="'+multiOut.order+'"]').addClass('active');
						jQueryt.find(config.targetSelector).each(function(){
							config.startOrder.push(jQuery(this));
						});
					};
					config.layoutMode = multiOut.layoutMode;
					goMix(multiOut.filter,multiOut.sort,multiOut.order, jQueryt, config);
				};
			});
		},
		
		// "REMIX" METHOD

		remix: function(arg){
			return this.each(function(){
				var config = this.config,
					jQueryt = jQuery(this);	
				config.origOrder = [];
				jQueryt.find(config.targetSelector).each(function(){
					var jQueryth = jQuery(this);
					jQueryth.addClass('mix_all'); 
				    config.origOrder.push(jQueryth);
				});
				if(!config.mixing && typeof arg !== 'undefined'){
					jQuery(config.filterSelector).removeClass('active');
					jQuery(config.filterSelector+'[data-filter="'+arg+'"]').addClass('active');
					goMix(arg, null, null, jQueryt, config);
				};
			});
		}
	};
	
	// DECLARE PLUGIN

	jQuery.fn.mixitup = function(method, arg){
		if (methods[method]) {
			return methods[method].apply( this, Array.prototype.slice.call(arguments,1));
		} else if (typeof method === 'object' || ! method){
			return methods.init.apply( this, arguments );
		};
	};
	
	/* ==== THE MAGIC ==== */
	
	function goMix(filter, sortby, order, jQuerycont, config){
		
		// WE ARE NOW MIXING

		clearInterval(config.failsafe);
		config.mixing = true;	
		
		// APPLY ARGS TO CONFIG
		
		config.filter = filter;
		
		// FIRE "ONMIXSTART" CALLBACK
		
		if(typeof config.onMixStart == 'function') {
			var output = config.onMixStart.call(this, config);
			
			// UPDATE CONFIG IF DATA RETURNED
			
			config = output ? output : config;
		};
		
		// SHORT LOCAL VARS
		
		var speed = config.transitionSpeed;
		
		// REBUILD TRANSITION AND PERSPECTIVE OBJECTS
		
		for(var i = 0; i<2; i++){
			var a = i==0 ? a = config.prefix : '';
			config.transition[a+'transition'] = 'all '+speed+'ms linear';
			config.transition[a+'transform'] = a+'translate3d(0,0,0)';
			config.perspective[a+'perspective'] = config.perspectiveDistance+'px';
			config.perspective[a+'perspective-origin'] = config.perspectiveOrigin;
		};
		
		// CACHE TARGET ELEMENTS FOR QUICK ACCESS
		
		var mixSelector = config.targetSelector,
		jQuerytargets = jQuerycont.find(mixSelector);
		
		// ADD DATA OBJECT TO EACH TARGET
		
		jQuerytargets.each(function(){
			this.data = {};
		});
		
		// RE-DEFINE CONTAINER INCASE NOT IMMEDIATE PARENT OF TARGET ELEMENTS 
		
		var jQuerypar = jQuerytargets.parent();
	
		// ADD PERSPECTIVE TO CONTAINER 
		
		jQuerypar.css(config.perspective);
		
		// SETUP EASING

		config.easingFallback = 'ease-in-out';
		if(config.easing == 'smooth')config.easing = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';
		if(config.easing == 'snap')config.easing = 'cubic-bezier(0.77, 0, 0.175, 1)';
		if(config.easing == 'windback'){
			config.easing = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
			config.easingFallback = 'cubic-bezier(0.175, 0.885, 0.320, 1)'; // Fall-back for old webkit, with no values > 1 or < 1
		};
		if(config.easing == 'windup'){
			config.easing = 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
			config.easingFallback = 'cubic-bezier(0.6, 0.28, 0.735, 0.045)';
		};
		
		// USE LIST SPECIFIC EFFECTS IF DECLARED
		
		var effectsOut = config.layoutMode == 'list' && config.listEffects != null ? config.listEffects : config.effects;
	
		// BUILD EFFECTS STRINGS & SKIP IF IE8
	
		if (Array.prototype.indexOf){
			config.fade = effectsOut.indexOf('fade') > -1 ? '0' : '';
			config.scale = effectsOut.indexOf('scale') > -1 ? 'scale(.01)' : '';
			config.rotateZ = effectsOut.indexOf('rotateZ') > -1 ? 'rotate(180deg)' : '';
			config.rotateY = effectsOut.indexOf('rotateY') > -1 ? 'rotateY(90deg)' : '';
			config.rotateX = effectsOut.indexOf('rotateX') > -1 ? 'rotateX(90deg)' : '';
			config.blur = effectsOut.indexOf('blur') > -1 ? 'blur(8px)' : '';
			config.grayscale = effectsOut.indexOf('grayscale') > -1 ? 'grayscale(100%)' : '';
		};
		
		// DECLARE NEW JQUERY OBJECTS FOR GROUPING
		
		var jQueryshow = jQuery(), 
		jQueryhide = jQuery(),
		filterArray = [],
		multiDimensional = false;
		
		// BUILD FILTER ARRAY(S)
		
		if(typeof filter === 'string'){
			
			// SINGLE DIMENSIONAL FILTERING
			
			filterArray = buildFilterArray(filter);
			
		} else {
			
			// MULTI DIMENSIONAL FILTERING
			
			multiDimensional = true;
			
			jQuery.each(filter,function(i){
				filterArray[i] = buildFilterArray(this);
			});
		};

		// "OR" LOGIC (DEFAULT)
		
		if(config.filterLogic == 'or'){
			
			if(filterArray[0] == '') filterArray.shift(); // IF FIRST ITEM IN ARRAY IS AN EMPTY SPACE, DELETE
			
			// IF NO ELEMENTS ARE DESIRED THEN HIDE ALL VISIBLE ELEMENTS
		
			if(filterArray.length < 1){
				
				jQueryhide = jQueryhide.add(jQuerycont.find(mixSelector+':visible'));
				
			} else {

			// ELSE CHECK EACH TARGET ELEMENT FOR ANY FILTER CATEGORY:
			
				jQuerytargets.each(function(){
					var jQueryt = jQuery(this);
					if(!multiDimensional){
						// IF HAS ANY FILTER, ADD TO "SHOW" OBJECT
						if(jQueryt.is('.'+filterArray.join(', .'))){
							jQueryshow = jQueryshow.add(jQueryt);
						// ELSE IF HAS NO FILTERS, ADD TO "HIDE" OBJECT
						} else {
							jQueryhide = jQueryhide.add(jQueryt);
						};
					} else {
						
						var pass = 0;
						// FOR EACH DIMENSION
						
						jQuery.each(filterArray,function(i){
							if(this.length){
								if(jQueryt.is('.'+this.join(', .'))){
									pass++
								};
							} else if(pass > 0){
								pass++;
							};
						});
						// IF PASSES ALL DIMENSIONS, SHOW
						if(pass == filterArray.length){
							jQueryshow = jQueryshow.add(jQueryt);
						// ELSE HIDE
						} else {
							jQueryhide = jQueryhide.add(jQueryt);
						};
					};
				});
			
			};
	
		} else {
			
		// "AND" LOGIC
			
			// ADD "MIX_SHOW" CLASS TO ELEMENTS THAT HAVE ALL FILTERS
			
			jQueryshow = jQueryshow.add(jQuerypar.find(mixSelector+'.'+filterArray.join('.')));
			
			// ADD "MIX_HIDE" CLASS TO EVERYTHING ELSE
			
			jQueryhide = jQueryhide.add(jQuerypar.find(mixSelector+':not(.'+filterArray.join('.')+'):visible'));
		};
		
		// GET TOTAL NUMBER OF ELEMENTS TO SHOW
		
		var total = jQueryshow.length;
		
		// DECLARE NEW JQUERY OBJECTS

		var jQuerytohide = jQuery(),
		jQuerytoshow = jQuery(),
		jQuerypre = jQuery();
		
		// FOR ELEMENTS TO BE HIDDEN, IF NOT ALREADY HIDDEN THEN ADD TO OBJECTS "TOHIDE" AND "PRE" 
		// TO INDICATE PRE-EXISTING ELEMENTS TO BE HIDDEN
		
		jQueryhide.each(function(){
			var jQueryt = jQuery(this);
			if(jQueryt.css('display') != 'none'){
				jQuerytohide = jQuerytohide.add(jQueryt);
				jQuerypre = jQuerypre.add(jQueryt);
			};
		});
		
		// IF ALL ELEMENTS ARE ALREADY SHOWN AND THERE IS NOTHING TO HIDE, AND NOT PERFORMING A LAYOUT CHANGE OR SORT:
		
		if(jQueryshow.filter(':visible').length == total && !jQuerytohide.length && !sortby){
			
			if(config.origLayout == config.layoutMode){
				
				// THEN CLEAN UP AND GO HOME

				resetFilter();
				return false;
			} else {
				
				// IF ONLY ONE ITEM AND CHANGING FORM GRID TO LIST, MOST LIKELY POSITION WILL NOT CHANGE SO WE'RE DONE
			
				if(jQueryshow.length == 1){ 
					
					if(config.layoutMode == 'list'){ 
						jQuerycont.addClass(config.listClass);
						jQuerycont.removeClass(config.gridClass);
						jQuerypre.css('display',config.targetDisplayList);
					} else {
						jQuerycont.addClass(config.gridClass);
						jQuerycont.removeClass(config.listClass);
						jQuerypre.css('display',config.targetDisplayGrid);
					};
					
					// THEN CLEAN UP AND GO HOME

					resetFilter();
					return false;
				}
			};
		};
		
		// GET CONTAINER'S STARTING HEIGHT

		config.origHeight = jQuerypar.height();
		
		// IF THERE IS SOMETHING TO BE SHOWN:

		if(jQueryshow.length){
			
			// REMOVE "FAIL CLASS" FROM CONTAINER IF EXISTS
			
			jQuerycont.removeClass(config.failClass);
			
			
			// FOR ELEMENTS TO BE SHOWN, IF NOT ALREADY SHOWN THEN ADD TO OBJECTS "TOSHOW" ELSE ADD CLASS "MIX_PRE"
			// TO INDICATE PRE-EXISTING ELEMENT

			jQueryshow.each(function(){ 
				var jQueryt = jQuery(this);
				if(jQueryt.css('display') == 'none'){
					jQuerytoshow = jQuerytoshow.add(jQueryt)
				} else {
					jQuerypre = jQuerypre.add(jQueryt);
				};
			});
	
			// IF NON-ANIMATED LAYOUT MODE TRANSITION:
		
			if((config.origLayout != config.layoutMode) && config.animateGridList == false){ 
			
				// ADD NEW DISPLAY TYPES, CLEAN UP AND GO HOME
				
				if(config.layoutMode == 'list'){ 
					jQuerycont.addClass(config.listClass);
					jQuerycont.removeClass(config.gridClass);
					jQuerypre.css('display',config.targetDisplayList);
				} else {
					jQuerycont.addClass(config.gridClass);
					jQuerycont.removeClass(config.listClass);
					jQuerypre.css('display',config.targetDisplayGrid);
				};
				
				resetFilter();
				return false;
			};
			
			// IF IE, FUCK OFF, AND THEN CLEAN UP AND GO HOME
		
			if(!window.atob){
				resetFilter();
				return false;
			};
			
			// OVERRIDE ANY EXISTING TRANSITION TIMING FOR CALCULATIONS
			
			jQuerytargets.css(config.clean);
			
			// FOR EACH PRE-EXISTING ELEMENT, ADD STARTING POSITION TO 'ORIGPOS' ARRAY
			
			jQuerypre.each(function(){
				this.data.origPos = jQuery(this).offset();
			});
	
			// TEMPORARILY SHOW ALL ELEMENTS TO SHOW (THAT ARE NOT ALREADY SHOWN), WITHOUT HIDING ELEMENTS TO HIDE
			// AND ADD/REMOVE GRID AND LIST CLASSES FROM CONTAINER
	
			if(config.layoutMode == 'list'){
				jQuerycont.addClass(config.listClass);
				jQuerycont.removeClass(config.gridClass);
				jQuerytoshow.css('display',config.targetDisplayList);
			} else {
				jQuerycont.addClass(config.gridClass);
				jQuerycont.removeClass(config.listClass);
				jQuerytoshow.css('display',config.targetDisplayGrid);
			};
			
			// FOR EACH ELEMENT NOW SHOWN, ADD ITS INTERMEDIATE POSITION TO 'SHOWINTERPOS' ARRAY
	
			jQuerytoshow.each(function(){
				this.data.showInterPos = jQuery(this).offset();
			});
			
			// FOR EACH ELEMENT TO BE HIDDEN, BUT NOT YET HIDDEN, AND NOW MOVED DUE TO SHOWN ELEMENTS,
			// ADD ITS INTERMEDIATE POSITION TO 'HIDEINTERPOS' ARRAY

			jQuerytohide.each(function(){
				this.data.hideInterPos = jQuery(this).offset();
			});
			
			// FOR EACH PRE-EXISTING ELEMENT, NOW MOVED DUE TO SHOWN ELEMENTS, ADD ITS POSITION TO 'PREINTERPOS' ARRAY
	
			jQuerypre.each(function(){
				this.data.preInterPos = jQuery(this).offset();
			});
			
			// SET DISPLAY PROPERTY OF PRE-EXISTING ELEMENTS INCASE WE ARE CHANGING LAYOUT MODE
	
			if(config.layoutMode == 'list'){
				jQuerypre.css('display',config.targetDisplayList);
			} else {
				jQuerypre.css('display',config.targetDisplayGrid);
			};
			
			// IF A SORT ARGUMENT HAS BEEN SENT, RUN SORT FUNCTION SO OBJECTS WILL MOVE TO THEIR FINAL ORDER
			
			if(sortby){
				sort(sortby, order, jQuerycont, config);	
			};
			
			// IF VISIBLE SORT ORDER IS THE SAME (WHICH WOULD NOT TRIGGER A TRANSITION EVENT)
		
			if(sortby && compareArr(config.origSort, config.checkSort)){
				
				// THEN CLEAN UP AND GO HOME
				resetFilter();
				return false;
			};
			
			// TEMPORARILY HIDE ALL SHOWN ELEMENTS TO HIDE

			jQuerytohide.hide();
			
			// FOR EACH ELEMENT TO SHOW, AND NOW MOVED DUE TO HIDDEN ELEMENTS BEING REMOVED, 
			// ADD ITS POSITION TO 'FINALPOS' ARRAY
			
			jQuerytoshow.each(function(i){
				this.data.finalPos = jQuery(this).offset();
			});
			
			// FOR EACH PRE-EXISTING ELEMENT NOW MOVED DUE TO HIDDEN ELEMENTS BEING REMOVED,
			// ADD ITS POSITION TO 'FINALPREPOS' ARRAY
	
			jQuerypre.each(function(){
				this.data.finalPrePos = jQuery(this).offset();
			});
			
			// SINCE WE ARE IN OUT FINAL STATE, GET NEW HEIGHT OF CONTAINER
	
			config.newHeight = jQuerypar.height();
			
			// IF A SORT ARGUMENT AS BEEN SENT, RUN SORT FUNCTION 'RESET' TO MOVE ELEMENTS BACK TO THEIR STARTING ORDER
			
			if(sortby){
				sort('reset', null, jQuerycont, config);
			};
			
			// RE-HIDE ALL ELEMENTS TEMPORARILY SHOWN
			
			jQuerytoshow.hide();
			
			// SET DISPLAY PROPERTY OF PRE-EXISTING ELEMENTS BACK TO THEIR 
			// ORIGINAL PROPERTY, INCASE WE ARE CHANGING LAYOUT MODE
			
			jQuerypre.css('display',config.origDisplay);
			
			// ADD/REMOVE GRID AND LIST CLASSES FROM CONTAINER
	
			if(config.origDisplay == 'block'){
				jQuerycont.addClass(config.listClass);
				jQuerytoshow.css('display', config.targetDisplayList);
			} else {
				jQuerycont.removeClass(config.listClass);
				jQuerytoshow.css('display', config.targetDisplayGrid);
			};
			
			// IF WE ARE ANIMATING CONTAINER, RESET IT TO ITS STARTING HEIGHT
		
			if(config.resizeContainer)jQuerypar.css('height', config.origHeight+'px');
	
			// ADD TRANSFORMS TO ALL ELEMENTS TO SHOW
			
			var toShowCSS = {};
			
			for(var i = 0; i<2; i++){
				var a = i==0 ? a = config.prefix : '';
				toShowCSS[a+'transform'] = config.scale+' '+config.rotateX+' '+config.rotateY+' '+config.rotateZ;
				toShowCSS[a+'filter'] = config.blur+' '+config.grayscale;
			};
			
			jQuerytoshow.css(toShowCSS);
	
			// FOR EACH PRE-EXISTING ELEMENT, SUBTRACT ITS INTERMEDIATE POSITION FROM ITS ORIGINAL POSITION 
			// TO GET ITS STARTING OFFSET
	
			jQuerypre.each(function(){
				var data = this.data,
				jQueryt = jQuery(this);
				
				if (jQueryt.hasClass('mix_tohide')){
					data.preTX = data.origPos.left - data.hideInterPos.left;
					data.preTY = data.origPos.top - data.hideInterPos.top;
				} else {
					data.preTX = data.origPos.left - data.preInterPos.left;
					data.preTY = data.origPos.top - data.preInterPos.top;
				};
				var preCSS = {};
				for(var i = 0; i<2; i++){
					var a = i==0 ? a = config.prefix : '';
					preCSS[a+'transform'] = 'translate('+data.preTX+'px,'+data.preTY+'px)';
				};
				
				jQueryt.css(preCSS);	
			});
			
			// ADD/REMOVE GRID AND LIST CLASSES FROM CONTAINER
	
			if(config.layoutMode == 'list'){
				jQuerycont.addClass(config.listClass);
				jQuerycont.removeClass(config.gridClass);
			} else {
				jQuerycont.addClass(config.gridClass);
				jQuerycont.removeClass(config.listClass);
			};
			
			// WRAP ANIMATION FUNCTIONS IN 10ms TIMEOUT TO PREVENT RACE CONDITION
			
			var delay = setTimeout(function(){
		
				// APPLY TRANSITION TIMING TO CONTAINER, AND BEGIN ANIMATION TO NEW HEIGHT
				
				if(config.resizeContainer){
					var containerCSS = {};
					for(var i = 0; i<2; i++){
						var a = i==0 ? a = config.prefix : '';
						containerCSS[a+'transition'] = 'all '+speed+'ms ease-in-out';
						containerCSS['height'] = config.newHeight+'px';
					};
					jQuerypar.css(containerCSS);
				};
	
				// BEGIN FADING IN/OUT OF ALL ELEMENTS TO SHOW/HIDE
				jQuerytohide.css('opacity',config.fade);
				jQuerytoshow.css('opacity',1);
	
				// FOR EACH ELEMENT BEING SHOWN, CALCULATE ITS TRAJECTORY BY SUBTRACTING
				// ITS INTERMEDIATE POSITION FROM ITS FINAL POSITION.
				// ALSO ADD SPEED AND EASING
				
				jQuerytoshow.each(function(){
					var data = this.data;
					data.tX = data.finalPos.left - data.showInterPos.left;
					data.tY = data.finalPos.top - data.showInterPos.top;
					
					var toShowCSS = {};
					for(var i = 0; i<2; i++){
						var a = i==0 ? a = config.prefix : '';
						toShowCSS[a+'transition-property'] = a+'transform, '+a+'filter, opacity';
						toShowCSS[a+'transition-timing-function'] = config.easing+', linear, linear';
						toShowCSS[a+'transition-duration'] = speed+'ms';
						toShowCSS[a+'transition-delay'] = '0';
						toShowCSS[a+'transform'] = 'translate('+data.tX+'px,'+data.tY+'px)';
						toShowCSS[a+'filter'] = 'none';
					};
					
					jQuery(this).css('-webkit-transition', 'all '+speed+'ms '+config.easingFallback).css(toShowCSS);
				});
				
				// FOR EACH PRE-EXISTING ELEMENT, IF IT HAS A FINAL POSITION, CALCULATE 
				// ITS TRAJETORY BY SUBTRACTING ITS INTERMEDIATE POSITION FROM ITS FINAL POSITION.
				// ALSO ADD SPEED AND EASING
				
				jQuerypre.each(function(){
					var data = this.data
					data.tX = data.finalPrePos.left != 0 ? data.finalPrePos.left - data.preInterPos.left : 0;
					data.tY = data.finalPrePos.left != 0 ? data.finalPrePos.top - data.preInterPos.top : 0;
					
					var preCSS = {};
					for(var i = 0; i<2; i++){
						var a = i==0 ? a = config.prefix : '';
						preCSS[a+'transition'] = 'all '+speed+'ms '+config.easing;
						preCSS[a+'transform'] = 'translate('+data.tX+'px,'+data.tY+'px)';
					};
					
					jQuery(this).css('-webkit-transition', 'all '+speed+'ms '+config.easingFallback).css(preCSS);
				});
		
				// BEGIN TRANSFORMS ON ALL ELEMENTS TO BE HIDDEN
				
				var toHideCSS = {};
				for(var i = 0; i<2; i++){
					var a = i==0 ? a = config.prefix : '';
					toHideCSS[a+'transition'] = 'all '+speed+'ms '+config.easing+', '+a+'filter '+speed+'ms linear, opacity '+speed+'ms linear';
					toHideCSS[a+'transform'] = config.scale+' '+config.rotateX+' '+config.rotateY+' '+config.rotateZ;
					toHideCSS[a+'filter'] = config.blur+' '+config.grayscale;
					toHideCSS['opacity'] = config.fade;
				};
				
				jQuerytohide.css(toHideCSS);
				
				// ALL ANIMATIONS HAVE NOW BEEN STARTED, NOW LISTEN FOR TRANSITION END:
				
				jQuerypar.bind('webkitTransitionEnd transitionend otransitionend oTransitionEnd',function(e){
					
					if (e.originalEvent.propertyName.indexOf('transform') > -1 || e.originalEvent.propertyName.indexOf('opacity') > -1){
						
						if(mixSelector.indexOf('.') > -1){
						
						// IF MIXSELECTOR IS A CLASS NAME
						
							if(jQuery(e.target).hasClass(mixSelector.replace('.',''))){
								resetFilter();
							};
						
						} else {
							
						// IF MIXSELECTOR IS A TAG
						
							if(jQuery(e.target).is(mixSelector)){
								resetFilter();
							};
							
						};
						
					};
				});	
	
			},10);
			
			// LAST RESORT EMERGENCY FAILSAFE
			
			config.failsafe = setTimeout(function(){
				if(config.mixing){
					resetFilter();
				};
			}, speed + 400);
	
		} else {
			
		// ELSE IF NOTHING TO SHOW, AND EVERYTHING TO BE HIDDEN
		
			// IF WE ARE RESIZING CONTAINER, SET ITS STARTING HEIGHT
	
			if(config.resizeContainer)jQuerypar.css('height', config.origHeight+'px');
			
			// IF IE, FUCK OFF, AND THEN GO HOME
			
			if(!window.atob){
				resetFilter();
				return false;
			};
			
			// GROUP ALL ELEMENTS TO HIDE INTO JQUERY OBJECT
			
			jQuerytohide = jQueryhide;
			
			// WRAP ANIMATION FUNCTIONS IN A 10ms DELAY TO PREVENT RACE CONDITION
	
			var delay = setTimeout(function(){
				
				// APPLY PERSPECTIVE TO CONTAINER
	
				jQuerypar.css(config.perspective);
				
				// APPLY TRANSITION TIMING TO CONTAINER, AND BEGIN ANIMATION TO NEW HEIGHT
		
				if(config.resizeContainer){
					var containerCSS = {};
					for(var i = 0; i<2; i++){
						var a = i==0 ? a = config.prefix : '';
						containerCSS[a+'transition'] = 'height '+speed+'ms ease-in-out';
						containerCSS['height'] = config.minHeight+'px';
					};
					jQuerypar.css(containerCSS);
				};
	
				// APPLY TRANSITION TIMING TO ALL TARGET ELEMENTS
				
				jQuerytargets.css(config.transition);
				
				// GET TOTAL NUMBER OF ELEMENTS TO HIDE
	
				var totalHide = jQueryhide.length;
				
				// IF SOMETHING TO HIDE:
	
				if(totalHide){
					
					// BEGIN TRANSFORMS ON ALL ELEMENTS TO BE HIDDEN

					var toHideCSS = {};
					for(var i = 0; i<2; i++){
						var a = i==0 ? a = config.prefix : '';
						toHideCSS[a+'transform'] = config.scale+' '+config.rotateX+' '+config.rotateY+' '+config.rotateZ;
						toHideCSS[a+'filter'] = config.blur+' '+config.grayscale;
						toHideCSS['opacity'] = config.fade;
					};

					jQuerytohide.css(toHideCSS);
					
					// ALL ANIMATIONS HAVE NOW BEEN STARTED, NOW LISTEN FOR TRANSITION END:

					jQuerypar.bind('webkitTransitionEnd transitionend otransitionend oTransitionEnd',function(e){
						if (e.originalEvent.propertyName.indexOf('transform') > -1 || e.originalEvent.propertyName.indexOf('opacity') > -1){
							jQuerycont.addClass(config.failClass);
							resetFilter();
						};
					});
		
				} else {
					
				// ELSE, WE'RE DONE MIXING
				 	
					config.mixing = false;
				};
	
			}, 10);
		}; 
		
		// CLEAN UP AND RESET FUNCTION

		function resetFilter(){
			
			// UNBIND TRANSITION END EVENTS FROM CONTAINER
			
			jQuerypar.unbind('webkitTransitionEnd transitionend otransitionend oTransitionEnd');
			
			// IF A SORT ARGUMENT HAS BEEN SENT, SORT ELEMENTS TO THEIR FINAL ORDER
			
			if(sortby){
				sort(sortby, order, jQuerycont, config);
			};
			
			// EMPTY SORTING ARRAYS
		
			config.startOrder = [], config.newOrder = [], config.origSort = [], config.checkSort = [];
		
			// REMOVE INLINE STYLES FROM ALL TARGET ELEMENTS AND SLAM THE BRAKES ON
			
			jQuerytargets.removeStyle(
				config.prefix+'filter, filter, '+config.prefix+'transform, transform, opacity, display'
			).css(config.clean).removeAttr('data-checksum');
			
			// BECAUSE IE SUCKS
			
			if(!window.atob){
				jQuerytargets.css({
					display: 'none',
					opacity: '0'
				});
			};
			
			// REMOVE HEIGHT FROM CONTAINER ONLY IF RESIZING
			
			var remH = config.resizeContainer ? 'height' : '';
			
			// REMOVE INLINE STYLES FROM CONTAINER
		
			jQuerypar.removeStyle(
				config.prefix+'transition, transition, '+config.prefix+'perspective, perspective, '+config.prefix+'perspective-origin, perspective-origin, '+remH
			);
			
			// ADD FINAL DISPLAY PROPERTIES AND OPACITY TO ALL SHOWN ELEMENTS
			// CACHE CURRENT LAYOUT MODE & SORT FOR NEXT MIX
			
			if(config.layoutMode == 'list'){
				jQueryshow.css({display:config.targetDisplayList, opacity:'1'});
				config.origDisplay = config.targetDisplayList;
			} else {
				jQueryshow.css({display:config.targetDisplayGrid, opacity:'1'});
				config.origDisplay = config.targetDisplayGrid;
			};
			config.origLayout = config.layoutMode;
				
			var wait = setTimeout(function(){
				
				// LET GO OF THE BRAKES
				
				jQuerytargets.removeStyle(config.prefix+'transition, transition');
			
				// WE'RE DONE MIXING
			
				config.mixing = false;
			
				// FIRE "ONMIXEND" CALLBACK
			
				if(typeof config.onMixEnd == 'function') {
					var output = config.onMixEnd.call(this, config);
				
					// UPDATE CONFIG IF DATA RETURNED
				
					config = output ? output : config;
				};
			});
		};
	};
	
	// SORT FUNCTION
	
	function sort(sortby, order, jQuerycont, config){

		// COMPARE BY ATTRIBUTE

		function compare(a,b) {
			var sortAttrA = isNaN(a.attr(sortby) * 1) ? a.attr(sortby).toLowerCase() : a.attr(sortby) * 1,
				sortAttrB = isNaN(b.attr(sortby) * 1) ? b.attr(sortby).toLowerCase() : b.attr(sortby) * 1;
		  	if (sortAttrA < sortAttrB)
		    	return -1;
		  	if (sortAttrA > sortAttrB)
		    	return 1;
		  	return 0;
		};
		
		// REBUILD DOM

		function rebuild(element){
			if(order == 'asc'){
				jQuerysortWrapper.prepend(element).prepend(' ');
			} else {
				jQuerysortWrapper.append(element).append(' ');
			};
		};
		
		// RANDOMIZE ARRAY

		function arrayShuffle(oldArray){
			var newArray = oldArray.slice();
		 	var len = newArray.length;
			var i = len;
			while (i--){
			 	var p = parseInt(Math.random()*len);
				var t = newArray[i];
		  		newArray[i] = newArray[p];
			  	newArray[p] = t;
		 	};
			return newArray; 
		};
		
		// SORT
		
		jQuerycont.find(config.targetSelector).wrapAll('<div class="mix_sorter"/>');
		
		var jQuerysortWrapper = jQuerycont.find('.mix_sorter');
		
		if(!config.origSort.length){
			jQuerysortWrapper.find(config.targetSelector+':visible').each(function(){
				jQuery(this).wrap('<s/>');
				config.origSort.push(jQuery(this).parent().html().replace(/\s+/g, ''));
				jQuery(this).unwrap();
			});
		};
		
		
		
		jQuerysortWrapper.empty();
		
		if(sortby == 'reset'){
			jQuery.each(config.startOrder,function(){
				jQuerysortWrapper.append(this).append(' ');
			});
		} else if(sortby == 'default'){
			jQuery.each(config.origOrder,function(){
				rebuild(this);
			});
		} else if(sortby == 'random'){
			if(!config.newOrder.length){
				config.newOrder = arrayShuffle(config.startOrder);
			};
			jQuery.each(config.newOrder,function(){
				jQuerysortWrapper.append(this).append(' ');
			});	
		} else if(sortby == 'custom'){
			jQuery.each(order, function(){
				rebuild(this);
			});
		} else { 
			// SORT BY ATTRIBUTE
			
			if(typeof config.origOrder[0].attr(sortby) === 'undefined'){
				console.log('No such attribute found. Terminating');
				return false;
			};
			
			if(!config.newOrder.length){
				jQuery.each(config.origOrder,function(){
					config.newOrder.push(jQuery(this));
				});
				config.newOrder.sort(compare);
			};
			jQuery.each(config.newOrder,function(){
				rebuild(this);
			});
			
		};
		config.checkSort = [];
		jQuerysortWrapper.find(config.targetSelector+':visible').each(function(i){
			var jQueryt = jQuery(this);
			if(i == 0){
				
				// PREVENT COMPARE RETURNING FALSE POSITIVES ON ELEMENTS WITH NO CLASS/ATTRIBUTES
				
				jQueryt.attr('data-checksum','1');
			};
			jQueryt.wrap('<s/>');
			config.checkSort.push(jQueryt.parent().html().replace(/\s+/g, ''));
			jQueryt.unwrap();
		});
		
		jQuerycont.find(config.targetSelector).unwrap();
	};
	
	// FIND VENDOR PREFIX

	function prefix(el) {
	    var prefixes = ["Webkit", "Moz", "O", "ms"];
	    for (var i = 0; i < prefixes.length; i++){
	        if (prefixes[i] + "Transition" in el.style){
	            return prefixes[i];
	        };
	    };
	    return "transition" in el.style ? "" : false;
	};
	
	// REMOVE SPECIFIC STYLES
	
	jQuery.fn.removeStyle = function(style){
		return this.each(function(){
			var obj = jQuery(this);
			style = style.replace(/\s+/g, '');
			var styles = style.split(',');
			jQuery.each(styles,function(){
				
				var search = new RegExp(this.toString() + '[^;]+;?', 'g');
				obj.attr('style', function(i, style){
					if(style) return style.replace(search, '');
			    });
			});
		});
    };

	// COMPARE ARRAYS 
	
	function compareArr(a,b){
	    if (a.length != b.length) return false;
	    for (var i = 0; i < b.length; i++){
	        if (a[i].compare) { 
	            if (!a[i].compare(b[i])) return false;
	        };
	        if (a[i] !== b[i]) return false;
	    };
	    return true;
	};
	
	// BUILD FILTER ARRAY(S)
	
	function buildFilterArray(str){
		// CLEAN FILTER STRING
		str = str.replace(/\s{2,}/g, ' ');
		// FOR EACH PEROID SEPERATED CLASS NAME, ADD STRING TO FILTER ARRAY
		var arr = str.split(' ');
		// IF ALL, REPLACE WITH MIX_ALL
		jQuery.each(arr,function(i){
			if(this == 'all')arr[i] = 'mix_all';
		});
		if(arr[0] == "")arr.shift(); 
		return arr;
	};

}); /* End Ready */