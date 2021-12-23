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

$(document).keydown(function (event) {
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
});
