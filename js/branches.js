/* =========================================================
   AJNU OPERATIONS MANAGEMENT SYSTEM
   BRANCHES PAGE INTERACTIONS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const addBranchButton =
        document.getElementById("addBranchButton");

    const branchesGrid =
        document.querySelector(".branches-grid");

    const viewBranchButtons =
        document.querySelectorAll(".view-branch-button");


    /* =====================================================
       BRANCH DETAILS DATA
    ===================================================== */

    const branchData = {

        "Kaduna Headquarters": {
            manager: "Musa Ahmed",
            location: "Kaduna State",
            workforce: "86 Staff",
            operations: "12 Active Operations",
            performance: "92%",
            status: "Active"
        },

        "Abuja Branch": {
            manager: "Abubakar Okoro",
            location: "FCT, Abuja",
            workforce: "54 Staff",
            operations: "7 Active Operations",
            performance: "87%",
            status: "Active"
        },

        "Kano Branch": {
            manager: "Ibrahim Usman",
            location: "Kano State",
            workforce: "48 Staff",
            operations: "4 Active Operations",
            performance: "76%",
            status: "Active"
        },

        "Jos Branch": {
            manager: "Sani Haruna",
            location: "Plateau State",
            workforce: "36 Staff",
            operations: "3 Active Operations",
            performance: "81%",
            status: "Active"
        },

        "Lagos Branch": {
            manager: "Fatima Abdullahi",
            location: "Lagos State",
            workforce: "24 Staff",
            operations: "2 Active Operations",
            performance: "63%",
            status: "Needs Attention"
        }

    };


    /* =====================================================
       CREATE BRANCH DETAILS MODAL
    ===================================================== */

    const detailsModal =
        document.createElement("div");

    detailsModal.className =
        "branch-modal-overlay";


    detailsModal.innerHTML = `

        <div class="branch-modal">

            <div class="branch-modal-header">

                <div>

                    <span class="card-label">
                        BRANCH OVERVIEW
                    </span>

                    <h2 id="branchModalTitle">
                        Branch Details
                    </h2>

                </div>


                <button class="branch-modal-close"
                        id="closeBranchModal">

                    ×

                </button>

            </div>


            <div class="branch-modal-body">


                <div class="branch-overview-grid">


                    <div class="branch-overview-item">

                        <span>
                            👤 BRANCH MANAGER
                        </span>

                        <strong id="modalManager">
                            --
                        </strong>

                    </div>


                    <div class="branch-overview-item">

                        <span>
                            📍 LOCATION
                        </span>

                        <strong id="modalLocation">
                            --
                        </strong>

                    </div>


                    <div class="branch-overview-item">

                        <span>
                            👥 WORKFORCE
                        </span>

                        <strong id="modalWorkforce">
                            --
                        </strong>

                    </div>


                    <div class="branch-overview-item">

                        <span>
                            🚛 OPERATIONS
                        </span>

                        <strong id="modalOperations">
                            --
                        </strong>

                    </div>

                </div>


                <div class="branch-performance-overview">

                    <div class="performance-overview-header">

                        <div>

                            <span>
                                MONTHLY PERFORMANCE
                            </span>

                            <strong>
                                Branch Performance
                            </strong>

                        </div>


                        <h3 id="modalPerformance">
                            0%
                        </h3>

                    </div>


                    <div class="modal-progress-bar">

                        <div id="modalProgressFill"></div>

                    </div>

                </div>


                <div class="branch-status-overview">

                    <span>
                        CURRENT STATUS
                    </span>

                    <strong id="modalStatus">
                        --
                    </strong>

                </div>


                <div class="branch-modal-actions">

                    <button class="secondary-button"
                            id="closeDetailsButton">

                        Close

                    </button>


                    <button class="primary-action"
                            id="manageBranchButton">

                        Manage Branch →

                    </button>

                </div>

            </div>

        </div>

    `;


    document.body.appendChild(detailsModal);



    /* =====================================================
       MODAL ELEMENTS
    ===================================================== */

    const closeBranchModal =
        document.getElementById("closeBranchModal");

    const closeDetailsButton =
        document.getElementById("closeDetailsButton");

    const manageBranchButton =
        document.getElementById("manageBranchButton");



    /* =====================================================
       OPEN BRANCH DETAILS
    ===================================================== */

    function openBranchDetails(branchName) {

        const branch =
            branchData[branchName];


        if (!branch) return;


        document.getElementById(
            "branchModalTitle"
        ).textContent = branchName;


        document.getElementById(
            "modalManager"
        ).textContent = branch.manager;


        document.getElementById(
            "modalLocation"
        ).textContent = branch.location;


        document.getElementById(
            "modalWorkforce"
        ).textContent = branch.workforce;


        document.getElementById(
            "modalOperations"
        ).textContent = branch.operations;


        document.getElementById(
            "modalPerformance"
        ).textContent = branch.performance;


        document.getElementById(
            "modalStatus"
        ).textContent = branch.status;


        const progressFill =
            document.getElementById(
                "modalProgressFill"
            );


        progressFill.style.width =
            branch.performance;


        detailsModal.classList.add("show");

        document.body.style.overflow = "hidden";

    }



    /* =====================================================
       CLOSE MODAL
    ===================================================== */

    function closeModal() {

        detailsModal.classList.remove("show");

        document.body.style.overflow = "";

    }


    closeBranchModal.addEventListener(
        "click",
        closeModal
    );


    closeDetailsButton.addEventListener(
        "click",
        closeModal
    );


    detailsModal.addEventListener(
        "click",
        (event) => {

            if (event.target === detailsModal) {

                closeModal();

            }

        }
    );



    /* =====================================================
       VIEW BRANCH BUTTONS
    ===================================================== */

    viewBranchButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const branchCard =
                button.closest(".branch-card");


            const branchName =
                branchCard.dataset.branch;


            openBranchDetails(branchName);

        });

    });



    /* =====================================================
       MANAGE BRANCH BUTTON
    ===================================================== */

    manageBranchButton.addEventListener(
        "click",
        () => {

            closeModal();

            showBranchToast(
                "Branch management dashboard will open here."
            );

        }
    );



    /* =====================================================
       ADD BRANCH MODAL
    ===================================================== */

    const addBranchModal =
        document.createElement("div");

    addBranchModal.className =
        "branch-modal-overlay";


    addBranchModal.innerHTML = `

        <div class="branch-modal add-branch-modal">

            <div class="branch-modal-header">

                <div>

                    <span class="card-label">
                        COMPANY EXPANSION
                    </span>

                    <h2>
                        Add New Branch
                    </h2>

                </div>


                <button class="branch-modal-close"
                        id="closeAddBranchModal">

                    ×

                </button>

            </div>


            <form id="addBranchForm"
                  class="add-branch-form">


                <div class="form-grid">


                    <div class="form-group full-width">

                        <label>
                            Branch Name
                        </label>

                        <input type="text"
                               id="newBranchName"
                               placeholder="Enter branch name"
                               required>

                    </div>


                    <div class="form-group">

                        <label>
                            State / Location
                        </label>

                        <input type="text"
                               id="newBranchLocation"
                               placeholder="e.g. Kaduna State"
                               required>

                    </div>


                    <div class="form-group">

                        <label>
                            Branch Manager
                        </label>

                        <input type="text"
                               id="newBranchManager"
                               placeholder="Manager name"
                               required>

                    </div>


                    <div class="form-group">

                        <label>
                            Workforce
                        </label>

                        <input type="number"
                               id="newBranchWorkforce"
                               placeholder="Number of staff"
                               required>

                    </div>


                    <div class="form-group">

                        <label>
                            Starting Status
                        </label>

                        <select id="newBranchStatus">

                            <option value="active">
                                Active
                            </option>

                            <option value="attention">
                                Needs Attention
                            </option>

                        </select>

                    </div>

                </div>


                <div class="branch-modal-actions">

                    <button type="button"
                            class="secondary-button"
                            id="cancelAddBranch">

                        Cancel

                    </button>


                    <button type="submit"
                            class="primary-action">

                        Add Branch

                    </button>

                </div>

            </form>

        </div>

    `;


    document.body.appendChild(addBranchModal);


    const closeAddBranchModal =
        document.getElementById(
            "closeAddBranchModal"
        );

    const cancelAddBranch =
        document.getElementById(
            "cancelAddBranch"
        );

    const addBranchForm =
        document.getElementById(
            "addBranchForm"
        );



    function openAddBranchModal() {

        addBranchModal.classList.add("show");

        document.body.style.overflow = "hidden";

    }


    function closeAddModal() {

        addBranchModal.classList.remove("show");

        document.body.style.overflow = "";

        addBranchForm.reset();

    }


    addBranchButton.addEventListener(
        "click",
        openAddBranchModal
    );


    closeAddBranchModal.addEventListener(
        "click",
        closeAddModal
    );


    cancelAddBranch.addEventListener(
        "click",
        closeAddModal
    );


    addBranchModal.addEventListener(
        "click",
        (event) => {

            if (event.target === addBranchModal) {

                closeAddModal();

            }

        }
    );



    /* =====================================================
       ADD NEW BRANCH
    ===================================================== */

    addBranchForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const branchName =
                document.getElementById(
                    "newBranchName"
                ).value;


            const location =
                document.getElementById(
                    "newBranchLocation"
                ).value;


            const manager =
                document.getElementById(
                    "newBranchManager"
                ).value;


            const workforce =
                document.getElementById(
                    "newBranchWorkforce"
                ).value;


            const status =
                document.getElementById(
                    "newBranchStatus"
                ).value;


            const initials =
                manager
                    .split(" ")
                    .map(name => name[0])
                    .join("")
                    .substring(0, 2)
                    .toUpperCase();


            branchData[branchName] = {

                manager: manager,

                location: location,

                workforce:
                    `${workforce} Staff`,

                operations:
                    "0 Active Operations",

                performance: "0%",

                status:
                    status === "active"
                        ? "Active"
                        : "Needs Attention"

            };


            const branchCard =
                document.createElement("article");


            branchCard.className =
                "branch-card";


            branchCard.dataset.branch =
                branchName;


            branchCard.innerHTML = `

                <div class="branch-card-header">

                    <div class="branch-location">

                        <div class="branch-icon">
                            🏢
                        </div>

                        <div>

                            <span>
                                NEW BRANCH
                            </span>

                            <h3>
                                ${branchName}
                            </h3>

                        </div>

                    </div>


                    <span class="branch-status ${status}">

                        ${
                            status === "active"
                                ? "Active"
                                : "Attention"
                        }

                    </span>

                </div>


                <div class="branch-manager">

                    <div class="manager-avatar">

                        ${initials}

                    </div>


                    <div>

                        <span>
                            BRANCH MANAGER
                        </span>

                        <strong>
                            ${manager}
                        </strong>

                    </div>

                </div>


                <div class="branch-details">

                    <div>

                        <span>
                            📍 LOCATION
                        </span>

                        <strong>
                            ${location}
                        </strong>

                    </div>


                    <div>

                        <span>
                            👥 WORKFORCE
                        </span>

                        <strong>
                            ${workforce} Staff
                        </strong>

                    </div>

                </div>


                <div class="branch-performance">

                    <div class="performance-header">

                        <span>
                            MONTHLY PERFORMANCE
                        </span>

                        <strong>
                            0%
                        </strong>

                    </div>


                    <div class="progress-bar">

                        <div class="progress-fill"
                             style="width: 0%;">

                        </div>

                    </div>

                </div>


                <div class="branch-card-footer">

                    <span>
                        0 Active Operations
                    </span>


                    <button class="view-branch-button">

                        View Branch →

                    </button>

                </div>

            `;


            branchesGrid.prepend(branchCard);


            /* Add click event to new button */

            const newViewButton =
                branchCard.querySelector(
                    ".view-branch-button"
                );


            newViewButton.addEventListener(
                "click",
                () => {

                    openBranchDetails(branchName);

                }
            );


            closeAddModal();


            showBranchToast(
                `${branchName} added successfully`
            );

        }
    );



    /* =====================================================
       TOAST NOTIFICATION
    ===================================================== */

    function showBranchToast(message) {

        const toast =
            document.createElement("div");


        toast.className =
            "branch-toast";


        toast.innerHTML = `

            <span>✓</span>

            <p>
                ${message}
            </p>

        `;


        document.body.appendChild(toast);


        setTimeout(() => {

            toast.classList.add("show");

        }, 50);


        setTimeout(() => {

            toast.classList.remove("show");


            setTimeout(() => {

                toast.remove();

            }, 300);

        }, 3000);

    }


});
