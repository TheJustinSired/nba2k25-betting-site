document.addEventListener("DOMContentLoaded", function () {
    showTab('accounts');
});

function showTab(tabName) {
    let tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.style.display = 'none');
    document.getElementById(tabName).style.display = 'block';
}

function flipCoin() {
    let coin = document.getElementById("coin");
    let isHeads = Math.random() > 0.5;
    coin.style.transform = "rotateY(1800deg)";
    setTimeout(() => {
        coin.style.backgroundImage = isHeads ? "url('heads.png')" : "url('tails.png')";
        coin.style.transform = "rotateY(0deg)";
    }, 1000);
}

const teamStats = {
    "atlanta": { wins: 5, losses: 3 },
    "boston": { wins: 7, losses: 2 },
    "brooklyn": { wins: 4, losses: 5 },
    "charlotte": { wins: 3, losses: 6 },
    "chicago": { wins: 6, losses: 4 },
    "cleveland": { wins: 8, losses: 1 },
    "dallas": { wins: 5, losses: 5 },
    "denver": { wins: 9, losses: 0 },
    "detroit": { wins: 2, losses: 8 },
    "golden_state": { wins: 6, losses: 3 },
    "houston": { wins: 3, losses: 6 },
    "indiana": { wins: 4, losses: 5 },
    "la_clippers": { wins: 5, losses: 5 },
    "la_lakers": { wins: 6, losses: 3 },
    "memphis": { wins: 3, losses: 7 },
    "miami": { wins: 7, losses: 2 },
};

function updateStats() {
    let team = document.getElementById("team-select").value;
    let stats = teamStats[team] || { wins: 0, losses: 0 };
    document.getElementById("team-stats").innerText = `Wins: ${stats.wins} | Losses: ${stats.losses}`;
}
