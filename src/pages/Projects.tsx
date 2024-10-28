import React, { useState } from "react";
import Footer from "../sections/Footer";
import EnqueryModal from "../modal/EnqueryModal";
import ContactModal from "../modal/ContactModal";
import { useParams } from "react-router";
import { projectsInfo } from "../constants/constants";
const Projects: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleToggle = () => {
    setShowModal(!showModal);
  };
  const params = useParams();
  const projectDetails = projectsInfo.filter((a) => a.id === Number(params.id));
  console.log(projectDetails);
  return (
    <div className=" min-h-screen flex flex-col overflow-x-hidden">
      <div className="  md:right-10 md:bottom-10 right-5 bottom-5 z-50 fixed">
        <EnqueryModal />
      </div>
      {showModal && (
        <ContactModal isModalOpen={showModal} handleToggle={handleToggle} />
      )}
      <div className=" flex-grow "></div>
      <Footer />
    </div>
  );
};

export default Projects;
