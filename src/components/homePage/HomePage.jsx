import React from "react";
import Banner from "./banner/Banner";
import WhyAinovaq from "./whyAinovaq/WhyAinovaq";
import StepsOfWork from "./stepsofWork/StepsOfWork";
import BeforeProject from "./beforeProject/BeforeProject";
import AfterProjectProcess from "./afterProjectProcess/AfterProjectProcess";
import ServicesOverview from "./servicesOverview/ServicesOverview";

const HomePage = () => {
  return (
    <div>
      <section>
        <Banner />
      </section>
      <section>
        <WhyAinovaq />
      </section>
      <section>
        <ServicesOverview />
      </section>
      <section>
        <StepsOfWork />
      </section>
      <section id="how-we-work">
        <BeforeProject />
      </section>
      <section>
        <AfterProjectProcess />
      </section>
    </div>
  );
};

export default HomePage;
