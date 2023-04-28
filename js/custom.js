const toggleBtn = document.getElementById("toggle-button");
const toggleBtn1 = document.getElementById("toggle-button2");
const navbarCollapseEl = document.getElementById("nav-toggle-1");
const navbarCollapseEl2 = document.getElementById("nav-toggle-2");

toggleBtn.addEventListener("click", function () {
    navbarCollapseEl.classList.toggle('d-none');
});
toggleBtn1.addEventListener("click", function () {
    navbarCollapseEl2.classList.toggle('d-none');
});
