import React from "react";
import AboutUs from "./about/AboutUs";
import MissionValues from "./missionValues/MissionValues";
import WhatWeDo from "./whatWeDo/WhatWedo";

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
        <WhatWeDo/>
      </section>
    </div>
  );
};

export default AboutUsPage;
