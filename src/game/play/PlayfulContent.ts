import type { PlayLine, PlayProfile } from "../../engine/exploration/PlayProfile.ts";

/** Optional exploration dialogue never changes a chapter's puzzle requirements. */
export const PLAY_PROFILES: Readonly<Record<string, PlayProfile>> = {
  ground: {
    id: "ground",
    lines: [
      { text: "I'm the paper path. Little feet can tiptoe along me.", speaker: "narrator" },
      { text: "Pat, pat! Shall we explore this lovely page together?", speaker: "narrator" }
    ]
  },
  tree: {
    id: "tree",
    lines: [
      { text: "I'm a tree. My branches reach up high!", speaker: "narrator" },
      { text: "Rustle, rustle! Can you tickle my leaves?", speaker: "narrator" }
    ],
    focusReplies: {
      frog: [{ text: "I'm a tree, not a frog. Frogs go ribbit!", speaker: "narrator" }],
      fox: [{ text: "I'm a tree, not a fox. Foxes have fluffy tails!", speaker: "narrator" }],
      rabbit: [{ text: "I'm a tree, not a rabbit. Rabbits have long ears!", speaker: "narrator" }]
    },
    surprise: "acorns"
  },
  bush: {
    id: "bush",
    lines: [
      { text: "I'm a bush. Lots of little leaves make me cosy!", speaker: "narrator" },
      { text: "Rustle, rustle! I wonder who is hiding here.", speaker: "narrator" }
    ],
    focusReplies: {
      frog: [{ text: "I'm a bush, not a frog. Can you find the little frog?", speaker: "narrator" }],
      fox: [{ text: "I'm a bush, not a fox. Look for our fluffy friend!", speaker: "narrator" }],
      rabbit: [{ text: "I'm a bush, not a rabbit. Can you spot two long ears?", speaker: "narrator" }]
    },
    surprise: "butterfly"
  },
  rock: {
    id: "rock",
    lines: [
      { text: "I'm a smooth little rock. Tap, tap, tap!", speaker: "narrator" },
      { text: "I like sitting very still in the sunshine.", speaker: "narrator" }
    ],
    focusReplies: {
      frog: [{ text: "I'm a rock, not a frog. Our frog can hop!", speaker: "narrator" }],
      fox: [{ text: "I'm a rock, not a fox. Look for a fluffy tail.", speaker: "narrator" }],
      rabbit: [{ text: "I'm a rock, not a rabbit. Look for two long ears!", speaker: "narrator" }]
    },
    surprise: "snail"
  },
  grass: {
    id: "grass",
    lines: [
      { text: "We are blades of grass. Sway with us!", speaker: "narrator" },
      { text: "Swish, swish! A little breeze tickles our tips.", speaker: "narrator" }
    ]
  },
  mushroom: {
    id: "mushroom",
    lines: [
      { text: "I'm a little mushroom with a spotty hat.", speaker: "narrator" },
      { text: "Peek under my cap. There might be a tiny surprise!", speaker: "narrator" }
    ],
    surprise: "stars"
  },
  flower: {
    id: "flower",
    lines: [
      { text: "I'm a flower. My petals open like little hands.", speaker: "narrator" },
      { text: "Hello, little bee! Have you come to visit?", speaker: "narrator" }
    ]
  },
  house: {
    id: "house",
    lines: [
      { text: "Knock, knock! This is a little paper house.", speaker: "narrator" },
      { text: "A cosy home, with a roof and a little door.", speaker: "narrator" }
    ],
    surprise: "stars"
  },
  hill: {
    id: "hill",
    lines: [
      { text: "I'm a hill. I roll up high and down low!", speaker: "narrator" },
      { text: "Imagine sliding down my soft, grassy side.", speaker: "narrator" }
    ]
  },
  sky: {
    id: "sky",
    lines: [
      { text: "Look up! The sky is a big blanket over our world.", speaker: "narrator" },
      { text: "Hello, sky! Is there a little cloud sailing by?", speaker: "narrator" }
    ]
  },
  sun: {
    id: "sun",
    lines: [
      { text: "I'm the sun. I send warm, gentle sunshine.", speaker: "narrator" },
      { text: "Shine, shine! A happy day is peeking through.", speaker: "narrator" }
    ]
  },
  cloud: {
    id: "cloud",
    lines: [
      { text: "I'm a soft little cloud, floating by.", speaker: "narrator" },
      { text: "Puff, puff! What shape can you see in me?", speaker: "narrator" }
    ]
  },
  pond: {
    id: "pond",
    reaction: "still",
    lines: [
      { text: "I'm a pond. Little ripples go round and round.", speaker: "narrator" },
      { text: "Splash! Shall we see who is hiding in the water?", speaker: "narrator" }
    ],
    surprise: "fish"
  },
  stream: {
    id: "stream",
    reaction: "still",
    lines: [
      { text: "I'm a little stream. Listen: trickle, trickle!", speaker: "narrator" },
      { text: "Follow my ripples. Someone small might swim past.", speaker: "narrator" }
    ],
    surprise: "fish"
  },
  lilypad: {
    id: "lilypad",
    lines: [
      { text: "I'm a lily pad. I float like a little boat.", speaker: "narrator" },
      { text: "A cosy little seat for a tired frog.", speaker: "narrator" }
    ]
  },
  reed: {
    id: "reed",
    lines: [
      { text: "I'm a tall reed beside the water.", speaker: "narrator" },
      { text: "Sway, sway! I wave hello to the pond.", speaker: "narrator" }
    ]
  },
  apple: {
    id: "apple",
    lines: [
      { text: "I'm an apple, round and ready for a little tap.", speaker: "narrator" },
      { text: "I grow on a tree. Can you spot my tiny stalk?", speaker: "narrator" }
    ]
  },
  rainbow: {
    id: "rainbow",
    lines: [
      { text: "I'm a rainbow. So many lovely colours in one big bow!", speaker: "narrator" },
      { text: "Follow my colours up and over the sky.", speaker: "narrator" }
    ],
    surprise: "stars"
  },
  mabli: {
    id: "mabli",
    lines: [
      { text: "Hello! I'm Mabli. Will you explore with me?", speaker: "mabli" },
      { text: "My rainbow hair wiggles when I'm happy!", speaker: "mabli" }
    ]
  },
  frog: {
    id: "frog",
    lines: [
      { text: "Ribbit! I like to hop by my little pond.", speaker: "frog" },
      { text: "Can you make a tiny ribbit? Ribbit!", speaker: "frog" },
      { text: "Hello again! I am so happy you came to play.", speaker: "frog" }
    ],
    idleHints: [
      { text: "Ribbit! I'm waiting by the pond. Can you find me?", speaker: "frog" },
      { text: "Look for my big round eyes. Give me a little tap!", speaker: "frog" }
    ]
  },
  fox: {
    id: "fox",
    lines: [
      { text: "Hello, friend! My fluffy tail swishes like this.", speaker: "fox" },
      { text: "I have two pointy ears. Can you see them?", speaker: "fox" },
      { text: "Shall we tiptoe through the leaves together?", speaker: "fox" }
    ],
    idleHints: [
      { text: "I'm hiding near the trees. Look for my fluffy tail!", speaker: "fox" },
      { text: "My pointy ears are listening. Can you tap me?", speaker: "fox" }
    ]
  },
  rabbit: {
    id: "rabbit",
    lines: [
      { text: "Hop, hop! I have two lovely long ears.", speaker: "rabbit" },
      { text: "My little nose goes wiggle, wiggle.", speaker: "rabbit" },
      { text: "Hello again! Shall we do a gentle bunny hop?", speaker: "rabbit" }
    ],
    idleHints: [
      { text: "I'm sitting in the grass. Look for my two long ears!", speaker: "rabbit" },
      { text: "Hop over with your finger and give me a little tap!", speaker: "rabbit" }
    ]
  },
  bird: {
    id: "bird",
    lines: [
      { text: "Tweet, tweet! I have a little song for you.", speaker: "bird" },
      { text: "My wings can flutter, and my little feet can hop.", speaker: "bird" }
    ]
  },
  butterfly: {
    id: "butterfly",
    lines: [
      { text: "Flutter, flutter! My wings are soft and light.", speaker: "butterfly" },
      { text: "Can you wave hello like a butterfly?", speaker: "butterfly" }
    ]
  },
  bee: {
    id: "bee",
    lines: [
      { text: "Buzz, buzz! I'm looking for a flower.", speaker: "bee" },
      { text: "I have little wings and a fuzzy tummy.", speaker: "bee" }
    ]
  },
  duckling: {
    id: "duckling",
    lines: [
      { text: "Quack, quack! I like a gentle paddle.", speaker: "duckling" },
      { text: "Can you make a tiny quack with me?", speaker: "duckling" }
    ]
  },
  snail: {
    id: "snail",
    lines: [
      { text: "Hello, little friend. I'm taking my time.", speaker: "snail" },
      { text: "My shell has a spiral. Round and round it goes.", speaker: "snail" }
    ]
  },
  firefly: {
    id: "firefly",
    lines: [
      { text: "Hello! I carry a tiny lantern on my tummy.", speaker: "firefly" },
      { text: "Twinkle, twinkle! Little lights make the glade cosy.", speaker: "firefly" }
    ]
  }
};

/** Completion dialogue plays after the animal's colour has been restored. */
export const CHARACTER_ENDINGS: Readonly<Record<"frog" | "fox" | "rabbit", PlayLine>> = {
  frog: {
    text: "Ribbit! My green tummy is back! I can splash and hop again. Thank you, Mabli, my colourful friend!",
    speaker: "frog"
  },
  fox: {
    text: "Oh, lovely orange fur! That tickles my whiskers. You found me! Thank you, Mabli. You are a wonderful friend.",
    speaker: "fox"
  },
  rabbit: {
    text: "My brown coat is back! Hooray! I am ready for a little hoppity adventure. Thank you, Mabli. Hop, hop!",
    speaker: "rabbit"
  }
};
