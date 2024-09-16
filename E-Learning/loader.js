function show(event) {
  event.preventDefault();
  const sidebar = document.querySelector(".sidebar-responsive");
  sidebar.style.display = "flex";
  console.log("click");
}
function hide(event) {
  event.preventDefault();
  const hideSidebar = document.querySelector(".sidebar-responsive");
  hideSidebar.style.display = "none";
  console.log("click");
}
