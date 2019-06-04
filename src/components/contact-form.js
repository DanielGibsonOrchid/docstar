import React from 'react'

const ContactForm = (props) => {

const { name, email, message, subject, onValueChange, onFormSubmit } = props;

  return (

  
    <form 
      name="contactform" 
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="row contact-form"
      onSubmit={onFormSubmit} 
    >
      <input 
        type="hidden"
        name="bot-field"
      />
      <input 
        type="hidden"
        name="form-name"
        value="contact"
      />
      {/* Contact Form Input */}
      <div id="input-name" className="col-lg-6">
        <input 
          required
          type="text" 
          name="name" 
          className="form-control name" 
          placeholder="Your Name" 
          value={name}
          onChange={onValueChange}
        />
      </div>
      <div id="input-email" className="col-lg-6">
        <input 
          required
          type="text" 
          name="email" 
          className="form-control email" 
          placeholder="Email Address" 
          value={email}
          onChange={onValueChange}
        />
      </div>
      <div id="input-subject" className="col-lg-12">
        <input
          required
          type="text" 
          name="subject" 
          className="form-control subject" 
          placeholder="What's this about?" 
          value={subject}
          onChange={onValueChange} 
        />
      </div>
      <div id="input-message" className="col-lg-12 input-message">
        <textarea
          required
          className="form-control message" 
          name="message" 
          rows={6} 
          placeholder="Your Message ..." 
          value={message}
          onChange={onValueChange}  
        />
      </div>

      {/* Contact Form Button */}
      <div className="col-lg-12 m-top-10 form-btn">
        <button type="submit" className="btn btn-md submit btn-arrow">
          <span>Send Message <i className="fas fa-angle-double-right" /></span>
        </button>
      </div>

      {/* Contact Form Message */}
      <div className="col-lg-12 contact-form-msg">
        <span className="loading" />
      </div>
    </form>

  )
  }

export default ContactForm