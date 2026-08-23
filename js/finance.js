/* =========================================================
   AJNU OPERATIONS MANAGEMENT SYSTEM
   FINANCE MANAGEMENT INTERACTIONS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const financePeriod =
        document.getElementById("financePeriod");

    const addTransactionButton =
        document.getElementById("addTransactionButton");

    const viewFinanceAlerts =
        document.getElementById("viewFinanceAlerts");

    const viewBranchFinance =
        document.getElementById("viewBranchFinance");

    const viewAllTransactions =
        document.getElementById("viewAllTransactions");


    /* =====================================================
       FINANCIAL PERIOD DATA
    ===================================================== */

    const financeData = {

        month: {

            revenue: "₦68.4M",
            expenses: "₦29.8M",
            net: "₦38.6M",
            description:
                "Revenue minus recorded expenses for this month"

        },

        quarter: {

            revenue: "₦186.2M",
            expenses: "₦78.4M",
            net: "₦107.8M",
            description:
                "Revenue minus recorded expenses for this quarter"

        },

        year: {

            revenue: "₦428.6M",
            expenses: "₦186.8M",
            net: "₦241.8M",
            description:
                "Revenue minus recorded expenses for this year"

        }

    };


    /* =====================================================
       CHANGE FINANCIAL PERIOD
    ===================================================== */

    financePeriod.addEventListener(
        "change",
        () => {

            const period =
                financePeriod.value;

            const data =
                financeData[period];

            const netPosition =
                document.querySelector(
                    ".cash-main strong"
                );

            const description =
                document.querySelector(
                    ".cash-main small"
                );

            const breakdownValues =
                document.querySelectorAll(
                    ".cash-breakdown strong"
                );


            netPosition.textContent =
                data.net;

            description.textContent =
                data.description;

            breakdownValues[0].textContent =
                data.revenue;

            breakdownValues[1].textContent =
                data.expenses;


            showFinanceToast(
                `Financial view updated to ${
                    financePeriod.options[
                        financePeriod.selectedIndex
                    ].text
                }`
            );

        }
    );


    /* =====================================================
       ADD TRANSACTION MODAL
    ===================================================== */

    const transactionModal =
        document.createElement("div");

    transactionModal.className =
        "finance-modal-overlay";


    transactionModal.innerHTML = `

        <div class="finance-modal">

            <div class="finance-modal-header">

                <div>

                    <span class="card-label">
                        COMPANY FINANCE
                    </span>

                    <h2>
                        Add Transaction
                    </h2>

                </div>


                <button class="finance-modal-close"
                        id="closeTransactionModal">

                    ×

                </button>

            </div>


            <form id="addTransactionForm"
                  class="finance-form">


                <div class="finance-form-grid">


                    <div class="form-group">

                        <label>
                            Transaction Type
                        </label>

                        <select id="transactionType"
                                required>

                            <option value="income">
                                Income / Payment Received
                            </option>

                            <option value="expense">
                                Expense
                            </option>

                        </select>

                    </div>


                    <div class="form-group">

                        <label>
                            Amount (₦)
                        </label>

                        <input type="number"
                               id="transactionAmount"
                               placeholder="Enter amount"
                               required>

                    </div>


                    <div class="form-group">

                        <label>
                            Transaction Title
                        </label>

                        <input type="text"
                               id="transactionTitle"
                               placeholder="e.g. Contract Payment"
                               required>

                    </div>


                    <div class="form-group">

                        <label>
                            Branch
                        </label>

                        <select id="transactionBranch"
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

                            <option>
                                All Branches
                            </option>

                        </select>

                    </div>


                    <div class="form-group full-width">

                        <label>
                            Description
                        </label>

                        <input type="text"
                               id="transactionDescription"
                               placeholder="Brief transaction description">

                    </div>


                </div>


                <div class="finance-modal-actions">

                    <button type="button"
                            class="secondary-button"
                            id="cancelTransaction">

                        Cancel

                    </button>


                    <button type="submit"
                            class="primary-action">

                        Save Transaction

                    </button>

                </div>

            </form>

        </div>

    `;


    document.body.appendChild(
        transactionModal
    );


    const addTransactionForm =
        document.getElementById(
            "addTransactionForm"
        );


    function openTransactionModal() {

        transactionModal.classList.add(
            "show"
        );

        document.body.style.overflow =
            "hidden";

    }


    function closeTransactionModal() {

        transactionModal.classList.remove(
            "show"
        );

        document.body.style.overflow =
            "";

        addTransactionForm.reset();

    }


    addTransactionButton.addEventListener(
        "click",
        openTransactionModal
    );


    document.getElementById(
        "closeTransactionModal"
    ).addEventListener(
        "click",
        closeTransactionModal
    );


    document.getElementById(
        "cancelTransaction"
    ).addEventListener(
        "click",
        closeTransactionModal
    );


    transactionModal.addEventListener(
        "click",
        (event) => {

            if (event.target === transactionModal) {

                closeTransactionModal();

            }

        }
    );


    /* =====================================================
       SAVE NEW TRANSACTION
    ===================================================== */

    addTransactionForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const type =
                document.getElementById(
                    "transactionType"
                ).value;


            const amount =
                Number(
                    document.getElementById(
                        "transactionAmount"
                    ).value
                );


            const title =
                document.getElementById(
                    "transactionTitle"
                ).value.trim();


            const branch =
                document.getElementById(
                    "transactionBranch"
                ).value;


            const description =
                document.getElementById(
                    "transactionDescription"
                ).value.trim()
                || "New financial transaction";


            const formattedAmount =
                new Intl.NumberFormat(
                    "en-NG"
                ).format(amount);


            const transactionList =
                document.querySelector(
                    ".transaction-list"
                );


            const transaction =
                document.createElement("div");

            transaction.className =
                "transaction-item";


            transaction.innerHTML = `

                <div class="transaction-icon ${type}">

                    ${
                        type === "income"
                            ? "↓"
                            : "↑"
                    }

                </div>


                <div class="transaction-info">

                    <strong>
                        ${title}
                    </strong>

                    <span>
                        ${description}
                    </span>

                </div>


                <div class="transaction-branch">

                    ${branch}

                </div>


                <div class="transaction-amount
                    ${
                        type === "income"
                            ? "positive"
                            : "negative"
                    }">

                    ${
                        type === "income"
                            ? "+"
                            : "-"
                    }₦${formattedAmount}

                </div>

            `;


            transactionList.prepend(
                transaction
            );


            closeTransactionModal();


            showFinanceToast(
                `${title} added successfully`
            );

        }
    );


    /* =====================================================
       FINANCIAL ALERTS MODAL
    ===================================================== */

    const alertsModal =
        document.createElement("div");

    alertsModal.className =
        "finance-modal-overlay";


    alertsModal.innerHTML = `

        <div class="finance-modal small-modal">

            <div class="finance-modal-header">

                <div>

                    <span class="card-label">
                        FINANCIAL ATTENTION
                    </span>

                    <h2>
                        Financial Alerts
                    </h2>

                </div>


                <button class="finance-modal-close"
                        id="closeAlertsModal">

                    ×

                </button>

            </div>


            <div class="finance-alert-modal-content">


                <div class="finance-alert warning">

                    <div class="finance-alert-icon">
                        !
                    </div>

                    <div>

                        <strong>
                            Payment Overdue
                        </strong>

                        <p>
                            ₦18.5M contract payment requires immediate follow-up.
                        </p>

                    </div>

                </div>


                <div class="finance-alert danger">

                    <div class="finance-alert-icon">
                        ↑
                    </div>

                    <div>

                        <strong>
                            Expense Increase
                        </strong>

                        <p>
                            Abuja Branch expenses increased by 18% this month.
                        </p>

                    </div>

                </div>


                <div class="finance-alert info">

                    <div class="finance-alert-icon">
                        ₦
                    </div>

                    <div>

                        <strong>
                            Payment Received
                        </strong>

                        <p>
                            ₦12.8M was recently received for a completed project.
                        </p>

                    </div>

                </div>


            </div>


            <div class="finance-modal-actions">

                <button class="primary-action"
                        id="closeAlertsButton">

                    Close Alerts

                </button>

            </div>

        </div>

    `;


    document.body.appendChild(
        alertsModal
    );


    function openAlertsModal() {

        alertsModal.classList.add("show");

        document.body.style.overflow =
            "hidden";

    }


    function closeAlertsModal() {

        alertsModal.classList.remove("show");

        document.body.style.overflow =
            "";

    }


    viewFinanceAlerts.addEventListener(
        "click",
        openAlertsModal
    );


    document.getElementById(
        "closeAlertsModal"
    ).addEventListener(
        "click",
        closeAlertsModal
    );


    document.getElementById(
        "closeAlertsButton"
    ).addEventListener(
        "click",
        closeAlertsModal
    );


    alertsModal.addEventListener(
        "click",
        (event) => {

            if (event.target === alertsModal) {

                closeAlertsModal();

            }

        }
    );


    /* =====================================================
       BRANCH FINANCE DETAILS
    ===================================================== */

    viewBranchFinance.addEventListener(
        "click",
        () => {

            showFinanceToast(
                "Branch financial performance details opened."
            );

        }
    );


    /* =====================================================
       VIEW ALL TRANSACTIONS
    ===================================================== */

    viewAllTransactions.addEventListener(
        "click",
        () => {

            showFinanceToast(
                "Full transaction history will open here."
            );

        }
    );


    /* =====================================================
       TOAST NOTIFICATION
    ===================================================== */

    function showFinanceToast(message) {

        const toast =
            document.createElement("div");

        toast.className =
            "finance-toast";


        toast.innerHTML = `

            <span>✓</span>

            <p>
                ${message}
            </p>

        `;


        document.body.appendChild(
            toast
        );


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
