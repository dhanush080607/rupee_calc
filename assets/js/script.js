let chart;

function calculateSIP() {

    const P =
        Number(document.getElementById("investment").value);

    const annualRate =
        Number(document.getElementById("rate").value);

    const years =
        Number(document.getElementById("years").value);

    if (!P || !annualRate || !years) {
        alert("Please fill all fields");
        return;
    }

    const r = annualRate / 12 / 100;

    const n = years * 12;

    const maturity =
        P *
        (((Math.pow(1 + r, n) - 1) / r) *
        (1 + r));

    const invested = P * n;

    const profit = maturity - invested;

    document.getElementById("investedAmount").innerHTML =
        "₹" + invested.toLocaleString("en-IN", {
            maximumFractionDigits: 0
        });

    document.getElementById("returns").innerHTML =
        "₹" + profit.toLocaleString("en-IN", {
            maximumFractionDigits: 0
        });

    document.getElementById("totalValue").innerHTML =
        "₹" + maturity.toLocaleString("en-IN", {
            maximumFractionDigits: 0
        });

    updateChart(invested, profit);
}

function updateChart(invested, profit) {

    const ctx =
        document.getElementById("sipChart");

    if (chart) {
        chart.destroy();
    }

    chart = new Chart(ctx, {

        type: "doughnut",

        data: {

            labels: [
                "Invested Amount",
                "Returns"
            ],

            datasets: [{
                data: [
                    invested,
                    profit
                ],
                backgroundColor: [
                    "#2563eb",
                    "#16a34a"
                ]
            }]
        },

        options: {

            responsive: true,

            plugins: {
                legend: {
                    position: "bottom"
                }
            }
        }
    });
}
function calculateEMI() {

    let principal =
        Number(document.getElementById("loanAmount").value);

    let annualRate =
        Number(document.getElementById("interestRate").value);

    let years =
        Number(document.getElementById("loanYears").value);

    if (!principal || !annualRate || !years) {
        alert("Please fill all fields");
        return;
    }

    let monthlyRate =
        annualRate / 12 / 100;

    let months =
        years * 12;

    let emi =
        principal *
        monthlyRate *
        Math.pow(1 + monthlyRate, months) /
        (Math.pow(1 + monthlyRate, months) - 1);

    let totalPayment =
        emi * months;

    let totalInterest =
        totalPayment - principal;

    document.getElementById("monthlyEmi").innerHTML =
        "₹" + emi.toLocaleString("en-IN", {
            maximumFractionDigits: 0
        });

    document.getElementById("totalInterest").innerHTML =
        "₹" + totalInterest.toLocaleString("en-IN", {
            maximumFractionDigits: 0
        });

    document.getElementById("totalPayment").innerHTML =
        "₹" + totalPayment.toLocaleString("en-IN", {
            maximumFractionDigits: 0
        });
}
function calculateFD() {

    let principal =
        Number(document.getElementById("fdAmount").value);

    let rate =
        Number(document.getElementById("fdRate").value);

    let years =
        Number(document.getElementById("fdYears").value);

    if (!principal || !rate || !years) {
        alert("Please fill all fields");
        return;
    }

    let maturity =
        principal *
        Math.pow((1 + rate / 100), years);

    let interest =
        maturity - principal;

    document.getElementById("fdInvested").innerHTML =
        "₹" + principal.toLocaleString("en-IN");

    document.getElementById("fdInterest").innerHTML =
        "₹" + interest.toLocaleString("en-IN", {
            maximumFractionDigits: 0
        });

    document.getElementById("fdMaturity").innerHTML =
        "₹" + maturity.toLocaleString("en-IN", {
            maximumFractionDigits: 0
        });
}
function calculateCompoundInterest() {

    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("interest").value);
    let years = parseFloat(document.getElementById("time").value);

    if (!principal || !rate || !years) {
        alert("Please fill all fields");
        return;
    }

    let maturityAmount =
        principal * Math.pow((1 + rate / 100), years);

    let interestEarned =
        maturityAmount - principal;

    document.getElementById("principalResult").innerHTML =
        "₹" + principal.toLocaleString("en-IN");

    document.getElementById("interestResult").innerHTML =
        "₹" + Math.round(interestEarned).toLocaleString("en-IN");

    document.getElementById("amountResult").innerHTML =
        "₹" + Math.round(maturityAmount).toLocaleString("en-IN");
}
function calculateGST() {
    let amount = parseFloat(document.getElementById("amount").value);
    let gstRate = parseFloat(document.getElementById("gstRate").value);

    if (isNaN(amount) || isNaN(gstRate)) {
        alert("Please enter valid values");
        return;
    }

    let gstAmount = (amount * gstRate) / 100;
    let totalAmount = amount + gstAmount;

    document.getElementById("gstResult").innerText = "₹" + gstAmount.toFixed(2);
    document.getElementById("totalResult").innerText = "₹" + totalAmount.toFixed(2);
    document.getElementById("baseResult").innerText = "₹" + amount.toFixed(2);
}
function calculateSimpleInterest() {
    let p = parseFloat(document.getElementById("principal").value);
    let r = parseFloat(document.getElementById("rate").value);
    let t = parseFloat(document.getElementById("time").value);

    if (isNaN(p) || isNaN(r) || isNaN(t)) {
        alert("Please enter valid values");
        return;
    }

    let interest = (p * r * t) / 100;
    let total = p + interest;

    document.getElementById("interestResult").innerText = "₹" + interest.toFixed(2);
    document.getElementById("totalResult").innerText = "₹" + total.toFixed(2);
    document.getElementById("principalResult").innerText = "₹" + p.toFixed(2);
}
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    // Save preference
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Load theme on page load
window.onload = function () {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
};