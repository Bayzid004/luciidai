import React from "react";
import FreelancerVettingSection from "./freelancerVettingSection/FreelancerVettingSection";
import PlatformWalkthrough from "./platformWalkthrough/PlatformWalkthrough";
import FAQSection from "./platformWalkthrough/fAQSection/FAQSection";


const FreelancersPage = () => {
  return (
    <div>
     <section>
        <FreelancerVettingSection/>
     </section>
     <section>
        <PlatformWalkthrough/>
     </section>
     <section>
        <FAQSection/>
     </section>
    </div>
  );
};

export default FreelancersPage;
