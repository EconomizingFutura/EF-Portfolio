"use client";

import {
  Python,
  Node,
  ReactJS,
  ReactNative,
  Java,
  mobileApp,
  webapp,
  devops,
  uiux,
  // Blog_banner_2,
  pencil,
  // Blogs1,
  Thunder,
  // AeniniBanner,
  Aenini,
  // TrevaChat,
  AeiniImg,
  mobiledev,
  web_dev,
  devopsDev,
  UI,
  UserPlaceholder,
  Neo,
  finalTreva,
  finalAeini,
  AR_TAX,
  artaxsolBanner,
} from "../assets/index";
export const navLinks = [
  {
    id: 1,
    link: "/",
    name: "",
  },
  // {
  //   id: 2,
  //   link: "/pricing",
  //   name: "Pricing",
  // },
  {
    id: 3,
    link: "/blogs",
    name: "Blogs",
  },
  {
    id: 4,
    link: "/technologies",
    name: "Technology",
  },
];
interface ProjectItem {
  id: number;
  projectName: string;
  description: string;
  lottie: object;
  projectBanner: string;
  image: string;
  briefNote: string;
  problemStatement: string;
  services: string;
  pathName: string;
}
export const projectsInfo: ProjectItem[] = [
  {
    id: 1,
    lottie: Thunder,
    projectName: "Aenini",
    description:
      "Aenini is an offline tool for counting warp and weft threads in fabric, with data stored locally. It ensures real-time thread count analysis for fabric quality in textile manufacturing. The user-friendly interface allows seamless operation without internet access.",
    // projectBanner: TrevaChat,
    projectBanner: finalAeini,
    pathName: "aenini",
    image: AeiniImg,
    briefNote:
      "Designed for ease of use, Aenini simplifies thread count analysis for textile experts.It delivers fast, accurate measurements of warp and weft threads.This efficiency improves the speed and precision of fabric quality checks.Aenini supports quality control processes, ensuring industry standards are met.Its seamless operation helps reduce errors and enhance inspection workflows.",
    problemStatement:
      "In many textile facilities, signal jammers are deployed to block internet and cellular connectivity for security purposes.This disrupts the functionality of cloud-based or online-dependent fabric inspection tools, leading to operational inefficiencies.Without access to real-time thread count analysis, ensuring fabric quality becomes a bottleneck.Traditional tools relying on continuous network access are rendered unusable in such environments.Aenini addresses this issue with its offline-first architecture, utilising LocalDB to store and process data locally, ensuring uninterrupted inspection workflows",
    services:
      "Aenini offers real-time offline thread count analysis and fabric inspection, ensuring accuracy without internet dependence.Our admin dashboard provides secure user management, role-based access control, and analytics for operational efficiency.",
  },
  {
    id: 2,
    lottie: pencil,
    projectName: "Treva Chat",
    description:
      "Treva Chat is an advanced chatbot platform designed for easy question resolution, with features like reference tracking for seamless conversations. It stores the last five chat sessions for quick access and includes feedback mechanisms to ensure quality interactions. With built-in user authentication, it provides a secure and personalized support experience.",
    image: Aenini,
    pathName: "treva-chat",
    projectBanner: finalTreva,
    briefNote:
      "Treva is a comprehensive platform designed to simplify workflow management by integrating with GitHub and Google Drive. It offers an intuitive dashboard for reviewing workflows, managing user data, and visualising chat sessions. Treva Chat provides a seamless chatbot experience with conversation history, feedback mechanisms, and reference tracking for enhanced support.",
    problemStatement:
      "Many professionals struggle with managing workflows across platforms like GitHub and Google Drive, leading to inefficiencies and wasted time. Without seamless integration, teams face disjointed processes and a lack of clear data visualisation. There’s a need for a unified solution that can streamline workflows, provide secure communication, and offer insights through analytics to boost productivity. Treva bridges this gap by bringing these tools together, ensuring a smooth, integrated experience.",
    services:
      "Treva offers end-to-end workflow management with personalized workflows, secure real-time chat, and conversation history tracking. It features data visualization via Chart.js, ensuring actionable insights. Additionally, the platform supports CRUD operations and integrates third-party tools like GitHub and Google Drive for a more cohesive and efficient workflow.",
  },
  {
    id: 3,
    lottie: AR_TAX,
    projectName: "AR Tax Solutions",
    pathName: "ar-tax-solutions",
    description:
      "AR Tax Solutions is a digital platform that simplifies tax filing, billing, and financial management for individuals and businesses.Users are connected with certified Chartered Accountants for expert guidance and real-time compliance.Secure, efficient, and tailored to meet your complete tax and billing needs",
    image: Aenini,

    projectBanner: artaxsolBanner,
    briefNote:
      "AR Tax Solutions is a robust digital platform designed to streamline tax management for individuals, professionals, and businesses. The application facilitates secure tax preparation, filing, and document organization, while connecting users directly with certified Chartered Accountants for expert support and real-time compliance oversight. With an intuitive interface and personalized guidance, AR Tax Solutions ensures accurate, timely, and hassle-free tax handling tailored to each user's needs.",
    problemStatement:
      "Individuals, freelancers, and small businesses often struggle with the complexities of tax filing, billing, and regulatory compliance. Traditional methods rely heavily on manual processes, scattered records, and minimal professional support—leading to inefficiencies, inaccuracies, and increased risk of penalties. Many users lack access to reliable Chartered Accountants, resulting in missed deadlines and non-compliance with evolving tax laws. Additionally, billing management is often disconnected from tax processes, causing confusion in financial planning. There is a growing demand for a centralized, secure platform that integrates tax filing, expert consultation, and billing management in a streamlined, user-friendly interface. An accessible solution is needed to bridge the gap between users and professional-grade financial oversight",
    services:
      "AR Tax Solutions offers an all-in-one platform that simplifies tax filing, billing, and compliance for individuals and businesses. It connects users directly with certified Chartered Accountants for expert support and real-time compliance management. The app streamlines invoicing and billing alongside tax documentation, reducing errors and saving time. Secure cloud storage keeps all financial documents organized and accessible. Automated reminders help users meet deadlines and stay compliant with changing tax laws. With its intuitive interface, AR Tax Solutions makes professional-grade financial management accessible and hassle-free.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Ravi",
    position: "Contributor",
    feedback:
      "As a contributor at Economizing Futura, I’ve seen how the company simplifies complex problems with user-friendly solutions. Their dedication, professionalism, and timely delivery consistently exceed expectations, driving impactful results.",
    image: UserPlaceholder,
  },

  {
    id: 2,
    name: "Rajesh Kumar",
    position: "Director",
    feedback:
      "Economizing Futura's support team is exceptional, always providing timely and efficient solutions with a friendly approach. Their dedication to resolving issues and ensuring a seamless experience stands out.",
    image: UserPlaceholder,
  },

  {
    id: 3,
    name: "Anonymous",
    position: "Software Engineer",
    feedback:
      "Economizing Futura excels in delivering quick solutions in a short time. Their support team is both responsive and approachable, making every interaction seamless.",
    image: UserPlaceholder,
  },
];

