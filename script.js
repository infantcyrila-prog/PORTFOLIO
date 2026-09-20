// ===============================
// TYPING EFFECT
// ===============================

const typingElement = document.getElementById("typing");

const words = [
    "AI & Data Science Student",
    "Python Developer",
    "Web Developer",
    "Machine Learning Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    if (!typingElement) {
        return;
    }

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex >= currentWord.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex <= 0) {

            charIndex = 0;
            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

            setTimeout(typingEffect, 500);

            return;
        }
    }

    setTimeout(
        typingEffect,
        deleting ? 50 : 100
    );
}

typingEffect();


// ===============================
// MOBILE MENU
// ===============================

const menuButton = document.getElementById("menuBtn");
const navigationMenu = document.getElementById("navMenu");

if (menuButton && navigationMenu) {

    menuButton.addEventListener("click", function () {

        navigationMenu.classList.toggle("active");

    });
}


// ===============================
// CLOSE MOBILE MENU
// ===============================

const menuLinks = document.querySelectorAll("#navMenu a");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navigationMenu) {

            navigationMenu.classList.remove("active");

        }

    });

});


// ===============================
// 3D PROFILE EFFECT
// ===============================

const profileCard =
    document.querySelector(".profile-card");

if (profileCard) {

    document.addEventListener("mousemove", function (event) {

        if (window.innerWidth <= 900) {
            return;
        }

        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const rotateY =
            (centerX - mouseX) / 40;

        const rotateX =
            (mouseY - centerY) / 40;

        profileCard.style.transform =
            'rotateX(${rotateX}deg) rotateY(${rotateY}deg)';

    });


    profileCard.addEventListener(
        "mouseleave",
        function () {

            profileCard.style.transform =
                "rotateX(0deg) rotateY(0deg)";

        }
    );

}


// ===============================
// CONTACT FORM
// ===============================

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            alert(
                "Thank you! Your message has been received."
            );

            contactForm.reset();

        }
    );

}


// ===============================
// SCROLL REVEAL
// ===============================

const sections =
    document.querySelectorAll("section");

if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                    }

                });

            },

            {
                threshold: 0.15
            }

        );


    sections.forEach(function (section) {

        observer.observe(section);

    });

}


// ===============================
// CONSOLE MESSAGE
// ===============================

console.log(
    "Infant Cyril Portfolio Loaded Successfully!"
);