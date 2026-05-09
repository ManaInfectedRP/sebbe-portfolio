export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  tech: string[];
  highlights: string[];
  github?: string;
  demo?: string;
  year: string;
  isPrivate?: boolean;
}

const ph = (color: string, text: string) =>
  `https://placehold.co/800x400/${color}/ffffff?text=${encodeURIComponent(text)}`;

const allProjects: Project[] = [
  {
    id: 'song-studio',
    title: 'Song Studio',
    tagline:
      'Desktop app that turns a one-line idea into a full song — lyrics, vocals & instrumentation.',
    description:
      'Python desktop app that takes a free-form song concept ("a devil who fell in love with a fiery angel") and produces a finished mixed track. Generates structured lyrics with verses, choruses, bridge and outro, then renders audio through one of two backends: a fully-local pipeline (Meta MusicGen + Suno Bark + custom mixer) or a cloud singing path via the Suno API. Per-section regeneration lets you reroll any verse without touching the rest, and a custom Tkinter UI with animated gradient + particle layer ties it together.',
    image: ph('6a1b9a', 'Song+Studio'),
    tech: [
      'Python',
      'OpenAI API',
      'MusicGen',
      'Suno Bark',
      'Suno API',
      'PyTorch',
      'customtkinter',
      'NumPy / SciPy',
    ],
    highlights: [
      'Two audio backends: local (MusicGen + Bark) or Suno cloud singing',
      'Per-section regenerate — rewrites one verse, preserves the rest',
      'Live song-length estimator that matches the actual chunker',
      'Custom animated-gradient UI with player bar & 0–100% progress',
      'Rotating debug log truncated each run for focused sessions',
      'CUDA-aware: ~30s per song on GPU vs 5–15min on CPU',
    ],
    year: '2026',
    isPrivate: true,
  },
  {
    id: 'sebbe-pygame',
    title: 'SebbePyGame',
    tagline:
      'Endless wave survival ARPG in Python — 15 spells, support gems, deep skill tree.',
    description:
      'Top-down wave-survival action RPG built with Python 3.11 and Pygame. Auto-cast spell system with 15 unique abilities, a 3-slot support-gem socket per spell that modifies behaviour, a passive skill tree, 12-slot equipment, crafting bench, and breach events. Enemies span chasers, rangers, elemental elites, mirror-reflect, vortex-placers and aura supports. Bosses every 50 waves, milestone bosses every 250 waves. Auto-saves to JSON after loot drops.',
    image: ph('8b0000', 'SebbePyGame'),
    tech: ['Python 3.11', 'Pygame', 'JSON Save', 'Game Design'],
    highlights: [
      '15 auto-cast spells with 3 support-gem socket slots each',
      'Passive skill tree + 12-slot equipment + crafting',
      'Continuous wave scaling, breach events, milestone bosses',
      'Status effects: Burn / Freeze / Shock / Bleed',
      'Auto-save to savegame.json with seamless reload',
    ],
    year: '2025',
    isPrivate: true,
  },
  {
    id: 'sebbe-x-claude',
    title: 'SebbeXClaude',
    tagline: 'Strategy game inspired by Hearts of Iron IV, built in Python + Pygame.',
    description:
      'Strategy game inspired by Hearts of Iron IV. Built in Python with Pygame, structured around a screen state machine (Lobby → Game → Results) and a built-in map editor for designing custom scenarios. Includes its own map data format, unit and projectile systems, and persistent save data. A personal exploration of how grand-strategy mechanics can be expressed in a lightweight 2D engine.',
    image: ph('1f3a5f', 'SebbeXClaude'),
    tech: ['Python', 'Pygame', 'Map Editor', 'State Machine', 'JSON Save'],
    highlights: [
      'HoI4-inspired strategy gameplay',
      'Built-in map editor for custom scenarios',
      'Lobby → Game → Results state machine',
      'Custom map data format with persistent saves',
      'Unit and projectile combat systems',
    ],
    year: '2025',
    isPrivate: true,
  },
  {
    id: 'sweet-teams',
    title: 'SweetTeams',
    tagline: 'Microsoft Teams-like web app with WebRTC video, screen sharing & chat.',
    description:
      'Full-stack video conferencing platform supporting 50+ participants. Built with WebRTC peer-to-peer connections, real-time chat, screen sharing, and passwordless magic-link authentication. Deployed on Render.com with automatic HTTPS and CI/CD.',
    image: ph('ff4f00', 'SweetTeams'),
    tech: ['JavaScript', 'WebRTC', 'Node.js', 'SQLite', 'SendGrid', 'Render'],
    highlights: [
      'WebRTC P2P video for 50+ concurrent users',
      'Passwordless magic-link auth via SendGrid',
      'Real-time chat & screen sharing',
      'Free deployment on Render.com',
    ],
    github: 'https://github.com/ManaInfectedRP/SweetTeams',
    year: '2026',
  },
  {
    id: 'baduk-python',
    title: 'BadukPython',
    tagline: 'Free, open-source desktop Baduk (Go) game in Python.',
    description:
      'Cross-platform desktop application for playing Baduk on a 9x9 board. Features captured stones counter, pass/menu controls, and a clean Tkinter UI. Available as standalone download on GitHub Releases and playable online via Itch.io.',
    image: ph('2d7a3a', 'BadukPython'),
    tech: ['Python', 'Tkinter', 'Cross-platform'],
    highlights: [
      '9x9 board with classic star points',
      'Automatic captured stones tracking',
      'Released on GitHub & Itch.io',
      'Open source under MIT',
    ],
    github: 'https://github.com/ManaInfectedRP/BadukPython',
    demo: 'https://sebbepwnyou.itch.io/baduk-in-python',
    year: '2025',
  },
  {
    id: 'python-converter',
    title: 'PythonConverter',
    tagline: 'CLI tool that converts MP3 audio to MP4 video using album art.',
    description:
      'Command-line utility built in Python to convert MP3 files into MP4 videos. Reads embedded ID3 album art and uses it as a static frame. Output video duration matches the source audio length. Useful for uploading audio content to video platforms.',
    image: ph('1e6091', 'PythonConverter'),
    tech: ['Python', 'FFmpeg', 'ID3', 'CLI'],
    highlights: [
      'Embedded album art extraction',
      'Auto-matches MP3 duration',
      'Single-command conversion',
      'Cross-platform CLI',
    ],
    github: 'https://github.com/ManaInfectedRP/PythonConverter',
    year: '2025',
  },
  {
    id: 'sebbe-slasher',
    title: 'SebbeSlasher2D',
    tagline: 'Top-down 2D action slasher built in Unity with C#.',
    description:
      'Unity 2D game project showcasing C# game development. Includes player movement, combat mechanics, enemy AI, and animation systems. Built as a learning exercise in Unity engine and game design principles.',
    image: ph('7a1f1f', 'SebbeSlasher2D'),
    tech: ['Unity', 'C#', 'Game Dev', '2D Animation'],
    highlights: [
      'Custom combat system',
      'Enemy AI behavior',
      'Sprite animation pipeline',
      'Unity 2D physics',
    ],
    github: 'https://github.com/ManaInfectedRP/SebbeSlasher2D',
    year: '2024',
  },
  {
    id: 'zambies',
    title: 'Zambies',
    tagline: '3D zombie survival game in Unity with custom shaders.',
    description:
      'First-person 3D survival game built in Unity. Features procedural enemy spawning, custom ShaderLab effects for atmosphere, weapons, and resource management. Demonstrates 3D game development end-to-end.',
    image: ph('3d3d3d', 'Zambies+3D'),
    tech: ['Unity', 'C#', 'ShaderLab', '3D'],
    highlights: [
      'First-person controller',
      'Custom shaders for atmosphere',
      'Wave-based enemy spawning',
      'Inventory & resource system',
    ],
    github: 'https://github.com/ManaInfectedRP/Zambies',
    year: '2024',
  },
  {
    id: 'shop-api',
    title: 'Shop API Tester',
    tagline: 'C# .NET REST API for an e-commerce shop with full CRUD.',
    description:
      'ASP.NET Core REST API for managing a shop catalog. Implements products, orders, and customers with Entity Framework Core. Includes Swagger documentation, integration tests, and proper layered architecture.',
    image: ph('512da8', 'Shop+API'),
    tech: ['C#', '.NET', 'EF Core', 'REST', 'Swagger'],
    highlights: [
      'CRUD endpoints for shop entities',
      'Entity Framework Core with migrations',
      'Swagger / OpenAPI docs',
      'Layered architecture',
    ],
    github: 'https://github.com/ManaInfectedRP/Shop-API-Tester',
    year: '2025',
  },
  {
    id: 'bankomat',
    title: 'Bankomat .NET',
    tagline: 'ATM simulation in C# with full unit-test coverage.',
    description:
      'School project demonstrating Test-Driven Development in C#. Implements an ATM-style banking domain with deposits, withdrawals, balance checks, and transaction history. Covered by xUnit unit tests targeting business rules and edge cases.',
    image: ph('006d77', 'Bankomat+.NET'),
    tech: ['C#', '.NET', 'xUnit', 'TDD'],
    highlights: [
      'Test-Driven Development workflow',
      'Comprehensive xUnit coverage',
      'Domain modelling for banking',
      'Edge-case validation',
    ],
    github: 'https://github.com/ManaInfectedRP/Bankomat-Dotnet',
    year: '2025',
  },
  {
    id: 'voice-cloning',
    title: 'SebbeVoiceCloning',
    tagline: 'Python voice-cloning experiment using AI speech models.',
    description:
      'AI-powered voice cloning project written in Python. Explores text-to-speech and voice synthesis using modern open-source models. Built during AI specialization studies at NBI/Handelsakademin.',
    image: ph('b8336a', 'AI+Voice+Cloning'),
    tech: ['Python', 'AI/ML', 'TTS', 'Audio'],
    highlights: [
      'Text-to-speech synthesis',
      'Voice model fine-tuning',
      'Audio processing pipeline',
      'AI specialization coursework',
    ],
    github: 'https://github.com/ManaInfectedRP/SebbeVoiceCloning',
    year: '2025',
  },
];

export const projects: Project[] = [...allProjects].sort(
  (a, b) => Number(b.year) - Number(a.year)
);
