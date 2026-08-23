/* =========================================================
   AJNU OPERATIONS MANAGEMENT SYSTEM
   SETTINGS & ADMINISTRATION INTERACTIONS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       SETTINGS TAB NAVIGATION
    ===================================================== */

    const settingsTabs =
        document.querySelectorAll(".settings-tab");

    const settingsPanels =
        document.querySelectorAll(".settings-panel");


    settingsTabs.forEach((tab) => {

        tab.addEventListener("click", () => {

            const target =
                tab.dataset.tab;


            /* Remove active state */

            settingsTabs.forEach((item) => {

                item.classList.remove("active");

            });


            settingsPanels.forEach((panel) => {

                panel.classList.remove("active");

            });


            /* Activate selected tab */

            tab.classList.add("active");


            const targetPanel =
                document.getElementById(target);


            if (targetPanel) {

                targetPanel.classList.add("active");

            }

        });

    });



    /* =====================================================
       SAVE ALL SETTINGS
    ===================================================== */

    const saveAllSettings =
        document.getElementById("saveAllSettings");


    if (saveAllSettings) {

        saveAllSettings.addEventListener(
            "click",
            () => {

                const originalText =
                    saveAllSettings.textContent;


                saveAllSettings.textContent =
                    "Saving...";


                saveAllSettings.disabled =
                    true;


                setTimeout(() => {

                    saveAllSettings.textContent =
                        "✓ Saved";


                    showSettingsToast(
                        "Company settings saved successfully"
                    );


                    setTimeout(() => {

                        saveAllSettings.textContent =
                            originalText;

                        saveAllSettings.disabled =
                            false;

                    }, 1500);

                }, 700);

            }
        );

    }



    /* =====================================================
       ADD BRANCH
    ===================================================== */

    const addBranchButton =
        document.getElementById("addBranchButton");


    if (addBranchButton) {

        addBranchButton.addEventListener(
            "click",
            () => {

                openBranchModal();

            }
        );

    }



    /* =====================================================
       ADD USER
    ===================================================== */

    const addUserButton =
        document.getElementById("addUserButton");


    if (addUserButton) {

        addUserButton.addEventListener(
            "click",
            () => {

                openUserModal();

            }
        );

    }



    /* =====================================================
       EDIT / MANAGE SETTINGS ITEMS
    ===================================================== */

    const manageButtons =
        document.querySelectorAll(
            ".edit-settings-item"
        );


    manageButtons.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                const item =
                    button.closest(
                        ".settings-list-item"
                    );


                const name =
                    item.querySelector(
                        ".settings-list-info strong"
                    ).textContent.trim();


                const action =
                    button.textContent.trim();


                showSettingsToast(
                    `${action} options opened for ${name}`
                );

            }
        );

    });



    /* =====================================================
       NOTIFICATION & SECURITY TOGGLES
    ===================================================== */

    const toggleInputs =
        document.querySelectorAll(
            ".toggle-switch input"
        );


    toggleInputs.forEach((toggle) => {

        toggle.addEventListener(
            "change",
            () => {

                const setting =
                    toggle.closest(
                        ".notification-setting, .security-option"
                    );


                const settingName =
                    setting.querySelector(
                        "strong"
                    ).textContent.trim();


                const status =
                    toggle.checked
                        ? "enabled"
                        : "disabled";


                showSettingsToast(
                    `${settingName} ${status}`
                );

            }
        );

    });



    /* =====================================================
       SECURITY ACTIVITY
    ===================================================== */

    const viewSecurityActivity =
        document.getElementById(
            "viewSecurityActivity"
        );


    if (viewSecurityActivity) {

        viewSecurityActivity.addEventListener(
            "click",
            () => {

                openSecurityModal();

            }
        );

    }



    /* =====================================================
       BRANCH MODAL
    ===================================================== */

    function openBranchModal() {

        const modal =
            document.createElement("div");


        modal.className =
            "settings-modal-overlay";


        modal.innerHTML = `

            <div class="settings-modal">

                <div class="settings-modal-header">

                    <div>

                        <span class="card-label">
                            BRANCH MANAGEMENT
                        </span>

                        <h2>
                            Add New Branch
                        </h2>

                    </div>


                    <button class="settings-modal-close">
                        ×
                    </button>

                </div>


                <form class="settings-modal-form"
                      id="addBranchForm">


                    <div class="settings-modal-grid">


                        <div class="form-group">

                            <label>
                                Branch Name
                            </label>

                            <input
                                type="text"
                                id="branchName"
                                placeholder="e.g. Sokoto Branch"
                                required>

                        </div>


                        <div class="form-group">

                            <label>
                                State
                            </label>

                            <input
                                type="text"
                                id="branchState"
                                placeholder="e.g. Sokoto State"
                                required>

                        </div>


                        <div class="form-group">

                            <label>
                                Branch Manager
                            </label>

                            <input
                                type="text"
                                id="branchManager"
                                placeholder="Manager name">

                        </div>


                        <div class="form-group">

                            <label>
                                Branch Status
                            </label>

                            <select id="branchStatus">

                                <option value="Active">
                                    Active
                                </option>

                                <option value="Inactive">
                                    Inactive
                                </option>

                            </select>

                        </div>


                        <div class="form-group full-width">

                            <label>
                                Branch Address
                            </label>

                            <input
                                type="text"
                                id="branchAddress"
                                placeholder="Enter branch address">

                        </div>


                    </div>


                    <div class="settings-modal-actions">

                        <button
                            type="button"
                            class="secondary-button cancel-settings-modal">

                            Cancel

                        </button>


                        <button
                            type="submit"
                            class="primary-action">

                            Add Branch

                        </button>

                    </div>

                </form>

            </div>

        `;


        document.body.appendChild(modal);


        setTimeout(() => {

            modal.classList.add("show");

        }, 20);


        document.body.style.overflow =
            "hidden";


        const closeModal = () => {

            modal.classList.remove("show");


            setTimeout(() => {

                modal.remove();

            }, 250);


            document.body.style.overflow =
                "";

        };


        modal.querySelector(
            ".settings-modal-close"
        ).addEventListener(
            "click",
            closeModal
        );


        modal.querySelector(
            ".cancel-settings-modal"
        ).addEventListener(
            "click",
            closeModal
        );


        modal.addEventListener(
            "click",
            (event) => {

                if (event.target === modal) {

                    closeModal();

                }

            }
        );


        modal.querySelector(
            "#addBranchForm"
        ).addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                const branchName =
                    modal.querySelector(
                        "#branchName"
                    ).value.trim();


                const branchState =
                    modal.querySelector(
                        "#branchState"
                    ).value.trim();


                const branchStatus =
                    modal.querySelector(
                        "#branchStatus"
                    ).value;


                addBranchToList(
                    branchName,
                    branchState,
                    branchStatus
                );


                closeModal();


                showSettingsToast(
                    `${branchName} added successfully`
                );

            }
        );

    }



    /* =====================================================
       ADD BRANCH TO LIST
    ===================================================== */

    function addBranchToList(
        name,
        state,
        status
    ) {

        const branchList =
            document.querySelector(
                "#branches .settings-list"
            );


        if (!branchList) return;


        const branchItem =
            document.createElement("div");


        branchItem.className =
            "settings-list-item";


        branchItem.innerHTML = `

            <div class="settings-list-icon">
                ◫
            </div>


            <div class="settings-list-info">

                <strong>
                    ${name}
                </strong>

                <span>
                    ${state}
                </span>

            </div>


            <span class="status-badge
                         ${status === "Active"
                            ? "active-status"
                            : ""}">

                ${status}

            </span>


            <button class="edit-settings-item">
                Edit
            </button>

        `;


        branchList.appendChild(
            branchItem
        );


        attachManageEvent(
            branchItem.querySelector(
                ".edit-settings-item"
            )
        );

    }



    /* =====================================================
       ADD USER MODAL
    ===================================================== */

    function openUserModal() {

        const modal =
            document.createElement("div");


        modal.className =
            "settings-modal-overlay";


        modal.innerHTML = `

            <div class="settings-modal">

                <div class="settings-modal-header">

                    <div>

                        <span class="card-label">
                            USER ACCESS
                        </span>

                        <h2>
                            Add New User
                        </h2>

                    </div>


                    <button class="settings-modal-close">
                        ×
                    </button>

                </div>


                <form class="settings-modal-form"
                      id="addUserForm">


                    <div class="settings-modal-grid">


                        <div class="form-group">

                            <label>
                                Full Name
                            </label>

                            <input
                                type="text"
                                id="userName"
                                placeholder="Enter full name"
                                required>

                        </div>


                        <div class="form-group">

                            <label>
                                Email Address
                            </label>

                            <input
                                type="email"
                                id="userEmail"
                                placeholder="name@company.com"
                                required>

                        </div>


                        <div class="form-group">

                            <label>
                                Role
                            </label>

                            <select id="userRole">

                                <option value="Branch Manager">
                                    Branch Manager
                                </option>

                                <option value="Finance">
                                    Finance
                                </option>

                                <option value="Operations">
                                    Operations
                                </option>

                                <option value="Staff">
                                    Staff
                                </option>

                            </select>

                        </div>


                        <div class="form-group">

                            <label>
                                Assigned Branch
                            </label>

                            <select id="userBranch">

                                <option>
                                    Kaduna Headquarters
                                </option>

                                <option>
                                    Abuja Branch
                                </option>

                                <option>
                                    Kano Branch
                                </option>

                                <option>
                                    Lagos Branch
                                </option>

                            </select>

                        </div>


                    </div>


                    <div class="settings-modal-actions">

                        <button
                            type="button"
                            class="secondary-button cancel-settings-modal">

                            Cancel

                        </button>


                        <button
                            type="submit"
                            class="primary-action">

                            Add User

                        </button>

                    </div>

                </form>

            </div>

        `;


        document.body.appendChild(modal);


        setTimeout(() => {

            modal.classList.add("show");

        }, 20);


        document.body.style.overflow =
            "hidden";


        const closeModal = () => {

            modal.classList.remove("show");


            setTimeout(() => {

                modal.remove();

            }, 250);


            document.body.style.overflow =
                "";

        };


        modal.querySelector(
            ".settings-modal-close"
        ).addEventListener(
            "click",
            closeModal
        );


        modal.querySelector(
            ".cancel-settings-modal"
        ).addEventListener(
            "click",
            closeModal
        );


        modal.addEventListener(
            "click",
            (event) => {

                if (event.target === modal) {

                    closeModal();

                }

            }
        );


        modal.querySelector(
            "#addUserForm"
        ).addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                const name =
                    modal.querySelector(
                        "#userName"
                    ).value.trim();


                const role =
                    modal.querySelector(
                        "#userRole"
                    ).value;


                const branch =
                    modal.querySelector(
                        "#userBranch"
                    ).value;


                addUserToList(
                    name,
                    role,
                    branch
                );


                closeModal();


                showSettingsToast(
                    `${name} added successfully`
                );

            }
        );

    }



    /* =====================================================
       ADD USER TO LIST
    ===================================================== */

    function addUserToList(
        name,
        role,
        branch
    ) {

        const userList =
            document.querySelector(
                "#users .settings-list"
            );


        if (!userList) return;


        const initials =
            name
                .split(" ")
                .map(
                    part => part[0]
                )
                .join("")
                .substring(0, 2)
                .toUpperCase();


        let roleClass =
            "operations-role";


        if (role === "Branch Manager") {

            roleClass =
                "manager-role";

        }


        if (role === "Finance") {

            roleClass =
                "finance-role";

        }


        const userItem =
            document.createElement("div");


        userItem.className =
            "settings-list-item";


        userItem.innerHTML = `

            <div class="user-avatar">
                ${initials}
            </div>


            <div class="settings-list-info">

                <strong>
                    ${name}
                </strong>

                <span>
                    ${role} · ${branch}
                </span>

            </div>


            <span class="role-badge ${roleClass}">
                ${role}
            </span>


            <button class="edit-settings-item">
                Manage
            </button>

        `;


        userList.appendChild(
            userItem
        );


        attachManageEvent(
            userItem.querySelector(
                ".edit-settings-item"
            )
        );

    }



    /* =====================================================
       ATTACH EVENT TO NEW MANAGE BUTTONS
    ===================================================== */

    function attachManageEvent(button) {

        button.addEventListener(
            "click",
            () => {

                const item =
                    button.closest(
                        ".settings-list-item"
                    );


                const name =
                    item.querySelector(
                        ".settings-list-info strong"
                    ).textContent.trim();


                const action =
                    button.textContent.trim();


                showSettingsToast(
                    `${action} options opened for ${name}`
                );

            }
        );

    }



    /* =====================================================
       SECURITY ACTIVITY MODAL
    ===================================================== */

    function openSecurityModal() {

        const modal =
            document.createElement("div");


        modal.className =
            "settings-modal-overlay";


        modal.innerHTML = `

            <div class="settings-modal security-modal">

                <div class="settings-modal-header">

                    <div>

                        <span class="card-label">
                            SECURITY MONITORING
                        </span>

                        <h2>
                            Recent System Activity
                        </h2>

                    </div>


                    <button class="settings-modal-close">
                        ×
                    </button>

                </div>


                <div class="security-activity-list">


                    <div class="security-activity-item">

                        <div class="activity-icon success">
                            ✓
                        </div>

                        <div>

                            <strong>
                                Successful Login
                            </strong>

                            <span>
                                Branch Manager accessed Kaduna Headquarters
                            </span>

                        </div>

                        <small>
                            10 min ago
                        </small>

                    </div>


                    <div class="security-activity-item">

                        <div class="activity-icon info">
                            ⚙
                        </div>

                        <div>

                            <strong>
                                Settings Updated
                            </strong>

                            <span>
                                Company notification preferences changed
                            </span>

                        </div>

                        <small>
                            1 hour ago
                        </small>

                    </div>


                    <div class="security-activity-item">

                        <div class="activity-icon warning">
                            !
                        </div>

                        <div>

                            <strong>
                                New Device Detected
                            </strong>

                            <span>
                                A new device accessed an authorised account
                            </span>

                        </div>

                        <small>
                            Yesterday
                        </small>

                    </div>


                    <div class="security-activity-item">

                        <div class="activity-icon success">
                            ✓
                        </div>

                        <div>

                            <strong>
                                Report Generated
                            </strong>

                            <span>
                                Executive performance report generated
                            </span>

                        </div>

                        <small>
                            Yesterday
                        </small>

                    </div>


                </div>


                <div class="settings-modal-actions">

                    <button
                        class="primary-action close-security-modal">

                        Close

                    </button>

                </div>

            </div>

        `;


        document.body.appendChild(modal);


        setTimeout(() => {

            modal.classList.add("show");

        }, 20);


        document.body.style.overflow =
            "hidden";


        const closeModal = () => {

            modal.classList.remove("show");


            setTimeout(() => {

                modal.remove();

            }, 250);


            document.body.style.overflow =
                "";

        };


        modal.querySelector(
            ".settings-modal-close"
        ).addEventListener(
            "click",
            closeModal
        );


        modal.querySelector(
            ".close-security-modal"
        ).addEventListener(
            "click",
            closeModal
        );


        modal.addEventListener(
            "click",
            (event) => {

                if (event.target === modal) {

                    closeModal();

                }

            }
        );

    }



    /* =====================================================
       SETTINGS TOAST NOTIFICATION
    ===================================================== */

    function showSettingsToast(message) {

        const existingToast =
            document.querySelector(
                ".settings-toast"
            );


        if (existingToast) {

            existingToast.remove();

        }


        const toast =
            document.createElement("div");


        toast.className =
            "settings-toast";


        toast.innerHTML = `

            <span>✓</span>

            <p>
                ${message}
            </p>

        `;


        document.body.appendChild(toast);


        setTimeout(() => {

            toast.classList.add("show");

        }, 20);


        setTimeout(() => {

            toast.classList.remove("show");


            setTimeout(() => {

                toast.remove();

            }, 300);

        }, 3000);

    }


});
