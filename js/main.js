var multipleHeader = `<header class="header">
<nav class="nav container">
  <a href="index.html" class="logo">
    <img src="../img/logo.png" alt="" />
  </a>
  <nav class="navbar">
    <li><a href="index.html" class="menu-link">Home</a></li>
    <li><a href="about.html" class="menu-link">About</a></li>
    <li class="has-dropdown">
      <a href="service.html" class="menu-link"
        >Service <i class="far fa-chevron-down"></i
      ></a>
      <ul class="sub-menu">
        <li><a href="service.html">Service</a></li>
        <li><a href="service-details.html">Service Details</a></li>
      </ul>
    </li>
    <li class="has-dropdown">
      <a href="blog.html" class="menu-link"
        >Blog <i class="far fa-chevron-down"></i
      ></a>
      <ul class="sub-menu">
        <li><a href="blog.html">Blog</a></li>
        <li><a href="blog-details.html">Blog Details</a></li>
      </ul>
    </li>
    <li class="has-dropdown">
      <a href="portfolio.html" class="menu-link"
        >Pages <i class="far fa-chevron-down"></i
      ></a>
      <ul class="sub-menu">
        <li><a href="portfolio.html">Portfolio</a></li>
        <li><a href="team.html">Team</a></li>
        <li><a href="sign-up.html">Sign Up</a></li>
        <li><a href="login.html">Sign In</a></li>
      </ul>
    </li>
    <li><a href="contact.html" class="menu-link">Contact</a></li>
  </nav>
  <div class="button-header">
    <a href="login.html" class="btn-n">Login</a>
    <a href="contact.html" class="btn-h">Get Started</a>
  </div>
  <div class="bx bx-menu menu-open"></div>
</nav>
</header>`;
document.body.insertAdjacentHTML("beforeend", multipleHeader);

var multipleSidebar = `
<div class="sidebar-area">
<div class="sidebar-wrapper">
  <div class="sidebar-close bx bx-x"></div>
  <div class="sidebar-content">
    <div class="logo">
      <a href="index.html">
        <img src="../img/logo.png" alt="" />
      </a>
    </div>
    <div class="mobile-menu">
      <div class="menu-bar">
        <nav class="menu-nav">
          <ul class="sidebar-container">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li class="has-dropdown">
              <a href="service.html">Services</a>
              <ul class="submenu">
                <li><a href="service.html">Services</a></li>
                <li>
                  <a href="service-details.html">Services Details</a>
                </li>
              </ul>
              <a href="#" class="menu-expand">
                <i class="fas fa-chevron-down"></i>
              </a>
            </li>
            <li class="has-dropdown">
              <a href="blog.html">Blog</a>
              <ul class="submenu">
                <li><a href="blog.html">Blog</a></li>
                <li><a href="blog-details.html">Blog Details</a></li>
              </ul>
              <a href="#" class="menu-expand">
                <i class="fas fa-chevron-down"></i>
              </a>
            </li>
            <li class="has-dropdown">
              <a href="about.html">Pages</a>
              <ul class="submenu">
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="team.html">Team</a></li>
                <li><a href="sign-up.html">Sign Up</a></li>
                <li><a href="login.html">Login</a></li>
              </ul>
              <a href="#" class="menu-expand">
                <i class="fas fa-chevron-down"></i>
              </a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</div>
</div>`;
document.body.insertAdjacentHTML("beforeend", multipleSidebar);

