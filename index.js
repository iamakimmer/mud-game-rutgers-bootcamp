const Character = require('./character');

  // Creates two unique characters using the "character" constructor
  const grace = new Character('Grace', 30, 105);
  const dijkstra = new Character('Dijkstra', 30, 105);
  
  // This keeps track of whose turn it is
  let graceTurn = true;
  
  grace.printStats();
  dijkstra.printStats();
  
  const turnInterval = setInterval(() => {
    // If either character is not alive, end the game
    if (!grace.isAlive() || !dijkstra.isAlive()) {
      clearInterval(turnInterval);
      console.log('Game over!');
    } else if (graceTurn) {
      grace.attack(dijkstra);
      dijkstra.printStats();
    } else {
      dijkstra.attack(grace);
      grace.printStats();
    }
  
    // Switch turns
    graceTurn = !graceTurn;
  }, 300);
  