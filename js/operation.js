/* =========================================================
   AJNU OPERATIONS MANAGEMENT SYSTEM
   OPERATIONS PAGE INTERACTIONS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.getElementById("operationSearch");
    const statusFilter = document.getElementById("statusFilter");
    const tableBody = document.getElementById("operationsTableBody");
    const newOperationButton = document.getElementById("newOperationButton");


    /* =====================================================
       SEARCH + FILTER OPERATIONS
    ===================================================== */

    function filterOperations() {

        const searchValue = searchInput.value.toLowerCase();
        const selectedStatus = statusFilter.value;

        const rows = tableBody.querySelectorAll("tr");

        rows.forEach((row) => {

            const rowText = row.innerText.toLowerCase();
            const rowStatus = row.dataset.status;

            const matchesSearch =
                rowText.includes(searchValue);

            const matchesStatus =
                selectedStatus === "all" ||
                rowStatus === selectedStatus;


            if (matchesSearch && matchesStatus) {

                row.style.display = "";

            } else {

                row.style.display = "none";

            }

        });

    }


    searchInput.addEventListener("input", filterOperations);

    statusFilter.addEventListener("change", filterOperations);



    /* =====================================================
       NEW OPERATION MODAL
    ===================================================== */

    const modal = document.createElement("div");

    modal.className = "operation-modal-overlay";

    modal.innerHTML = `

        <div class="operation-modal">

            <div class="modal-header">

                <div>

                    <span class="card-label">
                        CREATE OPERATION
                    </span>

                    <h2>
                        New Operation
                    </h2>

                </div>

                <button class="modal-close"
                        id="closeOperationModal">

                    ×

                </button>

            </div>


            <form id="newOperationForm">


                <div class="form-grid">


                    <div class="form-group full-width">

                        <label>
                            Operation Name
                        </label>

                        <input
                            type="text"
                            id="newOperationName"
                            placeholder="Enter operation name"
                            required
                        >

                    </div>



                    <div class="form-group">

                        <label>
                            Location
                        </label>

                        <input
                            type="text"
                            id="newOperationLocation"
                            placeholder="Operation location"
                            required
                        >

                    </div>



                    <div class="form-group">

                        <label>
                            Assigned Team
                        </label>

                        <select id="newOperationTeam">

                            <option>
                                Team A
                            </option>

                            <option>
                                Team B
                            </option>

                            <option>
                                Team C
                            </option>

                            <option>
                                Team D
                            </option>

                        </select>

                    </div>



                    <div class="form-group">

                        <label>
                            Vehicles
                        </label>

                        <select id="newOperationVehicles">

                            <option>
                                1 Vehicle
                            </option>

                            <option>
                                2 Vehicles
                            </option>

                            <option>
                                3 Vehicles
                            </option>

                            <option>
                                4 Vehicles
                            </option>

                        </select>

                    </div>



                    <div class="form-group">

                        <label>
                            Status
                        </label>

                        <select id="newOperationStatus">

                            <option value="scheduled">
                                Scheduled
                            </option>

                            <option value="active">
                                Active
                            </option>

                        </select>

                    </div>


                </div>


                <div class="modal-footer">

                    <button type="button"
                            class="secondary-button"
                            id="cancelOperation">

                        Cancel

                    </button>


                    <button type="submit"
                            class="primary-action">

                        Create Operation

                    </button>

                </div>

            </form>

        </div>

    `;


    document.body.appendChild(modal);



    const closeOperationModal =
        document.getElementById("closeOperationModal");

    const cancelOperation =
        document.getElementById("cancelOperation");

    const newOperationForm =
        document.getElementById("newOperationForm");


    /* =====================================================
       OPEN / CLOSE MODAL
    ===================================================== */

    function openModal() {

        modal.classList.add("show");

        document.body.style.overflow = "hidden";

    }


    function closeModal() {

        modal.classList.remove("show");

        document.body.style.overflow = "";

        newOperationForm.reset();

    }


    newOperationButton.addEventListener(
        "click",
        openModal
    );


    closeOperationModal.addEventListener(
        "click",
        closeModal
    );


    cancelOperation.addEventListener(
        "click",
        closeModal
    );


    modal.addEventListener("click", (event) => {

        if (event.target === modal) {

            closeModal();

        }

    });



    /* =====================================================
       CREATE NEW OPERATION
    ===================================================== */

    newOperationForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const operationName =
                document.getElementById(
                    "newOperationName"
                ).value;


            const location =
                document.getElementById(
                    "newOperationLocation"
                ).value;


            const team =
                document.getElementById(
                    "newOperationTeam"
                ).value;


            const vehicles =
                document.getElementById(
                    "newOperationVehicles"
                ).value;


            const status =
                document.getElementById(
                    "newOperationStatus"
                ).value;


            const operationNumber =
                `OP-2026-${String(
                    tableBody.children.length + 1
                ).padStart(3, "0")}`;


            const statusText =
                status.charAt(0).toUpperCase() +
                status.slice(1);


            const icon =
                status === "active"
                    ? "◉"
                    : "◷";


            const iconClass =
                status === "active"
                    ? "green"
                    : "orange";


            const progress =
                status === "active"
                    ? 5
                    : 0;


            const progressClass =
                status === "active"
                    ? ""
                    : "warning";


            const newRow =
                document.createElement("tr");


            newRow.dataset.status = status;


            newRow.innerHTML = `

                <td>

                    <div class="operation-name">

                        <div class="operation-type-icon ${iconClass}">

                            ${icon}

                        </div>


                        <div>

                            <strong>
                                ${operationName}
                            </strong>

                            <span>
                                ${operationNumber}
                            </span>

                        </div>

                    </div>

                </td>


                <td>
                    ${location}
                </td>


                <td>
                    ${team}
                </td>


                <td>
                    ${vehicles}
                </td>


                <td>

                    <div class="table-progress">

                        <strong>
                            ${progress}%
                        </strong>


                        <div class="progress-bar">

                            <div
                                class="progress-fill ${progressClass}"
                                style="width: ${progress}%;">
                            </div>

                        </div>

                    </div>

                </td>


                <td>

                    <span class="status-badge ${status}">

                        ${statusText}

                    </span>

                </td>


                <td>

                    <button class="row-action">

                        ⋮

                    </button>

                </td>

            `;


            tableBody.prepend(newRow);


            closeModal();


            showToast(
                "Operation created successfully"
            );

        }

    );



    /* =====================================================
       TOAST NOTIFICATION
    ===================================================== */

    function showToast(message) {

        const toast =
            document.createElement("div");


        toast.className = "operation-toast";


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
