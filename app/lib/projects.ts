import {
  AeiniImg,
  Aenini,
  AR_TAX,
  artaxsolBanner,
  finalAeini,
  finalTreva,
  pencil,
  Thunder,
} from "@/assets";

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