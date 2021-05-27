const form = document.querySelector("form");
const button = form.querySelector("button");
const errorDiv = form.querySelector("#error");

button.addEventListener("click", function(event){
    event.preventDefault();

    /* firstname */
    const inputField = form.querySelector("#firstname");
    const stringValue = inputField.value;
    const stringLength = stringValue.length;

    if (stringLength >= 2) {
        errorDiv.innerText = stringValue + " is ok!"
    } else {
        errorDiv.innerText = stringValue + " is not ok!";
    }

    /* email */
    const inputFieldEmail = form.querySelector("#email");
    const stringValueEmail = inputFieldEmail.value;
    const stringLengthEmail = stringValueEmail.length;

    if (stringLengthEmail >= 6 && stringValueEmail.includes("@")) {
        errorDiv.innerText = stringValueEmail + " is ok!";
    } else {
        errorDiv.innerText = stringValueEmail + " is not ok!";
    }
});