

export default function Home() {
    // All functional components must have a return method that contains JSX.
    // We return all the JSX inside a parent element with a className of "container".
    return (
        <div className="home-container">

            <div className='hero-image'></div>
            <div className="home-links">
                <h1>Matthew Hunter Steffner</h1>
                <h2>Full Stack Web Developer</h2>

                <a href="/contact">Contact Me</a>
                {/* <a href="#">Download Resume</a> */}
            </div>


        </div>

    )
  }