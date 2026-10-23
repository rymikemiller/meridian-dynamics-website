const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();


/* Manufacturing Doctor diagnostic tool */

const diagnoses = {
    spreadsheets: {
        title: "Spreadsheet Dependency",
        symptoms:
            "Multiple versions of the same file, manual updates, " +
            "and conflicting information between departments.",
        treatment:
            "Centralize information in a structured database, " +
            "automate updates, and build user-friendly tools " +
            "around existing workflows."
    },

    manual: {
        title: "Manual Process Overload",
        symptoms:
            "Employees repeatedly copy information, re-enter data, " +
            "and spend valuable time on predictable tasks.",
        treatment:
            "Identify repetitive activities and develop targeted " +
            "automation that reduces manual effort, improves " +
            "accuracy, and frees employees for higher-value work."
    },

    systems: {
        title: "Disconnected Information Systems",
        symptoms:
            "Information is trapped in separate applications, " +
            "teams maintain duplicate records, and reporting " +
            "requires extensive manual reconciliation.",
        treatment:
            "Evaluate available integration methods, establish " +
            "reliable data flows, and create a consistent view " +
            "of operational information."
    },

    traceability: {
        title: "Traceability Gaps",
        symptoms:
            "Materials are difficult to locate, transaction " +
            "histories are incomplete, and inventory accuracy " +
            "depends on manual recordkeeping.",
        treatment:
            "Design practical identification, barcode, and " +
            "transaction-tracking workflows that improve " +
            "inventory visibility and accountability."
    }
};

const symptomButtons = document.querySelectorAll(".symptom-btn");

symptomButtons.forEach(button => {
    button.addEventListener("click", () => {
        const key = button.dataset.symptom;
        const diagnosis = diagnoses[key];

        if (!diagnosis) return;

        symptomButtons.forEach(item => {
            item.classList.remove("active");
            item.setAttribute("aria-pressed", "false");
        });

        button.classList.add("active");
        button.setAttribute("aria-pressed", "true");

        document.getElementById("diagnosis-title").textContent =
            diagnosis.title;

        document.getElementById("diagnosis-symptoms").textContent =
            diagnosis.symptoms;

        document.getElementById("diagnosis-treatment").textContent =
            diagnosis.treatment;
    });
});

