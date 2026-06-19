// Step 1: Create team object
const team = {
  // Step 2: Add _players and _games arrays
  _players: [
    // Step 3: Add 3 players
    { firstName: 'LeBron', lastName: 'James', age: 38 },
    { firstName: 'Stephen', lastName: 'Curry', age: 36 },
    { firstName: 'Kevin', lastName: 'Durant', age: 35 }
  ],

  _games: [
    // Step 4: Add 3 games
    { opponent: 'Warriors', teamPoints: 110, opponentPoints: 108 },
    { opponent: 'Lakers', teamPoints: 95, opponentPoints: 99 },
    { opponent: 'Nets', teamPoints: 120, opponentPoints: 115 }
  ],

  // Step 5: Getter for players
  get players() {
    return this._players;
  },

  // Step 6: Getter for games
  get games() {
    return this._games;
  },

  // Step 7: Add player method
  addPlayer(newFirstName, newLastName, newAge) {
    const player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this._players.push(player);
  },

  // Step 9: Add game method
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this._games.push(game);
  }
};

// Step 8: Add Bugs Bunny
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

// Step 10: Add new game
team.addGame('Titans', 100, 98);
console.log(team.games);