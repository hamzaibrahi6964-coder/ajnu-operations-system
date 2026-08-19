/* =========================================================
   AJNU OPERATIONS MANAGEMENT SYSTEM
   DASHBOARD INTERACTIONS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       MOBILE SIDEBAR
       ===================================================== */

    const mobileMenu = document.getElementById("mobileMenu");
    const sidebar = document.getElementById("sidebar");


    if (mobileMenu && sidebar) {

        mobileMenu.addEventListener("click", () => {

            sidebar.classList.toggle("show");

        });

    }


    /* =====================================================
       NAVIGATION ACTIVE STATE
       ===================================================== */

    const navItems = document.querySelectorAll(".nav-item");


    navItems.forEach((item) => {

        item.addEventListener("click", (event) => {

            event.preventDefault();


            navItems.forEach((nav) => {

                nav.classList.remove("active");

            });


            item.classList.add("active");


            /* Close sidebar on mobile */

            if (window.innerWidth <= 900) {

                sidebar.classList.remove("show");

            }

        });

    });


    /* =====================================================
       BRANCH SELECTOR
       ===================================================== */

    const branchSelector =
        document.querySelector(".branch-selector");


    if (branchSelector) {

        branchSelector.addEventListener("click", () => {

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

        notificationButton.addEventListener("click", () => {

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

        newOperationButton.addEventListener("click", () => {

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


    cardActions.forEach((button) => {

        button.addEventListener("click", () => {

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

        supportButton.addEventListener("click", () => {

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
            document.querySelector(".demo-notification");


        /* Create notification if it doesn't exist */

        if (!notification) {

            notification =
                document.createElement("div");


            notification.className =
                "demo-notification";


            document.body.appendChild(notification);

        }


        notification.textContent = message;


        /* Show */

        notification.classList.add("show");


        /* Hide automatically */

        setTimeout(() => {

            notification.classList.remove("show");

        }, 3000);

    }


});
