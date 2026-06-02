export interface ProductType {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  // One-time price in INR. Use 0 for a free download, or null for "Custom pricing".
  price: number | null;
  currency: string; // "INR"
  platform: string; // e.g. "Windows & macOS"
  version: string;
  fileSize: string;
  image: string; // card/detail image — replace with a real product screenshot or logo
  screenshots?: string[];
  // Optional hosted payment link (Razorpay/Stripe) for when you enable paid checkout.
  // While EMPTY, the product page shows a "Request access" button that opens the
  // contact form (interest capture). When SET, it becomes a "Buy now" button.
  paymentLink: string;
  // Optional direct URL of the installer / app file (used on the /download page later).
  downloadUrl: string;
}

export const products: ProductType[] = [
  {
    id: 1,
    slug: "ef-teleprompter",
    name: "EF Teleprompter",
    tagline:
      "Professional teleprompter software for flawless on-camera delivery.",
    description:
      "EF Teleprompter turns any computer into a broadcast-grade prompter. Load your script, set your pace, and read naturally while looking straight down the lens — no more glancing at notes or losing your place.\n\nBuilt for anchors, presenters, educators, content creators, and anyone who speaks to a camera, it delivers buttery-smooth scrolling, full mirror support for beam-splitter glass, and fine-grained control over speed, fonts, and colours. Everything runs locally, so it works on set, in studio, or on the road — no internet and no subscription required.\n\nAvailable as native applications for both Windows and macOS.",
    features: [
      "Buttery-smooth, variable-speed scrolling with instant pause and resume",
      "Mirror mode (horizontal & vertical flip) for beam-splitter rigs",
      "Adjustable font size, colours, margins, and line spacing",
      "Control speed and position by keyboard, mouse, or remote",
      "Multi-monitor support with a dedicated presenter view",
      "Import scripts from TXT/DOCX or paste them in directly",
      "Built-in countdown and elapsed-time indicators",
      "Fully offline — your scripts never leave your machine",
      "Native builds for Windows and macOS",
    ],
    price: 2999,
    currency: "INR",
    platform: "Windows & macOS",
    version: "1.0.0",
    fileSize: "—",
    image: "/window.svg", // TODO: replace with a real EF Teleprompter screenshot
    paymentLink: "",
    downloadUrl: "",
  },
  {
    id: 2,
    slug: "ef-newsroom",
    name: "EF Newsroom",
    tagline:
      "End-to-end newsroom management — from story idea to on-air rundown.",
    description:
      "EF Newsroom is a complete production system for modern TV, radio, and digital newsrooms. Plan coverage, assign reporters, write and approve scripts, build timed rundowns, and run the show live — all from one connected workspace.\n\nBecause the whole team works from a single source of truth, producers, editors, reporters, and anchors stay in sync in real time. Drag-and-drop rundowns calculate timing and back-timing automatically, while role-based permissions keep editorial control exactly where it belongs.\n\nEF Newsroom ships as desktop applications for Windows and macOS, backed by a secure, self-hosted server — so your scripts, sources, and archive stay on infrastructure you control.",
    features: [
      "Story planning and an assignment desk with editorial calendar",
      "Collaborative script writing with versioning and approval workflows",
      "Drag-and-drop rundowns with automatic timing and back-timing",
      "Real-time updates across the newsroom as the show changes",
      "Role-based access for producers, editors, reporters, and anchors",
      "Wire/feed ingestion with linked media assets",
      "Searchable archive of every script and rundown",
      "Self-hosted backend — your data stays on your own servers",
      "Desktop clients for Windows and macOS",
    ],
    price: null, // enterprise — shown as "Custom pricing"
    currency: "INR",
    platform: "Windows & macOS",
    version: "1.0.0",
    fileSize: "—",
    image: "/globe.svg", // TODO: replace with a real EF Newsroom screenshot
    paymentLink: "",
    downloadUrl: "",
  },
];
