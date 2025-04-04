document.addEventListener("DOMContentLoaded", () => {
    showTab('accounts');
    populateTeams();
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
    let result = document.getElementById("coin-result");
    coin.classList.add("flip");

    setTimeout(() => {
        coin.classList.remove("flip");
        let flipResult = Math.random() < 0.5 ? "Heads" : "Tails";
        result.textContent = "Result: " + flipResult;
    }, 1000);
}

// Populate NBA Teams Dropdown & Fetch Stats
const teams = ["Atlanta Hawks", "Boston Celtics", ..., "Washington Wizards"]; // Add all NBA teams

function populateTeams() {
    let select = document.getElementById("team-select");
    teams.forEach(team => {
        let option = document.createElement("option");
        option.value = team;
        option.textContent = team;
        select.appendChild(option);
    });
    select.addEventListener("change", fetchTeamStats);
}

function fetchTeamStats() {
    let team = document.getElementById("team-select").value;
    // Fetch real-time win-loss data
    document.getElementById("wins").textContent = "W: 45"; 
    document.getElementById("losses").textContent = "L: 30";
}
