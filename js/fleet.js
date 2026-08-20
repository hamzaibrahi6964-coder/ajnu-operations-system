/* =========================================================
   AJNU OPERATIONS MANAGEMENT SYSTEM
   FLEET MANAGEMENT INTERACTIONS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const vehicleSearch =
        document.getElementById("vehicleSearch");

    const vehicleStatusFilter =
        document.getElementById("vehicleStatusFilter");

    const fleetTableBody =
        document.getElementById("fleetTableBody");

    const addVehicleButton =
        document.getElementById("addVehicleButton");


    /* =====================================================
       VEHICLE DATA
    ===================================================== */

    const vehicles = {

        "KAD 428 XA": {
            name: "MAN TGS Truck",
            type: "Heavy Duty",
            branch: "Kaduna HQ",
            driver: "Ibrahim Musa",
            status: "Available",
            assignment: "Not Assigned",
            maintenance: "Up to Date"
        },

        "ABJ 982 KU": {
            name: "Toyota Hilux",
            type: "Utility Vehicle",
            branch: "Abuja Branch",
            driver: "Yusuf Abdullahi",
            status: "On Operation",
            assignment: "Abuja Road Project",
            maintenance: "Up to Date"
        },

        "KN 214 LS": {
            name: "Caterpillar Loader",
            type: "Heavy Equipment",
            branch: "Kano Branch",
            driver: "Bashir Umar",
            status: "Maintenance",
            assignment: "Not Assigned",
            maintenance: "Service Required"
        },

        "JOS 773 AA": {
            name: "Toyota Land Cruiser",
            type: "Executive Vehicle",
            branch: "Jos Branch",
            driver: "Sani Haruna",
            status: "Available",
            assignment: "Not Assigned",
            maintenance: "Up to Date"
        },

        "KAD 918 BX": {
            name: "Volvo FM Truck",
            type: "Heavy Duty",
            branch: "Kaduna HQ",
            driver: "Usman Bello",
            status: "On Operation",
            assignment: "Infrastructure Project",
            maintenance: "Due in 12 Days"
        }

    };


    /* =====================================================
       SEARCH + FILTER
    ===================================================== */

    function filterVehicles() {

        const searchValue =
            vehicleSearch.value
                .toLowerCase()
                .trim();

        const selectedStatus =
            vehicleStatusFilter.value;

        const rows =
            fleetTableBody.querySelectorAll("tr");


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


    vehicleSearch.addEventListener(
        "input",
        filterVehicles
    );


    vehicleStatusFilter.addEventListener(
        "change",
        filterVehicles
    );


    /* =====================================================
       VEHICLE DETAILS MODAL
    ===================================================== */

    const vehicleModal =
        document.createElement("div");

    vehicleModal.className =
        "vehicle-modal-overlay";


    vehicleModal.innerHTML = `

        <div class="vehicle-modal">

            <div class="vehicle-modal-header">

                <div>

                    <span class="card-label">
                        FLEET OVERVIEW
                    </span>

                    <h2 id="vehicleModalTitle">
                        Vehicle Details
                    </h2>

                    <span id="vehicleModalReg"
                          class="vehicle-modal-reg">
                        --
                    </span>

                </div>


                <button class="vehicle-modal-close">
                    ×
                </button>

            </div>


            <div class="vehicle-modal-body">


                <div class="vehicle-info-grid">

                    <div class="vehicle-info-item">

                        <span>VEHICLE TYPE</span>

                        <strong id="modalVehicleType">
                            --
                        </strong>

                    </div>


                    <div class="vehicle-info-item">

                        <span>BRANCH</span>

                        <strong id="modalVehicleBranch">
                            --
                        </strong>

                    </div>


                    <div class="vehicle-info-item">

                        <span>ASSIGNED DRIVER</span>

                        <strong id="modalVehicleDriver">
                            --
                        </strong>

                    </div>


                    <div class="vehicle-info-item">

                        <span>CURRENT STATUS</span>

                        <strong id="modalVehicleStatus">
                            --
                        </strong>

                    </div>

                </div>


                <div class="vehicle-assignment-section">

                    <span>CURRENT ASSIGNMENT</span>

                    <strong id="modalVehicleAssignment">
                        --
                    </strong>

                </div>


                <div class="vehicle-maintenance-section">

                    <div>

                        <span>MAINTENANCE STATUS</span>

                        <strong id="modalVehicleMaintenance">
                            --
                        </strong>

                    </div>

                    <span class="maintenance-indicator">
                        ●
                    </span>

                </div>


                <div class="vehicle-modal-actions">

                    <button class="secondary-button"
                            id="closeVehicleModal">

                        Close

                    </button>


                    <button class="primary-action"
                            id="manageVehicleButton">

                        Manage Vehicle →

                    </button>

                </div>

            </div>

        </div>

    `;


    document.body.appendChild(
        vehicleModal
    );


    /* =====================================================
       OPEN VEHICLE MODAL
    ===================================================== */

    function openVehicle(vehicleReg) {

        const vehicle =
            vehicles[vehicleReg];

        if (!vehicle) return;


        document.getElementById(
            "vehicleModalTitle"
        ).textContent =
            vehicle.name;


        document.getElementById(
            "vehicleModalReg"
        ).textContent =
            vehicleReg;


        document.getElementById(
            "modalVehicleType"
        ).textContent =
            vehicle.type;


        document.getElementById(
            "modalVehicleBranch"
        ).textContent =
            vehicle.branch;


        document.getElementById(
            "modalVehicleDriver"
        ).textContent =
            vehicle.driver;


        document.getElementById(
            "modalVehicleStatus"
        ).textContent =
            vehicle.status;


        document.getElementById(
            "modalVehicleAssignment"
        ).textContent =
            vehicle.assignment;


        document.getElementById(
            "modalVehicleMaintenance"
        ).textContent =
            vehicle.maintenance;


        vehicleModal.classList.add("show");

        document.body.style.overflow =
            "hidden";

    }


    /* =====================================================
       CLOSE VEHICLE MODAL
    ===================================================== */

    function closeVehicleModal() {

        vehicleModal.classList.remove("show");

        document.body.style.overflow = "";

    }


    document.querySelector(
        ".vehicle-modal-close"
    ).addEventListener(
        "click",
        closeVehicleModal
    );


    document.getElementById(
        "closeVehicleModal"
    ).addEventListener(
        "click",
        closeVehicleModal
    );


    vehicleModal.addEventListener(
        "click",
        (event) => {

            if (event.target === vehicleModal) {

                closeVehicleModal();

            }

        }
    );


    /* =====================================================
       VEHICLE DETAIL BUTTONS
    ===================================================== */

    function attachVehicleButtons() {

        const buttons =
            document.querySelectorAll(
                ".view-vehicle-button"
            );


        buttons.forEach((button) => {

            button.onclick = () => {

                const row =
                    button.closest("tr");

                const registration =
                    row.querySelector(
                        ".vehicle-reg"
                    ).textContent.trim();

                openVehicle(registration);

            };

        });

    }


    attachVehicleButtons();


    /* =====================================================
       MANAGE VEHICLE
    ===================================================== */

    document.getElementById(
        "manageVehicleButton"
    ).addEventListener(
        "click",
        () => {

            closeVehicleModal();

            showFleetToast(
                "Vehicle management workspace will open here."
            );

        }
    );


    /* =====================================================
       ADD VEHICLE MODAL
    ===================================================== */

    const addVehicleModal =
        document.createElement("div");

    addVehicleModal.className =
        "vehicle-modal-overlay";


    addVehicleModal.innerHTML = `

        <div class="vehicle-modal">

            <div class="vehicle-modal-header">

                <div>

                    <span class="card-label">
                        FLEET REGISTER
                    </span>

                    <h2>
                        Add New Vehicle
                    </h2>

                </div>


                <button class="vehicle-modal-close"
                        id="closeAddVehicleModal">

                    ×

                </button>

            </div>


            <form id="addVehicleForm"
                  class="add-vehicle-form">

                <div class="vehicle-form-grid">


                    <div class="form-group">

                        <label>
                            Vehicle Name
                        </label>

                        <input type="text"
                               id="newVehicleName"
                               placeholder="e.g. Toyota Hilux"
                               required>

                    </div>


                    <div class="form-group">

                        <label>
                            Vehicle Type
                        </label>

                        <select id="newVehicleType"
                                required>

                            <option value="">
                                Select vehicle type
                            </option>

                            <option>
                                Heavy Duty
                            </option>

                            <option>
                                Utility Vehicle
                            </option>

                            <option>
                                Executive Vehicle
                            </option>

                            <option>
                                Heavy Equipment
                            </option>

                        </select>

                    </div>


                    <div class="form-group">

                        <label>
                            Registration Number
                        </label>

                        <input type="text"
                               id="newVehicleReg"
                               placeholder="e.g. KAD 123 AB"
                               required>

                    </div>


                    <div class="form-group">

                        <label>
                            Branch
                        </label>

                        <select id="newVehicleBranch"
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
                            Assigned Driver
                        </label>

                        <input type="text"
                               id="newVehicleDriver"
                               placeholder="Driver name">

                    </div>


                    <div class="form-group">

                        <label>
                            Current Status
                        </label>

                        <select id="newVehicleStatus">

                            <option value="available">
                                Available
                            </option>

                            <option value="operation">
                                On Operation
                            </option>

                            <option value="maintenance">
                                Maintenance
                            </option>

                        </select>

                    </div>


                    <div class="form-group full-width">

                        <label>
                            Current Assignment
                        </label>

                        <input type="text"
                               id="newVehicleAssignment"
                               placeholder="Leave empty if not assigned">

                    </div>

                </div>


                <div class="vehicle-modal-actions">

                    <button type="button"
                            class="secondary-button"
                            id="cancelAddVehicle">

                        Cancel

                    </button>


                    <button type="submit"
                            class="primary-action">

                        Add Vehicle

                    </button>

                </div>

            </form>

        </div>

    `;


    document.body.appendChild(
        addVehicleModal
    );


    /* =====================================================
       ADD VEHICLE MODAL CONTROLS
    ===================================================== */

    const addVehicleForm =
        document.getElementById(
            "addVehicleForm"
        );


    function openAddVehicleModal() {

        addVehicleModal.classList.add("show");

        document.body.style.overflow =
            "hidden";

    }


    function closeAddVehicleModal() {

        addVehicleModal.classList.remove("show");

        document.body.style.overflow = "";

        addVehicleForm.reset();

    }


    addVehicleButton.addEventListener(
        "click",
        openAddVehicleModal
    );


    document.getElementById(
        "closeAddVehicleModal"
    ).addEventListener(
        "click",
        closeAddVehicleModal
    );


    document.getElementById(
        "cancelAddVehicle"
    ).addEventListener(
        "click",
        closeAddVehicleModal
    );


    addVehicleModal.addEventListener(
        "click",
        (event) => {

            if (event.target === addVehicleModal) {

                closeAddVehicleModal();

            }

        }
    );


    /* =====================================================
       CREATE NEW VEHICLE
    ===================================================== */

    addVehicleForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const name =
                document.getElementById(
                    "newVehicleName"
                ).value.trim();


            const type =
                document.getElementById(
                    "newVehicleType"
                ).value;


            const registration =
                document.getElementById(
                    "newVehicleReg"
                ).value
                    .trim()
                    .toUpperCase();


            const branch =
                document.getElementById(
                    "newVehicleBranch"
                ).value;


            const driver =
                document.getElementById(
                    "newVehicleDriver"
                ).value.trim()
                || "Not Assigned";


            const status =
                document.getElementById(
                    "newVehicleStatus"
                ).value;


            const assignment =
                document.getElementById(
                    "newVehicleAssignment"
                ).value.trim()
                || "Not Assigned";


            vehicles[registration] = {

                name: name,
                type: type,
                branch: branch,
                driver: driver,

                status:
                    status === "available"
                        ? "Available"
                        : status === "operation"
                        ? "On Operation"
                        : "Maintenance",

                assignment: assignment,

                maintenance:
                    status === "maintenance"
                        ? "Service Required"
                        : "Up to Date"

            };


            const statusLabel =
                vehicles[registration].status;


            const maintenanceClass =
                status === "maintenance"
                    ? "warning"
                    : "good";


            const maintenanceText =
                status === "maintenance"
                    ? "⚠ Service Required"
                    : "✓ Up to Date";


            const statusIcon =
                status === "available"
                    ? "🚛"
                    : status === "operation"
                    ? "🚚"
                    : "🚜";


            const row =
                document.createElement("tr");


            row.dataset.status = status;


            row.innerHTML = `

                <td>

                    <div class="vehicle-name">

                        <div class="vehicle-icon">
                            ${statusIcon}
                        </div>

                        <div>

                            <strong>
                                ${name}
                            </strong>

                            <span>
                                ${type}
                            </span>

                        </div>

                    </div>

                </td>


                <td>

                    <strong class="vehicle-reg">
                        ${registration}
                    </strong>

                </td>


                <td>
                    ${branch}
                </td>


                <td>
                    ${driver}
                </td>


                <td>

                    <span class="vehicle-status ${status}">

                        <span></span>

                        ${statusLabel}

                    </span>

                </td>


                <td>

                    <span class="assignment-text
                        ${
                            assignment !== "Not Assigned"
                                ? "active"
                                : ""
                        }">

                        ${assignment}

                    </span>

                </td>


                <td>

                    <span class="maintenance ${maintenanceClass}">

                        ${maintenanceText}

                    </span>

                </td>


                <td>

                    <button class="row-action view-vehicle-button">
                        ⋮
                    </button>

                </td>

            `;


            fleetTableBody.prepend(row);


            attachVehicleButtons();


            closeAddVehicleModal();


            showFleetToast(
                `${name} added successfully`
            );

        }
    );


    /* =====================================================
       TOAST NOTIFICATION
    ===================================================== */

    function showFleetToast(message) {

        const toast =
            document.createElement("div");

        toast.className =
            "fleet-toast";


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
