/* =========================================================
   AJNU OPERATIONS MANAGEMENT SYSTEM
   DASHBOARD INTERACTIONS
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
   MOBILE SIDEBAR
===================================================== */

const mobileMenu =
    document.getElementById("mobileMenu");

const sidebar =
    document.getElementById("sidebar");


if (mobileMenu && sidebar) {

    mobileMenu.addEventListener("click", function () {

        sidebar.style.transform =
            "translateX(0)";

    });

}

    /* =====================================================
       NAVIGATION
    ===================================================== */

    const navItems =
        document.querySelectorAll(".nav-item");


    navItems.forEach(function (item) {

        item.addEventListener("click", function () {

            /* Close sidebar on mobile */

            if (window.innerWidth <= 900) {

                sidebar.style.transform =
                    "translateX(-100%)";

            }

        });

    });


    /* =====================================================
       BRANCH SELECTOR
    ===================================================== */

    const branchSelector =
        document.querySelector(".branch-selector");


    if (branchSelector) {

        branchSelector.addEventListener("click", function () {

            showDemoNotification(
                "Branch selection will be available here."
            );

        });

    }


    /* =====================================================
       NOTIFICATION BUTTON
    ===================================================== */

    const notificationButton =
        document.querySelector(".notification-button");


    if (notificationButton) {

        notificationButton.addEventListener("click", function () {

            showDemoNotification(
                "You have 3 new notifications."
            );


            const dot =
                notificationButton.querySelector(
                    ".notification-dot"
                );


            if (dot) {

                dot.style.display = "none";

            }

        });

    }


    /* =====================================================
       PRIMARY ACTION
    ===================================================== */

    const newOperationButton =
        document.querySelector(".primary-action");


    if (newOperationButton) {

        newOperationButton.addEventListener("click", function () {

            showDemoNotification(
                "New Operation form will open here."
            );

        });

    }


    /* =====================================================
       CARD ACTION BUTTONS
    ===================================================== */

    const cardActions =
        document.querySelectorAll(".card-action");


    cardActions.forEach(function (button) {

        button.addEventListener("click", function () {

            showDemoNotification(
                "This section will open in the full system."
            );

        });

    });


    /* =====================================================
       SUPPORT BUTTON
    ===================================================== */

    const supportButton =
        document.querySelector(".support-button");


    if (supportButton) {

        supportButton.addEventListener("click", function () {

            showDemoNotification(
                "Support center will be available here."
            );

        });

    });


    /* =====================================================
       DEMO NOTIFICATION SYSTEM
    ===================================================== */

    function showDemoNotification(message) {

        let notification =
            document.querySelector(
                ".demo-notification"
            );


        if (!notification) {

            notification =
                document.createElement("div");

            notification.className =
                "demo-notification";

            document.body.appendChild(
                notification
            );

        }


        notification.textContent = message;

        notification.classList.add("show");


        setTimeout(function () {

            notification.classList.remove(
                "show"
            );

        }, 3000);

    }


});
