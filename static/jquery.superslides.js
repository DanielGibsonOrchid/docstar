
/*! Superslides - v0.6.2 - 2013-07-10
* https://github.com/nicinabox/superslides
* Copyright (c) 2013 Nic Aitch; Licensed MIT */
(function(window, jQuery) {

var Superslides, plugin = 'superslides';

Superslides = function(el, options) {
  this.options = jQuery.extend({
    play: false,
    animation_speed: 1000,
    animation_easing: 'swing',
    animation: 'slide',
    inherit_width_from: window,
    inherit_height_from: window,
    pagination: true,
    hashchange: false,
    scrollable: true,
    elements: {
      preserve: '.preserve',
      nav: '.slides-navigation',
      container: '.slides-container',
      pagination: '.slides-pagination'
    }
  }, options);

  var that       = this,
      jQuerycontrol   = jQuery('<div>', { "class": 'slides-control' }),
      multiplier = 1;

  this.jQueryel        = jQuery(el);
  this.jQuerycontainer = this.jQueryel.find(this.options.elements.container);

  // Private Methods
  var initialize = function() {
    multiplier = that._findMultiplier();

    that.jQueryel.on('click', that.options.elements.nav + " a", function(e) {
      e.preventDefault();

      that.stop();
      if (jQuery(this).hasClass('next')) {
        that.animate('next', function() {
          that.start();
        });
      } else {
        that.animate('prev', function() {
          that.start();
        });
      }
    });

    jQuery(document).on('keyup', function(e) {
      if (e.keyCode === 37) {
        that.animate('prev');
      }
      if (e.keyCode === 39) {
        that.animate('next');
      }
    });

    jQuery(window).on('resize', function() {
      setTimeout(function() {
        var jQuerychildren = that.jQuerycontainer.children();

        that.width  = that._findWidth();
        that.height = that._findHeight();

        jQuerychildren.css({
          width: that.width,
          left: that.width
        });

        that.css.containers();
        that.css.images();
      }, 10);
    });

    jQuery(window).on('hashchange', function() {
      var hash = that._parseHash(), index;

      if (hash && !isNaN(hash)) {
        // Minus 1 here because we don't want the url
        // to be zero-indexed
        index = that._upcomingSlide(hash - 1);

      } else {
        index = that._upcomingSlide(hash);
      }

      if (index >= 0 && index !== that.current) {
        that.animate(index);
      }
    });

    that.pagination._events();

    that.start();
    return that;
  };

var css = {
  containers: function() {
    if (that.init) {
      that.jQueryel.css({
        height: that.height
      });

      that.jQuerycontrol.css({
        width: that.width * multiplier,
        left: -that.width
      });

      that.jQuerycontainer.css({

      });
    } else {
      jQuery('body').css({
        margin: 0
      });

      that.jQueryel.css({
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: that.height
      });

      that.jQuerycontrol.css({
        position: 'relative',
        transform: 'translate3d(0)',
        height: '100%',
        width: that.width * multiplier,
        left: -that.width
      });

      that.jQuerycontainer.css({
        display: 'none',
        margin: '0',
        padding: '0',
        listStyle: 'none',
        position: 'relative',
        height: '100%'
      });
    }

    if (that.size() === 1) {
      that.jQueryel.find(that.options.elements.nav).hide();
    }
  },
  images: function() {
    var jQueryimages = that.jQuerycontainer.find('img')
                                 .not(that.options.elements.preserve)

    jQueryimages.removeAttr('width').removeAttr('height')
      .css({
        "-webkit-backface-visibility": 'hidden',
        "-ms-interpolation-mode": 'bicubic',
        "position": 'absolute',
        "left": '0',
        "top": '0',
        "z-index": '-1',
        "max-width": 'none'
      });

    jQueryimages.each(function() {
      var image_aspect_ratio = that.image._aspectRatio(this),
          image = this;

      if (!jQuery.data(this, 'processed')) {
        var img = new Image();
        img.onload = function() {
          that.image._scale(image, image_aspect_ratio);
          that.image._center(image, image_aspect_ratio);
          jQuery.data(image, 'processed', true);
        };
        img.src = this.src;

      } else {
        that.image._scale(image, image_aspect_ratio);
        that.image._center(image, image_aspect_ratio);
      }
    });
  },
  children: function() {
    var jQuerychildren = that.jQuerycontainer.children();

    if (jQuerychildren.is('img')) {
      jQuerychildren.each(function() {
        if (jQuery(this).is('img')) {
          jQuery(this).wrap('<div>');

          // move id attribute
          var id = jQuery(this).attr('id');
          jQuery(this).removeAttr('id');
          jQuery(this).parent().attr('id', id);
        }
      });

      jQuerychildren = that.jQuerycontainer.children();
    }

    if (!that.init) {
      jQuerychildren.css({
        display: 'none',
        left: that.width * 2
      });
    }

    jQuerychildren.css({
      position: 'absolute',
      overflow: 'hidden',
      height: '100%',
      width: that.width,
      top: 0,
      zIndex: 0
    });

  }
}

var fx = {
  slide: function(orientation, complete) {
    var jQuerychildren = that.jQuerycontainer.children(),
        jQuerytarget   = jQuerychildren.eq(orientation.upcoming_slide);

    jQuerytarget.css({
      left: orientation.upcoming_position,
      display: 'block'
    });

    that.jQuerycontrol.animate({
      left: orientation.offset
    },
    that.options.animation_speed,
    that.options.animation_easing,
    function() {
      if (that.size() > 1) {
        that.jQuerycontrol.css({
          left: -that.width
        });

        jQuerychildren.eq(orientation.upcoming_slide).css({
          left: that.width,
          zIndex: 2
        });

        if (orientation.outgoing_slide >= 0) {
          jQuerychildren.eq(orientation.outgoing_slide).css({
            left: that.width,
            display: 'none',
            zIndex: 0
          });
        }
      }

      complete();
    });
  },
  fade: function(orientation, complete) {
    var that = this,
        jQuerychildren = that.jQuerycontainer.children(),
        jQueryoutgoing = jQuerychildren.eq(orientation.outgoing_slide),
        jQuerytarget = jQuerychildren.eq(orientation.upcoming_slide);

    jQuerytarget.css({
      left: this.width,
      opacity: 1,
      display: 'block'
    });

    if (orientation.outgoing_slide >= 0) {
      jQueryoutgoing.animate({
        opacity: 0
      },
      that.options.animation_speed,
      that.options.animation_easing,
      function() {
        if (that.size() > 1) {
          jQuerychildren.eq(orientation.upcoming_slide).css({
            zIndex: 2
          });

          if (orientation.outgoing_slide >= 0) {
            jQuerychildren.eq(orientation.outgoing_slide).css({
              opacity: 1,
              display: 'none',
              zIndex: 0
            });
          }
        }

        complete();
      });
    } else {
      jQuerytarget.css({
        zIndex: 2
      });
      complete();
    }
  }
};

fx = jQuery.extend(fx, jQuery.fn.superslides.fx);

var image = {
  _centerY: function(image) {
    var jQueryimg = jQuery(image);

    jQueryimg.css({
      top: (that.height - jQueryimg.height()) / 2
    });
  },
  _centerX: function(image) {
    var jQueryimg = jQuery(image);

    jQueryimg.css({
      left: (that.width - jQueryimg.width()) / 2
    });
  },
  _center: function(image) {
    that.image._centerX(image);
    that.image._centerY(image);
  },
  _aspectRatio: function(image) {
    if (!image.naturalHeight && !image.naturalWidth) {
      var img = new Image();
      img.src = image.src;
      image.naturalHeight = img.height;
      image.naturalWidth = img.width;
    }

    return image.naturalHeight / image.naturalWidth;
  },
  _scale: function(image, image_aspect_ratio) {
    image_aspect_ratio = image_aspect_ratio || that.image._aspectRatio(image);

    var container_aspect_ratio = that.height / that.width,
        jQueryimg = jQuery(image);

    if (container_aspect_ratio > image_aspect_ratio) {
      jQueryimg.css({
        height: that.height,
        width: that.height / image_aspect_ratio
      });

    } else {
      jQueryimg.css({
        height: that.width * image_aspect_ratio,
        width: that.width
      });
    }
  }
};

var pagination = {
  _setCurrent: function(i) {
    if (!that.jQuerypagination) { return; }

    var jQuerypagination_children = that.jQuerypagination.children();

    jQuerypagination_children.removeClass('current');
    jQuerypagination_children.eq(i)
      .addClass('current');
  },
  _addItem: function(i) {
    var slide_number = i + 1,
        href = slide_number,
        jQueryslide = that.jQuerycontainer.children().eq(i),
        slide_id = jQueryslide.attr('id');

    if (slide_id) {
      href = slide_id;
    }

    var jQueryitem = jQuery("<a>", {
      'href': "#" + href,
      'text': href
    });

    jQueryitem.appendTo(that.jQuerypagination);
  },
  _setup: function() {
    if (!that.options.pagination || that.size() === 1) { return; }

    var jQuerypagination = jQuery("<nav>", {
      'class': that.options.elements.pagination.replace(/^\./, '')
    });

    that.jQuerypagination = jQuerypagination.appendTo(that.jQueryel);

    for (var i = 0; i < that.size(); i++) {
      that.pagination._addItem(i);
    }
  },
  _events: function() {
    that.jQueryel.on('click', that.options.elements.pagination + ' a', function(e) {
      e.preventDefault();

      var hash  = that._parseHash(this.hash),
          index = that._upcomingSlide(hash - 1);

      if (index !== that.current) {
        that.animate(index, function() {
          that.start();
        });
      }
    });
  }
};

  this.css = css;
  this.image = image;
  this.pagination = pagination;
  this.fx = fx;
  this.animation = this.fx[this.options.animation];

  this.jQuerycontrol = this.jQuerycontainer.wrap(jQuerycontrol).parent('.slides-control');

  that._findPositions();
  that.width  = that._findWidth();
  that.height = that._findHeight();

  this.css.children();
  this.css.containers();
  this.css.images();
  this.pagination._setup();

  return initialize();
};

Superslides.prototype = {
  _findWidth: function() {
    return jQuery(this.options.inherit_width_from).width();
  },
  _findHeight: function() {
    return jQuery(this.options.inherit_height_from).height();
  },

  _findMultiplier: function() {
    return this.size() === 1 ? 1 : 3;
  },

  _upcomingSlide: function(direction) {
    if ((/next/).test(direction)) {
      return this._nextInDom();

    } else if ((/prev/).test(direction)) {
      return this._prevInDom();

    } else if ((/\d/).test(direction)) {
      return +direction;

    } else if (direction && (/\w/).test(direction)) {
      var index = this._findSlideById(direction);
      if (index >= 0) {
        return index;
      } else {
        return 0;
      }

    } else {
      return 0;
    }
  },

  _findSlideById: function(id) {
    return this.jQuerycontainer.find('#' + id).index();
  },

  _findPositions: function(current, thisRef) {
    thisRef = thisRef || this;

    if (current === undefined) {
      current = -1;
    }

    thisRef.current = current;
    thisRef.next    = thisRef._nextInDom();
    thisRef.prev    = thisRef._prevInDom();
  },

  _nextInDom: function() {
    var index = this.current + 1;

    if (index === this.size()) {
      index = 0;
    }

    return index;
  },

  _prevInDom: function() {
    var index = this.current - 1;

    if (index < 0) {
      index = this.size() - 1;
    }

    return index;
  },

  _parseHash: function(hash) {
    hash = hash || window.location.hash;
    hash = hash.replace(/^#/, '');

    if (hash && !isNaN(+hash)) {
      hash = +hash;
    }

    return hash;
  },

  size: function() {
    return this.jQuerycontainer.children().length;
  },

  destroy: function() {
    return this.jQueryel.removeData();
  },

  update: function() {
    this.css.children();
    this.css.containers();
    this.css.images();

    this.pagination._addItem(this.size())

    this._findPositions(this.current);
    this.jQueryel.trigger('updated.slides');
  },

  stop: function() {
    clearInterval(this.play_id);
    delete this.play_id;

    this.jQueryel.trigger('stopped.slides');
  },

  start: function() {
    var that = this;

    if (that.options.hashchange) {
      jQuery(window).trigger('hashchange');
    } else {
      this.animate();
    }

    if (this.options.play) {
      if (this.play_id) {
        this.stop();
      }

      this.play_id = setInterval(function() {
        that.animate();
      }, this.options.play);
    }

    this.jQueryel.trigger('started.slides');
  },

  animate: function(direction, userCallback) {
    var that = this,
        orientation = {};

    if (this.animating) {
      return;
    }

    this.animating = true;

    if (direction === undefined) {
      direction = 'next';
    }

    orientation.upcoming_slide = this._upcomingSlide(direction);

    if (orientation.upcoming_slide >= this.size()) {
      return;
    }

    orientation.outgoing_slide    = this.current;
    orientation.upcoming_position = this.width * 2;
    orientation.offset            = -orientation.upcoming_position;

    if (direction === 'prev' || direction < orientation.outgoing_slide) {
      orientation.upcoming_position = 0;
      orientation.offset            = 0;
    }

    if (that.size() > 1) {
      that.pagination._setCurrent(orientation.upcoming_slide);
    }

    if (that.options.hashchange) {
      var hash = orientation.upcoming_slide + 1,
          id = that.jQuerycontainer.children(':eq(' + orientation.upcoming_slide + ')').attr('id');

      if (id) {
        window.location.hash = id;
      } else {
        window.location.hash = hash;
      }
    }

    that.jQueryel.trigger('animating.slides', [orientation]);

    that.animation(orientation, function() {
      that._findPositions(orientation.upcoming_slide, that);

      if (typeof userCallback === 'function') {
        userCallback();
      }

      that.animating = false;
      that.jQueryel.trigger('animated.slides');

      if (!that.init) {
        that.jQueryel.trigger('init.slides');
        that.init = true;
        that.jQuerycontainer.fadeIn('fast');
      }
    });
  }
};

// jQuery plugin definition

jQuery.fn[plugin] = function(option, args) {
  var result = [];

  this.each(function() {
    var jQuerythis, data, options;

    jQuerythis = jQuery(this);
    data = jQuerythis.data(plugin);
    options = typeof option === 'object' && option;

    if (!data) {
      result = jQuerythis.data(plugin, (data = new Superslides(this, options)));
    }

    if (typeof option === "string") {
      result = data[option];
      if (typeof result === 'function') {
        return result = result.call(data, args);
      }
    }
  });

  return result;
};

jQuery.fn[plugin].fx = {};

})(this, jQuery);
