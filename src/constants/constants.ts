import Testimonial from "../assets/Testimonial.png";
import Python from "../assets/Python.svg";
import Node from "../assets/Node.svg";
import ReactJS from "../assets/ReactJS.png";
import ReactNative from "../assets/ReactNative.svg";
import Java from "../assets/Java.png";
import mobileApp from "../assets/mobileApp.svg";
import webapp from "../assets/webapp.svg";
import devops from "../assets/devops.svg";
import uiux from "../assets/uiux.svg";
import Blog_banner_1 from "../assets/Blog_banner_1.svg";
import Blog_banner_2 from "../assets/Blog_banner_2.svg";
import pencil from "../assets/pencil.json";
import Blogs1 from "../assets/Blogs1.svg";
import Thunder from "../assets/Thunder.json";
import AeniniBanner from "../assets/AeniniBanner.svg";
import Aenini from "../assets/Aenini.svg";
import TrevaChat from "../assets/TrevaChat.svg";
import AeiniImg from "../assets/AeiniImg.svg";
import mobiledev from "../assets/mobiledev.svg";
import web_dev from "../assets/web_dev.svg";
import devopsDev from "../assets/devopsDev.svg";
import UI from "../assets/UI.svg";
export const navLinks = [
  {
    id: 1,
    link: "/",
    name: "",
  },
  {
    id: 2,
    link: "/pricing",
    name: "Pricing",
  },
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
}
export const projectsInfo: ProjectItem[] = [
  {
    id: 1,
    lottie: Thunder,
    projectName: "Aenini",
    description:
      "Aenini is an offline tool for counting warp and weft threads in fabric, with data stored locally. It ensures real-time thread count analysis for fabric quality in textile manufacturing. The user-friendly interface allows seamless operation without internet access.",
    projectBanner: AeniniBanner,
    image: Aenini,
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
    projectBanner: TrevaChat,
    image: AeiniImg,
    briefNote:
      "Treva is a comprehensive platform designed to simplify workflow management by integrating with GitHub and Google Drive. It offers an intuitive dashboard for reviewing workflows, managing user data, and visualising chat sessions. Treva Chat provides a seamless chatbot experience with conversation history, feedback mechanisms, and reference tracking for enhanced support.",
    problemStatement:
      "Many professionals struggle with managing workflows across platforms like GitHub and Google Drive, leading to inefficiencies and wasted time. Without seamless integration, teams face disjointed processes and a lack of clear data visualisation. There’s a need for a unified solution that can streamline workflows, provide secure communication, and offer insights through analytics to boost productivity. Treva bridges this gap by bringing these tools together, ensuring a smooth, integrated experience.",
    services:
      "Treva offers end-to-end workflow management with personalized workflows, secure real-time chat, and conversation history tracking. It features data visualization via Chart.js, ensuring actionable insights. Additionally, the platform supports CRUD operations and integrates third-party tools like GitHub and Google Drive for a more cohesive and efficient workflow.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Miche",
    position: "Co-founder",
    feedback:
      "Their team is large to handle multiple projects at once, and likes to resolve challenges as well as learn new things. They also welcome regular, and of course, needless to say, develop everything in sprints.",
    image: Testimonial,
  },
  {
    id: 3,
    name: "Bromely",
    position: "Co-founder",
    feedback:
      "Their team is large to handle multiple projects at once, and likes to resolve challenges as well as learn new things. They also welcome regular, and of course, needless to say, develop everything in sprints.",
    image: Testimonial,
  },
  {
    id: 2,
    name: "Lllllallall",
    position: "Co-founder",
    feedback:
      "Their team is large to handle multiple projects at once, and likes to resolve challenges as well as learn new things. They also welcome regular, and of course, needless to say, develop everything in sprints.",
    image: Testimonial,
  },
  {
    id: 2,
    name: "Lllllallall",
    position: "Co-founder",
    feedback:
      "Their team is large to handle multiple projects at once, and likes to resolve challenges as well as learn new things. They also welcome regular, and of course, needless to say, develop everything in sprints.",
    image: Testimonial,
  },
  {
    id: 2,
    name: "Lllllallall",
    position: "Co-founder",
    feedback:
      "Their team is large to handle multiple projects at once, and likes to resolve challenges as well as learn new things. They also welcome regular, and of course, needless to say, develop everything in sprints.",
    image: Testimonial,
  },
  {
    id: 2,
    name: "Lllllallall",
    position: "Co-founder",
    feedback:
      "Their team is large to handle multiple projects at once, and likes to resolve challenges as well as learn new things. They also welcome regular, and of course, needless to say, develop everything in sprints.",
    image: Testimonial,
  },
];

