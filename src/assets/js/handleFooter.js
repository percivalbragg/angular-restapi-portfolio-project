let footer;

window.addEventListener("scroll", (evnt) => {
  displayFooter();
});

const displayFooter = () => {
  footer = document.getElementById("footer");

  if (window.scrollY > 0) {
    footer.style.visibility = "visible";
  } else {
    footer.style.visibility = "hidden";
  }
};
