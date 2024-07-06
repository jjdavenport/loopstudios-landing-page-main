function buttons() {
  const navBtn = document.getElementById("navBtn");
  const navDialogCloseBtn = document.getElementById("navDialogCloseBtn");
  navBtn.addEventListener("click", () => {
    const navDialog = document.getElementById("navDialog");
    navDialog.classList.toggle("nav__dialog--active");
    document.body.style.overflow = "hidden";
  });

  navDialogCloseBtn.addEventListener("click", () => {
    const navDialog = document.getElementById("navDialog");
    navDialog.classList.remove("nav__dialog--active");
    document.body.style.overflow = "auto";
  });
}

function desktopMobile() {
  const width = window.innerWidth;
  if (width >= 720) {
    desktop();
  } else {
    mobile();
  }
  buttons();
}

window.addEventListener("resize", desktopMobile);
window.addEventListener("DOMContentLoaded", desktopMobile);

function desktop() {
  const body = document.getElementById("body");
  body.innerHTML = `<main>
      <section class="main-section">
        <nav class="nav">
          <svg width="192" height="32" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.694 26.324a2.694 2.694 0 002.695-2.697V2.697a2.694 2.694 0 10-5.389 0v20.93a2.694 2.694 0 002.694 2.697zm15.506.213c5.92 0 10.317-4.435 10.317-9.898v-.071c0-5.464-4.36-9.827-10.246-9.827-5.92 0-10.317 4.434-10.317 9.898v.07c0 5.464 4.361 9.828 10.246 9.828zm.071-4.648c-2.978 0-4.999-2.448-4.999-5.25v-.071c0-2.803 1.844-5.18 4.928-5.18 2.978 0 5 2.448 5 5.25v.072c0 2.802-1.844 5.18-4.929 5.18zm21.887 4.648c5.921 0 10.317-4.435 10.317-9.898v-.071c0-5.464-4.36-9.827-10.246-9.827-5.92 0-10.317 4.434-10.317 9.898v.07c0 5.464 4.361 9.828 10.246 9.828zm.071-4.648c-2.978 0-4.999-2.448-4.999-5.25v-.071c0-2.803 1.844-5.18 4.928-5.18 2.979 0 5 2.448 5 5.25v.072c0 2.802-1.844 5.18-4.929 5.18zM55.487 32a2.694 2.694 0 002.694-2.696v-5.677c1.277 1.526 3.05 2.839 5.921 2.839 4.503 0 8.65-3.477 8.65-9.827v-.071c0-6.35-4.218-9.827-8.65-9.827-2.8 0-4.609 1.312-5.92 3.086V9.58a2.694 2.694 0 10-5.39 0v19.725A2.694 2.694 0 0055.488 32zm7.232-10.11c-2.517 0-4.608-2.094-4.608-5.251v-.071c0-3.158 2.091-5.25 4.608-5.25 2.518 0 4.645 2.092 4.645 5.25v.07c0 3.193-2.127 5.251-4.645 5.251zm19.087 4.576c4.113 0 7.268-1.916 7.268-6.138v-.07c0-3.478-3.084-4.755-5.743-5.642-2.057-.71-3.865-1.206-3.865-2.27v-.071c0-.745.674-1.313 1.985-1.313 1.135 0 2.589.462 4.113 1.207.355.177.603.248.993.248 1.205 0 2.162-.923 2.162-2.129 0-.922-.496-1.632-1.276-2.022-1.843-.922-3.9-1.454-5.885-1.454-3.83 0-6.949 2.164-6.949 6.03v.072c0 3.69 3.014 4.93 5.673 5.711 2.091.639 3.935 1.03 3.935 2.2v.07c0 .852-.71 1.42-2.27 1.42-1.524 0-3.332-.568-5.14-1.703a2.066 2.066 0 00-1.064-.284c-1.205 0-2.127.923-2.127 2.129 0 .851.461 1.49 1.028 1.845 2.305 1.49 4.822 2.164 7.162 2.164zm15.612-.036c1.17 0 2.092-.142 3.085-.532a2.194 2.194 0 001.382-2.022 2.248 2.248 0 00-2.233-2.235c-.107 0-.461.035-.638.035-1.206 0-1.738-.603-1.738-1.845v-8.124h2.376a2.3 2.3 0 002.304-2.306 2.3 2.3 0 00-2.304-2.306h-2.376V4.718a2.694 2.694 0 10-5.389 0v2.377h-.177a2.3 2.3 0 00-2.304 2.306 2.3 2.3 0 002.304 2.306h.177v9.011c0 4.4 2.234 5.712 5.531 5.712zm13.024.036c2.73 0 4.325-1.455 5.566-3.051v.212a2.694 2.694 0 105.39 0V9.58a2.694 2.694 0 10-5.39 0v8.124c0 2.554-1.311 3.867-3.368 3.867-2.056 0-3.261-1.313-3.261-3.867V9.579a2.694 2.694 0 10-5.39 0v9.827c0 4.363 2.376 7.06 6.453 7.06zm21.994 0c2.8 0 4.609-1.313 5.92-3.087v.248a2.694 2.694 0 105.39 0V2.697a2.694 2.694 0 10-5.39 0v6.882c-1.276-1.526-3.048-2.838-5.92-2.838-4.503 0-8.65 3.476-8.65 9.827v.07c0 6.35 4.218 9.828 8.65 9.828zm1.383-4.577c-2.518 0-4.645-2.093-4.645-5.25v-.071c0-3.193 2.127-5.25 4.645-5.25 2.517 0 4.608 2.092 4.608 5.25v.07c0 3.158-2.091 5.251-4.608 5.251zm16.108-16.71c1.702 0 3.014-.993 3.014-2.554v-.07c0-1.562-1.312-2.52-3.014-2.52-1.702 0-3.013.958-3.013 2.52v.07c0 1.561 1.311 2.555 3.013 2.555zm0 21.145a2.694 2.694 0 002.694-2.697V9.58a2.694 2.694 0 10-5.388 0v14.048a2.694 2.694 0 002.694 2.697zm15.506.213c5.92 0 10.317-4.435 10.317-9.898v-.071c0-5.464-4.361-9.827-10.246-9.827-5.921 0-10.317 4.434-10.317 9.898v.07c0 5.464 4.36 9.828 10.246 9.828zm.07-4.648c-2.977 0-4.998-2.448-4.998-5.25v-.071c0-2.803 1.843-5.18 4.928-5.18 2.978 0 4.999 2.448 4.999 5.25v.072c0 2.802-1.844 5.18-4.928 5.18zm19.23 4.577c4.112 0 7.267-1.916 7.267-6.138v-.07c0-3.478-3.084-4.755-5.743-5.642-2.057-.71-3.865-1.206-3.865-2.27v-.071c0-.745.674-1.313 1.986-1.313 1.134 0 2.588.462 4.112 1.207.355.177.603.248.993.248 1.205 0 2.162-.923 2.162-2.129 0-.922-.496-1.632-1.276-2.022-1.843-.922-3.9-1.454-5.885-1.454-3.83 0-6.949 2.164-6.949 6.03v.072c0 3.69 3.014 4.93 5.673 5.711 2.091.639 3.935 1.03 3.935 2.2v.07c0 .852-.71 1.42-2.27 1.42-1.524 0-3.332-.568-5.14-1.703a2.066 2.066 0 00-1.063-.284c-1.206 0-2.128.923-2.128 2.129 0 .851.461 1.49 1.028 1.845 2.305 1.49 4.822 2.164 7.162 2.164z"
              fill="#FFF"
              fill-rule="nonzero"
            />
          </svg>
            <ul class="nav__list">
              <li class="nav__item"><a class="nav__link" href="#">About</a></li>
              <li class="nav__item">
                <a class="nav__link" href="#">Careers</a>
              </li>
              <li class="nav__item">
                <a class="nav__link" href="#">Events</a>
              </li>
              <li class="nav__item">
                <a class="nav__link" href="#">Products</a>
              </li>
              <li class="nav__item">
                <a class="nav__link" href="#">Support</a>
              </li>
            </ul>
        </nav>
        <header class="main-header">
          <h1 class="main-header__title">Immersive experiences that deliver</h1>
        </header>
      </section>
      <section class="main-content">
        <img
          class="main-content__image"
          src="./images/desktop/image-interactive.jpg"
          alt="Person using VR headset"
        />
        <div class="main-content__description">
          <h2 class="main-content__subtitle">The leader in interactive VR</h2>
          <p class="main-content__text">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </section>
      <section class="creations">
            <div class="creations__container">
        <h3 class="creations__title">Our creations</h3>
        <button class="creations__button">See all</button>
    </div>
        <ul class="creations__list">
          <li class="creations__item">
            <span class="creations__name">Deep earth</span>
            <img
              class="creations__image"
              src="./images/desktop/image-deep-earth.jpg"
              alt="Deep Earth VR experience"
            />
          </li>
          <li class="creations__item">
            <span class="creations__name">Night arcade</span>
            <img
              class="creations__image"
              src="./images/desktop/image-night-arcade.jpg"
              alt="Night Arcade VR experience"
            />
          </li>
          <li class="creations__item">
            <span class="creations__name">Soccer team VR</span>
            <img
              class="creations__image"
              src="./images/desktop/image-soccer-team.jpg"
              alt="Soccer Team VR experience"
            />
          </li>
          <li class="creations__item">
            <span class="creations__name">The grid</span>
            <img
              class="creations__image"
              src="./images/desktop/image-grid.jpg"
              alt="The Grid VR experience"
            />
          </li>
          <li class="creations__item">
            <span class="creations__name">From up above VR</span>
            <img
              class="creations__image"
              src="./images/desktop/image-from-above.jpg"
              alt="From Up Above VR experience"
            />
          </li>
          <li class="creations__item">
            <span class="creations__name">Pocket borealis</span>
            <img
              class="creations__image"
              src="./images/desktop/image-pocket-borealis.jpg"
              alt="Pocket Borealis VR experience"
            />
          </li>
          <li class="creations__item">
            <span class="creations__name">The curiosity</span>
            <img
              class="creations__image"
              src="./images/desktop/image-curiosity.jpg"
              alt="The Curiosity VR experience"
            />
          </li>
          <li class="creations__item">
            <span class="creations__name">Make it fisheye</span>
            <img
              class="creations__image"
              src="./images/desktop/image-fisheye.jpg"
              alt="Make it Fisheye VR experience"
            />
          </li>
        </ul>
      </section>
      <section class="footer">
    <div class="footer__logo-container">
        <img
            class="footer__logo"
            src="./images/logo.svg"
            alt="Loopstudios logo"
        />
        <ul class="footer__list">
            <li class="footer__item">
                <a class="footer__link" href="#">About</a>
            </li>
            <li class="footer__item">
                <a class="footer__link" href="#">Careers</a>
            </li>
            <li class="footer__item">
                <a class="footer__link" href="#">Events</a>
            </li>
            <li class="footer__item">
                <a class="footer__link" href="#">Products</a>
            </li>
            <li class="footer__item">
                <a class="footer__link" href="#">Support</a>
            </li>
        </ul>
    </div>
    <div class="footer__social-container">
        <ul class="footer__socials">
            <li class="footer__social-item">
                <img
                    class="footer__social-icon"
                    src="./images/icon-facebook.svg"
                    alt="Facebook icon"
                />
            </li>
            <li class="footer__social-item">
                <img
                    class="footer__social-icon"
                    src="./images/icon-twitter.svg"
                    alt="Twitter icon"
                />
            </li>
            <li class="footer__social-item">
                <img
                    class="footer__social-icon"
                    src="./images/icon-pinterest.svg"
                    alt="Pinterest icon"
                />
            </li>
            <li class="footer__social-item">
                <img
                    class="footer__social-icon"
                    src="./images/icon-instagram.svg"
                    alt="Instagram icon"
                />
            </li>
        </ul>
        <p class="footer__text">© 2021 Loopstudios. All rights reserved.</p>
    </div>
</section>
      </main>
          <footer class="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. Coded by <a href="https://github.com/jjdavenport">jjdavenport</a>.
    </footer>`;
}

