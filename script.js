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

// BALANCES
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

// COIN FLIP
function flipCoin() {
    let coin = document.getElementById("coin");
    let result = document.getElementById("coin-result");
    
    let outcome = Math.random() < 0.5 ? "heads" : "tails";
    coin.classList.add("flip");
    
    setTimeout(() => {
        coin.classList.remove("flip");
        coin.style.backgroundImage = `url('${outcome}.png')`;
        result.textContent = `Result: ${outcome.toUpperCase()}`;
    }, 1000);
}

// NBA TEAMS DROPDOWN
const nbaTeams = [
    "Atlanta Hawks", "Boston Celtics", "Brooklyn Nets", "Charlotte Hornets", 
    "Chicago Bulls", "Cleveland Cavaliers", "Dallas Mavericks", "Denver Nuggets",
    "Detroit Pistons", "Golden State Warriors", "Houston Rockets", "Indiana Pacers",
    "LA Clippers", "Los Angeles Lakers", "Memphis Grizzlies", "Miami Heat",
    "Milwaukee Bucks", "Minnesota Timberwolves", "New Orleans Pelicans", "New York Knicks",
    "Oklahoma City Thunder", "Orlando Magic", "Philadelphia 76ers", "Phoenix Suns",
    "Portland Trail Blazers", "Sacramento Kings", "San Antonio Spurs", "Toronto Raptors",
    "Utah Jazz", "Washington Wizards"
];

function populateTeamDropdown() {
    let dropdown = document.getElementById("team-dropdown");
    nbaTeams.forEach(team => {
        let option = document.createElement("option");
        option.text = team;
        dropdown.add(option);
    });
}
