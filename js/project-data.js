window.PORTFOLIO_DATA = {
    projects: [
        {
            slug: "aayudhm",
            title: "Aayudhm",
            category: "Game Prototype",
            tone: "accent",
            visibility: "Private repo",
            language: "GDScript",
            updatedAt: "2025-08-21",
            heroSummary:
                "A Godot project built around ancient-war-inspired combat, multiplayer fighting spaces, and an open world called Abhyarany.",
            cardSummary:
                "Major diploma game project with multiplayer and open-world modes, scene-based combat systems, and a visual direction rooted in ancient Indian themes.",
            story: [
                "Aayudhm is a major diploma project built with Vishvanshu Chauhan and Kapil Chauhan. The repo README describes it as a game inspired by ancient Indian technology, designed around both player-versus-player combat and open-world exploration.",
                "The repository structure shows a larger Godot setup than the current portfolio used to communicate: dedicated scenes for fight arenas, a lobby, dungeons, projectiles, enemy encounters, and an open world. The concept is split between Yudh Bhoomi, a multiplayer fight scene, and Abhyarany, a procedurally generated survival-oriented world.",
                "Recent repo activity on August 21, 2025 indicates the project is still being adjusted rather than abandoned. It is private, so this page focuses on the design direction and visible structure instead of linking directly to source code."
            ],
            facts: [
                { label: "Project type", value: "Private Godot game prototype" },
                { label: "Built for", value: "Major diploma project" },
                { label: "Team", value: "Apoorv Kaushik, Vishvanshu Chauhan, Kapil Chauhan" },
                { label: "Latest visible repo activity", value: "August 21, 2025" }
            ],
            highlights: [
                "Two core modes documented in the repo: Yudh Bhoomi for multiplayer fights and Abhyarany for open-world exploration.",
                "Godot scene structure includes lobby, fight scene, open world, dungeons, enemies, projectiles, and win or death screens.",
                "The project theme connects gameplay direction with ancient Indian warfare, environments, and survival systems.",
                "The repo notes that the game is still evolving and intended for broader release once it reaches a stronger state."
            ],
            stack: ["Godot", "GDScript", "Scene-based game architecture", "Procedural world ideas", "Multiplayer combat design"],
            links: [
                { label: "Back to portfolio", href: "/#projects", primary: true, external: false }
            ],
            gallery: [
                {
                    src: "/assets/img/cover.jpg",
                    alt: "Aayudhm cover art",
                    caption: "Cover artwork used for the portfolio refresh and project framing."
                },
                {
                    src: "/assets/img/lobby.png",
                    alt: "Aayudhm lobby screenshot",
                    caption: "Lobby environment from the multiplayer-facing part of the game."
                },
                {
                    src: "/assets/img/yudh-bhoomi.png",
                    alt: "Aayudhm Yudh Bhoomi screenshot",
                    caption: "Yudh Bhoomi, the combat arena concept described in the project README."
                },
                {
                    src: "/assets/img/abhyarany.png",
                    alt: "Aayudhm Abhyarany screenshot",
                    caption: "Abhyarany, the open-world scene built around exploration and survival."
                }
            ]
        },
        {
            slug: "inqoura",
            title: "Inqoura",
            category: "Mobile App",
            tone: "teal",
            visibility: "Public repo",
            language: "TypeScript",
            updatedAt: "2026-03-27",
            repoUrl: "https://github.com/zpoorv/inqoura",
            heroSummary:
                "A React Native nutrition assistant that scans barcodes or ingredient labels and turns them into readable health insights.",
            cardSummary:
                "Expo app with barcode scanning, OCR ingredient analysis, Firebase auth, scan history, diet profiles, and deterministic health scoring.",
            story: [
                "Inqoura is one of the clearest product-oriented repos in the current GitHub account. The README outlines a mobile-first flow where a user scans packaged food, reviews additives and nutrition details, and receives a deterministic health score with plain-English explanations.",
                "The project goes beyond a single scanner screen. The repo includes Firebase email and Google sign-in, Open Food Facts integration, OCR for ingredient labels, local caching, shareable result cards, diet-aware modes, and account-scoped history storage.",
                "The most recent visible commits are from March 27, 2026 and focus on mobile stability plus syncing preferences and scan history per account. That activity makes this a strong centerpiece project for the portfolio."
            ],
            facts: [
                { label: "Project type", value: "Public mobile application" },
                { label: "Core platform", value: "Expo and React Native" },
                { label: "Latest visible repo activity", value: "March 27, 2026" },
                { label: "Primary goal", value: "Make ingredient data easier to understand" }
            ],
            highlights: [
                "Live barcode scanning plus manual entry fallback share the same lookup flow.",
                "OCR ingredient-label scanning supports photo and gallery inputs for products without easy barcode use.",
                "Health scoring uses a deterministic model with grades, verdicts, explanations, and diet profile modes.",
                "The app includes Firebase-backed sign-in, local caching, history management, and shareable result cards."
            ],
            stack: ["Expo SDK 54", "React Native 0.81", "TypeScript", "Firebase Authentication", "Open Food Facts", "AsyncStorage"],
            links: [
                { label: "View repository", href: "https://github.com/zpoorv/inqoura", primary: true, external: true },
                { label: "Back to portfolio", href: "/#projects", primary: false, external: false }
            ]
        },
        {
            slug: "clipmuse",
            title: "ClipMuse",
            category: "Creative Tool",
            tone: "gold",
            visibility: "Public repo",
            language: "Python",
            updatedAt: "2025-08-21",
            repoUrl: "https://github.com/zpoorv/clipmuse",
            heroSummary:
                "A desktop app that turns voiceover audio and a folder of clips into subtitle-ready vertical video reels.",
            cardSummary:
                "Python and PyQt tool for auto-assembling reels from clips, resizing for 9:16 output, and generating Whisper-based subtitles.",
            story: [
                "ClipMuse is a practical automation project: give it a voiceover and a folder of clips, and the app builds a stylized short-form reel with subtitles. The README highlights clip selection, vertical reframing, uniform speed adjustment, and hardware-accelerated export.",
                "The repo is organized around a desktop workflow rather than a script-only utility, which makes it useful for showing product thinking in a tooling context. It uses OpenAI Whisper for word-level timestamps and MoviePy or Pillow-based media processing to automate a tedious editing workflow.",
                "Visible GitHub activity continued through August 21, 2025, suggesting the tool is still being refined rather than left as a one-off experiment."
            ],
            facts: [
                { label: "Project type", value: "Public desktop application" },
                { label: "Core platform", value: "Python desktop tooling" },
                { label: "Latest visible repo activity", value: "August 21, 2025" },
                { label: "Primary goal", value: "Speed up vertical video creation" }
            ],
            highlights: [
                "Automatically chooses and sequences clips to cover the duration of a voiceover track.",
                "Resizes and crops output to a 1080 by 1920 vertical format suitable for short-form platforms.",
                "Uses Whisper transcription for timestamped subtitles and more polished export output.",
                "Wraps the workflow in a cross-platform desktop interface instead of leaving it as a raw script."
            ],
            stack: ["Python", "PyQt5", "MoviePy", "OpenAI Whisper", "Pillow", "NumPy"],
            links: [
                { label: "View repository", href: "https://github.com/zpoorv/clipmuse", primary: true, external: true },
                { label: "Back to portfolio", href: "/#projects", primary: false, external: false }
            ]
        },
        {
            slug: "monster-hunter-cpp",
            title: "Monster Hunter C++",
            category: "Game Prototype",
            tone: "olive",
            visibility: "Public repo",
            language: "C++",
            updatedAt: "2026-03-26",
            repoUrl: "https://github.com/zpoorv/monster-hunter-cpp",
            heroSummary:
                "A C++ rewrite of the Monster Hunter practice project, continuing the same raylib combat idea with a more structured codebase.",
            cardSummary:
                "C++ version of the earlier Monster Hunter game, using raylib and a small object-oriented setup to manage monsters and combat state.",
            story: [
                "This repo is described as the C++ version of the earlier Monster Hunter project. The current source shows a raylib game loop, a custom Monster type, a level-based enemy array, and lightweight health and control systems.",
                "While it is still a small project, it marks an important transition from an early C practice game into a C++ codebase with clearer object responsibilities. Rebuilding a familiar project in another language is a useful way to show growing systems confidence.",
                "The repo was updated on March 26, 2026, making it one of the most recent visible experiments in the portfolio."
            ],
            facts: [
                { label: "Project type", value: "Public C++ game practice repo" },
                { label: "Rendering library", value: "raylib" },
                { label: "Latest visible repo activity", value: "March 26, 2026" },
                { label: "Primary goal", value: "Rebuild an earlier game concept in C++" }
            ],
            highlights: [
                "Keeps a 50-monster array and advances progression by checking health state and level transitions.",
                "Uses raylib for the render loop, window management, input handling, and drawing.",
                "Represents a language transition project rather than a separate gameplay concept.",
                "Recent commits focus on cleanup and keeping generated output files out of version control."
            ],
            stack: ["C++", "raylib", "Custom game entities", "Desktop game loop"],
            links: [
                { label: "View repository", href: "https://github.com/zpoorv/monster-hunter-cpp", primary: true, external: true },
                { label: "Back to portfolio", href: "/#projects", primary: false, external: false }
            ]
        },
        {
            slug: "monster-hunter-c",
            title: "Monster Hunter C",
            category: "Game Prototype",
            tone: "accent",
            visibility: "Public repo",
            language: "C",
            updatedAt: "2024-05-08",
            repoUrl: "https://github.com/zpoorv/monster-hunter-c",
            heroSummary:
                "An early raylib-based combat game written in C, centered on defeating monsters with progressively stronger attacks.",
            cardSummary:
                "C and raylib practice project with a simple combat loop, unlockable attacks, and escalating monster health.",
            story: [
                "Monster Hunter C appears to be one of the foundational repos in the account. The README frames it as a minor project built in C with raylib and explains the basic progression: defeat monsters, unlock stronger attacks, and survive longer runs.",
                "The project is mechanically simple, but it is still a useful portfolio piece because it shows the early stage of gameplay programming, player input mapping, and progression balancing that later game repos build on.",
                "The latest visible commit in this public repo is from May 8, 2024, which places it earlier in the portfolio timeline than the newer mobile and tooling work."
            ],
            facts: [
                { label: "Project type", value: "Public C game practice repo" },
                { label: "Rendering library", value: "raylib" },
                { label: "Latest visible repo activity", value: "May 8, 2024" },
                { label: "Primary goal", value: "Learn real-time gameplay programming in C" }
            ],
            highlights: [
                "The README documents six attack types with unlock progression from punch up to thunder.",
                "The game loop is built around successive monsters with increasing health.",
                "Keyboard-based move selection keeps the input model straightforward and accessible.",
                "Acts as an early baseline for the later C++ rewrite and larger Godot game work."
            ],
            stack: ["C", "raylib", "Gameplay progression", "Desktop game loop"],
            links: [
                { label: "View repository", href: "https://github.com/zpoorv/monster-hunter-c", primary: true, external: true },
                { label: "Back to portfolio", href: "/#projects", primary: false, external: false }
            ]
        },
        {
            slug: "wild-archive",
            title: "Wild Archive",
            category: "Game Prototype",
            tone: "teal",
            visibility: "Private repo",
            language: "Godot",
            updatedAt: "2026-01-07",
            heroSummary:
                "A private Godot game repo described as a first Play Store project, currently at an early but release-minded stage.",
            cardSummary:
                "Private Godot project aimed at becoming a first Play Store game, included here as an active step in the broader game-development journey.",
            story: [
                "Wild Archive is a private repo, so the portfolio cannot lean on a public README. GitHub metadata still makes the project worth showing: it is described as a first game for the Play Store and was updated on January 7, 2026.",
                "The root structure includes a Godot project file, scripts, assets, and a main scene, which suggests an early but intentional release-oriented setup rather than a throwaway prototype. Because the code is private, this page presents it as a milestone in the publishing journey rather than a fully documented case study.",
                "Including private work alongside public repos makes the portfolio feel more honest to the actual project mix: not every meaningful project is open source, but it can still demonstrate direction and ambition."
            ],
            facts: [
                { label: "Project type", value: "Private Godot project" },
                { label: "Target", value: "First Play Store release attempt" },
                { label: "Latest visible repo activity", value: "January 7, 2026" },
                { label: "Primary goal", value: "Turn a prototype into a mobile-ready release" }
            ],
            highlights: [
                "Described in GitHub metadata as the first game aimed at the Play Store.",
                "Private development suggests the repo is being kept closed while the concept matures.",
                "Godot project structure includes scenes, scripts, assets, and platform-oriented setup files.",
                "Useful as a portfolio signal for release ambition, even without a public source link."
            ],
            stack: ["Godot", "Game scripting", "Mobile release experimentation", "Private iteration"],
            links: [
                { label: "Back to portfolio", href: "/#projects", primary: true, external: false }
            ]
        }
    ]
};