export const Technologies = [
  {
    id: 1,
    logo: ReactNative,
    text: "React Native allows us to build high-performance, cross-platform mobile apps with a single codebase. By integrating with native components, it ensures smooth, responsive, and feature-rich experiences on both iOS and Android. React Native accelerates development, reducing time to market while maintaining top-notch quality.",
  },
  {
    id: 2,
    logo: ReactJS,
    text: "React.js enables the development of interactive, scalable, and fast web applications with ease. Its component-based architecture ensures reusability and flexibility, while the virtual DOM and declarative programming deliver responsive and seamless user experiences. React.js empowers us to build efficient, modern, and future-ready web applications.",
  },
  {
    id: 3,
    logo: Java,
    text: "Java is a cornerstone of enterprise development, valued for its stability, scalability, and platform independence. It enables secure, high-performance applications that handle complex business processes and large-scale systems. With a vast ecosystem and strong object-oriented principles, Java supports everything from mobile apps to backend systems, delivering reliable, long-term value.",
  },
  {
    id: 4,
    logo: Node,
    text: "Node.js enables efficient, scalable server-side applications with its non-blocking, event-driven architecture. Using JavaScript for both client and server, it supports seamless full-stack development and real-time data processing. Its robust ecosystem and npm accelerate development, making it ideal for high-performance, dynamic web solutions.",
  },
  {
    id: 5,
    logo: Python,
    text: "Python stands out for its simplicity and versatility, making it a go-to language for various applications. From web development and data analysis to machine learning and automation, Python’s extensive libraries and frameworks support rapid development and innovation. Its clean syntax and dynamic typing streamline coding, allowing us to build scalable and maintainable solutions quickly.",
  },
  {
    id: 6,
    logo: Neo,
    text: "Neo4j is a native graph database designed for modeling, storing, and analyzing highly connected data. It excels in uncovering patterns and insights in applications like social networks, recommendations, and fraud detection. Its flexible structure supports evolving data models, enabling agile development and powerful relationship-driven insights.",
  },
];