function mobile() {
  const body = document.getElementById("body");
  body.innerHTML = `
         <main>
      <section class="main-section">
        <nav class="nav">
          <svg width="192" height="32" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.694 26.324a2.694 2.694 0 002.695-2.697V2.697a2.694 2.694 0 10-5.389 0v20.93a2.694 2.694 0 002.694 2.697zm15.506.213c5.92 0 10.317-4.435 10.317-9.898v-.071c0-5.464-4.36-9.827-10.246-9.827-5.92 0-10.317 4.434-10.317 9.898v.07c0 5.464 4.361 9.828 10.246 9.828zm.071-4.648c-2.978 0-4.999-2.448-4.999-5.25v-.071c0-2.803 1.844-5.18 4.928-5.18 2.978 0 5 2.448 5 5.25v.072c0 2.802-1.844 5.18-4.929 5.18zm21.887 4.648c5.921 0 10.317-4.435 10.317-9.898v-.071c0-5.464-4.36-9.827-10.246-9.827-5.92 0-10.317 4.434-10.317 9.898v.07c0 5.464 4.361 9.828 10.246 9.828zm.071-4.648c-2.978 0-4.999-2.448-4.999-5.25v-.071c0-2.803 1.844-5.18 4.928-5.18 2.979 0 5 2.448 5 5.25v.072c0 2.802-1.844 5.18-4.929 5.18zM55.487 32a2.694 2.694 0 002.694-2.696v-5.677c1.277 1.526 3.05 2.839 5.921 2.839 4.503 0 8.65-3.477 8.65-9.827v-.071c0-6.35-4.218-9.827-8.65-9.827-2.8 0-4.609 1.312-5.92 3.086V9.58a2.694 2.694 0 10-5.39 0v19.725A2.694 2.694 0 0055.488 32zm7.232-10.11c-2.517 0-4.608-2.094-4.608-5.251v-.071c0-3.158 2.091-5.25 4.608-5.25 2.518 0 4.645 2.092 4.645 5.25v.07c0 3.193-2.127 5.251-4.645 5.251zm19.087 4.576c4.113 0 7.268-1.916 7.268-6.138v-.07c0-3.478-3.084-4.755-5.743-5.642-2.057-.71-3.865-1.206-3.865-2.27v-.071c0-.745.674-1.313 1.985-1.313 1.135 0 2.589.462 4.113 1.207.355.177.603.248.993.248 1.205 0 2.162-.923 2.162-2.129 0-.922-.496-1.632-1.276-2.022-1.843-.922-3.9-1.454-5.885-1.454-3.83 0-6.949 2.164-6.949 6.03v.072c0 3.69 3.014 4.93 5.673 5.711 2.091.639 3.935 1.03 3.935 2.2v.07c0 .852-.71 1.42-2.27 1.42-1.524 0-3.332-.568-5.14-1.703a2.066 2.066 0 00-1.064-.284c-1.205 0-2.127.923-2.127 2.129 0 .851.461 1.49 1.028 1.845 2.305 1.49 4.822 2.164 7.162 2.164zm15.612-.036c1.17 0 2.092-.142 3.085-.532a2.194 2.194 0 001.382-2.022 2.248 2.248 0 00-2.233-2.235c-.107 0-.461.035-.638.035-1.206 0-1.738-.603-1.738-1.845v-8.124h2.376a2.3 2.3 0 002.304-2.306 2.3 2.3 0 00-2.304-2.306h-2.376V4.718a2.694 2.694 0 10-5.389 0v2.377h-.177a2.3 2.3 0 00-2.304 2.306 2.3 2.3 0 002.304 2.306h.177v9.011c0 4.4 2.234 5.712 5.531 5.712zm13.024.036c2.73 0 4.325-1.455 5.566-3.051v.212a2.694 2.694 0 105.39 0V9.58a2.694 2.694 0 10-5.39 0v8.124c0 2.554-1.311 3.867-3.368 3.867-2.056 0-3.261-1.313-3.261-3.867V9.579a2.694 2.694 0 10-5.39 0v9.827c0 4.363 2.376 7.06 6.453 7.06zm21.994 0c2.8 0 4.609-1.313 5.92-3.087v.248a2.694 2.694 0 105.39 0V2.697a2.694 2.694 0 10-5.39 0v6.882c-1.276-1.526-3.048-2.838-5.92-2.838-4.503 0-8.65 3.476-8.65 9.827v.07c0 6.35 4.218 9.828 8.65 9.828zm1.383-4.577c-2.518 0-4.645-2.093-4.645-5.25v-.071c0-3.193 2.127-5.25 4.645-5.25 2.517 0 4.608 2.092 4.608 5.25v.07c0 3.158-2.091 5.251-4.608 5.251zm16.108-16.71c1.702 0 3.014-.993 3.014-2.554v-.07c0-1.562-1.312-2.52-3.014-2.52-1.702 0-3.013.958-3.013 2.52v.07c0 1.561 1.311 2.555 3.013 2.555zm0 21.145a2.694 2.694 0 002.694-2.697V9.58a2.694 2.694 0 10-5.388 0v14.048a2.694 2.694 0 002.694 2.697zm15.506.213c5.92 0 10.317-4.435 10.317-9.898v-.071c0-5.464-4.361-9.827-10.246-9.827-5.921 0-10.317 4.434-10.317 9.898v.07c0 5.464 4.36 9.828 10.246 9.828zm.07-4.648c-2.977 0-4.998-2.448-4.998-5.25v-.071c0-2.803 1.843-5.18 4.928-5.18 2.978 0 4.999 2.448 4.999 5.25v.072c0 2.802-1.844 5.18-4.928 5.18zm19.23 4.577c4.112 0 7.267-1.916 7.267-6.138v-.07c0-3.478-3.084-4.755-5.743-5.642-2.057-.71-3.865-1.206-3.865-2.27v-.071c0-.745.674-1.313 1.986-1.313 1.134 0 2.588.462 4.112 1.207.355.177.603.248.993.248 1.205 0 2.162-.923 2.162-2.129 0-.922-.496-1.632-1.276-2.022-1.843-.922-3.9-1.454-5.885-1.454-3.83 0-6.949 2.164-6.949 6.03v.072c0 3.69 3.014 4.93 5.673 5.711 2.091.639 3.935 1.03 3.935 2.2v.07c0 .852-.71 1.42-2.27 1.42-1.524 0-3.332-.568-5.14-1.703a2.066 2.066 0 00-1.063-.284c-1.206 0-2.128.923-2.128 2.129 0 .851.461 1.49 1.028 1.845 2.305 1.49 4.822 2.164 7.162 2.164z"
              fill="#FFF"
              fill-rule="nonzero"
            />
          </svg>
          <dialog class="nav__dialog" id="navDialog">
            <div class="main-div">
              <img src="./images/logo.svg" alt="Loopstudios logo" />
              <button class="main-div__close-button" id="navDialogCloseBtn">
                <img
                  class="main-div__close-icon"
                  src="./images/icon-close.svg"
                  alt="Close navigation menu"
                />
              </button>
            </div>
            <ul class="nav__list">
              <li class="nav__item"><a class="nav__link" href="#">About</a></li>
              <li class="nav__item">
                <a class="nav__link" href="#">Careers</a>
              </li>
              <li class="nav__item">
                <a class="nav__link" href="#">Events</a>
              </li>
              <li class="nav__item">
                <a class="nav__link" href="#">Products</a>
              </li>
              <li class="nav__item">
                <a class="nav__link" href="#">Support</a>
              </li>
            </ul>
          </dialog>
          <button class="nav__button" id="navBtn">
            <svg
              class="nav__icon"
              width="16"
              height="15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="nav__icon-path"
                d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
                fill="#69707D"
                fill-rule="evenodd"
              />
            </svg>
          </button>
        </nav>
        <header class="main-header">
          <h1 class="main-header__title">Immersive experiences that deliver</h1>
        </header>
      </section>
      <section class="main-content">
        <img
          class="main-content__image"
          src="./images/mobile/image-interactive.jpg"
          alt="Person using VR headset"
        />
        <div class="main-content__description">
          <h2 class="main-content__subtitle">The leader in interactive VR</h2>
          <p class="main-content__text">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </section>
      <section class="creations">
        <h3 class="creations__title">Our creations</h3>
        <ul class="creations__list">
          <li class="creations__item">
            <span class="creations__name">Deep earth</span>
            <img
              class="creations__image"
              src="./images/mobile/image-deep-earth.jpg"
              alt="Deep Earth VR experience"
            />
          </li>
          <li class="creations__item">
            <span class="creations__name">Night arcade</span>
            <img
              class="creations__image"
              src="./images/mobile/image-night-arcade.jpg"
              alt="Night Arcade VR experience"
            />
          </li>
          <li class="creations__item">
            <span class="creations__name">Soccer team VR</span>
            <img
              class="creations__image"
              src="./images/mobile/image-soccer-team.jpg"
              alt="Soccer Team VR experience"
            />
          </li>
          <li class="creations__item">
            <span class="creations__name">The grid</span>
            <img
              class="creations__image"
              src="./images/mobile/image-grid.jpg"
              alt="The Grid VR experience"
            />
          </li>
          <li class="creations__item">
            <span class="creations__name">From up above VR</span>
            <img
              class="creations__image"
              src="./images/mobile/image-from-above.jpg"
              alt="From Up Above VR experience"
            />
          </li>
          <li class="creations__item">
            <span class="creations__name">Pocket borealis</span>
            <img
              class="creations__image"
              src="./images/mobile/image-pocket-borealis.jpg"
              alt="Pocket Borealis VR experience"
            />
          </li>
          <li class="creations__item">
            <span class="creations__name">The curiosity</span>
            <img
              class="creations__image"
              src="./images/mobile/image-curiosity.jpg"
              alt="The Curiosity VR experience"
            />
          </li>
          <li class="creations__item">
            <span class="creations__name">Make it fisheye</span>
            <img
              class="creations__image"
              src="./images/mobile/image-fisheye.jpg"
              alt="Make it Fisheye VR experience"
            />
          </li>
        </ul>
        <button class="creations__button">See all</button>
      </section>
      <section class="footer">
        <img
          class="footer__logo"
          src="./images/logo.svg"
          alt="Loopstudios logo"
        />
        <ul class="footer__list">
          <li class="footer__item">
            <a class="footer__link" href="#">About</a>
          </li>
          <li class="footer__item">
            <a class="footer__link" href="#">Careers</a>
          </li>
          <li class="footer__item">
            <a class="footer__link" href="#">Events</a>
          </li>
          <li class="footer__item">
            <a class="footer__link" href="#">Products</a>
          </li>
          <li class="footer__item">
            <a class="footer__link" href="#">Support</a>
          </li>
        </ul>
        <ul class="footer__socials">
          <li class="footer__social-item">
            <img
              class="footer__social-icon"
              src="./images/icon-facebook.svg"
              alt="Facebook icon"
            />
          </li>
          <li class="footer__social-item">
            <img
              class="footer__social-icon"
              src="./images/icon-twitter.svg"
              alt="Twitter icon"
            />
          </li>
          <li class="footer__social-item">
            <img
              class="footer__social-icon"
              src="./images/icon-pinterest.svg"
              alt="Pinterest icon"
            />
          </li>
          <li class="footer__social-item">
            <img
              class="footer__social-icon"
              src="./images/icon-instagram.svg"
              alt="Instagram icon"
            />
          </li>
        </ul>
        <p class="footer__text">© 2021 Loopstudios. All rights reserved.</p>
      </section>
    </main>
    <footer class="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. Coded by <a href="https://github.com/jjdavenport">jjdavenport</a>.
    </footer>`;
}
