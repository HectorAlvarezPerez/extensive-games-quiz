window.QUESTION_BANK = Array.isArray(window.QUESTION_BANK) ? window.QUESTION_BANK : [];

window.QUESTION_BANK.push(
  {
    id: "practice-001",
    topic: "Practice PDF",
    source: "Teacher practice PDF Q1",
    difficulty: "exam",
    question: "Player 1 first chooses n1 in {1, 2}. Player 2 observes this and chooses n2 in {1, 2}. Player i's payoff is ni - n(-i). How many Nash equilibria does this game have?",
    options: ["1", "2", "4", "0", "3"],
    answer: 1,
    explanation: "Player 2 wants to choose 2 after either history. The Nash equilibria are (2,12) and (2,22), so there are 2."
  },
  {
    id: "practice-002",
    topic: "Practice PDF",
    source: "Teacher practice PDF Q2",
    difficulty: "exam",
    question: "In the number-choosing game from Practice Q1, which strategy profile is obtained by backwards induction?",
    options: ["(1,11)", "(1,11) and (2,22)", "(2,22)", "(2,12)", "None"],
    answer: 2,
    explanation: "At both of player 2's nodes, choosing 2 is optimal. Anticipating this, player 1 chooses 2, giving (2,22)."
  },
  {
    id: "practice-003",
    topic: "Practice PDF",
    source: "Teacher practice PDF Q3",
    difficulty: "core",
    question: "In a finite extensive game with perfect information, which relation must hold between Nash equilibria and the Nash equilibria obtained by backwards induction?",
    options: [
      "The number of strategy profiles must be at least 3",
      "The two sets must always be equal",
      "The backwards-induction equilibria form a subset of the Nash equilibria",
      "The number of strategy profiles equals the number of Nash equilibria",
      "The backwards-induction set is always empty"
    ],
    answer: 2,
    explanation: "Backwards induction produces Nash equilibria, but some Nash equilibria may rely on non-credible off-path behavior and need not be backwards-induction solutions."
  },
  {
    id: "practice-004",
    topic: "Practice PDF",
    source: "Teacher practice PDF Q4",
    difficulty: "core",
    question: "In a perfect-information tree, suppose IF(x1) = {x2, x3, z1}, IF(x2) = {z2}, and IF(x3) = {z3, z4}. How many strategy profiles are there?",
    options: ["3", "6", "12", "More information about payoffs is needed", "24"],
    answer: 1,
    explanation: "A complete strategy profile selects one outgoing branch at every decision node: 3 choices at x1, 1 at x2, and 2 at x3. Thus 3 x 1 x 2 = 6."
  },
  {
    id: "practice-005",
    topic: "Practice PDF",
    source: "Teacher practice PDF Q5",
    difficulty: "core",
    question: "A fair coin is observed. If Heads, John chooses one of {a,b,c} and then Paul observes and chooses one of {a,b,c}. If Tails, the same happens but Paul moves first. How many terminal nodes does the extensive form have?",
    options: ["9", "18", "27", "81", "12"],
    answer: 1,
    explanation: "Each coin branch has 3 x 3 = 9 terminal histories. There are two coin branches, so 18 terminal nodes."
  },
  {
    id: "practice-006",
    topic: "Practice PDF",
    source: "Teacher practice PDF Q6",
    difficulty: "exam",
    question: "In the coin-and-letters game, suppose John and Paul observe the coin but cannot observe each other's choices. How many strategy profiles are there?",
    options: ["27", "81", "243", "Not enough information", "18"],
    answer: 1,
    explanation: "John has 3 choices when he moves first after Heads and 3 choices for his second-mover information set after Tails, so 9 strategies. Paul also has 9 strategies. Thus 9 x 9 = 81 profiles."
  },
  {
    id: "practice-007",
    topic: "Practice PDF",
    source: "Teacher practice PDF Q7",
    difficulty: "exam",
    question: "In the coin-and-letters game, John wants as many a's as possible and Paul wants to choose the same letter as John. How many backwards-induction solutions are there?",
    options: ["1", "2", "3", "4", "0"],
    answer: 0,
    explanation: "Paul matches John whenever he moves second. John therefore chooses a when he moves first, and Paul chooses a when he moves first because John will then choose a. The complete BI strategy profile is unique."
  },
  {
    id: "practice-008",
    topic: "Practice PDF",
    source: "Teacher practice PDF Q8",
    difficulty: "exam",
    question: "Andrea guesses Head or Tail, then Berta observes and guesses Head or Tail, then the coin is tossed. Same guesses give a draw; otherwise exactly one player wins. If both prefer win to draw to lose, how many Nash equilibria are determined by this information alone?",
    options: ["1", "2", "4", "Not enough information", "0"],
    answer: 3,
    explanation: "The comparison between a sure draw and a 50-50 win/lose lottery depends on cardinal utilities, not just the ordinal ranking win > draw > lose."
  },
  {
    id: "practice-009",
    topic: "Practice PDF",
    source: "Teacher practice PDF Q9",
    difficulty: "exam",
    question: "In the Andrea-Berta guessing game, suppose now both players are indifferent between draw and lose and only care about whether they win. How many pure-strategy Nash equilibria are there?",
    options: ["1", "2", "4", "Not enough information", "0"],
    answer: 1,
    explanation: "Berta's best response after either Andrea guess is to guess the opposite, giving herself a 1/2 chance to win. Andrea is then indifferent between Head and Tail, so there are 2 equilibria."
  },
  {
    id: "practice-010",
    topic: "Practice PDF",
    source: "Teacher practice PDF Q10",
    difficulty: "core",
    question: "An imperfect-information game has X = {x1,x2,x3,x4,x5}, all Cx = {L,C,R}, and information sets {x1,x5} and {x2,x3,x4}. How many strategy profiles are there?",
    options: ["9", "6", "This cannot be answered without follower functions", "This cannot be answered without knowing the number of players", "27"],
    answer: 0,
    explanation: "A strategy chooses one action per information set. There are two information sets with 3 available actions each, so 3 x 3 = 9 profiles."
  },
  {
    id: "practice-var-001",
    topic: "Practice-style variants",
    source: "Generated from teacher practice patterns",
    difficulty: "exam",
    question: "Player 1 chooses n1 in {1,2,3}; player 2 observes and chooses n2 in {1,2,3}. Player i's payoff is ni - n(-i). Which profile is obtained by backwards induction?",
    options: ["(1,111)", "(2,222)", "(3,333)", "(3,111)", "(1,333)"],
    answer: 2,
    explanation: "Player 2 chooses 3 after every possible n1. Anticipating this, player 1 also chooses 3."
  },
  {
    id: "practice-var-002",
    topic: "Practice-style variants",
    source: "Generated from teacher practice patterns",
    difficulty: "core",
    question: "In the three-number version where player 1 chooses from {1,2,3} and player 2 observes before choosing from {1,2,3}, how many pure strategies does player 2 have?",
    options: ["3", "6", "9", "27", "81"],
    answer: 3,
    explanation: "Player 2 must specify one of 3 choices after each of player 1's 3 possible choices: 3^3 = 27."
  },
  {
    id: "practice-var-003",
    topic: "Practice-style variants",
    source: "Generated from teacher practice patterns",
    difficulty: "exam",
    question: "In the same three-number sequential game, how many strategy profiles are there?",
    options: ["27", "81", "9", "3", "54"],
    answer: 1,
    explanation: "Player 1 has 3 strategies and player 2 has 27 strategies, so there are 3 x 27 = 81 profiles."
  },
  {
    id: "practice-var-004",
    topic: "Practice-style variants",
    source: "Generated from teacher practice patterns",
    difficulty: "warmup",
    question: "Player 1 chooses L, M, or R. Player 2 observes and then chooses a or b. How many terminal nodes does the tree have?",
    options: ["3", "5", "6", "8", "9"],
    answer: 2,
    explanation: "Each of player 1's 3 actions is followed by 2 possible actions of player 2, so there are 6 terminal histories."
  },
  {
    id: "practice-var-005",
    topic: "Practice-style variants",
    source: "Generated from teacher practice patterns",
    difficulty: "core",
    question: "In the L/M/R then a/b game with perfect information, how many pure strategies does player 2 have?",
    options: ["2", "3", "6", "8", "12"],
    answer: 3,
    explanation: "Player 2 chooses a or b after L, after M, and after R. That is 2^3 = 8 complete contingent plans."
  },
  {
    id: "practice-var-006",
    topic: "Practice-style variants",
    source: "Generated from teacher practice patterns",
    difficulty: "core",
    question: "In the L/M/R then a/b game, suppose player 2 does not observe player 1's choice, so player 2's three decision nodes are in one information set. How many strategy profiles are there?",
    options: ["3", "5", "6", "8", "24"],
    answer: 2,
    explanation: "Player 1 has 3 strategies. Player 2 has only 2 strategies because one action is chosen for the whole information set. Thus 3 x 2 = 6."
  },
  {
    id: "practice-var-007",
    topic: "Practice-style variants",
    source: "Generated from teacher practice patterns",
    difficulty: "warmup",
    question: "A coin is observed. After Heads, Alice chooses one of 2 actions and Bob observes and chooses one of 2 actions. After Tails, Bob moves first with 2 actions and Alice observes and chooses one of 2 actions. How many terminal nodes are there?",
    options: ["4", "6", "8", "12", "16"],
    answer: 2,
    explanation: "Each coin branch has 2 x 2 = 4 terminal histories. With two branches, there are 8 terminal nodes."
  },
  {
    id: "practice-var-008",
    topic: "Practice-style variants",
    source: "Generated from teacher practice patterns",
    difficulty: "exam",
    question: "In the two-action coin game, suppose both players observe the coin but cannot observe each other's choices. How many strategy profiles are there?",
    options: ["4", "8", "16", "32", "64"],
    answer: 2,
    explanation: "Each player has 2 choices when moving first on one coin branch and 2 choices for the second-mover information set on the other branch. Each has 4 strategies, so 4 x 4 = 16 profiles."
  },
  {
    id: "practice-var-009",
    topic: "Practice-style variants",
    source: "Generated from teacher practice patterns",
    difficulty: "core",
    question: "A coin is observed. After Heads the players choose sequentially from 3 actions each; after Tails they choose sequentially from 2 actions each. How many terminal nodes are there?",
    options: ["11", "12", "13", "18", "36"],
    answer: 2,
    explanation: "Heads gives 3 x 3 = 9 terminal nodes and Tails gives 2 x 2 = 4 terminal nodes, for a total of 13."
  },
  {
    id: "practice-var-010",
    topic: "Practice-style variants",
    source: "Generated from teacher practice patterns",
    difficulty: "core",
    question: "An imperfect-information game has six non-terminal nodes, two information sets, and 2 feasible actions at every information set. How many strategy profiles are there?",
    options: ["4", "6", "8", "12", "64"],
    answer: 0,
    explanation: "With imperfect information, count one action choice per information set, not per node. Two information sets with 2 actions each give 2 x 2 = 4 profiles."
  },
  {
    id: "practice-var-011",
    topic: "Practice-style variants",
    source: "Generated from teacher practice patterns",
    difficulty: "core",
    question: "An imperfect-information game has three information sets, each with the same 3 feasible actions. How many complete pure-strategy profiles are possible if these are all the decision points?",
    options: ["9", "18", "24", "27", "81"],
    answer: 3,
    explanation: "A complete profile selects one action at each information set: 3 x 3 x 3 = 27."
  },
  {
    id: "practice-var-012",
    topic: "Practice-style variants",
    source: "Generated from teacher practice patterns",
    difficulty: "core",
    question: "In a perfect-information tree, IF(x1) = {x2,z1} and IF(x2) = {z2,z3,z4}. How many strategy profiles are there?",
    options: ["2", "3", "5", "6", "9"],
    answer: 3,
    explanation: "There are 2 choices at x1 and 3 choices at x2, so the number of complete plans is 2 x 3 = 6."
  },
  {
    id: "practice-var-013",
    topic: "Practice-style variants",
    source: "Generated from teacher practice patterns",
    difficulty: "warmup",
    question: "When a non-terminal node has only one feasible action, what happens to the count of strategy profiles?",
    options: [
      "It multiplies the count by 1",
      "It doubles the count",
      "It makes the game have no strategies",
      "It must be ignored only if it is off path",
      "It turns the game into imperfect information"
    ],
    answer: 0,
    explanation: "A forced decision is still part of the tree, but it contributes a factor of 1 to the strategy count."
  },
  {
    id: "practice-var-014",
    topic: "Practice-style variants",
    source: "Generated from teacher practice patterns",
    difficulty: "core",
    question: "Which statement is always true in finite games with perfect information?",
    options: [
      "Every Nash equilibrium is obtained by backwards induction",
      "Every backwards-induction solution is a Nash equilibrium",
      "Every game has exactly one Nash equilibrium",
      "Every strategy profile is a Nash equilibrium",
      "Backwards induction never uses off-path actions"
    ],
    answer: 1,
    explanation: "Backwards induction selects Nash equilibria, but it can select only a strict subset of all Nash equilibria."
  },
  {
    id: "practice-var-015",
    topic: "Practice-style variants",
    source: "Generated from teacher practice patterns",
    difficulty: "core",
    question: "Why can a Nash equilibrium fail to be a backwards-induction solution?",
    options: [
      "It may rely on non-credible off-path behavior",
      "It must use mixed strategies",
      "It never specifies actions after unreached histories",
      "It always has too many terminal nodes",
      "It cannot be represented in normal form"
    ],
    answer: 0,
    explanation: "Some Nash equilibria are sustained by threats or promises that would not be optimal if the relevant decision node were reached."
  },
  {
    id: "practice-var-016",
    topic: "Practice-style variants",
    source: "Generated from teacher practice patterns",
    difficulty: "exam",
    question: "In the entry game, Entrant chooses Enter or Stay Out. If Enter, Monopolist chooses Accommodate or Fight. Payoffs are Stay Out = (0,2), Enter-Accommodate = (1,1), Enter-Fight = (-1,-1). Which Nash equilibrium is not obtained by backwards induction?",
    options: [
      "(Enter, Accommodate)",
      "(Stay Out, Fight)",
      "(Enter, Fight)",
      "(Stay Out, Accommodate)",
      "There is no Nash equilibrium"
    ],
    answer: 1,
    explanation: "(Stay Out, Fight) is Nash because the threat deters entry, but Fight is not optimal for the monopolist if entry occurs."
  },
  {
    id: "practice-var-017",
    topic: "Practice-style variants",
    source: "Generated from teacher practice patterns",
    difficulty: "core",
    question: "In the entry game with payoffs Stay Out = (0,2), Enter-Accommodate = (1,1), Enter-Fight = (-1,-1), what is the backwards-induction solution?",
    options: [
      "(Stay Out, Fight)",
      "(Enter, Fight)",
      "(Enter, Accommodate)",
      "(Stay Out, Accommodate)",
      "Both (Enter, Accommodate) and (Stay Out, Fight)"
    ],
    answer: 2,
    explanation: "If entry occurs, the monopolist prefers Accommodate to Fight. The entrant anticipates this and chooses Enter."
  },
  {
    id: "practice-var-018",
    topic: "Practice-style variants",
    source: "Generated from teacher practice patterns",
    difficulty: "warmup",
    question: "In the profile (Stay Out, Fight) of the entry game, why is Fight still part of the strategy profile even though the entrant stays out?",
    options: [
      "Strategies specify actions only on the realized path",
      "Strategies must specify what the player would do at every decision node",
      "Fight is chosen by nature",
      "Off-path actions are deleted before defining strategies",
      "A strategy profile contains only terminal payoffs"
    ],
    answer: 1,
    explanation: "A strategy is a complete contingent plan, so it includes actions at decision nodes that may not be reached."
  },
  {
    id: "practice-var-019",
    topic: "Practice-style variants",
    source: "Generated from teacher practice patterns",
    difficulty: "exam",
    question: "Player 1 chooses L or R. R ends with payoff (0,0). If L, player 2 chooses a or b; both a and b give payoff (2,1). How many backwards-induction solutions are there?",
    options: ["0", "1", "2", "3", "4"],
    answer: 2,
    explanation: "Player 2 is indifferent between a and b after L, and player 1 strictly prefers L to R. Thus there are two BI profiles, one with a and one with b."
  },
  {
    id: "practice-var-020",
    topic: "Practice-style variants",
    source: "Generated from teacher practice patterns",
    difficulty: "warmup",
    question: "Player 1 chooses L or R and the game ends immediately. Both terminal nodes give player 1 the same payoff. How many backwards-induction choices can player 1 have?",
    options: ["0", "1", "2", "4", "It depends on player 2"],
    answer: 2,
    explanation: "If the moving player is indifferent and both actions are best replies, backwards induction allows both choices."
  },
  {
    id: "practice-var-021",
    topic: "Practice-style variants",
    source: "Generated from teacher practice patterns",
    difficulty: "exam",
    question: "A coin is observed. On each branch, two players sequentially choose A or B. John wants as many A's as possible; Paul wants to match John's letter. How many backwards-induction solutions are there?",
    options: ["1", "2", "3", "4", "8"],
    answer: 0,
    explanation: "Paul matches when he moves second, John chooses A when he can, and Paul chooses A when he moves first because John will then choose A. The complete BI strategy is unique."
  },
  {
    id: "practice-var-022",
    topic: "Practice-style variants",
    source: "Generated from teacher practice patterns",
    difficulty: "core",
    question: "In the John-Paul letter game, if Paul moves second and observes that John chose B, what should Paul choose under backwards induction?",
    options: ["A", "B", "Either A or B", "The coin toss", "No action"],
    answer: 1,
    explanation: "Paul's objective is to choose the same letter as John, so after observing B he chooses B."
  },
  {
    id: "practice-var-023",
    topic: "Practice-style variants",
    source: "Generated from teacher practice patterns",
    difficulty: "exam",
    question: "Andrea chooses Head or Tail, Berta observes and guesses Head or Tail, then a fair coin is tossed. Same guesses give a draw; different guesses give each a 1/2 chance to win. If both only care about winning, how many pure Nash equilibria are there?",
    options: ["0", "1", "2", "4", "Not enough information"],
    answer: 2,
    explanation: "Berta must choose the opposite of Andrea's observed guess. Andrea is indifferent between Head and Tail against that strategy, producing two pure Nash equilibria."
  },
  {
    id: "practice-var-024",
    topic: "Practice-style variants",
    source: "Generated from teacher practice patterns",
    difficulty: "exam",
    question: "In the same guessing game, suppose only the ordinal ranking win > draw > lose is known. What is the safest conclusion about the number of Nash equilibria?",
    options: [
      "It is exactly 1",
      "It is exactly 2",
      "It is exactly 4",
      "It cannot be determined from ordinal preferences alone",
      "It is always 0"
    ],
    answer: 3,
    explanation: "The players must compare a sure draw with a risky 50-50 win/lose lottery, which requires cardinal utility information."
  },
  {
    id: "practice-var-025",
    topic: "Practice-style variants",
    source: "Generated from teacher practice patterns",
    difficulty: "core",
    question: "In the guessing game where players only care about winning, what is Berta's best response after observing that Andrea guessed Head?",
    options: ["Head", "Tail", "Both Head and Tail", "Do not guess", "Copy Andrea only if the coin is fair"],
    answer: 1,
    explanation: "Choosing Tail gives Berta a 1/2 chance to be the only correct guess; choosing Head gives a draw and no win."
  },
  {
    id: "practice-var-026",
    topic: "Practice-style variants",
    source: "Generated from teacher practice patterns",
    difficulty: "core",
    question: "In the guessing game where Berta always guesses the opposite of Andrea, which first move is optimal for Andrea?",
    options: ["Only Head", "Only Tail", "Both Head and Tail", "Neither Head nor Tail", "It depends on Berta's payoff from drawing"],
    answer: 2,
    explanation: "If Berta always guesses the opposite, Andrea has a 1/2 chance to win whether she guesses Head or Tail."
  },
  {
    id: "practice-var-027",
    topic: "Practice-style variants",
    source: "Generated from teacher practice patterns",
    difficulty: "core",
    question: "Can a perfect-information game have more strategy profiles than terminal nodes?",
    options: [
      "Yes, because strategies include off-path actions",
      "No, they are always equal",
      "No, terminal nodes are always more numerous",
      "Only if the game has chance moves",
      "Only with mixed strategies"
    ],
    answer: 0,
    explanation: "A player may need to specify actions at decision nodes that are not reached by some earlier choices, so strategy profiles can outnumber terminal histories."
  },
  {
    id: "practice-var-028",
    topic: "Practice-style variants",
    source: "Generated from teacher practice patterns",
    difficulty: "warmup",
    question: "When counting pure strategies in a perfect-information extensive game, what should you count?",
    options: [
      "Only terminal nodes",
      "Only the realized path",
      "One complete contingent plan for each player",
      "Only payoffs that are strictly positive",
      "Only chance nodes"
    ],
    answer: 2,
    explanation: "A pure strategy is a complete plan assigning an action at every decision node controlled by the player."
  },
  {
    id: "practice-var-029",
    topic: "Practice-style variants",
    source: "Generated from teacher practice patterns",
    difficulty: "core",
    question: "Which consistency condition is required for nodes in the same information set?",
    options: [
      "They must have the same feasible actions",
      "They must be terminal nodes",
      "They must belong to different players",
      "They must have the same payoffs",
      "They must all be reached with probability one"
    ],
    answer: 0,
    explanation: "A player who cannot distinguish nodes in one information set must face the same available choices at each of those nodes."
  },
  {
    id: "practice-var-030",
    topic: "Practice-style variants",
    source: "Generated from teacher practice patterns",
    difficulty: "core",
    question: "In an imperfect-information game, a pure strategy chooses actions at what level?",
    options: [
      "One action per terminal node",
      "One action per information set controlled by the player",
      "One action per possible payoff vector",
      "Only one action for the whole game",
      "One action per opponent"
    ],
    answer: 1,
    explanation: "The player cannot condition on different nodes inside the same information set, so the strategy assigns one action to the information set."
  }
);
