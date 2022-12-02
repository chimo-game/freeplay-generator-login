const form = document.querySelector("form"),
    emailField = form.querySelector(".email-field"),
    emailInput = emailField.querySelector(".email"),
    // passField = form.querySelector(".create-password"),
    // passInput = passField.querySelector(".password"),
    // cPassField = form.querySelector(".confirm-password"),
    // cPassInput = cPassField.querySelector(".cPassword"),

    claimField = form.querySelector(".cashapp-field"),
    claimInput = claimField.querySelector(".CashApp")



// function validateUsername() {

//     if (claimInput.value == '') {
//         // alert("Please input a Value");
//         // return false;

//         return claimField.classList.add("invalid");
//     }
//     claimField.classList.remove("invalid");

// }

// Email Validtion
function checkEmail() {
    const emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emaiPattern)) {
        return emailField.classList.add("invalid"); //adding invalid class if email value do not mathced with email pattern
    }
    emailField.classList.remove("invalid"); //removing invalid class if email value matched with emaiPattern
}


function checkCA() {

    if (claimInput.value == '') {

        return claimField.classList.add("invalid");
    }
    claimField.classList.remove("invalid");

}

// Hide and show password
// const eyeIcons = document.querySelectorAll(".show-hide");

// eyeIcons.forEach((eyeIcon) => {
//     eyeIcon.addEventListener("click", () => {
//         const pInput = eyeIcon.parentElement.querySelector("input"); 
//         if (pInput.type === "password") {
//             eyeIcon.classList.replace("bx-hide", "bx-show");
//             return (pInput.type = "text");
//         }
//         eyeIcon.classList.replace("bx-show", "bx-hide");
//         pInput.type = "password";
//     });
// });


// function createPass() {
//     const passPattern = 8;

//     if (!passInput.value.match(passPattern)) {
//         return passField.classList.add("invalid");
//     }
//     passField.classList.remove("invalid"); 
// }


// function confirmPass() {
//     if (passInput.value !== cPassInput.value || cPassInput.value === "") {
//         return cPassField.classList.add("invalid");
//     }
//     cPassField.classList.remove("invalid");
// }

// Calling Funtion on Form Sumbit
form.addEventListener("submit", (e) => {
    e.preventDefault(); //preventing form submitting
    checkCA();
    checkEmail();
    // createPass();
    // confirmPass();

    //calling function on key up
    emailInput.addEventListener("keyup", checkCA);
    emailInput.addEventListener("keyup", checkEmail);

    if (
        !emailField.classList.contains("invalid")
    ) {
        location.href = form.getAttribute("action");
    }
});



