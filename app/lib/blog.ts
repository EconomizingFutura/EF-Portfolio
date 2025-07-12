type BlogTypes = {
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
};

// Server-side function to fetch blogs
export const getBlogs: BlogTypes[] =[
    {
      id: '1',
      header: "From Wireframe to React.js: A Step-by-Step Guide (Part-1)",
      heading: "Learn How to Transform a Simple Wireframe into a Fully Functional React.js App Step by Step",
      sub: "Learn how to transform your ideas into a production-ready React.js application with this comprehensive step-by-step guide — covering everything from initial planning and wireframing to building robust components, connecting APIs, managing state, and deploying your app with best practices",
      thumbnail: "https://res.cloudinary.com/dtm4ec343/image/upload/thumbnail_wireFrame_p8plvj.jpg",
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
        subheading: "Learn how to go from an idea to a clear, reusable wireframe and a plan that saves hours of coding.",
        description: "Before you write a single line of React code, you need a solid plan. This guide walks you step by step through sketching your idea, creating a wireframe, defining your components, and setting up your folder structure for success.",
        sections: [
          // ... (sections omitted for brevity)
        ],
        cta: "When you’re ready, read Part 2 to bring this wireframe to life in React!",
      },
    },
    {
      id: '2',
      header: "From Wireframe to React.js: A Step-by-Step Guide (Part-2)",
      heading: "Turn Your Wireframe into a Fully Functional React.js App",
      sub: "Now that you have your wireframe and plan, it’s time to build! This step-by-step guide walks you through setting up your React environment, creating reusable components, managing state, connecting APIs, styling your app, and preparing for deployment — everything you need to go from plan to production.",
      thumbnail: "https://res.cloudinary.com/dtm4ec343/image/upload/thumbnail_wireFrame_p8plvj.jpg",
      slug: "wireframe-to-react-js-part-2",
      metadata: {
        author: "Hari",
        read_time: "6 min",
        published_date: "2025-07-09",
        tags: ["react", "frontend", "components", "state-management", "deployment"],
      },
      subHeader: "Part 2: From Wireframe to Live React App",
      subHeading: {
        title: "From Blueprint to Browser: Build and Launch",
        subheading: "It’s time to turn your clear wireframe into real code. This guide breaks down each step to build, connect, style, and deploy your React.js project.",
        description: "You’ve done the hard work of planning your app — now it’s time to build. In Part 2, we’ll cover how to set up your development environment, create reusable components, manage props and state, add interactivity, style your app, connect to an API, test functionality, and finally deploy your app with modern best practices.",
        sections: [
          // ... (sections omitted for brevity)
        ],
        cta: "Congrats! Share your app with the world — and keep building bigger and better projects with React.",
      },
    },
  ];
