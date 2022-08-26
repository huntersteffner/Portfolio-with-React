export default function Contact() {
  return (
    <div>
      {/* Contact Form */}
      <div className="form-container">
        {/* The action links to form submit. It is a free service that allows one to submit emails using only HTML. The code in the URL was given to me by formsubmit to link to my personal email */}
        <form
          className="contact-form"
          action="https://formsubmit.co/acaa027063cedb37352926a943777828 "
          method="POST"
        >
          {/* Subject of the emails that are sent to me */}
          <input
            type="hidden"
            name="_subject"
            value="New email from Portfolio"
          />
        {/* Sender's name */}
          <input
            className="form-input"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
        {/* Email so I know who to respond back to */}
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          {/* Message that will be sent to me */}
          <textarea
            className="form-input-text"
            placeholder="Write your message here"
            name="message"
            
          />
          {/* Submit button */}
          <button className="form-btn btn btn-primary" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}
