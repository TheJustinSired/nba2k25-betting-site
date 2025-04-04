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
    balances.andon -= 100;
    balances.justin -= 100;
    updateBalances();
}

function updateResults() {
    balances.andon += 200;
    balances.justin += 200;
    updateBalances();
}

function updateBalances() {
    document.getElementById("andon-balance").textContent = balances.andon;
    document.getElementById("justin-balance").textContent = balances.justin;
}

function flipCoin() {
    const coin = document.getElementById("coin");
    const heads = Math.random() < 0.5;
    coin.style.transform = "rotateY(1800deg)";
    setTimeout(() => {
        coin.style.backgroundImage = `url('${heads ? "coin-heads.png" : "coin-tails.png"}')`;
    }, 1000);
}

document.getElementById("teamSelect").addEventListener("change", function () {
    const team = this.value;
    const stats = {
        "Toronto Raptors": "42 - 40",
        "Golden State Warriors": "48 - 34",
        "Los Angeles Lakers": "51 - 31",
        "Milwaukee Bucks": "55 - 27"
        // Add other teams and update accordingly
    };

    const record = stats[team] || "Data not available";
    document.getElementById("statsDisplay").innerHTML = `
        <div class="scoreboard">
            <p>${team}</p>
            <p>Record: ${record}</p>
        </div>
    `;
});
