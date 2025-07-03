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
  Blog_banner_1,
  Blog_banner_2,
  pencil,
  Blogs1,
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
  artaxsolBanner
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
  // {
  //   id: 3,
  //   link: "/blogs",
  //   name: "Blogs",
  // },
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
    pathName: 'aenini',
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
    pathName:'treva-chat',
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
    pathName:'ar-tax-solutions',
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
//Home page
export const sectionColors = {
  hero: "#aee2ff",
  testimonials: "#FFFFFF",
  projects: "#FFFFFF",
  expertise: "#FFFFFF",
  clients: "#F4F8FB",
  blogs: "#FFFFFF",
  faq: "#FFFFFF",
};

