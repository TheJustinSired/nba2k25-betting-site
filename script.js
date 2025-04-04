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
        balances.andon += 200;
        balances.justin += 200;
        updateBalances();
    }
}

function updateBalances() {
    document.getElementById("andon-balance").textContent = balances.andon;
    document.getElementById("justin-balance").textContent = balances.justin;
}

// NBA Team Stats
const nbaStats = {
    "Atlanta Hawks": { wins: 35, losses: 45 },
    "Boston Celtics": { wins: 55, losses: 25 },
    "Brooklyn Nets": { wins: 40, losses: 40 },
    "Charlotte Hornets": { wins: 30, losses: 50 },
    // Add all teams here...
};

function updateTeamStats() {
    let selectedTeam = document.getElementById("teamSelect").value;
    if (selectedTeam && nbaStats[selectedTeam]) {
        document.getElementById("teamName").textContent = selectedTeam;
        document.getElementById("wins").textContent = nbaStats[selectedTeam].wins;
        document.getElementById("losses").textContent = nbaStats[selectedTeam].losses;
    }
}
