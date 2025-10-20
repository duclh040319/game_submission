var game = {
    players: [
        { id: 1, pos: 0, carbon: 100, actions: 0 },
        { id: 2, pos: 0, carbon: 100, actions: 0 }
    ],
    currentPlayer: 0,
    gameOver: false,
    boardSize: 25
};

var tiles = [
    { type: 'start', name: 'Start', icon: '🚀', carbon: 0, msg: 'Begin your climate journey!', reason: 'The adventure begins — time to fight climate change!' },
    { type: 'action', name: 'Solar Power', icon: '☀️', carbon: -15, msg: 'Installed solar panels! -15 carbon', reason: 'Solar panels produce renewable electricity and reduce reliance on fossil fuels.' },
    { type: 'neutral', name: 'Research', icon: '🔬', carbon: 0, msg: 'Researching solutions...', reason: 'You’re studying sustainable innovations — no direct carbon impact yet.' },
    { type: 'action', name: 'Wind Energy', icon: '💨', carbon: -18, msg: 'Built wind turbines! -18 carbon', reason: 'Wind turbines generate clean power without CO₂ emissions.' },
    { type: 'crisis', name: 'Wildfire', icon: '🔥', carbon: 12, msg: 'Wildfire disaster! +12 carbon', reason: 'Wildfires release large amounts of carbon stored in forests.' },
    { type: 'action', name: 'Plant Trees', icon: '🌳', carbon: -10, msg: 'Reforestation complete! -10 carbon', reason: 'Trees absorb carbon dioxide and improve air quality.' },
    { type: 'neutral', name: 'Education', icon: '📚', carbon: 0, msg: 'Learning about climate!', reason: 'Raising awareness is key, but no immediate carbon change.' },
    { type: 'action', name: 'Public Transit', icon: '🚊', carbon: -12, msg: 'Metro expansion! -12 carbon', reason: 'Public transport reduces car usage and fuel consumption.' },
    { type: 'crisis', name: 'Heat Wave', icon: '🌡️', carbon: 10, msg: 'Extreme heat! +10 carbon', reason: 'Heat waves increase energy use for cooling and strain resources.' },
    { type: 'action', name: 'Electric Cars', icon: '🔌', carbon: -14, msg: 'EV infrastructure! -14 carbon', reason: 'Electric vehicles cut tailpipe emissions and use cleaner energy.' },
    { type: 'neutral', name: 'Summit', icon: '🏛️', carbon: 0, msg: 'Climate conference', reason: 'World leaders discuss climate policy — progress takes time.' },
    { type: 'crisis', name: 'Flood', icon: '🌊', carbon: 15, msg: 'Coastal flooding! +15 carbon', reason: 'Floods destroy forests and infrastructure, releasing stored CO₂.' },
    { type: 'action', name: 'Recycling', icon: '♻️', carbon: -8, msg: 'Recycling program! -8 carbon', reason: 'Recycling saves resources and reduces landfill emissions.' },
    { type: 'action', name: 'Green Buildings', icon: '🏢', carbon: -16, msg: 'Eco buildings! -16 carbon', reason: 'Energy-efficient buildings reduce heating and cooling emissions.' },
    { type: 'neutral', name: 'Innovation Lab', icon: '💡', carbon: 0, msg: 'Developing tech...', reason: 'Innovation labs work on future clean technologies.' },
    { type: 'crisis', name: 'Drought', icon: '🏜️', carbon: 9, msg: 'Water crisis! +9 carbon', reason: 'Droughts harm agriculture and ecosystems, increasing emissions indirectly.' },
    { type: 'action', name: 'Clean Energy', icon: '⚡', carbon: -20, msg: 'Renewable grid! -20 carbon', reason: 'Transitioning to renewables eliminates fossil fuel dependence.' },
    { type: 'neutral', name: 'Policy Forum', icon: '📋', carbon: 0, msg: 'Making policies...', reason: 'Policy development takes time but shapes long-term emission reductions.' },
    { type: 'crisis', name: 'Storm', icon: '⛈️', carbon: 13, msg: 'Hurricane damage! +13 carbon', reason: 'Storms damage ecosystems and infrastructure, releasing carbon.' },
    { type: 'action', name: 'Composting', icon: '🌱', carbon: -9, msg: 'Organic waste program! -9 carbon', reason: 'Composting reduces methane emissions from landfills.' },
    { type: 'action', name: 'Ocean Cleanup', icon: '🌊', carbon: -11, msg: 'Ocean restoration! -11 carbon', reason: 'Removing plastic waste helps restore marine ecosystems.' },
    { type: 'neutral', name: 'Community', icon: '👥', carbon: 0, msg: 'Community organizing', reason: 'Communities unite to push sustainable change together.' },
    { type: 'action', name: 'Smart Grid', icon: '🔋', carbon: -22, msg: 'Energy efficiency! -22 carbon', reason: 'Smart grids optimize energy distribution and minimize waste.' },
    { type: 'crisis', name: 'Smog', icon: '🏭', carbon: 11, msg: 'Air pollution! +11 carbon', reason: 'Industrial smog adds to carbon and health problems.' },
    { type: 'finish', name: 'Net Zero!', icon: '🏆', carbon: -25, msg: 'Climate Hero! You reached Net Zero!', reason: 'You balanced all emissions — the planet thanks you!' }
];


