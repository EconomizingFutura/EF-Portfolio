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

export const testimonials = [
  {
    id: 1,
    name: "Michel Bromely",
    position: "Co-founder",
    feedback:
      "Their team is large to handle multiple projects at once, and likes to resolve challenges as well as learn new things. They also welcome regular, and of course, needless to say, develop everything in sprints.",
    image: Testimonial,
  },
  {
    id: 3,
    name: "Michel Bromely",
    position: "Co-founder",
    feedback:
      "Their team is large to handle multiple projects at once, and likes to resolve challenges as well as learn new things. They also welcome regular, and of course, needless to say, develop everything in sprints.",
    image: Testimonial,
  },
  {
    id: 2,
    name: "Michel Bromely",
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
  },
  {
    id: "2",
    heading: "Mobile App Development",
    logo: mobileApp,
    info: "We create mobile apps that provide seamless and engaging experiences across all platforms.",
    li1: "Our developers are expertise in developing intuitive, high-performance apps for both iOS and Android.",
    li2: "Focus on user-centric design, ensuring smooth functionality and responsiveness for all devices.",
  },
  {
    id: "3",
    heading: "Devops",
    logo: devops,
    info: "Our DevOps solutions streamline the development lifecycle, ensuring faster delivery and efficient workflows.",
    li1: "We implement CI/CD pipelines using tools such as Jenkins for continuous integration, Docker for containerization, and Kubernetes for orchestration.",
    li2: "We are expertise in cloud infrastructure management on AWS, Azure, and Google Cloud to support scalable applications.",
  },
  {
    id: "4",
    heading: "UI/UX Design",
    logo: uiux,
    info: "Our design philosophy revolves around crafting visually stunning and highly intuitive experiences that captivate users and drive engagement.",
    li1: "We employ a user-first design strategy, leveraging tools like Figma, Adobe XD, and Sketch to bring ideas to life with clarity and creativity.",
    li2: "By focusing on accessibility, responsive design, and dynamic prototypes, we create a fluid user experience across all platforms, ensuring every interaction is intuitive and engaging.",
  },
];
