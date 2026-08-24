alert("Dashboard JavaScript is working!");

document.addEventListener("DOMContentLoaded", function () {

    const mobileMenu =
        document.getElementById("mobileMenu");

    const sidebar =
        document.getElementById("sidebar");


    mobileMenu.addEventListener("click", function () {

        sidebar.style.transform =
            "translateX(0)";

    });

});
