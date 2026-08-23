/* =========================================================
   AJNU OPERATIONS MANAGEMENT SYSTEM
   WORKFORCE MANAGEMENT INTERACTIONS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const employeeSearch =
        document.getElementById("employeeSearch");

    const employeeStatusFilter =
        document.getElementById("employeeStatusFilter");

    const workforceTableBody =
        document.getElementById("workforceTableBody");

    const addEmployeeButton =
        document.getElementById("addEmployeeButton");


    /* =====================================================
       EMPLOYEE DATA
    ===================================================== */

    const employees = {

        "AJNU-EMP-001": {
            name: "Ibrahim Musa",
            email: "ibrahim.musa@ajnu.com",
            role: "Operations Supervisor",
            branch: "Kaduna HQ",
            department: "Operations",
            status: "Active",
            assignment: "Available"
        },

        "AJNU-EMP-002": {
            name: "Yusuf Abdullahi",
            email: "yusuf.abdullahi@ajnu.com",
            role: "Project Engineer",
            branch: "Abuja Branch",
            department: "Engineering",
            status: "On Assignment",
            assignment: "Abuja Road Project"
        },

        "AJNU-EMP-003": {
            name: "Bashir Umar",
            email: "bashir.umar@ajnu.com",
            role: "Equipment Operator",
            branch: "Kano Branch",
            department: "Logistics",
            status: "Active",
            assignment: "Kano Operations"
        },

        "AJNU-EMP-004": {
            name: "Sani Haruna",
            email: "sani.haruna@ajnu.com",
            role: "Branch Accountant",
            branch: "Jos Branch",
            department: "Finance",
            status: "On Leave",
            assignment: "Expected 28 Aug"
        },

        "AJNU-EMP-005": {
            name: "Usman Bello",
            email: "usman.bello@ajnu.com",
            role: "Logistics Coordinator",
            branch: "Kaduna HQ",
            department: "Logistics",
            status: "On Assignment",
            assignment: "Infrastructure Project"
        }

    };


    /* =====================================================
       SEARCH + FILTER
    ===================================================== */

    function filterEmployees() {

        const searchValue =
            employeeSearch.value
                .toLowerCase()
                .trim();

        const selectedStatus =
            employeeStatusFilter.value;

        const rows =
            workforceTableBody.querySelectorAll("tr");


        rows.forEach((row) => {

            const text =
                row.textContent.toLowerCase();

            const status =
                row.dataset.status;

            const matchesSearch =
                text.includes(searchValue);

            const matchesStatus =
                selectedStatus === "all"
                || status === selectedStatus;


            row.style.display =
                matchesSearch && matchesStatus
                    ? ""
                    : "none";

        });

    }


    employeeSearch.addEventListener(
        "input",
        filterEmployees
    );


    employeeStatusFilter.addEventListener(
        "change",
        filterEmployees
    );


    /* =====================================================
       EMPLOYEE DETAILS MODAL
    ===================================================== */

    const employeeModal =
        document.createElement("div");

    employeeModal.className =
        "employee-modal-overlay";


    employeeModal.innerHTML = `

        <div class="employee-modal">

            <div class="employee-modal-header">

                <div>

                    <span class="card-label">
                        EMPLOYEE PROFILE
                    </span>

                    <h2 id="employeeModalName">
                        Employee Details
                    </h2>

                    <span id="employeeModalId"
                          class="employee-modal-id">
                        --
                    </span>

                </div>


                <button class="employee-modal-close">
                    ×
                </button>

            </div>


            <div class="employee-modal-body">


                <div class="employee-profile-summary">

                    <div class="employee-modal-avatar"
                         id="employeeModalAvatar">

                        EM

                    </div>


                    <div>

                        <strong id="employeeModalFullName">
                            --
                        </strong>

                        <span id="employeeModalEmail">
                            --
                        </span>

                    </div>

                </div>


                <div class="employee-info-grid">

                    <div class="employee-info-item">

                        <span>ROLE</span>

                        <strong id="modalEmployeeRole">
                            --
                        </strong>

                    </div>


                    <div class="employee-info-item">

                        <span>BRANCH</span>

                        <strong id="modalEmployeeBranch">
                            --
                        </strong>

                    </div>


                    <div class="employee-info-item">

                        <span>DEPARTMENT</span>

                        <strong id="modalEmployeeDepartment">
                            --
                        </strong>

                    </div>


                    <div class="employee-info-item">

                        <span>CURRENT STATUS</span>

                        <strong id="modalEmployeeStatus">
                            --
                        </strong>

                    </div>

                </div>


                <div class="employee-assignment-section">

                    <span>CURRENT ASSIGNMENT</span>

                    <strong id="modalEmployeeAssignment">
                        --
                    </strong>

                </div>


                <div class="employee-modal-actions">

                    <button class="secondary-button"
                            id="closeEmployeeModal">

                        Close

                    </button>


                    <button class="primary-action"
                            id="manageEmployeeButton">

                        Manage Employee →

                    </button>

                </div>

            </div>

        </div>

    `;


    document.body.appendChild(
        employeeModal
    );


    /* =====================================================
       OPEN EMPLOYEE MODAL
    ===================================================== */

    function openEmployee(employeeId) {

        const employee =
            employees[employeeId];

        if (!employee) return;


        const initials =
            employee.name
                .split(" ")
                .map(name => name.charAt(0))
                .slice(0, 2)
                .join("");


        document.getElementById(
            "employeeModalName"
        ).textContent =
            employee.name;


        document.getElementById(
            "employeeModalId"
        ).textContent =
            employeeId;


        document.getElementById(
            "employeeModalFullName"
        ).textContent =
            employee.name;


        document.getElementById(
            "employeeModalEmail"
        ).textContent =
            employee.email;


        document.getElementById(
            "employeeModalAvatar"
        ).textContent =
            initials;


        document.getElementById(
            "modalEmployeeRole"
        ).textContent =
            employee.role;


        document.getElementById(
            "modalEmployeeBranch"
        ).textContent =
            employee.branch;


        document.getElementById(
            "modalEmployeeDepartment"
        ).textContent =
            employee.department;


        document.getElementById(
            "modalEmployeeStatus"
        ).textContent =
            employee.status;


        document.getElementById(
            "modalEmployeeAssignment"
        ).textContent =
            employee.assignment;


        employeeModal.classList.add("show");

        document.body.style.overflow =
            "hidden";

    }


    /* =====================================================
       CLOSE EMPLOYEE MODAL
    ===================================================== */

    function closeEmployeeModal() {

        employeeModal.classList.remove("show");

        document.body.style.overflow = "";

    }


    document.querySelector(
        ".employee-modal-close"
    ).addEventListener(
        "click",
        closeEmployeeModal
    );


    document.getElementById(
        "closeEmployeeModal"
    ).addEventListener(
        "click",
        closeEmployeeModal
    );


    employeeModal.addEventListener(
        "click",
        (event) => {

            if (event.target === employeeModal) {

                closeEmployeeModal();

            }

        }
    );


    /* =====================================================
       VIEW EMPLOYEE BUTTONS
    ===================================================== */

    function attachEmployeeButtons() {

        const buttons =
            document.querySelectorAll(
                ".view-employee-button"
            );


        buttons.forEach((button) => {

            button.onclick = () => {

                const row =
                    button.closest("tr");

                const employeeId =
                    row.querySelector(
                        ".employee-id"
                    ).textContent.trim();

                openEmployee(employeeId);

            };

        });

    }


    attachEmployeeButtons();


    /* =====================================================
       MANAGE EMPLOYEE
    ===================================================== */

    document.getElementById(
        "manageEmployeeButton"
    ).addEventListener(
        "click",
        () => {

            closeEmployeeModal();

            showWorkforceToast(
                "Employee management workspace will open here."
            );

        }
    );


    /* =====================================================
       ADD EMPLOYEE MODAL
    ===================================================== */

    const addEmployeeModal =
        document.createElement("div");

    addEmployeeModal.className =
        "employee-modal-overlay";


    addEmployeeModal.innerHTML = `

        <div class="employee-modal">

            <div class="employee-modal-header">

                <div>

                    <span class="card-label">
                        WORKFORCE REGISTER
                    </span>

                    <h2>
                        Add New Employee
                    </h2>

                </div>


                <button class="employee-modal-close"
                        id="closeAddEmployeeModal">

                    ×

                </button>

            </div>


            <form id="addEmployeeForm"
                  class="add-employee-form">

                <div class="employee-form-grid">


                    <div class="form-group">

                        <label>
                            Full Name
                        </label>

                        <input type="text"
                               id="newEmployeeName"
                               placeholder="Enter full name"
                               required>

                    </div>


                    <div class="form-group">

                        <label>
                            Email Address
                        </label>

                        <input type="email"
                               id="newEmployeeEmail"
                               placeholder="employee@ajnu.com"
                               required>

                    </div>


                    <div class="form-group">

                        <label>
                            Employee ID
                        </label>

                        <input type="text"
                               id="newEmployeeId"
                               placeholder="AJNU-EMP-006"
                               required>

                    </div>


                    <div class="form-group">

                        <label>
                            Role
                        </label>

                        <input type="text"
                               id="newEmployeeRole"
                               placeholder="e.g. Project Manager"
                               required>

                    </div>


                    <div class="form-group">

                        <label>
                            Branch
                        </label>

                        <select id="newEmployeeBranch"
                                required>

                            <option value="">
                                Select branch
                            </option>

                            <option>
                                Kaduna HQ
                            </option>

                            <option>
                                Abuja Branch
                            </option>

                            <option>
                                Kano Branch
                            </option>

                            <option>
                                Jos Branch
                            </option>

                            <option>
                                Lagos Branch
                            </option>

                        </select>

                    </div>


                    <div class="form-group">

                        <label>
                            Department
                        </label>

                        <select id="newEmployeeDepartment"
                                required>

                            <option value="">
                                Select department
                            </option>

                            <option>
                                Operations
                            </option>

                            <option>
                                Engineering
                            </option>

                            <option>
                                Logistics
                            </option>

                            <option>
                                Finance
                            </option>

                            <option>
                                Administration
                            </option>

                        </select>

                    </div>


                    <div class="form-group">

                        <label>
                            Status
                        </label>

                        <select id="newEmployeeStatus">

                            <option value="active">
                                Active
                            </option>

                            <option value="assignment">
                                On Assignment
                            </option>

                            <option value="leave">
                                On Leave
                            </option>

                        </select>

                    </div>


                    <div class="form-group">

                        <label>
                            Current Assignment
                        </label>

                        <input type="text"
                               id="newEmployeeAssignment"
                               placeholder="Leave empty if available">

                    </div>

                </div>


                <div class="employee-modal-actions">

                    <button type="button"
                            class="secondary-button"
                            id="cancelAddEmployee">

                        Cancel

                    </button>


                    <button type="submit"
                            class="primary-action">

                        Add Employee

                    </button>

                </div>

            </form>

        </div>

    `;


    document.body.appendChild(
        addEmployeeModal
    );


    /* =====================================================
       ADD EMPLOYEE MODAL CONTROLS
    ===================================================== */

    const addEmployeeForm =
        document.getElementById(
            "addEmployeeForm"
        );


    function openAddEmployeeModal() {

        addEmployeeModal.classList.add("show");

        document.body.style.overflow =
            "hidden";

    }


    function closeAddEmployeeModal() {

        addEmployeeModal.classList.remove("show");

        document.body.style.overflow = "";

        addEmployeeForm.reset();

    }


    addEmployeeButton.addEventListener(
        "click",
        openAddEmployeeModal
    );


    document.getElementById(
        "closeAddEmployeeModal"
    ).addEventListener(
        "click",
        closeAddEmployeeModal
    );


    document.getElementById(
        "cancelAddEmployee"
    ).addEventListener(
        "click",
        closeAddEmployeeModal
    );


    addEmployeeModal.addEventListener(
        "click",
        (event) => {

            if (event.target === addEmployeeModal) {

                closeAddEmployeeModal();

            }

        }
    );


    /* =====================================================
       CREATE NEW EMPLOYEE
    ===================================================== */

    addEmployeeForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const name =
                document.getElementById(
                    "newEmployeeName"
                ).value.trim();


            const email =
                document.getElementById(
                    "newEmployeeEmail"
                ).value.trim();


            const employeeId =
                document.getElementById(
                    "newEmployeeId"
                ).value
                    .trim()
                    .toUpperCase();


            const role =
                document.getElementById(
                    "newEmployeeRole"
                ).value.trim();


            const branch =
                document.getElementById(
                    "newEmployeeBranch"
                ).value;


            const department =
                document.getElementById(
                    "newEmployeeDepartment"
                ).value;


            const status =
                document.getElementById(
                    "newEmployeeStatus"
                ).value;


            const assignment =
                document.getElementById(
                    "newEmployeeAssignment"
                ).value.trim()
                || "Available";


            /* Prevent duplicate ID */

            if (employees[employeeId]) {

                showWorkforceToast(
                    "Employee ID already exists."
                );

                return;

            }


            const statusLabel =
                status === "active"
                    ? "Active"
                    : status === "assignment"
                    ? "On Assignment"
                    : "On Leave";


            employees[employeeId] = {

                name: name,
                email: email,
                role: role,
                branch: branch,
                department: department,
                status: statusLabel,
                assignment: assignment

            };


            const initials =
                name
                    .split(" ")
                    .map(part => part.charAt(0))
                    .slice(0, 2)
                    .join("")
                    .toUpperCase();


            const row =
                document.createElement("tr");


            row.dataset.status = status;


            row.innerHTML = `

                <td>

                    <div class="employee-name">

                        <div class="employee-avatar">

                            ${initials}

                        </div>

                        <div>

                            <strong>
                                ${name}
                            </strong>

                            <span>
                                ${email}
                            </span>

                        </div>

                    </div>

                </td>


                <td>

                    <strong class="employee-id">
                        ${employeeId}
                    </strong>

                </td>


                <td>
                    ${role}
                </td>


                <td>
                    ${branch}
                </td>


                <td>
                    ${department}
                </td>


                <td>

                    <span class="employee-status ${status}">

                        <span></span>

                        ${statusLabel}

                    </span>

                </td>


                <td>

                    <span class="employee-assignment
                        ${
                            assignment !== "Available"
                                ? "active"
                                : ""
                        }">

                        ${assignment}

                    </span>

                </td>


                <td>

                    <button class="row-action view-employee-button">
                        ⋮
                    </button>

                </td>

            `;


            workforceTableBody.prepend(row);


            attachEmployeeButtons();


            closeAddEmployeeModal();


            showWorkforceToast(
                `${name} added successfully`
            );

        }
    );


    /* =====================================================
       TOAST NOTIFICATION
    ===================================================== */

    function showWorkforceToast(message) {

        const toast =
            document.createElement("div");

        toast.className =
            "workforce-toast";


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