function showScreen(screenId) {
    var screens = document.querySelectorAll('.screen');
    for (var i = 0; i < screens.length; i++) {
        screens[i].classList.remove('active');
    }
    document.getElementById(screenId).classList.add('active');
}

function showMenu() {
    showScreen('menuScreen');
}

function showRules() {
    showScreen('rulesScreen');
}

function confirmExit() {
    if (confirm('Are you sure you want to exit the game?')) {
        showMenu();
    }
}

function startGame() {
    game = {
        players: [
            { id: 1, pos: 0, carbon: 100, actions: 0 },
            { id: 2, pos: 0, carbon: 100, actions: 0 }
        ],
        currentPlayer: 0,
        gameOver: false,
        boardSize: 25
    };

    showScreen('playScreen');
    createBoard();
    updateUI();
}

function createBoard() {
    var board = document.getElementById('gameBoard');
    board.innerHTML = '';

    for (var i = 0; i < tiles.length; i++) {
        var tile = tiles[i];
        var tileDiv = document.createElement('div');
        tileDiv.className = 'board-tile ' + tile.type;
        tileDiv.id = 'tile-' + i;

        // players container always present and has deterministic id
        tileDiv.innerHTML = '<div class="tile-icon">' + tile.icon + '</div>' +
            '<div class="tile-title">' + tile.name + '</div>' +
            '<div class="tile-players" id="players-' + i + '"></div>';
        board.appendChild(tileDiv);
    }

    // Place markers based on current game state
    updateMarkers();
}


function updateMarkers() {
    // Clear any existing markers inside every tile players container
    var playerDivs = document.querySelectorAll('.tile-players');
    for (var i = 0; i < playerDivs.length; i++) {
        playerDivs[i].innerHTML = '';
    }

    // For each player, find the players-<pos> container and append a marker
    for (var i = 0; i < game.players.length; i++) {
        var player = game.players[i];
        // Clamp position to valid tile index
        var pos = Math.max(0, Math.min(player.pos, tiles.length - 1));
        var playersDiv = document.getElementById('players-' + pos);

        if (playersDiv) {
            var marker = document.createElement('div');
            marker.className = 'player-marker marker-p' + player.id;
            marker.title = 'Player ' + player.id;
            playersDiv.appendChild(marker);
        } else {
            // If container is missing (shouldn't happen) put marker on Start (pos 0)
            console.warn('Missing players-' + pos + ' container; placing marker at Start for player', player.id);
            var fallback = document.getElementById('players-0');
            if (fallback) {
                var m2 = document.createElement('div');
                m2.className = 'player-marker marker-p' + player.id;
                fallback.appendChild(m2);
            }
        }
    }
}


function updateUI() {
    for (var i = 0; i < game.players.length; i++) {
        var player = game.players[i];
        var pNum = player.id;

        var carbonEl = document.getElementById('p' + pNum + '-carbon');
        var posEl = document.getElementById('p' + pNum + '-pos');
        var actionsEl = document.getElementById('p' + pNum + '-actions');

        if (carbonEl) carbonEl.textContent = player.carbon;
        if (posEl) posEl.textContent = player.pos + '/' + (tiles.length - 1);
        if (actionsEl) actionsEl.textContent = player.actions;

        if (carbonEl) {
            carbonEl.className = 'stat-value carbon-value';
            if (player.carbon < 40) carbonEl.className += ' carbon-low';
            else if (player.carbon < 70) carbonEl.className += ' carbon-med';
            else carbonEl.className += ' carbon-high';
        }

        // highlight active panel
        var panelId = 'panel' + pNum;
        var panelEl = document.getElementById(panelId);
        if (panelEl) {
            if (game.currentPlayer === i) panelEl.classList.add('active');
            else panelEl.classList.remove('active');
        }
    }
}


