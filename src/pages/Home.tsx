import React, { useEffect, useRef, useState } from "react";
import {
  // HeroMini,
  ClientUnderline,
  Boxes,
  Area,
  FAQ,
} from "../assets/index";

// import { ButtonWrapper } from "../components/index";
import { ContactModal, EnqueryModal } from "../modal/index";
import { Toaster, toast } from "sonner";
import { sectionColors, projectsInfo } from "../constants/constants";
import { contactAPI, ContactData } from "../api/ContactAPI";
import { useScroll } from "framer-motion";
import "../card.css";
import {
  TestimonialSlider,
  Projects,
  AreaSection,
  Footer,
  Clients,
  Faq,
  Header,
} from "../sections/index";
import HeroSection from "../sections/HeroSections";
interface ProjectItem {
  id: number;
  projectName: string;
  description: string;
  lottie: object;
  projectBanner: string;
  image: string;
}

const Home: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const handleToogleForms = () => {
    setShow((pre) => !pre);
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);

  // const blog = blogs.slice(0, 3);
  const container = useRef(null);

  const [headerBg, setHeaderBg] = useState<string>(sectionColors.hero);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  console.log(headerBg);
  console.log(window.scrollY);

  useEffect(() => {
    setHeaderBg(sectionColors.hero);

    const handleScroll = () => {
      if (window.scrollY <= 160) {
        setHeaderBg(sectionColors.hero);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroSection = useRef<HTMLElement | null>(null);
  const testimonialsSection = useRef<HTMLElement | null>(null);
  const projectsSection = useRef<HTMLElement | null>(null);
  const expertiseSection = useRef<HTMLElement | null>(null);
  const clientsSection = useRef<HTMLElement | null>(null);
  const blogsSection = useRef<HTMLElement | null>(null);
  const faqSection = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            switch (entry.target) {
              case heroSection.current:
                setHeaderBg(sectionColors.hero);
                break;
              case testimonialsSection.current:
                setHeaderBg(sectionColors.testimonials);
                break;
              case projectsSection.current:
                setHeaderBg(sectionColors.projects);
                break;
              case expertiseSection.current:
                setHeaderBg(sectionColors.expertise);
                break;
              case clientsSection.current:
                setHeaderBg(sectionColors.clients);
                break;
              case blogsSection.current:
                setHeaderBg(sectionColors.blogs);
                break;
              case faqSection.current:
                setHeaderBg(sectionColors.faq);
                break;
              default:
                break;
            }
          }
        });
      },
      { threshold: 0.25 }
    );

    const sections = [
      heroSection,
      testimonialsSection,
      projectsSection,
      expertiseSection,
      clientsSection,
      blogsSection,
      faqSection,
    ];
    sections.forEach((section) => {
      if (section.current) observer.observe(section.current);
    });

    return () => {
      sections.forEach((section) => {
        if (section.current) observer.unobserve(section.current);
      });
    };
  }, []);

  const handleFormSubmit = async (data: ContactData) => {
    if (
      data.firstName === "" ||
      data.lastName === "" ||
      data.email === "" ||
      data.comments === ""
    ) {
      toast.error("All fields are required");
      return;
    }
    try {
      const response = await contactAPI(data, setIsLoading);
      toast.success(response.message);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // const navigate = useNavigate();
  return (
    <div className=" mt-16 overflow-x-clip flex flex-col justify-between ">
      <Toaster richColors />
      {show && (
        <ContactModal
          isLoading={isLoading}
          isModalOpen={show}
          handleToggle={handleToogleForms}
          onFormSubmit={handleFormSubmit}
        />
      )}
      <div className="xl:right-8 xl:bottom-8 lg:right-8 right-5 bottom-5 z-50 fixed">
        <EnqueryModal isLoading={isLoading} onFormSubmit={handleFormSubmit} />
      </div>
      <Header
        width={"xl:w-[1167px] "}
        handleShowForms={handleToogleForms}
        background={headerBg}
        home={true}
      />
      {/* ceedff #DAF1FF bg-[#aee2ff] */}
      <section
        ref={heroSection}
        className="flex w-full lg:flex-row flex-col py-5 md:py-0  justify-center xl:justify-end heroSectionBackground backdrop-blur-304 bg-opacity-50 items-center  lg:h-[650px] "
      >
        {/* heroSectionBackground  */}
        <HeroSection onClickButton={handleToogleForms} />
      </section>
      {/* Testimonials */}
      <section
        ref={testimonialsSection}
        className="testmonial font-hellix w-full h-auto xl:h-[580px]  lg:py-20 flex flex-col justify-evenly bg-[#E0F3FF]  space-y-10"
      >
        <div className=" relative lg:max-w-[523px] mx-auto">
          <h1 className=" text-center font-hellixBold sm:text-[38px] text-[20px] sm:leading-[45px] text-[#031924]">
            Testimonials for Happy Clients
          </h1>
          <img
            src={ClientUnderline}
            alt=""
            className="absolute md:right-0 sm:right-16 md:translate-x-3 w-[135px] sm:w-auto right-11 md:top-12"
          />
        </div>
        <div className=" flex h-full lg:py-0 w-screen overflow-x-auto relative">
          <TestimonialSlider />
        </div>
      </section>
      {/* projects */}
      <section
        ref={(el) => {
          projectsSection.current = el;
        }}
        className="bodyBackground relative md:py-10 "
      >
        <img
          src={Boxes}
          alt=""
          className="absolute w-2/3 md:w-auto right-0 top-1 "
        />

        {/* sticky top-20 z-10 bg-white pb-8 */}
        <div className=" content-why md:pt-[90px] font-hellix transition-opacity duration-500 static lg:sticky top-0">
          <h1 className="font-hellixBold text-[32px] sm:text-[38px] leading-[40px] sm:leading-[45.61px] text-[#031924] text-center pageTitle">
            Projects
          </h1>
        </div>

        <div ref={container} className="relative px-2 sm:px-0">
          {projectsInfo.map((a: ProjectItem, i: number) => {
            const targetScale = 1 - (projectsInfo.length - i) * 0.05;
            return (
              <Projects
                key={a.id}
                project={a}
                i={i}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </section>
      {/* Area of expertise */}
      <section
        ref={expertiseSection}
        className="h-min py-8 xl:h-[2033px] flex flex-col justify-center  sm:mt-40 md:mt-0 items-center bg-[#032435] w-full font-hellix lg:gap-16 xl:gap-20"
      >
        <div className="relative my-10">
          <h1 className="font-hellixBold text-[30px] md:text-[38px] leading-[45.61px] text-[#ffffff] text-center">
            Area of <span className="text-[#20B2FF]">{"  "}Expertise</span>
          </h1>
          <img
            src={Area}
            alt=""
            className="absolute lg:-top-5 md:h-20 md:-right-9 md:-top-5 lg:-right-6 -top-2 -right-5  h-[60px] lg:h-auto"
          />
        </div>
        <AreaSection />
      </section>
      {/* section Client handling */}
      <section
        ref={clientsSection}
        className="h-auto font-hellix lg:h-[818px] py-6 md:py-0 bg-[#F4F8FB] flex flex-col justify-center lg:justify-evenly items-center w-full "
      >
        <h1 className="text-[32px] lg:text-[38px] leading-tight lg:leading-[45.16px] font-hellixBold text-center text-[#032435] mb-10">
          Client Handling
        </h1>
        <Clients />
      </section>
      {/* Blogs */}
      {/* <section
        ref={blogsSection}
        className=" flex flex-col xl:max-w-screen justify-evenly items-center py-6 md:py-0 md:h-[741px]  bg-[#FFFFFF] font-hellix"
      >
        <h1 className="text-[32px] md:text-[38px] py-4 md:py-0 md:leading-[45.61px] font-hellixBold text-[#032435] leading-tight text-center">
          Blog
        </h1>

        <div className="flex font-hellix flex-row xl:w-[1139px] justify-start md:justify-between overflow-x-auto  gap-4 md:gap-6 items-center w-full sm:w-4/5 md:px-0 px-5 h-auto">
          {blog.map((a) => (
            <BlogsCard card={a} key={a.id} />
          ))}
        </div>

        <button
          onClick={() => navigate("/blogs")}
          className="w-[120px] h-[40px] md:w-[140px] md:h-[45px] lg:w-[202px] lg:h-[56px] font-hellixBold text-[14px] md:text-[16px] lg:text-[18px] leading-snug bg-[#F1FAFF] text-primary  mt-6 xl:me-52 ml-auto"
        >
          View All
        </button>
      </section> */}
      {/* F4F8FB */}
      {/* FAQ */}
      <section
        ref={faqSection}
        className="bg-[#F4F8FB] min-h-[500px] sm:min-h-[600px] xl:h-[699px] w-full font-hellix py-8 sm:py-12 xl:py-16"
      >
        <div className="container mx-auto max-w-[1120px] h-auto flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8">
          {/* Left content */}
          <div className="flex flex-col items-center lg:items-start space-y-6 lg:max-w-[360px]">
            <h1 className="text-[#032435] font-hellixBold text-2xl sm:text-3xl lg:text-[38px] leading-tight md:leading-[45.61px] max-w-[360px]">
              Frequently asked questions
            </h1>
            <img
              src={FAQ}
              alt=""
              className="w-full max-w-[300px] lg:max-w-[360px] object-contain"
            />
          </div>
          {/* Right content */}
          <div className="flex-1 lg:max-w-[608px] bg-[#F4F8FB] flex justify-center">
            <Faq />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
