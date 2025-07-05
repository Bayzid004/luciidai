import React from "react";
import AboutUs from "./about/AboutUs";
import MissionValues from "./missionValues/MissionValues";
import WhatWeDo from "./whatWeDo/WhatWedo";
import QAPhilosophy from "./qAPhilosophy/QAPhilosophy";

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
        <WhatWeDo />
      </section>
      <section>
        <QAPhilosophy />
      </section>
    </div>
  );
};

export default AboutUsPage;
