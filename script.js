document.getElementById('toggle-mode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

// Tournament Data (Manually Update Results Here)
const tournamentResults = [
    { matchup: "Kings vs. Nets", winner: "Kings", andonBet: "Kings", justinBet: "Nets" },
    { matchup: "Magic vs. Cavs", winner: "Cavs", andonBet: "Magic", justinBet: "Cavs" },
    { matchup: "Trail Blazers vs. Wizards", winner: "Wizards", andonBet: "Trail Blazers", justinBet: "Wizards" },
    { matchup: "Bucks vs. Thunder", winner: "Thunder", andonBet: "Bucks", justinBet: "Thunder" },
    { matchup: "Knicks vs. Pelicans", winner: "Pelicans", andonBet: "Knicks", justinBet: "Pelicans" },
    { matchup: "Grizzlies vs. Hawks", winner: "Hawks", andonBet: "Grizzlies", justinBet: "Hawks" },
    { matchup: "Celtics vs. 76ers", winner: "76ers", andonBet: "Celtics", justinBet: "76ers" },
    { matchup: "Pacers vs. Rockets", winner: "Pacers", andonBet: "Pacers", justinBet: "Rockets" }
];

// Initial winnings
let andonTotal = 0;
let justinTotal = 0;

// Populate matchups and bets
const betList = document.getElementById('bet-list');
tournamentResults.forEach(game => {
    let row = document.createElement('tr');

    row.innerHTML = `
        <td>${game.matchup}</td>
        <td>${game.andonBet}</td>
        <td>${game.justinBet}</td>
        <td>${game.winner}</td>
    `;

    // Update winnings
    if (game.andonBet === game.winner) andonTotal += 100;
    if (game.justinBet === game.winner) justinTotal += 100;

    betList.appendChild(row);
});

// Display winnings
document.getElementById('andon-winnings').textContent = andonTotal;
document.getElementById('justin-winnings').textContent = justinTotal;
