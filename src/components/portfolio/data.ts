export type Project = {
  title: string;
  description: string;
  tech: string[];
  platform: string;
  accent?: "blue" | "green" | "mix";
  image?: string;
  url?: string;
  linkLabel?: string;
  video?: { kind: "youtube" | "drive"; id: string };
};

const drive = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w1600`;


export const projects: Project[] = [
  {
    title: "Fortune GO",
    description: "Live-ops casual game with rich meta systems, daily events and monetization hooks.",
    tech: ["Unity", "C#", "Firebase", "Addressables"],
    platform: "Android · iOS",
    accent: "blue",
    image:
      "https://play-lh.googleusercontent.com/sJFS47xct5vBXRywCBgqQpn3LfLCo6bQlBnDFRj_c4pJlYIEQim4W1Y1BqK3DNLq19HNI4LV1mGmKuKNJhaOnQ",
    url: "https://play.google.com/store/apps/details?id=com.rovoox.fortunegogame&hl=en",
    linkLabel: "Google Play",
  },
  {
    title: "Walletopia",
    description: "Web3 economy simulator connecting on-chain assets to arcade-style gameplay, playable inside Telegram.",
    tech: ["Unity", "C#", "Web3", "REST API"],
    platform: "Telegram Mini App · WebGL",
    accent: "green",
    image: "/__l5e/assets-v1/d5834640-8c5b-4ac7-9d11-1d0326871e06/walletopia.png",
    url: "https://t.me/Walletopia_bot",
    linkLabel: "Open in Telegram",
  },
  {
    title: "Xstro",
    description: "Fast-paced arcade shooter with rewind mechanics and cross-platform leaderboards.",
    tech: ["Unity", "C#", "WebGL"],
    platform: "WebGL",
    accent: "mix",
    image: drive("1j33xR1dAmzd0Udn0CV5rstpgZe7hk_Ri"),
    video: { kind: "drive", id: "1j33xR1dAmzd0Udn0CV5rstpgZe7hk_Ri" },
    linkLabel: "Watch Demo",
  },
  {
    title: "Helios",
    description: "Stylised action prototype exploring dynamic lighting and combat pacing.",
    tech: ["Unity", "URP", "C#"],
    platform: "PC · WebGL",
    accent: "blue",
    image: "https://img.youtube.com/vi/jLHLlD4KP_4/maxresdefault.jpg",
    video: { kind: "youtube", id: "jLHLlD4KP_4" },
    linkLabel: "Watch Demo",
  },

  {
    title: "LitCraft",
    description: "Cozy creative sandbox with modular building blocks and asset streaming.",
    tech: ["Unity", "Addressables", "C#"],
    platform: "Mobile · Web",
    accent: "green",
    image:
      "https://cdn.prod.website-files.com/63691f2845b914dd3b257450/63691f2845b91469b1257522_litcraft%20gameplay.jpg",
    url: "https://www.litcraft.com/",
    linkLabel: "Visit Site",
  },
  {
    title: "GrowBigger.io",
    description: "Multiplayer .io game with real-time progression and shard-based matchmaking.",
    tech: ["Unity", "Multiplayer", "REST API"],
    platform: "WebGL",
    accent: "mix",
    image: drive("1vhHD9JvRMbbZPHDr18S7EBzsORCR520b"),
    video: { kind: "drive", id: "1vhHD9JvRMbbZPHDr18S7EBzsORCR520b" },
    linkLabel: "Watch Demo",
  },
  {
    title: "CashMoney",
    description: "Social casual game with meta economy, IAP and analytics-driven live events.",
    tech: ["Unity", "Firebase", "IAP"],
    platform: "Android · iOS",
    accent: "blue",
    image: drive("1MLa_xdCD59Yr1fB1-gV6dMjE-XtebssF"),
    video: { kind: "drive", id: "1MLa_xdCD59Yr1fB1-gV6dMjE-XtebssF" },
    linkLabel: "Watch Demo",
  },

  {
    title: "Ancient Allies Tower Defense",
    description: "Grid-based tower defense with deep upgrade trees and hand-crafted campaign.",
    tech: ["Unity", "C#", "UGS"],
    platform: "Mobile",
    accent: "green",
    image:
      "https://play-lh.googleusercontent.com/11xx-aHk-2ZyLGzln9DDhWGtdb3pMaY1q90XfbtPmxgzEJT0e03z9bvhXBquG7Koh0aDGUYi8i2XVHnUTGgL",
    url: "https://play.google.com/store/apps/details?id=com.BeanstalkGames.AncientAlliesTD&hl=en",
    linkLabel: "Google Play",
  },
  {
    title: "FreeFall",
    description: "Skydiving arcade endless-runner focused on tight controls and readable moment-to-moment feel.",
    tech: ["Unity", "C#"],
    platform: "Mobile",
    accent: "mix",
    image: drive("195MwGbZsSFfW0WklFX9tW0O8wbt4NmXW"),
    video: { kind: "drive", id: "195MwGbZsSFfW0WklFX9tW0O8wbt4NmXW" },
    linkLabel: "Watch Demo",
  },

  {
    title: "ModelCreator",
    description: "Web tool for authoring 3D character presets with real-time preview.",
    tech: ["Unity", "WebGL", "C#"],
    platform: "Web Tool",
    accent: "green",
    image: "https://model-creator.com/assets/images/model_creator_logo.jpg",
    url: "https://model-creator.com/creator",
    linkLabel: "Try it Live",
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    company: "Rovoox",
    role: "Unity Game Developer",
    period: "Nov 2024 – Present",
    highlights: [
      "Migrated mobile titles to WebGL for the Telegram Mini App ecosystem",
      "Shipped and iterated live features with a distributed team",
      "Built JavaScript ↔ Unity interop bridges for platform integrations",
    ],
  },
  {
    company: "P1 Games",
    role: "Game Design Volunteer",
    period: "Sep 2024 – Dec 2024",
    highlights: [
      "Led Game Jam teams from concept to playable prototype",
      "Contributed design iterations to Walletopia and Fortune GO",
      "Turned live analytics into rapid feature tweaks",
    ],
  },
  {
    company: "XGameFI",
    role: "Unity Game Developer",
    period: "Sep 2023 – Jun 2024",
    highlights: [
      "Delivered a Web3 game with polished UI and multiplayer flows",
      "Integrated Firebase, REST APIs, IAPs and analytics",
      "Owned end-to-end feature slices across client and services",
    ],
  },
  {
    company: "Ingsoftware",
    role: "Unity Game Developer",
    period: "Sep 2021 – Sep 2023",
    highlights: [
      "Built internal Unity tools that accelerated content pipelines",
      "Shipped 15+ minigames spanning UI, VFX and SFX systems",
      "Worked in an Agile team on continuous live content updates",
    ],
  },
  {
    company: "Stick & Rope",
    role: "Unity Game Developer",
    period: "Oct 2019 – Sep 2021",
    highlights: [
      "Took multiple titles from prototype to storefront release",
      "Owned core gameplay systems and shipping-ready polish",
      "Collaborated across design, art and QA on tight timelines",
    ],
  },
];

export const skillGroups: { title: string; items: string[] }[] = [
  { title: "Languages", items: ["C#", "JavaScript"] },
  {
    title: "Game Development",
    items: ["Unity", "Unity 6", "Gameplay Programming", "UI", "Mobile", "WebGL", "Android", "iOS", "Multiplayer"],
  },
  {
    title: "Systems",
    items: ["Firebase", "Addressables", "AssetBundles", "REST APIs", "JSON", "Unity Gaming Services"],
  },
  { title: "Graphics", items: ["URP", "VFX", "Animation", "Lighting"] },
  { title: "Tools", items: ["Git", "Visual Studio", "Figma"] },
  {
    title: "Soft Skills",
    items: ["Problem Solving", "Communication", "Team Collaboration", "Agile", "Mentoring"],
  },
];

export const contact = {
  email: "d.kis02@gmail.com",
  linkedin: "https://www.linkedin.com/in/denis-kis-747a461a1/",
};
