export default function Contact() {
    // All functional components must have a return method that contains JSX.
    // We return all the JSX inside a parent element with a className of "container".
    return (
        <div>
            <h1>Contact</h1>
            <p>Send Email</p>
            
            <form className="contact-form" action="contactform.php"><input type="text" name="name" placeholder="Full Name" /></form>
            <form className="contact-form" action="contactform.php"><input type="text" name="mail" placeholder="Your email" /></form>
            <form className="contact-form" action="contactform.php"><input type="text" name="subject" placeholder="Subject" /></form>
            <textarea name="message" placeholder="Message" cols="30" rows="10"></textarea>
            <button type="submit" name="submit">Send Mail</button>

        </div>

    )
  }