(() => {
    const refs = {
        openMenuBtn: document.querySelector("[open-menu]"),
        closeMenuBtn: document.querySelector("[close-menu]"),
        menu: document.querySelector("[mob-menu]"),
    };

    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);

    function toggleMenu() {
        refs.menu.classList.toggle("is-hidden");
    }
})();

