import "./courses.css";
import "../../styles/global.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import JoinUs from "../../components/JoinUs/JoinUs.jsx";
import AllCourseCards from "../../components/courescared/AllCourseCards.jsx";
import CoursesHeroSection from "../../components/coursesHeroSection/coursesHeroSection.jsx";

import { useEffect } from "react";
export default function Courses() {
  //ScrollToTOp
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    })
  }, []);

  return (
    <main className="coursesPage">
      {/*page main title */}
      <CoursesHeroSection
        image="./heroForCourses2.png"
        title="الدورات"
        description="نوفر لك دورات تعليمية متكاملة تساعدك على تطوير مهاراتك بوضوح وسلاسة، مع محتوى يناسب جميع المستويات."
        buttonText="اكتشف برامجنا التعليمية"
        subtext=" طوّر مهاراتك بخطوات بسيطة وواضحة"
      />

      {/*section title  component*/}
      <SectionTitle
        subTitle="ميزات الدورات"
        mainTitle="أفضل الدورات المتاحة لك"
        description="نوفر لك دورات تعليمية شاملة تساعدك على تطوير مهاراتك بوضوح وسهولة. جميع الدروس مصممة لتناسب مختلف المستويات مع شرح مبسّط وتمارين تطبيقية."
      />

      {/*cards component */}
      <div className="arwacourses">
      <AllCourseCards />
      </div>
      {/*JoinUs component */}
      <JoinUs />
    </main>
  );
}