export default function Contact() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div>
      <div className="form-container">
        <form
          className="contact-form"
          action="https://formsubmit.co/acaa027063cedb37352926a943777828 "
          method="POST"
        >
          <input
            type="hidden"
            name="_subject"
            value="New email from Portfolio"
          />
          <div className="form-input">
            <input type="text" name="name" placeholder="Name" required />
          </div>
          <div className="form-input">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="form-input">
            <input
              type="text"
              name="message"
              placeholder="write your message here."
            />
          </div>
          
            <button className="form-btn btn btn-primary" type="submit">
              Send
            </button>
          
        </form>
      </div>
    </div>
  )
}
