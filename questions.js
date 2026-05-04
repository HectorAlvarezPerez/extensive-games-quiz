window.QUESTION_BANK = [
  {
    id: "eg-001",
    topic: "Perfect information basics",
    source: "Slides 1-20",
    difficulty: "warmup",
    question: "What is the main purpose of representing a game in extensive form?",
    options: [
      "To represent the dynamic rules of decision making",
      "To remove all timing from the game",
      "To list only the final payoff matrix",
      "To eliminate dominated strategies automatically",
      "To force players to use mixed strategies"
    ],
    answer: 0,
    explanation: "Extensive form games describe who moves, when they move, what they can do, and what they know."
  },
  {
    id: "eg-002",
    topic: "Perfect information basics",
    source: "Slides 1-20",
    difficulty: "warmup",
    question: "A finite extensive form game with perfect information is defined as which object?",
    options: [
      "A quintuple Gamma = (I, K, P, C, u)",
      "A pair Gamma = (S, h)",
      "A seven-tuple Gamma = ((I, N), K, P, B, C, p, u)",
      "A matrix with rows and columns only",
      "A probability distribution over strategies"
    ],
    answer: 0,
    explanation: "For perfect information, the lecture defines Gamma as (I, K, P, C, u)."
  },
  {
    id: "eg-003",
    topic: "Perfect information basics",
    source: "Slides 1-20",
    difficulty: "warmup",
    question: "In a perfect-information extensive game, what does K represent?",
    options: [
      "The tree describing the structure and order of the game",
      "The set of players",
      "The utility function",
      "The set of information sets",
      "Nature's probability distribution"
    ],
    answer: 0,
    explanation: "K is the tree: it describes the temporal structure of the decision process."
  },
  {
    id: "eg-004",
    topic: "Perfect information basics",
    source: "Slides 1-20",
    difficulty: "warmup",
    question: "Which statement best describes a tree in this course?",
    options: [
      "A finite connected set of nodes with no cycles and a unique path between any two nodes",
      "Any diagram with at least one payoff",
      "A matrix with one row for each player",
      "A graph in which cycles are required",
      "A probability distribution over terminal nodes"
    ],
    answer: 0,
    explanation: "The tree is finite, connected, has no cycles, and gives a unique path between nodes."
  },
  {
    id: "eg-005",
    topic: "Perfect information basics",
    source: "Slides 1-20",
    difficulty: "warmup",
    question: "What is the difference between X and Z in an extensive form game?",
    options: [
      "X is the set of non-terminal nodes; Z is the set of terminal nodes",
      "X is the set of players; Z is the set of strategies",
      "X is nature; Z is the set of information sets",
      "X is the payoff matrix; Z is the tree",
      "X is the set of mixed strategies; Z is the set of pure strategies"
    ],
    answer: 0,
    explanation: "Non-terminal nodes are decision points, while terminal nodes end the play and carry payoffs."
  },
  {
    id: "eg-006",
    topic: "Perfect information basics",
    source: "Slides 1-20",
    difficulty: "core",
    question: "In the notation IF(x), what does IF(x) describe?",
    options: [
      "The immediate followers of node x",
      "The information set containing x",
      "The player who moves at x",
      "The payoff vector at x",
      "The set of all strategies of player x"
    ],
    answer: 0,
    explanation: "IF(x) is used for the immediate successors of a node."
  },
  {
    id: "eg-007",
    topic: "Perfect information basics",
    source: "Slides 1-20",
    difficulty: "core",
    question: "What does the function P assign in a perfect-information extensive game?",
    options: [
      "Each non-terminal node to the player who moves there",
      "Each player to a utility level",
      "Each terminal node to a probability",
      "Each strategy to a matrix row",
      "Each information set to nature"
    ],
    answer: 0,
    explanation: "P partitions non-terminal nodes among players, or equivalently maps each node to the moving player."
  },
  {
    id: "eg-008",
    topic: "Strategies",
    source: "Slides 16-20",
    difficulty: "core",
    question: "In a perfect-information game, a pure strategy for player i specifies...",
    options: [
      "one action at every node where player i may have to move",
      "one terminal node only",
      "one action only along the equilibrium path",
      "one probability for each player",
      "one payoff for every opponent"
    ],
    answer: 0,
    explanation: "A strategy is a complete contingent plan, including actions at nodes that may not be reached."
  },
  {
    id: "eg-009",
    topic: "Strategies",
    source: "Slides 16-20",
    difficulty: "core",
    question: "Player 1 moves at two separate nodes, with 2 choices at the first and 3 choices at the second. How many pure strategies does player 1 have?",
    options: ["2", "3", "5", "6", "12"],
    answer: 3,
    explanation: "A strategy chooses one action at each of player 1's nodes, so the count is 2 times 3 = 6."
  },
  {
    id: "eg-010",
    topic: "Strategies",
    source: "Slides 16-20",
    difficulty: "core",
    question: "Why can two different strategy profiles induce the same terminal node?",
    options: [
      "Because strategies include off-path actions that may never be used",
      "Because terminal nodes have no payoffs",
      "Because players cannot have more than one strategy",
      "Because every game has imperfect information",
      "Because nature always randomizes"
    ],
    answer: 0,
    explanation: "If a path ends before some contingent choices are used, different off-path prescriptions can still lead to the same terminal node."
  },
  {
    id: "eg-011",
    topic: "Strategies",
    source: "Slides 16-20",
    difficulty: "core",
    question: "Given a strategy profile s in a perfect-information game, what does a(s) denote?",
    options: [
      "The terminal node induced by s",
      "The set of all Nash equilibria",
      "The action chosen by nature",
      "The initial node",
      "The set of information sets"
    ],
    answer: 0,
    explanation: "The function a maps a strategy profile to the unique terminal node reached by that profile."
  },
  {
    id: "eg-012",
    topic: "Strategies",
    source: "Slides 16-20",
    difficulty: "core",
    question: "In perfect information, the payoff function induced on strategy profiles is hi(s) = ...",
    options: [
      "ui(a(s))",
      "a(ui(s))",
      "p(s) times ui(s)",
      "the number of strategies of player i",
      "the set of immediate followers of s"
    ],
    answer: 0,
    explanation: "First the profile induces a terminal node a(s); then player i receives the utility of that terminal node."
  },
  {
    id: "eg-013",
    topic: "Nash equilibrium",
    source: "Slides 21-32",
    difficulty: "warmup",
    question: "How is Nash equilibrium defined for an extensive game in this course?",
    options: [
      "As Nash equilibrium of the associated normal form game",
      "Only as the result of backwards induction",
      "Only by eliminating dominated strategies",
      "Only in mixed strategies",
      "As any terminal node with the highest total payoff"
    ],
    answer: 0,
    explanation: "The extensive game induces a normal form game, and Nash equilibrium is defined through that normal form."
  },
  {
    id: "eg-014",
    topic: "Nash equilibrium",
    source: "Slides 21-32",
    difficulty: "core",
    question: "A strategy profile s is a Nash equilibrium if...",
    options: [
      "no player can improve by a unilateral deviation",
      "every player receives the same payoff",
      "it is the only strategy profile in the game",
      "it always comes from backwards induction",
      "it uses only terminal actions"
    ],
    answer: 0,
    explanation: "Nash equilibrium requires that each player's strategy is a best response to the others."
  },
  {
    id: "eg-015",
    topic: "Nash equilibrium",
    source: "Slides 21-32",
    difficulty: "core",
    question: "What is the associated normal form G_Gamma built from?",
    options: [
      "The players, their strategy sets, and the induced payoff functions",
      "Only terminal nodes and no strategies",
      "Only the initial node and nature's probabilities",
      "Only information sets",
      "Only the actions chosen on the equilibrium path"
    ],
    answer: 0,
    explanation: "G_Gamma uses I, the sets Si, and the payoff functions hi induced by the extensive form."
  },
  {
    id: "eg-016",
    topic: "Backwards induction",
    source: "Slides 21-32",
    difficulty: "warmup",
    question: "What is the basic idea of backwards induction?",
    options: [
      "Solve last decision nodes first, then move backward toward the initial node",
      "Start at the initial node and ignore later nodes",
      "Randomize at every node",
      "Delete all off-path strategies",
      "Convert the game into simultaneous moves"
    ],
    answer: 0,
    explanation: "Backwards induction begins at nodes just before terminal nodes and works back to the start."
  },
  {
    id: "eg-017",
    topic: "Backwards induction",
    source: "Slides 21-32",
    difficulty: "core",
    question: "What does the Zermelo-Kuhn theorem guarantee for finite perfect-information games?",
    options: [
      "Existence of a Nash equilibrium in pure strategies",
      "Existence of a unique Nash equilibrium in every game",
      "Non-existence of off-path strategies",
      "That every Nash equilibrium is found by backwards induction",
      "That mixed strategies are impossible"
    ],
    answer: 0,
    explanation: "The theorem guarantees at least one pure-strategy Nash equilibrium for finite perfect-information games."
  },
  {
    id: "eg-018",
    topic: "Backwards induction",
    source: "Slides 21-32",
    difficulty: "exam",
    question: "Which statement is correct about Nash equilibria and backwards induction equilibria?",
    options: [
      "Every backwards-induction equilibrium is Nash, but not every Nash equilibrium must be obtained by backwards induction",
      "Every Nash equilibrium must be obtained by backwards induction",
      "Backwards induction never gives a Nash equilibrium",
      "The two sets are always empty",
      "Nash equilibrium is only defined for imperfect-information games"
    ],
    answer: 0,
    explanation: "The slides emphasize that the backwards-induction set can be a strict subset of the Nash equilibrium set."
  },
  {
    id: "eg-019",
    topic: "Backwards induction",
    source: "Slides 21-32",
    difficulty: "exam",
    question: "In a sequential game where player 1 chooses a1 and player 2 observes it before choosing a2, what is player 2's strategy set?",
    options: [
      "The set of functions from A1 to A2",
      "Only A2",
      "Only A1",
      "The set of terminal nodes",
      "The set of payoffs of player 1"
    ],
    answer: 0,
    explanation: "Player 2 must specify what to do after every possible action chosen by player 1."
  },
  {
    id: "eg-020",
    topic: "Backwards induction",
    source: "Slides 21-32",
    difficulty: "exam",
    question: "Why is common knowledge of rationality important in backwards induction?",
    options: [
      "Earlier movers reason about later optimal choices, and about others knowing that too",
      "It lets players ignore payoffs",
      "It makes all strategies identical",
      "It removes terminal nodes",
      "It turns imperfect information into perfect information automatically"
    ],
    answer: 0,
    explanation: "The backward reasoning uses higher-order beliefs about rationality and knowledge of the game."
  },
  {
    id: "eg-021",
    topic: "Imperfect information basics",
    source: "Slides 33-51",
    difficulty: "warmup",
    question: "A finite extensive form game with imperfect information is defined as which object?",
    options: [
      "Gamma = ((I, N), K, P, B, C, p, u)",
      "Gamma = (I, K, P, C, u)",
      "Gamma = (S, h)",
      "Gamma = (X, Z)",
      "Gamma = (A1, A2)"
    ],
    answer: 0,
    explanation: "The imperfect-information definition adds nature, information sets, and probabilities."
  },
  {
    id: "eg-022",
    topic: "Imperfect information basics",
    source: "Slides 33-51",
    difficulty: "warmup",
    question: "What does an information set represent?",
    options: [
      "Nodes a player cannot distinguish between when making a decision",
      "All terminal nodes with the same payoff",
      "The set of all players in the game",
      "Nature's set of probabilities",
      "A set of dominated strategies"
    ],
    answer: 0,
    explanation: "If two nodes are in the same information set, the player does not know which of them has been reached."
  },
  {
    id: "eg-023",
    topic: "Imperfect information basics",
    source: "Slides 33-51",
    difficulty: "core",
    question: "If two nodes belong to the same information set, what must be true of their available actions?",
    options: [
      "They must be the same",
      "They must be disjoint",
      "They must have different names",
      "They must be chosen by nature",
      "They must be terminal"
    ],
    answer: 0,
    explanation: "Otherwise the player could infer the node by observing the available actions."
  },
  {
    id: "eg-024",
    topic: "Imperfect information basics",
    source: "Slides 33-51",
    difficulty: "core",
    question: "In the imperfect-information model, what is N?",
    options: [
      "Nature",
      "The set of Nash equilibria",
      "The number of terminal nodes",
      "A non-terminal player",
      "The normal form"
    ],
    answer: 0,
    explanation: "N denotes nature, which can choose states or chance moves according to a probability distribution."
  },
  {
    id: "eg-025",
    topic: "Imperfect information basics",
    source: "Slides 33-51",
    difficulty: "core",
    question: "What does p describe in an imperfect-information extensive game?",
    options: [
      "A probability distribution over nature's choices",
      "The partition of players",
      "The set of all pure strategies",
      "The payoff vector at the initial node",
      "The set of dominated actions"
    ],
    answer: 0,
    explanation: "The function p gives the probabilities of nature's possible moves."
  },
  {
    id: "eg-026",
    topic: "Imperfect information basics",
    source: "Slides 33-51",
    difficulty: "core",
    question: "In imperfect information, a strategy for player i assigns actions to...",
    options: [
      "player i's information sets",
      "only terminal nodes",
      "only nodes reached with probability one",
      "nature's probability distribution",
      "the opponents' utility functions"
    ],
    answer: 0,
    explanation: "A player chooses one action for each of their information sets, because nodes within a set are not distinguishable."
  },
  {
    id: "eg-027",
    topic: "Imperfect information basics",
    source: "Slides 33-51",
    difficulty: "core",
    question: "What is perfect recall?",
    options: [
      "Players do not forget information they previously knew",
      "Players know nature's move before it happens",
      "All information sets are singletons",
      "Every game has one terminal node",
      "Players always choose the same action"
    ],
    answer: 0,
    explanation: "Perfect recall means players remember what they knew earlier in the game."
  },
  {
    id: "eg-028",
    topic: "Imperfect information basics",
    source: "Slides 33-51",
    difficulty: "exam",
    question: "Given nature probabilities p(l)=0.4 and p(r)=0.6, if a strategy profile reaches z1 after l and z5 after r, what is the induced distribution?",
    options: [
      "q(z1)=0.4, q(z5)=0.6, and all other terminal nodes have probability 0",
      "q(z1)=0.6, q(z5)=0.4, and all other terminal nodes have probability 0",
      "q(z1)=1 and q(z5)=0",
      "q(z1)=0.5 and q(z5)=0.5",
      "No distribution can be induced"
    ],
    answer: 0,
    explanation: "The strategy profile maps each nature move to a terminal node, preserving nature's probabilities."
  },
  {
    id: "eg-029",
    topic: "Imperfect information basics",
    source: "Slides 33-51",
    difficulty: "exam",
    question: "If q(z1)=0.4, q(z5)=0.6, u1(z1)=0, and u1(z5)=1, what is player 1's expected payoff?",
    options: ["0", "0.4", "0.5", "0.6", "1"],
    answer: 3,
    explanation: "Expected payoff is 0.4 times 0 plus 0.6 times 1, which equals 0.6."
  },
  {
    id: "eg-030",
    topic: "Imperfect information basics",
    source: "Slides 33-51",
    difficulty: "exam",
    question: "In general, why can backwards induction fail in imperfect-information games?",
    options: [
      "Some decision nodes cannot be separated because players do not know which node they are at",
      "Because terminal nodes have no payoffs",
      "Because strategies cannot be defined",
      "Because players never know their own actions",
      "Because all such games are simultaneous"
    ],
    answer: 0,
    explanation: "Backwards induction relies on solving individual nodes; information sets may tie several nodes together."
  },
  {
    id: "ps31-001",
    topic: "Problem 3.1",
    source: "Problem Set 3.1 Figure 1",
    difficulty: "core",
    question: "In Problem 3.1 Figure 1, what are player 1's pure strategies?",
    options: [
      "{Aa, Ab, Ba, Bb}",
      "{A, B}",
      "{alpha, beta}",
      "{a, b}",
      "{Aa, Ba}"
    ],
    answer: 0,
    explanation: "Player 1 moves at x1 and x3, so a strategy specifies one action at each node."
  },
  {
    id: "ps31-002",
    topic: "Problem 3.1",
    source: "Problem Set 3.1 Figure 1",
    difficulty: "core",
    question: "In Problem 3.1 Figure 1, which strategy profile is obtained by backwards induction?",
    options: [
      "(Bb, alpha)",
      "(Ba, beta)",
      "(Aa, alpha)",
      "(Ab, beta)",
      "(Bb, beta)"
    ],
    answer: 0,
    explanation: "Player 1 chooses b at the last node, player 2 chooses alpha, and player 1 chooses B initially."
  },
  {
    id: "ps31-003",
    topic: "Problem 3.1",
    source: "Problem Set 3.1 Figure 1",
    difficulty: "exam",
    question: "In Problem 3.1 Figure 1, what is the pure-strategy Nash equilibrium set?",
    options: [
      "{(Bb, alpha)}",
      "{(Bb, alpha), (Ba, beta)}",
      "{(Aa, alpha)}",
      "{(Ba, beta), (Bb, beta)}",
      "There is no pure Nash equilibrium"
    ],
    answer: 0,
    explanation: "For Figure 1, the unique Nash equilibrium coincides with the backwards-induction equilibrium."
  },
  {
    id: "ps31-004",
    topic: "Problem 3.1",
    source: "Problem Set 3.1 Figure 2",
    difficulty: "core",
    question: "In Problem 3.1 Figure 2, which profile is obtained by backwards induction?",
    options: [
      "(B, beta, a)",
      "(B, alpha, b)",
      "(A, beta, a)",
      "(B, beta, b)",
      "(A, alpha, b)"
    ],
    answer: 0,
    explanation: "At the last node player 3 chooses a; then player 2 chooses beta; then player 1 chooses B."
  },
  {
    id: "ps31-005",
    topic: "Problem 3.1",
    source: "Problem Set 3.1 Figure 2",
    difficulty: "exam",
    question: "In Problem 3.1 Figure 2, which statement is true?",
    options: [
      "(B, alpha, b) is Nash but not obtained by backwards induction",
      "(B, alpha, b) is the unique backwards-induction equilibrium",
      "There is no Nash equilibrium",
      "The only Nash equilibrium is (A, beta, a)",
      "Backwards induction gives (B, beta, b)"
    ],
    answer: 0,
    explanation: "The Nash equilibria are (B, beta, a) and (B, alpha, b), but only the first is obtained by backwards induction."
  },
  {
    id: "ps31-006",
    topic: "Problem 3.1",
    source: "Problem Set 3.1 Figure 3",
    difficulty: "core",
    question: "In Problem 3.1 Figure 3, how many strategies does player 1 have?",
    options: ["3", "4", "9", "12", "108"],
    answer: 3,
    explanation: "Player 1 chooses at three nodes with 3, 2, and 2 actions, so 3 times 2 times 2 = 12."
  },
  {
    id: "ps31-007",
    topic: "Problem 3.1",
    source: "Problem Set 3.1 Figure 3",
    difficulty: "core",
    question: "In Problem 3.1 Figure 3, how many strategies does player 2 have?",
    options: ["3", "6", "9", "12", "108"],
    answer: 2,
    explanation: "Player 2 chooses at two nodes with 3 actions each, so 3 times 3 = 9."
  },
  {
    id: "ps31-008",
    topic: "Problem 3.1",
    source: "Problem Set 3.1 Figure 3",
    difficulty: "exam",
    question: "Which pair is in the backwards-induction equilibrium set for Problem 3.1 Figure 3?",
    options: [
      "(Cdf, Mm)",
      "(Beg, Lm)",
      "(Adf, Ll)",
      "(Ceg, Rr)",
      "(Bef, Ml)"
    ],
    answer: 0,
    explanation: "The backwards-induction equilibria are (Cdf, Mm) and (Bdf, Mm)."
  },
  {
    id: "ps31-009",
    topic: "Problem 3.1",
    source: "Problem Set 3.1 Figure 3",
    difficulty: "exam",
    question: "In Problem 3.1 Figure 3, which profile is a Nash equilibrium but not obtained by backwards induction?",
    options: [
      "(Beg, Lm)",
      "(Cdf, Mm)",
      "(Bdf, Mm)",
      "(Adf, Ml)",
      "(Aeg, Rr)"
    ],
    answer: 0,
    explanation: "The solution explicitly gives (Beg, Lm) as an example of a Nash equilibrium not selected by backwards induction."
  },
  {
    id: "ps31-010",
    topic: "Problem 3.1",
    source: "Problem Set 3.1 Figure 4",
    difficulty: "core",
    question: "In Problem 3.1 Figure 4, how many pure strategies does player 3 have?",
    options: ["2", "4", "6", "8", "32"],
    answer: 3,
    explanation: "Player 3 moves at three binary nodes, so 2 times 2 times 2 = 8."
  },
  {
    id: "ps31-011",
    topic: "Problem 3.1",
    source: "Problem Set 3.1 Figure 4",
    difficulty: "exam",
    question: "In Problem 3.1 Figure 4, what payoff is induced by the backwards-induction path?",
    options: [
      "(5, 4, 4)",
      "(-1, 5, 6)",
      "(3, 1, 2)",
      "(0, -1, 7)",
      "(2, 0, 1)"
    ],
    answer: 0,
    explanation: "Backward induction leads through R, A, and the payoff vector (5, 4, 4)."
  },
  {
    id: "ps31-012",
    topic: "Problem 3.1",
    source: "Problem Set 3.1 Figure 4",
    difficulty: "exam",
    question: "In Problem 3.1 Figure 4, which profile is listed among the pure Nash equilibria?",
    options: [
      "(R, A, bde)",
      "(L, A, ace)",
      "(R, B, ace)",
      "(L, A, adf)",
      "(R, B, bcf)"
    ],
    answer: 0,
    explanation: "The Nash set includes profiles such as (R, A, bde) and (R, A, bdf)."
  },
  {
    id: "ps32-001",
    topic: "Problem 3.2",
    source: "Problem Set 3.2 Game 1",
    difficulty: "core",
    question: "In Problem 3.2 Game 1, what are player 1's strategies?",
    options: [
      "{alpha y, alpha x, beta y, beta x}",
      "{alpha, beta}",
      "{gamma, lambda}",
      "{gamma a, lambda a, gamma b, lambda b}",
      "{y, x}"
    ],
    answer: 0,
    explanation: "Player 1 acts at x1 and x4, so each strategy combines an initial action with y or x."
  },
  {
    id: "ps32-002",
    topic: "Problem 3.2",
    source: "Problem Set 3.2 Game 1",
    difficulty: "exam",
    question: "In Problem 3.2 Game 1, how many strategy profiles are there?",
    options: ["4", "8", "12", "16", "20"],
    answer: 3,
    explanation: "There are 4 strategies for player 1 and 4 for player 2, so 16 profiles."
  },
  {
    id: "ps32-003",
    topic: "Problem 3.2",
    source: "Problem Set 3.2 Game 2",
    difficulty: "core",
    question: "In Problem 3.2 Game 2, how many strategy profiles are there?",
    options: ["4", "6", "8", "12", "16"],
    answer: 2,
    explanation: "Each of the three players has 2 strategies, so 2 times 2 times 2 = 8."
  },
  {
    id: "ps32-004",
    topic: "Problem 3.2",
    source: "Problem Set 3.2 Game 3",
    difficulty: "core",
    question: "In Problem 3.2 Game 3, player 3 has how many strategies?",
    options: ["1", "2", "3", "6", "12"],
    answer: 2,
    explanation: "Player 3 moves at one node with actions a, b, and c, so player 3 has 3 strategies."
  },
  {
    id: "ps32-005",
    topic: "Problem 3.2",
    source: "Problem Set 3.2 Game 4",
    difficulty: "exam",
    question: "In the equivalent representation of Problem 3.2 Game 4, what is player 2's strategy set?",
    options: [
      "{gamma a, gamma b, lambda}",
      "{gamma, lambda, a, b}",
      "{alpha, beta}",
      "{a, b}",
      "{gamma a, lambda a, gamma b, lambda b}"
    ],
    answer: 0,
    explanation: "The redundant second decision by player 2 is folded into actions gamma a and gamma b."
  },
  {
    id: "ps33-001",
    topic: "Problem 3.3",
    source: "Problem Set 3.3",
    difficulty: "core",
    question: "In the committee veto game with 4 candidates, how many strategies does player 1 have?",
    options: ["2", "3", "4", "12", "81"],
    answer: 2,
    explanation: "Player 1 moves first and vetoes one of the four candidates."
  },
  {
    id: "ps33-002",
    topic: "Problem 3.3",
    source: "Problem Set 3.3",
    difficulty: "exam",
    question: "In the committee veto game, how many strategies does player 2 have?",
    options: ["3", "4", "12", "81", "4096"],
    answer: 3,
    explanation: "Player 2 may face four possible histories, and in each must choose among three remaining candidates: 3^4 = 81."
  },
  {
    id: "ps33-003",
    topic: "Problem 3.3",
    source: "Problem Set 3.3",
    difficulty: "exam",
    question: "In the committee veto game, how many strategies does player 3 have?",
    options: ["2", "12", "81", "1024", "4096"],
    answer: 4,
    explanation: "Player 3 may face 12 possible histories and chooses between two candidates each time: 2^12 = 4096."
  },
  {
    id: "ps33-004",
    topic: "Problem 3.3",
    source: "Problem Set 3.3",
    difficulty: "core",
    question: "For the preference profile solved in Problem 3.3, which candidate is elected by backwards induction?",
    options: ["a", "b", "c", "d", "No candidate is elected"],
    answer: 2,
    explanation: "The solution reports candidate c as the winner in the backwards-induction equilibria."
  },
  {
    id: "ps34-001",
    topic: "Problem 3.4",
    source: "Problem Set 3.4",
    difficulty: "core",
    question: "In Problem 3.4, if f > 1, which equilibrium is obtained by backwards induction?",
    options: [
      "(M, Yy)",
      "(L, Xy)",
      "(R, Yx)",
      "(M, Xx)",
      "Both (L, Xy) and (M, Yy)"
    ],
    answer: 0,
    explanation: "When f > 1, player 2 chooses Y at x2, so player 1 chooses M."
  },
  {
    id: "ps34-002",
    topic: "Problem 3.4",
    source: "Problem Set 3.4",
    difficulty: "core",
    question: "In Problem 3.4, if f < 1, which equilibrium is obtained by backwards induction?",
    options: [
      "(L, Xy)",
      "(M, Yy)",
      "(R, Xx)",
      "(L, Yx)",
      "No equilibrium exists"
    ],
    answer: 0,
    explanation: "When f < 1, player 2 chooses X at x2, and player 1 then chooses L."
  },
  {
    id: "ps34-003",
    topic: "Problem 3.4",
    source: "Problem Set 3.4",
    difficulty: "exam",
    question: "In Problem 3.4, what happens when f = 1?",
    options: [
      "There are two backwards-induction equilibria: (L, Xy) and (M, Yy)",
      "There is no Nash equilibrium",
      "Only (M, Yy) remains",
      "Only (L, Xy) remains",
      "Player 1 must choose R"
    ],
    answer: 0,
    explanation: "At f = 1, player 2 is indifferent between X and Y, generating two backwards-induction equilibria."
  },
  {
    id: "ps35-001",
    topic: "Problem 3.5",
    source: "Problem Set 3.5",
    difficulty: "core",
    question: "In the original entrant-monopolist game, what are the pure Nash equilibria?",
    options: [
      "(ne, f) and (e, a)",
      "Only (e, a)",
      "Only (ne, f)",
      "(e, f) and (ne, a)",
      "All four profiles"
    ],
    answer: 0,
    explanation: "The normal form has two pure Nash equilibria: staying out with fight, and entering with accommodation."
  },
  {
    id: "ps35-002",
    topic: "Problem 3.5",
    source: "Problem Set 3.5",
    difficulty: "core",
    question: "In the original entrant-monopolist game, which equilibrium is obtained by backwards induction?",
    options: [
      "(e, a)",
      "(ne, f)",
      "(e, f)",
      "(ne, a)",
      "No pure equilibrium"
    ],
    answer: 0,
    explanation: "Fight is not credible in the original game, so the entrant enters and the monopolist accommodates."
  },
  {
    id: "ps35-003",
    topic: "Problem 3.5",
    source: "Problem Set 3.5",
    difficulty: "exam",
    question: "In the modified entrant-monopolist game with investment, what is the backwards-induction behavior?",
    options: [
      "The monopolist invests; the entrant stays out after investment; the monopolist would fight after investment",
      "The monopolist never invests and always accommodates",
      "The entrant enters after investment and the monopolist accommodates",
      "The entrant always enters and the monopolist always fights",
      "Investment removes all equilibria"
    ],
    answer: 0,
    explanation: "Investment changes the monopolist's incentives so fighting after investment becomes credible."
  },
  {
    id: "ps36-001",
    topic: "Problem 3.6",
    source: "Problem Set 3.6",
    difficulty: "core",
    question: "In Problem 3.6, which strategy profile is obtained by backwards induction?",
    options: ["(A, ac)", "(A, ad)", "(B, bc)", "(B, bd)", "(A, bc)"],
    answer: 0,
    explanation: "Player 2 chooses a after A and c after B, and player 1 chooses A."
  },
  {
    id: "ps36-002",
    topic: "Problem 3.6",
    source: "Problem Set 3.6",
    difficulty: "exam",
    question: "In Problem 3.6, which profile is Nash but not obtained by backwards induction?",
    options: ["(A, ad)", "(A, ac)", "(B, bd)", "(A, bc)", "(B, ad)"],
    answer: 0,
    explanation: "The pure Nash equilibria are (A, ac), (A, ad), and (B, bc), but only (A, ac) is the BI profile."
  },
  {
    id: "ps37-001",
    topic: "Problem 3.7",
    source: "Problem Set 3.7",
    difficulty: "core",
    question: "When player 1 moves first in Problem 3.7, what is the backwards-induction equilibrium?",
    options: ["(T, LR)", "(B, LR)", "(T, RL)", "(L, TB)", "(R, TB)"],
    answer: 0,
    explanation: "Player 2 plans L after T and R after B; player 1 chooses T."
  },
  {
    id: "ps37-002",
    topic: "Problem 3.7",
    source: "Problem Set 3.7",
    difficulty: "core",
    question: "When player 2 moves first in Problem 3.7, what is the backwards-induction equilibrium?",
    options: ["(R, TB)", "(L, TB)", "(T, LR)", "(B, RL)", "(R, BT)"],
    answer: 0,
    explanation: "Player 1 plans T after L and B after R; player 2 chooses R."
  },
  {
    id: "ps37-003",
    topic: "Problem 3.7",
    source: "Problem Set 3.7",
    difficulty: "exam",
    question: "What is the main lesson of Problem 3.7?",
    options: [
      "The order of moves matters and favors the first mover in this example",
      "Sequential and simultaneous games always have the same prediction",
      "The second mover always receives the larger payoff",
      "There are no Nash equilibria in sequential games",
      "Backwards induction cannot be used with two players"
    ],
    answer: 0,
    explanation: "Changing who moves first changes the BI outcome and gives the first mover the preferred equilibrium payoff."
  },
  {
    id: "ps38-001",
    topic: "Problem 3.8",
    source: "Problem Set 3.8",
    difficulty: "core",
    question: "In the four-chip game, what should player 1 do at the initial node?",
    options: [
      "Take 2 chips",
      "Take 1 chip",
      "Randomize equally",
      "Refuse to move",
      "Let player 2 choose first"
    ],
    answer: 0,
    explanation: "Backward induction gives that player 1 should take two chips."
  },
  {
    id: "ps38-002",
    topic: "Problem 3.8",
    source: "Problem Set 3.8",
    difficulty: "core",
    question: "In the four-chip game, which position would a player prefer to choose?",
    options: [
      "First",
      "Second",
      "Third",
      "All positions give the same payoff",
      "No position is feasible"
    ],
    answer: 0,
    explanation: "The solution states that the first player obtains the highest payoff."
  },
  {
    id: "ps39-001",
    topic: "Problem 3.9",
    source: "Problem Set 3.9",
    difficulty: "core",
    question: "In the Stackelberg model, what is the follower's best response when q1 < a-c?",
    options: [
      "(a - q1 - c) / 2",
      "(a - c) / 2",
      "(a - c) / 4",
      "a - q1 - c",
      "0"
    ],
    answer: 0,
    explanation: "Solving the follower's first-order condition gives beta2(q1) = (a - q1 - c) / 2 when positive."
  },
  {
    id: "ps39-002",
    topic: "Problem 3.9",
    source: "Problem Set 3.9",
    difficulty: "core",
    question: "In the Stackelberg model, what is the leader's equilibrium quantity?",
    options: [
      "(a - c) / 2",
      "(a - c) / 4",
      "(a - c) / 3",
      "a - c",
      "0"
    ],
    answer: 0,
    explanation: "The leader chooses q1* = (a - c) / 2."
  },
  {
    id: "ps39-003",
    topic: "Problem 3.9",
    source: "Problem Set 3.9",
    difficulty: "core",
    question: "In the Stackelberg model, what is the follower's equilibrium quantity?",
    options: [
      "(a - c) / 4",
      "(a - c) / 2",
      "(a - c) / 3",
      "a - c",
      "0"
    ],
    answer: 0,
    explanation: "Substituting q1* into the follower's best response gives q2* = (a - c) / 4."
  },
  {
    id: "ps39-004",
    topic: "Problem 3.9",
    source: "Problem Set 3.9",
    difficulty: "exam",
    question: "Which statement correctly compares the Stackelberg quantities in this problem?",
    options: [
      "The leader produces twice as much as the follower",
      "The follower produces twice as much as the leader",
      "Both firms produce the same quantity",
      "The leader produces zero",
      "The follower produces zero because a > c"
    ],
    answer: 0,
    explanation: "q1* = (a-c)/2 and q2* = (a-c)/4, so the leader produces twice the follower's amount."
  },
  {
    id: "ps310-001",
    topic: "Problem 3.10",
    source: "Problem Set 3.10",
    difficulty: "core",
    question: "In the river game, what is country B's strategy set?",
    options: [
      "{R, NR}",
      "{(R,R), (R,NR), (NR,R), (NR,NR)}",
      "{R only}",
      "{NR only}",
      "{A, B}"
    ],
    answer: 0,
    explanation: "Country B moves first and chooses responsible use R or non-responsible use NR."
  },
  {
    id: "ps310-002",
    topic: "Problem 3.10",
    source: "Problem Set 3.10",
    difficulty: "core",
    question: "In the river game, what is country A's strategy set?",
    options: [
      "{(R,R), (R,NR), (NR,R), (NR,NR)}",
      "{R, NR}",
      "{A, B}",
      "{responsible only}",
      "{non-responsible only}"
    ],
    answer: 0,
    explanation: "Country A must specify what it would do after each possible choice by country B."
  },
  {
    id: "ps310-003",
    topic: "Problem 3.10",
    source: "Problem Set 3.10",
    difficulty: "exam",
    question: "In the river game, what are the pure Nash equilibria?",
    options: [
      "(R, (R,R)) and (R, (R,NR))",
      "Only (R, (R,R))",
      "Only (NR, (NR,NR))",
      "(NR, (R,R)) and (R, (NR,NR))",
      "There are no pure Nash equilibria"
    ],
    answer: 0,
    explanation: "The normal form solution gives two pure Nash equilibria."
  },
  {
    id: "ps310-004",
    topic: "Problem 3.10",
    source: "Problem Set 3.10",
    difficulty: "exam",
    question: "What is the backwards-induction prediction in the river game?",
    options: [
      "B chooses R; A chooses R after R and NR after NR",
      "B chooses NR; A chooses R after both histories",
      "B chooses R; A chooses NR after both histories",
      "B chooses NR; A chooses NR after R and R after NR",
      "There is no backwards-induction equilibrium"
    ],
    answer: 0,
    explanation: "A's optimal contingent choices are R after R and NR after NR; given that, B chooses R."
  },
  {
    id: "ps311-001",
    topic: "Problem 3.11",
    source: "Problem Set 3.11",
    difficulty: "core",
    question: "In the car-buying game, what is the expected payoff from the coin toss between VW red gasoline and VW black gasoline?",
    options: [
      "(3, 3)",
      "(0, 6)",
      "(6, 0)",
      "(4, 4)",
      "(3, 5)"
    ],
    answer: 0,
    explanation: "With probability 1/2 for each outcome, the expected payoff is (0.5*0 + 0.5*6, 0.5*6 + 0.5*0) = (3,3)."
  },
  {
    id: "ps311-002",
    topic: "Problem 3.11",
    source: "Problem Set 3.11",
    difficulty: "core",
    question: "In the car-buying game, what car is bought by backwards induction?",
    options: [
      "VW Golf grey diesel",
      "VW red gasoline",
      "VW black gasoline",
      "Toyota red diesel",
      "Toyota white diesel"
    ],
    answer: 0,
    explanation: "She chooses diesel after VW and red after Toyota; he chooses VW, so the outcome is VW grey diesel."
  },
  {
    id: "ps311-003",
    topic: "Problem 3.11",
    source: "Problem Set 3.11",
    difficulty: "exam",
    question: "What is the backwards-induction strategy profile in the car-buying game?",
    options: [
      "(VW, rD)",
      "(T, rG)",
      "(VW, bG)",
      "(T, bD)",
      "(VW, rG)"
    ],
    answer: 0,
    explanation: "Player J1 chooses VW; player J2's contingent plan is red after Toyota and diesel after VW."
  },
  {
    id: "ps312-001",
    topic: "Problem 3.12",
    source: "Problem Set 3.12",
    difficulty: "core",
    question: "In the apple-sharing game, how many strategies does Antonio have?",
    options: ["2", "4", "5", "16", "32"],
    answer: 2,
    explanation: "Antonio chooses how many of the four apples go in the red box: 0, 1, 2, 3, or 4."
  },
  {
    id: "ps312-002",
    topic: "Problem 3.12",
    source: "Problem Set 3.12",
    difficulty: "core",
    question: "In the apple-sharing game, how many strategies does Miquel have?",
    options: ["2", "5", "10", "25", "32"],
    answer: 4,
    explanation: "Miquel has a binary choice at each of five possible nodes, so 2^5 = 32 strategies."
  },
  {
    id: "ps312-003",
    topic: "Problem 3.12",
    source: "Problem Set 3.12",
    difficulty: "exam",
    question: "How many strategy profiles are there in the apple-sharing game?",
    options: ["32", "64", "80", "160", "320"],
    answer: 3,
    explanation: "Antonio has 5 strategies and Miquel has 32, so there are 160 profiles."
  },
  {
    id: "ps312-004",
    topic: "Problem 3.12",
    source: "Problem Set 3.12",
    difficulty: "exam",
    question: "What is the fair outcome reached by backwards induction in the apple-sharing game?",
    options: [
      "Each player receives 2 apples",
      "Antonio receives 4 apples",
      "Miquel receives 4 apples",
      "Antonio receives 3 and Miquel receives 1",
      "Miquel receives 3 and Antonio receives 1"
    ],
    answer: 0,
    explanation: "Backwards induction leads Antonio to split 2-2, so both receive two apples."
  },
  {
    id: "ps312-005",
    topic: "Problem 3.12",
    source: "Problem Set 3.12",
    difficulty: "exam",
    question: "Which backwards-induction equilibrium is listed for the apple-sharing game?",
    options: [
      "(2, bbrrr)",
      "(0, rrrrr)",
      "(4, bbbbb)",
      "(1, rbbbb)",
      "(3, brrrb)"
    ],
    answer: 0,
    explanation: "The solution gives (2, bbrrr) and (2, bbbrr) as backwards-induction equilibria."
  },
  {
    id: "ps313-001",
    topic: "Problem 3.13",
    source: "Problem Set 3.13 Figure 8",
    difficulty: "exam",
    question: "In Problem 3.13 Figure 8, which profile is a pure Nash equilibrium?",
    options: [
      "(bl, c, fh)",
      "(bk, d, fg)",
      "(al, c, eg)",
      "(ak, d, eh)",
      "(bl, d, fh)"
    ],
    answer: 0,
    explanation: "The Nash set for Figure 8 is {(bl,c,fh), (bl,c,fg), (bl,c,eh), (bl,c,eg)}."
  },
  {
    id: "ps313-002",
    topic: "Problem 3.13",
    source: "Problem Set 3.13 Figure 9",
    difficulty: "exam",
    question: "In Problem 3.13 Figure 9, which profile is a pure Nash equilibrium?",
    options: [
      "(af, c, hi)",
      "(ae, c, gi)",
      "(be, c, hj)",
      "(bf, c, gi)",
      "(af, d, gj)"
    ],
    answer: 0,
    explanation: "The Nash set includes (af,c,hi), (af,c,hj), (be,d,hj), and (bf,d,hj)."
  },
  {
    id: "ps313-003",
    topic: "Problem 3.13",
    source: "Problem Set 3.13 Figure 10",
    difficulty: "exam",
    question: "In Problem 3.13 Figure 10, what is the unique pure Nash equilibrium?",
    options: [
      "(da, f)",
      "(db, f)",
      "(ca, e)",
      "(cb, e)",
      "(da, e)"
    ],
    answer: 0,
    explanation: "By inspection of the normal form, the unique pure Nash equilibrium is (da, f)."
  },
  {
    id: "mix-001",
    topic: "Common traps",
    source: "Course email and PDFs",
    difficulty: "warmup",
    question: "Which topic is explicitly outside the quiz scope according to the teacher's email?",
    options: [
      "Elimination of dominated strategies",
      "Backwards induction",
      "Information sets",
      "Perfect information",
      "Stackelberg competition"
    ],
    answer: 0,
    explanation: "The email excludes mixed extensions of normal-form games and solutions by elimination of dominated strategies."
  },
  {
    id: "mix-002",
    topic: "Common traps",
    source: "Slides and Problem Set 3",
    difficulty: "core",
    question: "What is the most common mistake when counting strategies in extensive form?",
    options: [
      "Counting only actions on the expected path instead of complete contingent plans",
      "Counting terminal nodes twice",
      "Including utility functions as actions",
      "Removing all off-path nodes before counting",
      "Assuming every player has exactly two strategies"
    ],
    answer: 0,
    explanation: "A strategy must specify behavior at every decision node or information set of the player."
  },
  {
    id: "mix-003",
    topic: "Common traps",
    source: "Slides and Problem Set 3",
    difficulty: "core",
    question: "Which statement is a good warning for Problem 3.1 Figure 2?",
    options: [
      "(B, alpha, b) is Nash, but it is not the backwards-induction equilibrium",
      "(B, alpha, b) is the only backwards-induction equilibrium",
      "(B, beta, a) is not Nash",
      "There are no off-path strategies",
      "Player 3 has four strategies"
    ],
    answer: 0,
    explanation: "The exercise is useful because it separates Nash equilibrium from backwards-induction equilibrium."
  },
  {
    id: "mix-004",
    topic: "Common traps",
    source: "Problem Set 3",
    difficulty: "exam",
    question: "In Stackelberg, which wrong answer often comes from confusing the model with simultaneous Cournot competition?",
    options: [
      "Both firms produce the same quantity",
      "The leader produces twice as much as the follower",
      "The follower produces (a-c)/4",
      "The leader moves first",
      "The follower observes q1"
    ],
    answer: 0,
    explanation: "The Stackelberg result here is asymmetric: q1*=(a-c)/2 and q2*=(a-c)/4."
  },
  {
    id: "mix-005",
    topic: "Common traps",
    source: "Problem Set 3",
    difficulty: "exam",
    question: "In games with chance moves, what is the correct treatment of nature?",
    options: [
      "Nature is modeled with fixed probabilities, not strategic optimization",
      "Nature chooses a best response",
      "Nature receives a payoff and maximizes it",
      "Nature is eliminated before solving the game",
      "Nature always chooses each branch with probability one"
    ],
    answer: 0,
    explanation: "Nature represents chance, such as a coin toss, and is governed by probabilities rather than incentives."
  }
];
