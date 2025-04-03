let bets = JSON.parse(localStorage.getItem("bets")) || [];
let winnings = JSON.parse(localStorage.getItem("winnings")) || { andon: 0, justin: 0 };

// Toggle Dark Mode
document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Update Bets Table
function updateTable() {
    let table = document.getElementById("bets-table");
    table.innerHTML = "";
    bets.forEach((bet, index) => {
        table.innerHTML += `
            <tr>
                <td>${bet.matchup}</td>
                <td>${bet.andon}</td>
                <td>${bet.justin}</td>
            </tr>
        `;
    });
}

// Add New Bet
function addBet() {
    let matchup = document.getElementById("matchup").value;
    let andonBet = document.getElementById("andonBet").value;
    let justinBet = document.getElementById("justinBet").value;

    if (matchup && andonBet && justinBet) {
        bets.push({ matchup, andon: andonBet, justin: justinBet });
        localStorage.setItem("bets", JSON.stringify(bets));
        updateTable();
    }
}

// Update Results
function updateResults() {
    let winner = document.getElementById("winner").value;
    bets.forEach(bet => {
        if (bet.andon === winner) {
            winnings.andon += 100;
        } else if (bet.justin === winner) {
            winnings.justin += 100;
        }
    });
    localStorage.setItem("winnings", JSON.stringify(winnings));
    document.getElementById("andon-winnings").textContent = winnings.andon;
    document.getElementById("justin-winnings").textContent = winnings.justin;
}

// Reset Bets
function resetBets() {
    bets = [];
    localStorage.setItem("bets", JSON.stringify(bets));
    updateTable();
}

// Reset Winnings
function resetWinnings() {
    winnings = { andon: 0, justin: 0 };
    localStorage.setItem("winnings", JSON.stringify(winnings));
    document.getElementById("andon-winnings").textContent = 0;
    document.getElementById("justin-winnings").textContent = 0;
}

// Load Data
updateTable();
document.getElementById("andon-winnings").textContent = winnings.andon;
document.getElementById("justin-winnings").textContent = winnings.justin;
