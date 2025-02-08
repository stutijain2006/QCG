document.addEventListener("DOMContentLoaded", function () {
    // Theme Toggle
    const themeToggle = document.getElementById("theme-toggle");
    const socialIcons = document.querySelector(".social-icons img");
    const image = document.querySelector(".image");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");

    // Change image source based on dark mode
    if (document.body.classList.contains("dark-theme")) {
        socialIcons.src = "Resources/Frame 1597884138.png"; 
    } else {
        socialIcons.src = "Resources/Frame 1597884102.png";
    }

    if(document.body.classList.contains("dark-theme")) {
        image.src = "Resources/image 86 new.png";
    } else {
        image.src = "Resources/image 86.png";
    }
});

    // Changing Text Effect
    const changingText = document.querySelector(".changing-text");
    const changingAbout = document.querySelector(".changing-about");
    const words = ["Algorithms", "Hardware", "Machine Learning", "Information"];
    let index = 0;

    function changeWord() {
        index = (index + 1) % words.length;
        changingText.textContent = words[index];
        changingAbout.textContent = words[index];
    }
    setInterval(changeWord, 2000);

    // Feedback Submission
    const feedbackInput = document.getElementById("feedback-input");
    const submitFeedback = document.getElementById("submit-feedback");
    const thankYouMessage = document.getElementById("thank-you");

    submitFeedback.addEventListener("click", function () {
        if (feedbackInput.value.trim() !== "") {
            thankYouMessage.classList.remove("hidden");
            setTimeout(() => {
                thankYouMessage.classList.add("hidden");
                feedbackInput.value = "";
            }, 3000);
        }
    });

    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById("scroll-to-top");
    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

});
