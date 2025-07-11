import BlogsPage from "@/components/BlogsPage";
import { v4 as uuidv4 } from "uuid";

interface BlogTypes {
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

const blogs: BlogTypes[] = [
  {
    id: uuidv4(),
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
    id: uuidv4(),
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

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export default function Page({ params }: PageProps) {
  const blog = blogs.find((blog) => blog.slug === params.slug);

  if (!blog) return <div>Not found</div>;
  return <BlogsPage slug={blog.slug} />;
}