export const AreasConstants = [
  {
    id: "1",
    heading: "Web App Development",
    info: "We specialise in building scalable and responsive web applications tailored to meet business needs.",
    li1: "Focus on creating user-friendly, responsive interfaces that work seamlessly across devices.",
    li2: "Prioritisation of scalability, security, and performance to ensure long-term success.",
    logo: webapp,
    icons: web_dev,
  },
  {
    id: "2",
    heading: "Mobile App Development",
    logo: mobileApp,
    info: "We create mobile apps that provide seamless and engaging experiences across all platforms.",
    li1: "Our developers are expertise in developing intuitive, high-performance apps for both iOS and Android.",
    li2: "Focus on user-centric design, ensuring smooth functionality and responsiveness for all devices.",
    icons: mobiledev,
  },
  {
    id: "3",
    heading: "Devops",
    logo: devops,
    info: "Our DevOps solutions streamline the development lifecycle, ensuring faster delivery and efficient workflows.",
    li1: "We implement CI/CD pipelines using tools such as Jenkins for continuous integration, Docker for containerization, and Kubernetes for orchestration.",
    li2: "We are expertise in cloud infrastructure management on AWS, Azure, and Google Cloud to support scalable applications.",
    icons: devopsDev,
  },
  {
    id: "4",
    heading: "UI/UX Design",
    logo: uiux,
    info: "Our design philosophy revolves around crafting visually stunning and highly intuitive experiences that captivate users and drive engagement.",
    li1: "We employ a user-first design strategy, leveraging tools like Figma, Adobe XD, and Sketch to bring ideas to life with clarity and creativity.",
    li2: "By focusing on accessibility, responsive design, and dynamic prototypes, we create a fluid user experience across all platforms, ensuring every interaction is intuitive and engaging.",
    icons: UI,
  },
];

