type Jugada = "piedra" | "papel" | "tijera";
type Game = {
  computerPlay: Jugada;
  myPlay: Jugada;
};

export const state = {
  data: {
    currentGame: {
      computerPlay: null,
      myPlay: null,
    },
    history: [],
    score: {
      myScore: 0,
      computerScore: 0,
      draw: 0,
    },
  },

  getState() {
    return this.data;
  },

  setGame(play: Game) {
    const currentState = this.getState();

    currentState.currentGame = play;
    currentState.history.push(play);
  },

  choiceComputer(): Jugada {
    const arrChoices: Jugada[] = ["piedra", "papel", "tijera"];
    const choiceC = arrChoices[Math.floor(Math.random() * 3)];
    return choiceC;
  },

  determineWinner(playerChoice: Jugada, computerChoice: Jugada): string {
    if (playerChoice === computerChoice) {
      const currentState = this.getState();
      currentState.score.draw += 1;
      return "empate";
    }

    if (
      (playerChoice === "piedra" && computerChoice === "tijera") ||
      (playerChoice === "tijera" && computerChoice === "papel") ||
      (playerChoice === "papel" && computerChoice === "piedra")
    ) {
      const currentState = this.getState();
      currentState.score.myScore += 1;
      return "jugador";
    }

    const currentState = this.getState();
    currentState.score.computerScore += 1;
    return "computadora";
  },
};
