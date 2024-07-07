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
  if (width >= 800) {
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
          <img src="./images/logo.svg" alt="Loopstudios Logo" class="nav__logo"/>
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
                aria-label="Facebook"
              />
            </li>
            <li class="footer__social-item">
              <img
                class="footer__social-icon"
                src="./images/icon-twitter.svg"
                alt="Twitter icon"
                aria-label="Twitter"
              />
            </li>
            <li class="footer__social-item">
              <img
                class="footer__social-icon"
                src="./images/icon-pinterest.svg"
                alt="Pinterest icon"
                aria-label="Pinterest"
              />
            </li>
            <li class="footer__social-item">
              <img
                class="footer__social-icon"
                src="./images/icon-instagram.svg"
                alt="Instagram icon"
                aria-label="Instagram"
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
          <img src="./images/logo.svg" alt="Loopstudios Logo" />
          <dialog class="nav__dialog" id="navDialog">
            <div class="main-div">
              <img src="./images/logo.svg" alt="Loopstudios logo" />
              <button
                class="main-div__close-button"
                id="navDialogCloseBtn"
                aria-label="Close navigation menu"
              >
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
          <button
            class="nav__button"
            id="navBtn"
            aria-controls="navDialog"
            aria-haspopup="dialog"
            aria-label="Open navigation menu"
          >
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
