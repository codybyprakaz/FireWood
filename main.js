let lastScroll = 0;

const navbar = document.getElementById("navbar");
const logoText = document.getElementById("logoText");
const navLinks = document.getElementById("navLinks");
const ctaBtn = document.getElementById("ctaBtn");

const menuBtn = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

/* MOBILE MENU TOGGLE */
if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
}

/* SCROLL BEHAVIOR */
window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 80 && currentScroll > lastScroll) {

        // Hide nav links and button
        navLinks.style.opacity = "0";
        ctaBtn.style.opacity = "0";

        // Remove navbar glass effect
        navbar.classList.remove(
            "bg-white/70",
            "dark:bg-black/30",
            "backdrop-blur-md",
            "border-b",
            "border-black/10",
            "dark:border-white/10"
        );

    } else {

        // Show nav links and button
        navLinks.style.opacity = "1";
        ctaBtn.style.opacity = "1";

        // Restore navbar glass effect
        navbar.classList.add(
            "bg-white/70",
            "dark:bg-black/30",
            "backdrop-blur-md",
            "border-b",
            "border-black/10",
            "dark:border-white/10"
        );
    }

    lastScroll = currentScroll;
});


// dark mode
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.documentElement.classList.remove("dark");
} else {
    document.documentElement.classList.add("dark");
}

const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

themeToggle.addEventListener("click", () => {
    html.classList.toggle("dark");

    if (html.classList.contains("dark")) {
        themeToggle.textContent = "🌙"; // dark mode ON icon
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.textContent = "☀️"; // light mode ON icon
        localStorage.setItem("theme", "light");
    }
});

/* Load saved theme */
if (localStorage.getItem("theme") === "light") {
    html.classList.remove("dark");
    themeToggle.textContent = "☀️";
}