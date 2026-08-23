/* =========================================================
   AJNU OPERATIONS
   EXECUTIVE LOGIN - DEMO AUTHENTICATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");


    /* =============================================
       CHECK IF ALREADY LOGGED IN
    ============================================= */

    if (sessionStorage.getItem("ajnuExecutiveLoggedIn") === "true") {

        window.location.href = "dashboard.html";

    }


    /* =============================================
       LOGIN
    ============================================= */

    if (loginForm) {

        loginForm.addEventListener("submit", (event) => {

            event.preventDefault();


            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();


            /*
                DEMO EXECUTIVE CREDENTIALS

                You can change these later.
            */

            const executiveEmail = "executive@ajnu.com";

            const executivePassword = "AJNU2026";


            if (
                email === executiveEmail &&
                password === executivePassword
            ) {

                /* Save demo session */

                sessionStorage.setItem(
                    "ajnuExecutiveLoggedIn",
                    "true"
                );


                sessionStorage.setItem(
                    "ajnuExecutiveName",
                    "Executive"
                );


                /* Redirect */

                window.location.href = "dashboard.html";

            } else {

                showLoginError(
                    "Invalid executive email or password."
                );

            }

        });

    }


    /* =============================================
       LOGIN ERROR
    ============================================= */

    function showLoginError(message) {

        let errorBox =
            document.querySelector(".login-error");


        if (!errorBox) {

            errorBox =
                document.createElement("div");


            errorBox.className =
                "login-error";


            loginForm.insertBefore(
                errorBox,
                loginForm.firstChild
            );

        }


        errorBox.textContent = message;

        errorBox.classList.add("show");


        setTimeout(() => {

            errorBox.classList.remove("show");

        }, 3500);

    }

});