export const blogs: BlogTypes[] = [
  {
    id: '1',
    header: "From Wireframe to React.js: A Step-by-Step Guide(Part-1)",
    heading:
      "Learn How to Transform a Simple Wireframe into a Fully Functional React.js App Step by Step",
    sub: "Learn how to transform your ideas into a production-ready React.js application with this comprehensive step-by-step guide — covering everything from initial planning and wireframing to building robust components, connecting APIs, managing state, and deploying your app with best practices",
    thumbnail:
      "https://res.cloudinary.com/dtm4ec343/image/upload/thumbnail_wireFrame_p8plvj.jpg",
    slug: "wireframe-to-react-js-part-1",
    metadata: {
      author: "Hari",
      read_time: "6 min",
      published_date: "2025-07-08",
      tags: ["react", "wireframing", "frontend", "planning"],
    },
    subHeader: "Part 1: From Idea to Interactive Wireframe",
    subHeading: {
      title: "From Sketch to Wireframe: How to Plan Your React.js App",
      subheading:
        "Learn how to go from an idea to a clear, reusable wireframe and a plan that saves hours of coding.",
      description:
        "Before you write a single line of React code, you need a solid plan. This guide walks you step by step through sketching your idea, creating a wireframe, defining your components, and setting up your folder structure for success.",
      sections: [
        {
          heading: "Why You Should Never Skip Wireframing",
          content:
            "Many beginners make the mistake of jumping straight into coding without a plan. This usually leads to messy layouts, confusing components, and wasted time fixing problems later. A wireframe is like a blueprint — it helps you think through the layout, structure, and user flow of your app before you touch your keyboard. For teams, wireframes are also the easiest way to share and discuss ideas.",
          image:
            "https://res.cloudinary.com/dtm4ec343/image/upload/wireFrame_wowowi.avif",
        },
        {
          heading: "Choose a Wireframing Method",
          content:
            "Wireframes don’t need to look pretty. The goal is to communicate structure, not final design. You can:\n- Grab a pen and paper and sketch freehand.\n- Use simple digital tools like Balsamiq for low-fidelity wireframes.\n- Use modern design tools like Figma or Sketch if you want to share and iterate online.\n- Use Miro or Whimsical if you need flowcharts or to map out how pages connect.",
          image: "",
        },
        {
          heading: "Break Down Your Idea",
          content:
            "Start with a rough list of what your app needs. For example, imagine you want to build a simple dashboard:\n\n- A sidebar with navigation links.\n- A header with a logo and user info.\n- A main content area that shows cards with stats.\n\nSketch where each element goes. Think about spacing and layout. It doesn’t have to be pretty — boxes and labels are enough.",
          image: "",
        },
        {
          heading: "Identify Components Early",
          content:
            "Look for repeated elements or reusable sections. These will become your React components. For example:\n- Sidebar → `<Sidebar />`\n- Header → `<Header />`\n- Dashboard Card → `<DashboardCard />`\n- Main Content → `<MainContent />`\n\nWrite them down and think about what each needs to work. For instance, does the Sidebar need a list of links? Does the Header need a title or user info?",
          image: "",
        },
        {
          heading: "Plan Props and State",
          content:
            "A simple table helps you figure this out:\n\n| Component | What it does | Props | State |\n|-----------|---------------|-------|-------|\n| Sidebar | Shows navigation links | `links` | `isOpen` |\n| Header | Shows app name & user info | `title` | — |\n| DashboardCard | Shows a piece of data | `title`, `value` | — |\n\nThis keeps your components clean and predictable.",
          image: "",
        },
        {
          heading: "Think About Layout and Folder Structure",
          content:
            "A good folder structure keeps your project organized. For our example, you could do:\n\n```\n/src\n  /components\n    /Sidebar\n    /Header\n    /DashboardCard\n  /pages\n    /Dashboard\n  App.js\n  index.js\n```\n\nEach folder holds one component with its JS and style files. Keeping things modular makes it easier to find and reuse code later.",
          image: "",
        },
        {
          heading: "Bonus: Add Notes About Interactivity",
          content:
            "If your Sidebar can collapse, note that it needs state: `isOpen`. If your DashboardCard might have buttons, jot that down too. Future you will thank you when you start coding.",
          image: "",
        },
        {
          heading: "Wrap Up",
          content:
            "Congrats — you now have a blueprint for your React app! This simple plan will help you stay focused and organized. Next, you’ll learn how to turn this wireframe into real, reusable React components.",
          image:
            "https://res.cloudinary.com/dtm4ec343/image/upload/wireframe-final_t3ycpq.avif",
        },
      ],
      cta: "When you’re ready, read Part 2 to bring this wireframe to life in React!",
    },
  },
  {
    id: '2',
    header: "From Wireframe to React.js: A Step-by-Step Guide (Part-2)",
    heading: "Turn Your Wireframe into a Fully Functional React.js App",
    sub: "Now that you have your wireframe and plan, it’s time to build! This step-by-step guide walks you through setting up your React environment, creating reusable components, managing state, connecting APIs, styling your app, and preparing for deployment — everything you need to go from plan to production.",
    thumbnail:
      "https://res.cloudinary.com/dtm4ec343/image/upload/thumbnail_wireFrame_p8plvj.jpg",
    slug: "wireframe-to-react-js-part-2",
    metadata: {
      author: "Hari",
      read_time: "6 min",
      published_date: "2025-07-09",
      tags: [
        "react",
        "frontend",
        "components",
        "state-management",
        "deployment",
      ],
    },
    subHeader: "Part 2: From Wireframe to Live React App",
    subHeading: {
      title: "From Blueprint to Browser: Build and Launch",
      subheading:
        "It’s time to turn your clear wireframe into real code. This guide breaks down each step to build, connect, style, and deploy your React.js project.",
      description:
        "You’ve done the hard work of planning your app — now it’s time to build. In Part 2, we’ll cover how to set up your development environment, create reusable components, manage props and state, add interactivity, style your app, connect to an API, test functionality, and finally deploy your app with modern best practices.",
      sections: [
        {
          heading: "Set Up Your Project",
          content:
            "Use **Create React App**, **Vite**, or **Next.js** to spin up your project. For this example, let’s stick with Vite for a modern, fast dev environment:\n\n```bash\nnpm create vite@latest my-dashboard -- --template react\ncd my-dashboard\nnpm install\nnpm run dev\n```\n\nRemove boilerplate files you don’t need (`App.css`, `logo.svg`, etc.) and keep only a clean starting point.",
          image: "",
        },
        {
          heading: " Build Out the Folder Structure",
          content:
            "Stick to the folder plan from Part 1:\n\n```\n/src\n  /components\n    /Sidebar\n    /Header\n    /DashboardCard\n  /pages\n    /Dashboard\n  App.jsx\n  main.jsx\n```\n\nInside each component folder, keep files modular:\n- `Sidebar.jsx`\n- `Sidebar.module.css` (or `.scss` if you prefer)\n\nUse module CSS or CSS-in-JS for scoped styling.",
          image:
            "https://res.cloudinary.com/dtm4ec343/image/upload/filestructure_xng3jc.webp",
        },
        {
          heading: " Create the Basic Layout",
          content:
            "In `App.jsx`, lay out your main structure:\n\n```jsx\nimport Sidebar from './components/Sidebar/Sidebar';\nimport Header from './components/Header/Header';\nimport Dashboard from './pages/Dashboard/Dashboard';\n\nfunction App() {\n  return (\n    <div className=\"app\">\n      <Sidebar />\n      <div className=\"main-content\">\n        <Header />\n        <Dashboard />\n      </div>\n    </div>\n  );\n}\n\n App;\n```\n\nUse Flexbox or Grid for responsive layout. Keep styling minimal for now — focus on structure first.",
          image: "",
        },
        {
          heading: " Build the Sidebar Component",
          content:
            "Create `Sidebar.jsx`:\n\n```jsx\n function Sidebar({ links, isOpen, toggleSidebar }) {\n  return (\n    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>\n      <button onClick={toggleSidebar}>Toggle</button>\n      <nav>\n        <ul>\n          {links.map(link => (\n            <li key={link.href}>\n              <a href={link.href}>{link.label}</a>\n            </li>\n          ))}\n        </ul>\n      </nav>\n    </aside>\n  );\n}\n```\n\n**Props:**\n- `links` → array of nav links\n- `isOpen` → controls collapsed state\n- `toggleSidebar` → toggles open/closed",
          image: "",
        },
        {
          heading: " Build the Header Component",
          content:
            'Create `Header.jsx`:\n\n```jsx\n function Header({ title, user }) {\n  return (\n    <header className="header">\n      <h1>{title}</h1>\n      <div className="user-info">\n        <span>{user.name}</span>\n      </div>\n    </header>\n  );\n}\n```\n\nPass dynamic `title` and `user` props. This makes your header flexible for any page.',
          image: "",
        },
        {
          heading: " Build the Dashboard Page and Card",
          content:
            'In `Dashboard.jsx`:\n\n```jsx\nimport DashboardCard from \'../../components/DashboardCard/DashboardCard\';\n\n function Dashboard({ stats }) {\n  return (\n    <div className="dashboard">\n      {stats.map(stat => (\n        <DashboardCard key={stat.id} title={stat.title} value={stat.value} />\n      ))}\n    </div>\n  );\n}\n```\n\nThen in `DashboardCard.jsx`:\n\n```jsx\n function DashboardCard({ title, value }) {\n  return (\n    <div className="dashboard-card">\n      <h3>{title}</h3>\n      <p>{value}</p>\n    </div>\n  );\n}\n```\n\nUse props to keep these components reusable and easy to test.',
          image: "",
        },
        {
          heading: " Add State Management",
          content:
            "In `App.jsx`, add state for sidebar and dummy data:\n\n```jsx\nimport { useState } from 'react';\n\nfunction App() {\n  const [isSidebarOpen, setSidebarOpen] = useState(true);\n  const links = [\n    { href: '/', label: 'Home' },\n    { href: '/about', label: 'About' }\n  ];\n  const [stats, setStats] = useState([\n    { id: 1, title: 'Users', value: 120 },\n    { id: 2, title: 'Revenue', value: '$4,500' }\n  ]);\n\n  return (\n    <div className=\"app\">\n      <Sidebar links={links} isOpen={isSidebarOpen} toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />\n      <div className=\"main-content\">\n        <Header title=\"My Dashboard\" user={{ name: 'Jane Doe' }} />\n        <Dashboard stats={stats} />\n      </div>\n    </div>\n  );\n}\n```\n\nThis shows how **state flows top-down** — `App` is your single source of truth.",
          image: "",
        },
        {
          heading: " Mock API Call (Optional)",
          content:
            "Use `useEffect` to simulate fetching data:\n\n```jsx\nimport { useEffect } from 'react';\n\nuseEffect(() => {\n  fetch('/api/stats')\n    .then(res => res.json())\n    .then(data => setStats(data));\n}, []);\n\n// Or use mock:\nuseEffect(() => {\n  const timeout = setTimeout(() => {\n    setStats([\n      { id: 1, title: 'Users', value: 150 },\n      { id: 2, title: 'Revenue', value: '$5,200' }\n    ]);\n  }, 1000);\n\n  return () => clearTimeout(timeout);\n}, []);\n```\n\n✅ Good practice: Keep API calls and state updates in `App` or a context, not buried deep in components.",
          image: "",
        },
        {
          heading: " Test and Deploy",
          content:
            "- Check each component in isolation (props, state).\n- Use **React DevTools** to debug props/state.\n- Add `.env` if using real APIs.\n- For deployment, use **Vercel**, **Netlify**, or **GitHub Pages**. Vite/Next.js work great with these.",
          image: "",
        },
        {
          heading: "Wrap Up",
          content:
            "Congrats — you’ve turned your wireframe into a real React app! You now have a flexible layout, reusable components, props/state management, and a clear structure. From here, you can add routes with React Router, fetch real data, or refine your UI with a design system.\n\nKeep building — you’re no longer just planning, you’re shipping!",
          image: "",
        },
      ],
      cta: "Congrats! Share your app with the world — and keep building bigger and better projects with React.",
    },
  },
];

