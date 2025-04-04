document.addEventListener("DOMContentLoaded", () => {
    showTab('accounts');
    populateTeamDropdown();
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
        balances.andon += 200;  
        balances.justin += 200;
        updateBalances();
    }
}

function updateBalances() {
    document.getElementById("andon-balance").textContent = balances.andon;
    document.getElementById("justin-balance").textContent = balances.justin;
}

// Coin Flip
function flipCoin() {
    let coin = document.getElementById("coin");
    let resultText = document.getElementById("coinResult");

    resultText.textContent = "";
    coin.style.animation = "flip 1s ease-in-out";

    setTimeout(() => {
        let result = Math.random() < 0.5 ? "Heads" : "Tails";
        resultText.textContent = `Result: ${result}`;
        coin.style.animation = "none";
    }, 1000);
}

// Stats (Win/Loss)
const teams = {
    "Los Angeles Lakers": { wins: 55, losses: 27 },
    "Boston Celtics": { wins: 60, losses: 22 },
    "Chicago Bulls": { wins: 48, losses: 34 },
    "Golden State Warriors": { wins: 52, losses: 30 }
};

function populateTeamDropdown() {
    let teamSelect = document.getElementById("teamSelect");
    Object.keys(teams).forEach(team => {
        let option = document.createElement("option");
        option.value = team;
        option.textContent = team;
        teamSelect.appendChild(option);
    });
}

function updateStats() {
    let selectedTeam = document.getElementById("teamSelect").value;
    if (selectedTeam) {
        document.getElementById("teamWins").textContent = teams[selectedTeam].wins;
        document.getElementById("teamLosses").textContent = teams[selectedTeam].losses;
    }
}
