var length = document.querySelectorAll(".btn").length;

document.querySelectorAll(".btn")[3].addEventListener("click", function () {
  var type = this.textContent; // Use 'this' to refer to the clicked button
  var main = document.querySelector("main");

  // Remove existing classes from 'main'
  main.classList.remove("beach", "tropic", "tree", "rocks");

  // Add the appropriate class based on the clicked button's text
  if (type === "beach") {
    main.classList.add("beach");
  } else if (type === "tropic") {
    main.classList.add("tropic");
  } else if (type === "tree") {
    main.classList.add("tree");
  } else if (type === "rocks") {
    main.classList.add("rocks");
  }
});
