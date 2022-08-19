export default function Work() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div>
      <div id="project-list">
        <div className="project">
          <div className="project-image">
            <img src="/Wookies-Gold.png" alt="" />
          </div>
          <div class="project-text">
            <div class="project-text-wrap">
              <p class="project-text-category">Node.js/MySQL</p>
              <h2 class="project-text-title">Wookies Gold</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
