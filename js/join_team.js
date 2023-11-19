document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".join-team-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        // Call your function here
        console.log("Form submitted");
        console.log(form.querySelector("#fname").value);
    });
});