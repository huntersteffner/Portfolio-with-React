export default function AboutMe() {
    // All functional components must have a return method that contains JSX.
    // We return all the JSX inside a parent element with a className of "container".
    return (
        <div className="home-container">

            <div className='about-image'></div>
            <div className="about-desc">
                <h1>About Me</h1>
                <p>I was born and raised in Atlanta Georgia.</p>
                <p>I completed my undergrad at Georgia Southern University in the class of 2017 with a Major in Logistics and Minor in Spanish. (Sí, puedo hablar y trabajar en español, si es necesario.)</p>
                <p>When I graduated I took a position at NCR Corporation as Customer Service Representative for Banking Software. I learned to love working with Software in this during my time in this role, and began to self-teach myself the basics of HTML/CSS in my free time.</p>
                <p>After 4.5 years in the same role at NCR, I decided to make a career change and enrolled in a FullStack Web Development Bootcamp at Georgia Tech. For three months I essentially had to eat,sleep, and breathe Frontend Web Development Languages such as HTML, CSS, JavaScript, and the framework of React, and the Backend Languages of Node.js, MySQL, and MongoDB.</p>
            </div>


        </div>

    )
  }