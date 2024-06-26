import React from "react";
import { SectionHeading } from "./components/SectionHeading";

const CTAButton = ({ text, logo, link, target, className }) => {
  return (
    <a
      href={link}
      target={target}
      className={"flex justify-center" + " " + className}
    >
      <div
        className="flex gap-7 items-center justify-center bg-forgroundColor rounded-base
      w-full h-16 md:w-72 md:h-20 visited:bg-hoverForegroundColor hover:bg-hoverForegroundColor active:bg-hoverForegroundColor"
      >
        <span className="text-lg sm:text-base md:text-2xl text-white">
          {text}
        </span>
        <img
          src={logo}
          alt="Social Media Logo"
          className="inline-block w-8 h-8"
        />
      </div>
    </a>
  );
};

const Footer = () => {
  return (
    <div>
      <div className="mb-16 text-center">
        <SectionHeading
          headingText="That's it"
          subHeadingText="Now its your turn to say Hi"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <CTAButton
          text="Linked In"
          logo="/assets/logos/linkedin.svg"
          target="_blank"
          link="https://linkedin.com/in/c0dysharma"
        />

        <CTAButton
          text="Github"
          logo="/assets/logos/github.svg"
          target="_blank"
          link="https://github.com/c0dysharma"
        />

        <CTAButton
          text="Email Me"
          logo="/assets/logos/email.svg"
          link="mailto:codysharma01@gmail.com"
          className=""
        />
      </div>
    </div>
  );
};

export default Footer;
