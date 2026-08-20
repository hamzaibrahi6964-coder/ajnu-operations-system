/* =========================================================
   AJNU OPERATIONS MANAGEMENT SYSTEM
   CONTRACTS PAGE INTERACTIONS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const contractSearch =
        document.getElementById("contractSearch");

    const contractStatusFilter =
        document.getElementById("contractStatusFilter");

    const contractsTableBody =
        document.getElementById("contractsTableBody");

    const newContractButton =
        document.getElementById("newContractButton");



    /* =====================================================
       CONTRACT DATA
    ===================================================== */

    const contracts = {

        "AJNU-CON-001": {
            name: "Kaduna Infrastructure Project",
            client: "Kaduna State Government",
            branch: "Kaduna HQ",
            value: "₦185,000,000",
            progress: "72%",
            payment: "60% Paid",
            deadline: "18 Sep 2026",
            status: "Active"
        },

        "AJNU-CON-002": {
            name: "Abuja Road Maintenance",
            client: "Federal Capital Territory",
            branch: "Abuja Branch",
            value: "₦142,500,000",
            progress: "48%",
            payment: "₦42M Pending",
            deadline: "02 Sep 2026",
            status: "Payment Pending"
        },

        "AJNU-CON-003": {
            name: "Kano Public Works Project",
            client: "Kano State Government",
            branch: "Kano Branch",
            value: "₦96,000,000",
            progress: "84%",
            payment: "80% Paid",
            deadline: "28 Oct 2026",
            status: "Active"
        },

        "AJNU-CON-004": {
            name: "Jos Facility Development",
            client: "Plateau State Government",
            branch: "Jos Branch",
            value: "₦74,500,000",
            progress: "100%",
            payment: "Fully Paid",
            deadline: "Completed",
            status: "Completed"
        }

    };



    /* =====================================================
       SEARCH CONTRACTS
    ===================================================== */

    function filterContracts() {

        const searchValue =
            contractSearch.value
                .toLowerCase()
                .trim();


        const selectedStatus =
            contractStatusFilter.value;


        const rows =
            contractsTableBody.querySelectorAll("tr");


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


    contractSearch.addEventListener(
        "input",
        filterContracts
    );


    contractStatusFilter.addEventListener(
        "change",
        filterContracts
    );



    /* =====================================================
       CONTRACT DETAILS MODAL
    ===================================================== */

    const contractModal =
        document.createElement("div");

    contractModal.className =
        "contract-modal-overlay";


    contractModal.innerHTML = `

        <div class="contract-modal">

            <div class="contract-modal-header">

                <div>

                    <span class="card-label">
                        CONTRACT OVERVIEW
                    </span>

                    <h2 id="contractModalTitle">
                        Contract Details
                    </h2>

                    <span id="contractModalId"
                          class="contract-modal-id">
                        --
                    </span>

                </div>


                <button class="contract-modal-close">
                    ×
                </button>

            </div>


            <div class="contract-modal-body">


                <div class="contract-info-grid">


                    <div class="contract-info-item">

                        <span>CLIENT / AGENCY</span>

                        <strong id="modalClient">
                            --
                        </strong>

                    </div>


                    <div class="contract-info-item">

                        <span>BRANCH</span>

                        <strong id="modalBranch">
                            --
                        </strong>

                    </div>


                    <div class="contract-info-item">

                        <span>CONTRACT VALUE</span>

                        <strong id="modalValue">
                            --
                        </strong>

                    </div>


                    <div class="contract-info-item">

                        <span>PAYMENT STATUS</span>

                        <strong id="modalPayment">
                            --
                        </strong>

                    </div>

                </div>


                <div class="contract-progress-section">

                    <div class="contract-progress-header">

                        <div>

                            <span>PROJECT PROGRESS</span>

                            <strong>
                                Overall Completion
                            </strong>

                        </div>


                        <h3 id="modalProgress">
                            0%
                        </h3>

                    </div>


                    <div class="contract-modal-progress">

                        <div id="contractProgressFill"></div>

                    </div>

                </div>


                <div class="contract-summary-row">

                    <div>

                        <span>CONTRACT STATUS</span>

                        <strong id="modalStatus">
                            --
                        </strong>

                    </div>


                    <div>

                        <span>DEADLINE</span>

                        <strong id="modalDeadline">
                            --
                        </strong>

                    </div>

                </div>


                <div class="contract-modal-actions">

                    <button class="secondary-button"
                            id="closeContractModal">

                        Close

                    </button>


                    <button class="primary-action"
                            id="manageContractButton">

                        Manage Contract →

                    </button>

                </div>

            </div>

        </div>

    `;


    document.body.appendChild(contractModal);



    /* =====================================================
       OPEN CONTRACT DETAILS
    ===================================================== */

    function openContract(contractId) {

        const contract =
            contracts[contractId];


        if (!contract) return;


        document.getElementById(
            "contractModalTitle"
        ).textContent =
            contract.name;


        document.getElementById(
            "contractModalId"
        ).textContent =
            contractId;


        document.getElementById(
            "modalClient"
        ).textContent =
            contract.client;


        document.getElementById(
            "modalBranch"
        ).textContent =
            contract.branch;


        document.getElementById(
            "modalValue"
        ).textContent =
            contract.value;


        document.getElementById(
            "modalPayment"
        ).textContent =
            contract.payment;


        document.getElementById(
            "modalProgress"
        ).textContent =
            contract.progress;


        document.getElementById(
            "modalStatus"
        ).textContent =
            contract.status;


        document.getElementById(
            "modalDeadline"
        ).textContent =
            contract.deadline;


        document.getElementById(
            "contractProgressFill"
        ).style.width =
            contract.progress;


        contractModal.classList.add("show");

        document.body.style.overflow = "hidden";

    }



    /* =====================================================
       CLOSE CONTRACT MODAL
    ===================================================== */

    function closeContractModal() {

        contractModal.classList.remove("show");

        document.body.style.overflow = "";

    }


    document.querySelector(
        ".contract-modal-close"
    ).addEventListener(
        "click",
        closeContractModal
    );


    document.getElementById(
        "closeContractModal"
    ).addEventListener(
        "click",
        closeContractModal
    );


    contractModal.addEventListener(
        "click",
        (event) => {

            if (event.target === contractModal) {

                closeContractModal();

            }

        }
    );



    /* =====================================================
       VIEW CONTRACT BUTTONS
    ===================================================== */

    function attachContractButtons() {

        const buttons =
            document.querySelectorAll(
                ".view-contract-button"
            );


        buttons.forEach((button) => {

            button.onclick = () => {

                const row =
                    button.closest("tr");


                const contractId =
                    row.querySelector(
                        ".contract-name span"
                    ).textContent.trim();


                openContract(contractId);

            };

        });

    }


    attachContractButtons();



    /* =====================================================
       MANAGE CONTRACT
    ===================================================== */

    document.getElementById(
        "manageContractButton"
    ).addEventListener(
        "click",
        () => {

            closeContractModal();

            showContractToast(
                "Contract management workspace will open here."
            );

        }
    );



    /* =====================================================
       NEW CONTRACT MODAL
    ===================================================== */

    const newContractModal =
        document.createElement("div");

    newContractModal.className =
        "contract-modal-overlay";


    newContractModal.innerHTML = `

        <div class="contract-modal new-contract-modal">

            <div class="contract-modal-header">

                <div>

                    <span class="card-label">
                        CONTRACT REGISTER
                    </span>

                    <h2>
                        Add New Contract
                    </h2>

                </div>


                <button class="contract-modal-close"
                        id="closeNewContractModal">

                    ×

                </button>

            </div>


            <form id="newContractForm"
                  class="new-contract-form">


                <div class="contract-form-grid">


                    <div class="form-group full-width">

                        <label>
                            Contract Name
                        </label>

                        <input type="text"
                               id="newContractName"
                               placeholder="Enter contract name"
                               required>

                    </div>


                    <div class="form-group">

                        <label>
                            Client / Agency
                        </label>

                        <input type="text"
                               id="newContractClient"
                               placeholder="Client or government agency"
                               required>

                    </div>


                    <div class="form-group">

                        <label>
                            Branch
                        </label>

                        <select id="newContractBranch"
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
                            Contract Value
                        </label>

                        <input type="text"
                               id="newContractValue"
                               placeholder="e.g. ₦50,000,000"
                               required>

                    </div>


                    <div class="form-group">

                        <label>
                            Deadline
                        </label>

                        <input type="date"
                               id="newContractDeadline"
                               required>

                    </div>


                    <div class="form-group">

                        <label>
                            Initial Progress
                        </label>

                        <input type="number"
                               id="newContractProgress"
                               min="0"
                               max="100"
                               value="0"
                               required>

                    </div>


                    <div class="form-group">

                        <label>
                            Payment Status
                        </label>

                        <select id="newContractPayment">

                            <option value="Paid">
                                Paid
                            </option>

                            <option value="Pending">
                                Payment Pending
                            </option>

                        </select>

                    </div>

                </div>


                <div class="contract-modal-actions">

                    <button type="button"
                            class="secondary-button"
                            id="cancelNewContract">

                        Cancel

                    </button>


                    <button type="submit"
                            class="primary-action">

                        Create Contract

                    </button>

                </div>

            </form>

        </div>

    `;


    document.body.appendChild(
        newContractModal
    );



    /* =====================================================
       NEW CONTRACT MODAL CONTROLS
    ===================================================== */

    const newContractForm =
        document.getElementById(
            "newContractForm"
        );


    function openNewContractModal() {

        newContractModal.classList.add(
            "show"
        );

        document.body.style.overflow =
            "hidden";

    }


    function closeNewContractModal() {

        newContractModal.classList.remove(
            "show"
        );

        document.body.style.overflow =
            "";

        newContractForm.reset();

    }


    newContractButton.addEventListener(
        "click",
        openNewContractModal
    );


    document.getElementById(
        "closeNewContractModal"
    ).addEventListener(
        "click",
        closeNewContractModal
    );


    document.getElementById(
        "cancelNewContract"
    ).addEventListener(
        "click",
        closeNewContractModal
    );


    newContractModal.addEventListener(
        "click",
        (event) => {

            if (event.target === newContractModal) {

                closeNewContractModal();

            }

        }
    );



    /* =====================================================
       CREATE NEW CONTRACT
    ===================================================== */

    newContractForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const name =
                document.getElementById(
                    "newContractName"
                ).value.trim();


            const client =
                document.getElementById(
                    "newContractClient"
                ).value.trim();


            const branch =
                document.getElementById(
                    "newContractBranch"
                ).value;


            const value =
                document.getElementById(
                    "newContractValue"
                ).value.trim();


            const deadlineInput =
                document.getElementById(
                    "newContractDeadline"
                ).value;


            const progress =
                document.getElementById(
                    "newContractProgress"
                ).value;


            const paymentType =
                document.getElementById(
                    "newContractPayment"
                ).value;


            const contractId =
                `AJNU-CON-${String(
                    Object.keys(contracts).length + 1
                ).padStart(3, "0")}`;


            const deadline =
                new Date(
                    deadlineInput
                ).toLocaleDateString(
                    "en-GB",
                    {
                        day: "2-digit",
                        month: "short",
                        year: "numeric"
                    }
                );


            contracts[contractId] = {

                name: name,
                client: client,
                branch: branch,
                value: value,
                progress: `${progress}%`,
                payment:
                    paymentType === "Paid"
                        ? "Paid"
                        : "Payment Pending",
                deadline: deadline,
                status:
                    paymentType === "Pending"
                        ? "Payment Pending"
                        : "Active"

            };


            const row =
                document.createElement("tr");


            row.dataset.status =
                paymentType === "Pending"
                    ? "pending"
                    : "active";


            row.innerHTML = `

                <td>

                    <div class="contract-name">

                        <div class="contract-icon green">
                            📄
                        </div>

                        <div>

                            <strong>
                                ${name}
                            </strong>

                            <span>
                                ${contractId}
                            </span>

                        </div>

                    </div>

                </td>


                <td>
                    ${client}
                </td>


                <td>
                    ${branch}
                </td>


                <td>

                    <strong class="contract-value">
                        ${value}
                    </strong>

                </td>


                <td>

                    <div class="table-progress">

                        <strong>
                            ${progress}%
                        </strong>

                        <div class="progress-bar">

                            <div class="progress-fill"
                                 style="width: ${progress}%;">
                            </div>

                        </div>

                    </div>

                </td>


                <td>

                    <span class="payment-badge
                        ${
                            paymentType === "Paid"
                                ? "paid"
                                : "pending"
                        }">

                        ${
                            paymentType === "Paid"
                                ? "Paid"
                                : "Payment Pending"
                        }

                    </span>

                </td>


                <td>

                    <span class="deadline">
                        ${deadline}
                    </span>

                </td>


                <td>

                    <button class="row-action view-contract-button">
                        ⋮
                    </button>

                </td>

            `;


            contractsTableBody.prepend(
                row
            );


            attachContractButtons();


            closeNewContractModal();


            showContractToast(
                `${name} created successfully`
            );

        }
    );



    /* =====================================================
       TOAST NOTIFICATION
    ===================================================== */

    function showContractToast(message) {

        const toast =
            document.createElement("div");


        toast.className =
            "contract-toast";


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
