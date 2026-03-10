// JavaScript code for form validation

const form = document.getElementById("myForm");

const formInput = document.getElementById("inputField");
const displayMessage = document.getElementById("displayMessage");
form.addEventListener("submit", (event) => {
    // Prevent form from submitting
    event.preventDefault();

    // Retrieve the input field value
    const input = formInput.value;

    // Regular expression pattern for alphanumeric input
    const regex = /^[A-Za-z0-9]+$/;

    // Check if the input value matches the pattern
    const isValid = regex.test(input);

    // Valid input: display confirmation and submit the form
    // Invalid input: display error message
    (isValid) ? displayMessage.textContent = "Input is valid. Form submitted!" : displayMessage.textContent = "Invalid input. Please enter only alphanumeric characters.";
});