function rollDice(playerId) {
    if (game.gameOver) return;

    // check it's actually the player's turn
    if (game.currentPlayer + 1 !== playerId) {
        alert("It's not your turn!");
        return;
    }

    var btn = document.getElementById('rollBtn' + playerId);
    if (btn) btn.disabled = true;

    var diceDisplay = document.getElementById('diceDisplay' + playerId);
    var diceIcons = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

    var rolls = 0;
    var interval = setInterval(function () {
        if (diceDisplay) diceDisplay.textContent = diceIcons[Math.floor(Math.random() * 6)];
        rolls++;
        if (rolls >= 10) {
            clearInterval(interval);
            executeMove(playerId);
        }
    }, 100);
}


function executeMove(playerId) {
    // Convert playerId (1 or 2) to array index
    var pIndex = playerId - 1;
    var player = game.players[pIndex];

    // Roll result
    var roll = Math.floor(Math.random() * 6) + 1;
    var diceIcons = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

    // update the correct dice display
    var diceDisplay = document.getElementById('diceDisplay' + playerId);
    if (diceDisplay) diceDisplay.textContent = diceIcons[roll - 1];

    // calculate new position (clamp to finish)
    var newPos = Math.min(player.pos + roll, tiles.length - 1);
    player.pos = newPos;

    var tile = tiles[newPos];
    var message = 'Player ' + player.id + ' rolled ' + roll + '! ' + tile.msg;

    // apply carbon and actions effects
    if (tile.carbon !== 0) {
        player.carbon = Math.max(0, player.carbon + tile.carbon);
        if (tile.carbon < 0) {
            player.actions++;
        }
    }

    // show textual message and detailed popup (if you use showPopup(tile))
    var msgEl = document.getElementById('messageDisplay');
    if (msgEl) msgEl.textContent = message;

    // Show detailed popup if you use that function
    if (typeof showPopup === 'function') {
        showPopup(tile);
    }

    // Update UI and board markers
    updateUI();
    updateMarkers();

    // Check finish
    if (newPos === tiles.length - 1) {
    setTimeout(function () {
        endGame(playerId);
    }, 1500);
    return;
}


    // Advance turn to next player
    game.currentPlayer = (game.currentPlayer + 1) % game.players.length;

    // Re-enable the next player's button after a short delay (so they can't click immediately)
    setTimeout(function () {
        var nextPlayerId = game.currentPlayer + 1;
        var nextBtn = document.getElementById('rollBtn' + nextPlayerId);
        if (nextBtn) nextBtn.disabled = false;

        var nextMsgEl = document.getElementById('messageDisplay');
        if (nextMsgEl) nextMsgEl.textContent = '🎲 Player ' + nextPlayerId + "'s turn!";

    }, 600);
}


function endGame(playerId) {
    game.gameOver = true;
    var winner = game.players[playerId - 1];

    document.getElementById('winnerName').textContent = 'Player ' + winner.id + ' Wins!';

    var statsHTML = '';
    for (var i = 0; i < game.players.length; i++) {
        var p = game.players[i];
        var bgColor = i === playerId - 1 ? 'background: linear-gradient(135deg, #f1c40f, #f39c12);' : '';
        statsHTML += '<div class="player-final" style="' + bgColor + '">';
        statsHTML += '<h4>Player ' + p.id + '</h4>';
        statsHTML += '<p><strong>Final Carbon:</strong> ' + p.carbon + '</p>';
        statsHTML += '<p><strong>Climate Actions:</strong> ' + p.actions + ' 🌱</p>';
        statsHTML += '<p><strong>Position Reached:</strong> ' + p.pos + '/25</p>';
        statsHTML += '</div>';
    }

    document.getElementById('finalStatsContent').innerHTML = statsHTML;
    showScreen('gameOverScreen');
}


// popup
function showPopup(tile) {
    const popup = document.getElementById("popupBox");
    const popupText = document.getElementById("popupText");
    popupText.innerHTML = `
        <strong>${tile.icon} ${tile.name}</strong><br>
        <em>${tile.msg}</em><br><br>
        <span style="font-size:0.95em;color:#2c3e50;">${tile.reason}</span>
    `;
    popup.style.display = "flex";
    // setTimeout(() => { popup.style.display = "none"; }, 3000);//optional to auto close popup
}


function closePopup() {
    document.getElementById("popupBox").style.display = "none";
}




window.onload = function () {
    showScreen('menuScreen');
};

