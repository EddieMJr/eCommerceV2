export default function Burger() {
    const burger = document.querySelector(".burger");
    const navMenu = document.querySelector(".nav-menu");

    if (!burger || !navMenu) return;

    burger.replaceWith(burger.cloneNode(true));
    const newBurger = document.querySelector(".burger");

    newBurger.addEventListener("click", () => {
        newBurger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
}
