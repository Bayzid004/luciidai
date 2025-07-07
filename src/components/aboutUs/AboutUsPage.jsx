import React from "react";
import AboutUs from "./about/AboutUs";
import MissionValues from "./missionValues/MissionValues";
import QAPhilosophy from "./qAPhilosophy/QAPhilosophy";
import OurWorking from "./whatWeDo/OurWorking";
import MeetTheTeamSection from "./meetTheTeamSection/MeetTheTeamSection";

const AboutUsPage = () => {
  return (
    <div>
      <section>
        <AboutUs />
      </section>
      <section>
        <MissionValues />
      </section>
      <section>
        <OurWorking />
      </section>
      <section>
        <QAPhilosophy />
      </section>
      <section>
        <MeetTheTeamSection />
      </section>
    </div>
  );
};

export default AboutUsPage;
