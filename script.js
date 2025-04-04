document.addEventListener("DOMContentLoaded", () => {
    showTab('accounts');
    updateBalances();
    setupStockChart();
});

function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabName).classList.add('active');
}

let balances = { andon: 1000, justin: 1000 };
let transactions = { andon: [], justin: [] };

function addBet() {
    let matchup = document.getElementById("matchup").value;
    let andonBet = parseFloat(document.getElementById("andonBet").value);
    let justinBet = parseFloat(document.getElementById("justinBet").value);

    if (matchup && !isNaN(andonBet) && !isNaN(justinBet)) {
        transactions.andon.push(`Bet: -$${andonBet} on ${matchup}`);
        transactions.justin.push(`Bet: -$${justinBet} on ${matchup}`);
        balances.andon -= andonBet;
        balances.justin -= justinBet;
        updateBalances();
    }
}

function updateResults() {
    let winner = document.getElementById("winner").value;
    let payout = 200;

    transactions.andon.push(`Winnings: +$${payout} from ${winner}`);
    transactions.justin.push(`Winnings: +$${payout} from ${winner}`);

    balances.andon += payout;
    balances.justin += payout;
    updateBalances();
}

function updateBalances() {
    document.getElementById("andon-balance").textContent = balances.andon;
    document.getElementById("justin-balance").textContent = balances.justin;
    updateTransactionHistory();
}

function updateTransactionHistory() {
    let andonList = document.getElementById("andon-transactions");
    let justinList = document.getElementById("justin-transactions");

    andonList.innerHTML = transactions.andon.length ? transactions.andon.map(tran => `<li>${tran}</li>`).join('') : "<li>No transactions yet</li>";
    justinList.innerHTML = transactions.justin.length ? transactions.justin.map(tran => `<li>${tran}</li>`).join('') : "<li>No transactions yet</li>";
}

function setupStockChart() {
    const ctx = document.getElementById("stockChart").getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Lakers", "Celtics", "Warriors", "Bulls", "Nets"],
            datasets: [{
                label: "Stock Value ($)",
                data: [150, 140, 135, 120, 110],
                borderColor: "#ffb100",
                backgroundColor: "rgba(255, 177, 0, 0.2)",
                borderWidth: 2
            }]
        },
        options: {
            responsive: true
        }
    });
}