var multipleFooter = `
<footer class="footer">
<div class="footer-top">
  <div class="container">
    <div class="row">
      <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
        <div class="footer-thumb">
          <div class="footer-logo">
            <a href="#!">
              <img src="../img/logo.png" alt="" />
            </a>
          </div>
          <div class="footer-desc">
            <p>Ever since we started using we’ve , and more.</p>
          </div>
        </div>
      </div>
      <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6">
        <div class="footer-list">
          <div class="footer-header">
            <h3>Overview</h3>
          </div>
          <div class="footer-content">
            <ul>
              <li><a href="#!">Terms</a></li>
              <li><a href="#!">Privacy Policy</a></li>
              <li><a href="#!">Cookies</a></li>
              <li><a href="#!">Integrations</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6">
        <div class="footer-list">
          <div class="footer-header">
            <h3>Customer</h3>
          </div>
          <div class="footer-content">
            <ul>
              <li><a href="#!">Home</a></li>
              <li><a href="#!">Product</a></li>
              <li><a href="#!">Pricing</a></li>
              <li><a href="#!">Integrations</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6">
        <div class="footer-list">
          <div class="footer-header">
            <h3>Product</h3>
          </div>
          <div class="footer-content">
            <ul>
              <li><a href="#!">Getting Started</a></li>
              <li><a href="#!">Style Guide</a></li>
              <li><a href="#!">Licences</a></li>
              <li><a href="#!">Changelog</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
        <div class="footer-box--social">
          <div class="footer-header">
            <h3>Follow Us</h3>
          </div>
          <div class="footer-social">
            <ul>
              <li>
                <a href="#!"><i class="fab fa-facebook-f"></i></a>
              </li>
              <li>
                <a href="#!"><i class="fab fa-twitter"></i></a>
              </li>
              <li>
                <a href="#!"><i class="fab fa-pinterest-p"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="footer-bottom">
  <div class="container">
    <div class="row">
      <div class="col-xl-12">
        <div class="footer-wrapper">
          <p>
            Copyright © 2021 All Rights Reserved passion by
            <a href="#!">ThemePure</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</footer>`;
document.body.insertAdjacentHTML("beforeend", multipleFooter);

new WOW().init();

const menuOpen = document.querySelector(".menu-open");
const sidebarClose = document.querySelector(".sidebar-close");
const sidebarArea = document.querySelector(".sidebar-area");
const menuExpand = document.querySelector(".menu-expand");

menuOpen.addEventListener("click", () => {
  sidebarArea.classList.add("sidebar-open");
});

sidebarClose.addEventListener("click", () => {
  sidebarArea.classList.remove("sidebar-open");
});

document.querySelectorAll(".sidebar-container .has-dropdown").forEach((e) => {
  e.querySelector(".menu-expand").onclick = () => {
    e.querySelector(".menu-expand").classList.toggle("active-icon");

    let dropdown_content = e.querySelector(".submenu");
    let dropdown_content_list = dropdown_content.querySelectorAll("li");

    let active_height =
      dropdown_content_list[0].clientHeight * dropdown_content_list.length;

    dropdown_content.classList.toggle("active");
    dropdown_content.style.height = dropdown_content.classList.contains(
      "active"
    )
      ? active_height + "px"
      : "0";
  };
});

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  const back = document.querySelector(".return");
  if (scrollY > 0) {
    header.classList.add("sticky", window.scrollY > 0);
    back.classList.add("active-return");
  } else {
    header.classList.remove("sticky");
    back.classList.remove("active-return");
  }
  back.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});

const tabs = document.querySelectorAll(".features-item");
const panes = document.querySelectorAll(".pane-image");

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.addEventListener("click", () => {
    document.querySelector(".features-item.active").classList.remove("active");
    document.querySelector(".pane-image.active").classList.remove("active");

    tab.classList.add("active");
    pane.classList.add("active");
  });
});

$("#team-slider ").owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 1,
    },
    767: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 3,
    },
  },
});

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".accordion-header");

  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");

    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".accordion-content");

  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};

$(document).ready(function () {
  $(".faq-count .counter").counterUp({
    delay: 10,
    time: 2000,
  });
});

const filter_btns = document.querySelectorAll(".btn-filter");

filter_btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    filter_btns.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");

    let filterValue = btn.dataset.filter;

    $(".grid").isotope({ filter: filterValue });
  })
);

$(".grid").imagesLoaded(function () {
  $(".grid").isotope({
    itemSelector: ".grid-item",
    percentPosition: true,
    transitionDuration: "0.6s",
    masonry: {
      columnWidth: ".grid-item",
    },
  });
});

/* $(document).keydown(function (event) {
  if (event.keyCode == 123) {
    // Prevent F12
    return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
    // Prevent Ctrl+Shift+I
    return false;
  }
});
$(document).on("contextmenu", function (e) {
  e.preventDefault();
});

document.onkeydown = function (e) {
  if (
    e.ctrlKey &&
    (e.keyCode === 67 ||
      e.keyCode === 86 ||
      e.keyCode === 85 ||
      e.keyCode === 117)
  ) {
    return false;
  } else {
    return true;
  }
};
$(document).keypress("u", function (e) {
  if (e.ctrlKey) {
    return false;
  } else {
    return true;
  }
}); */
