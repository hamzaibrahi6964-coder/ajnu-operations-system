/* =========================================================
   AJNU OPERATIONS MANAGEMENT SYSTEM
   REPORTS & ANALYTICS INTERACTIONS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const analyticsPeriod =
        document.getElementById("analyticsPeriod");

    const generateReportButton =
        document.getElementById("generateReportButton");

    const viewAllReports =
        document.getElementById("viewAllReports");

    const reportCategories =
        document.querySelectorAll(".report-category");

    const downloadButtons =
        document.querySelectorAll(".download-report");


    /* =====================================================
       ANALYTICS DATA
    ===================================================== */

    const analyticsData = {

        month: [
            {
                name: "Revenue Growth",
                value: "+12.6%",
                width: "78%"
            },
            {
                name: "Contract Completion",
                value: "86%",
                width: "86%"
            },
            {
                name: "Workforce Productivity",
                value: "91%",
                width: "91%"
            },
            {
                name: "Fleet Availability",
                value: "84%",
                width: "84%"
            }
        ],

        quarter: [
            {
                name: "Revenue Growth",
                value: "+18.4%",
                width: "88%"
            },
            {
                name: "Contract Completion",
                value: "89%",
                width: "89%"
            },
            {
                name: "Workforce Productivity",
                value: "93%",
                width: "93%"
            },
            {
                name: "Fleet Availability",
                value: "87%",
                width: "87%"
            }
        ],

        year: [
            {
                name: "Revenue Growth",
                value: "+24.8%",
                width: "94%"
            },
            {
                name: "Contract Completion",
                value: "92%",
                width: "92%"
            },
            {
                name: "Workforce Productivity",
                value: "95%",
                width: "95%"
            },
            {
                name: "Fleet Availability",
                value: "90%",
                width: "90%"
            }
        ]

    };


    /* =====================================================
       CHANGE ANALYTICS PERIOD
    ===================================================== */

    if (analyticsPeriod) {

        analyticsPeriod.addEventListener(
            "change",
            () => {

                const period =
                    analyticsPeriod.value;

                const data =
                    analyticsData[period];

                const metrics =
                    document.querySelectorAll(
                        ".performance-metric"
                    );


                metrics.forEach(
                    (metric, index) => {

                        const strong =
                            metric.querySelector("strong");

                        const bar =
                            metric.querySelector(
                                ".metric-bar div"
                            );


                        strong.textContent =
                            data[index].value;

                        bar.style.width =
                            data[index].width;

                    }
                );


                showReportsToast(
                    `Analytics updated to ${
                        analyticsPeriod.options[
                            analyticsPeriod.selectedIndex
                        ].text
                    }`
                );

            }
        );

    }


    /* =====================================================
       GENERATE REPORT MODAL
    ===================================================== */

    const reportModal =
        document.createElement("div");

    reportModal.className =
        "report-modal-overlay";


    reportModal.innerHTML = `

        <div class="report-modal">

            <div class="report-modal-header">

                <div>

                    <span class="card-label">
                        COMPANY REPORT CENTER
                    </span>

                    <h2>
                        Generate Report
                    </h2>

                </div>


                <button class="report-modal-close"
                        id="closeReportModal">

                    ×

                </button>

            </div>


            <form id="generateReportForm"
                  class="report-form">


                <div class="report-form-grid">


                    <div class="form-group">

                        <label>
                            Report Type
                        </label>

                        <select id="reportType"
                                required>

                            <option value="">
                                Select report
                            </option>

                            <option value="Financial Report">
                                Financial Report
                            </option>

                            <option value="Branch Performance Report">
                                Branch Performance Report
                            </option>

                            <option value="Contract Report">
                                Contract Report
                            </option>

                            <option value="Operations Report">
                                Operations Report
                            </option>

                            <option value="Workforce Report">
                                Workforce Report
                            </option>

                            <option value="Fleet Report">
                                Fleet Report
                            </option>

                        </select>

                    </div>


                    <div class="form-group">

                        <label>
                            Report Period
                        </label>

                        <select id="reportPeriod"
                                required>

                            <option value="This Month">
                                This Month
                            </option>

                            <option value="This Quarter">
                                This Quarter
                            </option>

                            <option value="This Year">
                                This Year
                            </option>

                        </select>

                    </div>


                    <div class="form-group full-width">

                        <label>
                            Branch Coverage
                        </label>

                        <select id="reportBranch"
                                required>

                            <option value="All Branches">
                                All Branches
                            </option>

                            <option value="Kaduna HQ">
                                Kaduna HQ
                            </option>

                            <option value="Abuja Branch">
                                Abuja Branch
                            </option>

                            <option value="Kano Branch">
                                Kano Branch
                            </option>

                            <option value="Jos Branch">
                                Jos Branch
                            </option>

                            <option value="Lagos Branch">
                                Lagos Branch
                            </option>

                        </select>

                    </div>


                </div>


                <div class="report-modal-actions">

                    <button type="button"
                            class="secondary-button"
                            id="cancelReport">

                        Cancel

                    </button>


                    <button type="submit"
                            class="primary-action">

                        Generate Report

                    </button>

                </div>

            </form>

        </div>

    `;


    document.body.appendChild(
        reportModal
    );


    const generateReportForm =
        document.getElementById(
            "generateReportForm"
        );


    function openReportModal(
        reportType = ""
    ) {

        const reportTypeSelect =
            document.getElementById(
                "reportType"
            );

        reportTypeSelect.value =
            reportType;

        reportModal.classList.add("show");

        document.body.style.overflow =
            "hidden";

    }


    function closeReportModal() {

        reportModal.classList.remove("show");

        document.body.style.overflow =
            "";

        generateReportForm.reset();

    }


    generateReportButton.addEventListener(
        "click",
        () => openReportModal()
    );


    document.getElementById(
        "closeReportModal"
    ).addEventListener(
        "click",
        closeReportModal
    );


    document.getElementById(
        "cancelReport"
    ).addEventListener(
        "click",
        closeReportModal
    );


    reportModal.addEventListener(
        "click",
        (event) => {

            if (event.target === reportModal) {

                closeReportModal();

            }

        }
    );


    /* =====================================================
       REPORT CATEGORY BUTTONS
    ===================================================== */

    reportCategories.forEach(
        (button) => {

            button.addEventListener(
                "click",
                () => {

                    const report =
                        button.dataset.report;

                    const reportNames = {

                        financial:
                            "Financial Report",

                        branches:
                            "Branch Performance Report",

                        contracts:
                            "Contract Report",

                        operations:
                            "Operations Report",

                        workforce:
                            "Workforce Report",

                        fleet:
                            "Fleet Report"

                    };


                    openReportModal(
                        reportNames[report]
                    );

                }
            );

        }
    );


    /* =====================================================
       GENERATE REPORT
    ===================================================== */

    generateReportForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const reportType =
                document.getElementById(
                    "reportType"
                ).value;


            const period =
                document.getElementById(
                    "reportPeriod"
                ).value;


            const branch =
                document.getElementById(
                    "reportBranch"
                ).value;


            closeReportModal();


            openReportPreview(
                reportType,
                period,
                branch
            );

        }
    );


    /* =====================================================
       REPORT PREVIEW MODAL
    ===================================================== */

    const previewModal =
        document.createElement("div");

    previewModal.className =
        "report-modal-overlay";


    document.body.appendChild(
        previewModal
    );


    function openReportPreview(
        reportType,
        period,
        branch
    ) {

        previewModal.innerHTML = `

            <div class="report-modal preview-modal">

                <div class="report-modal-header">

                    <div>

                        <span class="card-label">
                            REPORT PREVIEW
                        </span>

                        <h2>
                            ${reportType}
                        </h2>

                    </div>


                    <button class="report-modal-close"
                            id="closePreviewModal">

                        ×

                    </button>

                </div>


                <div class="report-preview-content">

                    <div class="preview-company">

                        <div class="preview-logo">

                            AJNU

                        </div>


                        <div>

                            <strong>
                                AJNU Operations Management
                            </strong>

                            <span>
                                Executive Business Report
                            </span>

                        </div>

                    </div>


                    <div class="preview-details">

                        <div>

                            <span>
                                REPORT TYPE
                            </span>

                            <strong>
                                ${reportType}
                            </strong>

                        </div>


                        <div>

                            <span>
                                PERIOD
                            </span>

                            <strong>
                                ${period}
                            </strong>

                        </div>


                        <div>

                            <span>
                                BRANCH COVERAGE
                            </span>

                            <strong>
                                ${branch}
                            </strong>

                        </div>

                    </div>


                    <div class="preview-summary">

                        <span>
                            EXECUTIVE SUMMARY
                        </span>

                        <p>

                            This report provides an overview of
                            company performance based on the selected
                            reporting period and branch coverage.
                            Management can use this information to
                            monitor operations, financial activity,
                            contracts and overall business performance.

                        </p>

                    </div>


                    <div class="preview-metrics">

                        <div>

                            <span>
                                Total Revenue
                            </span>

                            <strong>
                                ₦68.4M
                            </strong>

                        </div>


                        <div>

                            <span>
                                Active Contracts
                            </span>

                            <strong>
                                24
                            </strong>

                        </div>


                        <div>

                            <span>
                                Branch Performance
                            </span>

                            <strong>
                                91%
                            </strong>

                        </div>

                    </div>

                </div>


                <div class="report-modal-actions">

                    <button class="secondary-button"
                            id="closePreviewButton">

                        Close

                    </button>


                    <button class="primary-action"
                            id="downloadGeneratedReport">

                        Download Report

                    </button>

                </div>

            </div>

        `;


        previewModal.classList.add("show");

        document.body.style.overflow =
            "hidden";


        document.getElementById(
            "closePreviewModal"
        ).addEventListener(
            "click",
            closePreview
        );


        document.getElementById(
            "closePreviewButton"
        ).addEventListener(
            "click",
            closePreview
        );


        document.getElementById(
            "downloadGeneratedReport"
        ).addEventListener(
            "click",
            () => {

                downloadDemoReport(
                    reportType,
                    period,
                    branch
                );

            }
        );

    }


    function closePreview() {

        previewModal.classList.remove("show");

        document.body.style.overflow =
            "";

    }


    previewModal.addEventListener(
        "click",
        (event) => {

            if (event.target === previewModal) {

                closePreview();

            }

        }
    );


    /* =====================================================
       DOWNLOAD EXISTING REPORT
    ===================================================== */

    downloadButtons.forEach(
        (button) => {

            button.addEventListener(
                "click",
                () => {

                    const reportName =
                        button.dataset.report;

                    downloadDemoReport(
                        reportName,
                        "Current Period",
                        "All Branches"
                    );

                }
            );

        }
    );


    /* =====================================================
       DEMO REPORT DOWNLOAD
    ===================================================== */

    function downloadDemoReport(
        reportType,
        period,
        branch
    ) {

        const reportContent = `

AJNU OPERATIONS MANAGEMENT SYSTEM
EXECUTIVE BUSINESS REPORT

--------------------------------------------

REPORT TYPE:
${reportType}

REPORT PERIOD:
${period}

BRANCH COVERAGE:
${branch}

--------------------------------------------

EXECUTIVE SUMMARY

This report provides a demonstration of how
AJNU Operations Management System can generate
company reports for executive management.

KEY PERFORMANCE DATA

Total Revenue: ₦68.4M
Total Expenses: ₦29.8M
Active Contracts: 24
Contract Completion: 86%
Workforce Productivity: 91%
Fleet Availability: 84%

--------------------------------------------

Generated by:
AJNU Operations Management System

        `;


        const blob =
            new Blob(
                [reportContent],
                {
                    type:
                        "text/plain"
                }
            );


        const url =
            URL.createObjectURL(blob);


        const link =
            document.createElement("a");


        link.href = url;


        link.download =
            `${reportType.replace(
                /\s+/g,
                "-"
            ).toLowerCase()}-demo-report.txt`;


        document.body.appendChild(link);

        link.click();

        link.remove();

        URL.revokeObjectURL(url);


        closePreview();


        showReportsToast(
            `${reportType} downloaded successfully`
        );

    }


    /* =====================================================
       VIEW ALL REPORTS
    ===================================================== */

    viewAllReports.addEventListener(
        "click",
        () => {

            showReportsToast(
                "Full report archive will be available here."
            );

        }
    );


    /* =====================================================
       TOAST NOTIFICATION
    ===================================================== */

    function showReportsToast(message) {

        const toast =
            document.createElement("div");

        toast.className =
            "reports-toast";


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
