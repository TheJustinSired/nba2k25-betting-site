document.addEventListener("DOMContentLoaded", function () {
    showTab('accounts');
});

function showTab(tabName) {
    document.querySelectorAll('.tab').forEach(tab => tab.style.display = 'none');
    document.getElementById(tabName).style.display = 'block';
}

function updateStats() {
    let team = document.getElementById("team-dropdown").value;
    if (team) {
        fetchRealTimeStats(team);
    }
}

function fetchRealTimeStats(team) {
    // Placeholder: You need to fetch real NBA stats
    document.getElementById("wins").innerText = Math.floor(Math.random() * 50);
    document.getElementById("losses").innerText = Math.floor(Math.random() * 50);
}

function flipCoin() {
    let result = Math.random() < 0.5 ? "Heads" : "Tails";
    document.getElementById("coin-result").innerText = "Result: " + result;
}
