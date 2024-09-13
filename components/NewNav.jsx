
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope, faCode, faBriefcase } from "@fortawesome/free-solid-svg-icons";

export function NewNavbar() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: (
        <FontAwesomeIcon
          icon={faHome}
          className="h-4 w-4 text-neutral-500 dark:text-white font-bold"
        />
      ),
    },
    {
      name: "About",
      link: "#about",
      icon: (
        <FontAwesomeIcon
          icon={faUser}
          className="h-4 w-4 text-neutral-500 dark:text-white"
        />
      ),
    },
    {
      name: "Skills",
      link: "#skills",
      icon: (
        <FontAwesomeIcon
          icon={faCode}
          className="h-4 w-4 text-neutral-500 dark:text-white"
        />
      ),
    },
    {
      name: "Projects",
      link: "#projects",
      icon: (
        <FontAwesomeIcon
          icon={faBriefcase}
          className="h-4 w-4 text-neutral-500 dark:text-white"
        />
      ),
    },
   
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
      <DummyContent />
    </div>
  );
}

const DummyContent = () => {
    return (
        <>
        </>
  );
};