export const Technologies = [
  {
    id: 1,
    logo: ReactNative,
    text: "React Native enables us to build high-performance, cross-platform mobile apps with a single codebase. By leveraging its seamless integration with native components, we deliver smooth, responsive, and feature-rich mobile experiences for both iOS and Android platforms, ensuring a consistent user experience across devices. With React Native, we bring efficiency and innovation to mobile app development, reducing time to market without compromising on quality.",
  },
  {
    id: 2,
    logo: ReactJS,
    text: "React.js allows us to develop highly interactive, scalable, and fast web applications with ease. Its component-based architecture ensures reusability and flexibility, enabling us to create complex user interfaces with minimal code. By leveraging React’s virtual DOM and declarative programming model, we deliver fast, responsive, and seamless user experiences across web platforms. With React.js, we push the boundaries of modern web development, crafting applications that are both efficient and future-ready.",
  },
  {
    id: 3,
    logo: Java,
    text: "Java is the backbone of our enterprise-level development, known for its stability, scalability, and platform independence. With Java, we build secure, high-performance applications that can handle complex business processes and large-scale systems. Its vast ecosystem and strong object-oriented principles make it ideal for developing everything from mobile apps to web platforms and backend systems. Java’s reliability ensures our solutions can grow alongside our clients' evolving needs, delivering long-term value.",
  },
  {
    id: 4,
    logo: Node,
    text: "Node.js empowers us to create highly efficient and scalable server-side applications with its non-blocking, event-driven architecture. Leveraging JavaScript on both the client and server sides, Node.js allows for seamless full-stack development and real-time data processing. Its robust ecosystem and package management system (npm) accelerate development, enabling us to build high-performance applications that handle large volumes of data and user interactions effectively. With Node.js, we deliver dynamic, real-time solutions that keep pace with modern web demands.",
  },
  {
    id: 5,
    logo: Python,
    text: "Python stands out for its simplicity and versatility, making it a go-to language for various applications. From web development and data analysis to machine learning and automation, Python’s extensive libraries and frameworks support rapid development and innovation. Its clean syntax and dynamic typing streamline coding, allowing us to build scalable and maintainable solutions quickly.",
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

export const blogs = [
  {
    id: 1,
    header: "Name",
    date: "25 March",
    min: "3 Mins",
    heading:
      "How Scanflow helps manufacturing Industries with VIN number Scanning",
    sub: "Managing a tire warehouse efficiently is critical for businesses in the automotive industry.",
    icon: Blog_banner_1,
  },
  {
    id: 2,
    header: "Name",
    date: "25 March",
    min: "3 Mins",
    heading:
      "How Scanflow helps manufacturing Industries with VIN number Scanning",
    sub: "Managing a tire warehouse efficiently is critical for businesses in the automotive industry.",
    icon: Blog_banner_2,
  },
  {
    id: 3,
    header: "Name",
    date: "25 March",
    min: "3 Mins",
    heading:
      "How Scanflow helps manufacturing Industries with VIN number Scanning",
    sub: "Managing a tire warehouse efficiently is critical for businesses in the automotive industry.",
    icon: Blogs1,
  },
  {
    id: 4,
    header: "Name",
    date: "25 March",
    min: "3 Mins",
    heading:
      "How Scanflow helps manufacturing Industries with VIN number Scanning",
    sub: "Managing a tire warehouse efficiently is critical for businesses in the automotive industry.",
    icon: Blog_banner_2,
  },
  {
    id: 5,
    header: "Name",
    date: "25 March",
    min: "3 Mins",
    heading:
      "How Scanflow helps manufacturing Industries with VIN number Scanning",
    sub: "Managing a tire warehouse efficiently is critical for businesses in the automotive industry.",
    icon: Blog_banner_1,
  },
  {
    id: 6,
    header: "Name",
    date: "25 March",
    min: "3 Mins",
    heading:
      "How Scanflow helps manufacturing Industries with VIN number Scanning",
    sub: "Managing a tire warehouse efficiently is critical for businesses in the automotive industry.",
    icon: Blogs1,
  },
  {
    id: 7,
    header: "Name",
    date: "25 March",
    min: "3 Mins",
    heading:
      "How Scanflow helps manufacturing Industries with VIN number Scanning",
    sub: "Managing a tire warehouse efficiently is critical for businesses in the automotive industry.",
    icon: Blog_banner_2,
  },
  {
    id: 8,
    header: "Name",
    date: "25 March",
    min: "3 Mins",
    heading:
      "How Scanflow helps manufacturing Industries with VIN number Scanning",
    sub: "Managing a tire warehouse efficiently is critical for businesses in the automotive industry.",
    icon: Blog_banner_1,
  },
  {
    id: 9,
    header: "Name",
    date: "25 March",
    min: "3 Mins",
    heading:
      "How Scanflow helps manufacturing Industries with VIN number Scanning",
    sub: "Managing a tire warehouse efficiently is critical for businesses in the automotive industry.",
    icon: Blogs1,
  },
];
// src/constants/sectionColors.js
export const sectionColors = {
  hero: "#aee2ff",
  testimonials: "#E0F3FF",
  projects: "#FFFFFF",
  expertise: "#aee2ff",
  clients: "#F4F8FB",
  blogs: "#FFFFFF",
  faq: "#F4F8FB",
};
