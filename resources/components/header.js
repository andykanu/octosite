class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = (
      <header>
        <nav class="navOtherPages">
          <ul class="orange">
            <li id="navLogo">
              <a href="../index.html">
                <img
                  src="../resources/images/navbarLogo.png"
                  class="stickyLogo"
                />
              </a>
            </li>
            <li id="navHomeIcon">
              <a href="../index.html">
                <img src="../resources/images/Homeicon.png" class="home-icon" />
              </a>
            </li>
            <li>
              <a href="../about.html" class="nav-link">
                <strong>About</strong>
              </a>
            </li>
            <li>
              <a href="../article-index.html" class="nav-link">
                <strong>Articles</strong>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
customElements.define("header-component", Header);
