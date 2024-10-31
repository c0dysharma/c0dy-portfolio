import { SectionHeading } from "./components/SectionHeading";
import { SectionCTABtn } from "./components/SectionCTABtn";

const About = () => {
  const onCTAClickHandler = () => {
    window.open("https://bit.ly/3C3NtXX");
  };

  return (
    <div>
      <div className="mb-10 text-center md:text-left md:flex justify-between">
        <SectionHeading
          headingText="About me"
          subHeadingText="Little bit of myself if you are interested"
        />
        <div className="hidden md:inline-block">
          <SectionCTABtn text="Download CV" onCTAClick={onCTAClickHandler} />
        </div>
      </div>

      <div className="grid gap-5 justify-center md:grid-cols-2 md:gap-0">
        <img
          src="/assets/images/me&tea.jpg"
          alt="Kuldeep with nice cup of tea"
          className="rounded-base max-w-[400px] w-full md:col-start-2 mx-auto"
        />
        <p className="text-center md:text-left md:col-start-1 md:row-start-1 md:text-lg">
          Hi, I'm Kuldeep and working as a<strong> Software Engineer.</strong>{" "}
          I've had a passion for computers since childhood and started coding in
          8th grade.
          <br /> <br />
          Over time, I've gained proficiency in various programming languages
          and skills such as Typescript, C, C++, Dart, and Python. Really into
          design systems and backend infra.
          <br />
          <br />
          Originally from a small town in Haryana, I'm now based in
          <strong> New Delhi</strong> and eagerly seeking exciting career
          opportunities to help me unleash my full potential. <br /> <br /> To
          know more{" "}
          <span
            className="text-accentColor font-bold cursor-pointer"
            onClick={onCTAClickHandler}
          >
            Download my CV.
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
