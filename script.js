let bets = JSON.parse(localStorage.getItem("bets")) || [];
let winnings = JSON.parse(localStorage.getItem("winnings")) || { andon: 0, justin: 0 };

// Update bets table
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

// Add new bet
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

// Update winnings
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
    updateWinningsDisplay();
}

// Reset winnings
function resetWinnings() {
    winnings = { andon: 0, justin: 0 };
    localStorage.setItem("winnings", JSON.stringify(winnings));
    updateWinningsDisplay();
}

// Reset bets
function resetBets() {
    bets = [];
    localStorage.setItem("bets", JSON.stringify(bets));
    updateTable();
}

// Update winnings display
function updateWinningsDisplay() {
    document.getElementById("andon-winnings").textContent = winnings.andon;
    document.getElementById("justin-winnings").textContent = winnings.justin;
}

// Dark Mode Toggle
document.getElementById("dark-mode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

// Load Dark Mode preference
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
}

// Initialize page
updateTable();
updateWinningsDisplay();
