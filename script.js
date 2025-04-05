document.addEventListener("DOMContentLoaded", function () {
    showTab('accounts');
});

function showTab(tabName) {
    let tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.style.display = 'none');
    document.getElementById(tabName).style.display = 'block';
}

function flipCoin() {
    const coin = document.getElementById("coin");
    const isHeads = Math.random() > 0.5;

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
    "milwaukee": { wins: 7, losses: 3 },
    "minnesota": { wins: 6, losses: 4 },
    "new_orleans": { wins: 4, losses: 6 },
    "new_york": { wins: 6, losses: 4 },
    "oklahoma": { wins: 5, losses: 5 },
    "orlando": { wins: 4, losses: 6 },
    "philadelphia": { wins: 8, losses: 2 },
    "phoenix": { wins: 6, losses: 4 },
    "portland": { wins: 2, losses: 8 },
    "sacramento": { wins: 5, losses: 5 },
    "san_antonio": { wins: 3, losses: 7 },
    "toronto": { wins: 5, losses: 5 },
    "utah": { wins: 4, losses: 6 },
    "washington": { wins: 2, losses: 8 }
};

function updateStats() {
    const team = document.getElementById("team-select").value;
    const stats = teamStats[team] || { wins: 0, losses: 0 };
    document.getElementById("team-stats").innerText = `Wins: ${stats.wins} | Losses: ${stats.losses}`;
}
