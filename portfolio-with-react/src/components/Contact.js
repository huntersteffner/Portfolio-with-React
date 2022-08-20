export default function Contact() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div>
      <form action="https://formsubmit.co/acaa027063cedb37352926a943777828 " method="POST">
        <input type="hidden" name="_subject" value="New email from Portfolio" />
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email Address" required/>
        <input type="text" name="message" placeholder="write your message here." />
        <button type="submit">Send</button>
      </form>
      
      
    </div>
  )
}