export async function fetchBlogs() {
  // Simulate fetching data from an API or database
  return blogs;
}

export interface BlogTypes {
  id: string;
  header: string;
  heading: string;
  sub: string;
  thumbnail: string;
  slug: string;
  metadata: {
    author: string;
    read_time: string;
    published_date: string;
    tags: string[];
  };
  subHeader?: string;
  subHeading?: {
    title: string;
    subheading: string;
    description: string;
    sections: {
      heading: string;
      content: string;
      image: string;
    }[];
    cta: string;
  };
}

//Home page
export const sectionColors = {
  default: "#aee2ff",
  scrolled: "#FFFFFF",
};

export const technologyColors = {
  default: "#c6ebff",
  scrolled: "#FFFFFF",
};

export const blogsPage = {
  default: "#aee2ff",
  scrolled: "#FFFFFF",
};

export function getPageNameFromRoute(path: string): string {
  const routeMap: Record<string, string> = {
    "/": "Landing Page",
    "/projects/:id": "Project Details",
    "/technologies": "Technologies",
    "/privacypolicy": "Privacy Policy",
    "/termsandconditions": "Terms and Conditions",
    "/blogs": "Blogs",
    "/blog/:id": "Blog",
    "/pricing": "Pricing",
  };

  if (routeMap[path]) return routeMap[path];

  if (path.startsWith("/projects/")) return routeMap["/projects/:id"];
  if (path.startsWith("/blog/")) return routeMap["/blog/:id"];

  return "Unknown Page";
}
