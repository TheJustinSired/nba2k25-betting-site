
document.addEventListener("DOMContentLoaded", () => {
    showTab('accounts');
});

function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabName).classList.add('active');
}

let balances = { andon: 1000, justin: 1000 };

function addBet() {
    let matchup = document.getElementById("matchup").value;
    let andonBet = document.getElementById("andonBet").value;
    let justinBet = document.getElementById("justinBet").value;

    if (matchup && andonBet && justinBet) {
        balances.andon -= 100;
        balances.justin -= 100;
        updateBalances();
    }
}

function updateResults() {
    let winner = document.getElementById("winner").value;
    if (winner) {
        balances.andon += 200;  // Simulated winnings
        balances.justin += 200;
        updateBalances();
    }
}

function updateBalances() {
    document.getElementById("andon-balance").textContent = balances.andon;
    document.getElementById("justin-balance").textContent = balances.justin;
}
