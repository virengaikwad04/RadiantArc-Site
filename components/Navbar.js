const navbar = document.getElementById("navbar");

Navbar();
function Navbar() {
  navbar.innerHTML = "";
  const div = document.createElement("div");
  div.classList.add("container");
  div.classList.add("justify-");
  div.innerHTML = `
    <a class="navbar-brand brand-logo" href="./index.html">
                <img
                  class="img-fluid"
                  src="./images/BrandLogo-light.jpeg"
                  alt=""
                  srcset=""
                />
          </a>
          <button
            class="navbar-toggler rounded-pill"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="./index.html">Home</a>
              </li>
              <li class="nav-item ms-md-1">
                <a class="nav-link" href="./aboutUs.html">About Us</a>
              </li>
              <li class="nav-item ms-md-1" hidden>
                <a class="nav-link" href="./careers.html">Careers</a>
              </li>
              <li class="nav-item ms-md-1">
                <a class="nav-link" href="./service.html">Services</a>
              </li>
              <li class="nav-item ms-md-1">
                <a class="nav-link" href="./Blog.html">Blog</a>
              </li>
              <li class="nav-item ms-md-1">
              <a
              target="_"
              href="https://github.com/imShivam579/Agency-Website"
              class="btn btn-outline-warning rounded-pill bg-brand-primayfaint"
            >
              Contact Us
            </a>
              </li>
            </ul>
           
          </div>
    `;
  navbar.appendChild(div);
}
