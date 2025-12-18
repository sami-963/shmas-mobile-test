import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "../Team/Team.css";
import "../Home/home.css";
import "..//../styles/global.css";

import "..//../components/header/header.jsx";
import CourseCard from "..//../components/courescared/Course3d.jsx";
import PartnerCompanies from "../../components/PartnerCompanies/PartnerCompanies";
import MethodologyS from "../../components/meethodeCreis/meethodecreis.jsx";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import PersonRate from "../../components/Team/PersonRate.jsx";
import Card from "../../components/Card/card.jsx";

import { FaPlay } from "react-icons/fa";
import { FaRunning } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import img from "../../../public/handsome-guy.jpg";
import img1 from "../../../public/tablet-and-computers.jpg";
import img2 from "../../../public/printer-in-modern.jpg";
import img3 from "../../../public/house-interior.jpg";
import Blogcard from "../../components/Blogs/BlogCard";
import Our_lis from "../../components/home/Our_lis.jsx";
import Elementor from "../../components/home/Elementor.jsx";

import "swiper/css";

const Blog_cardd = [
  {
    id: 1,
    img: img1,
    title: "أساسيات التعلّم الذاتي",
    text: "مقال يقدم نظرة شاملة حول كيف تبدأ رحلتك التعليمية خطوة بخطوة وبأسلوب مبسط.",
  },

  {
    id: 2,
    img: img2,
    title: "طرق فعّالة لتنظيم وقت الدراسة",
    text: "تعرف على أفضل الأساليب والطرق التي تساعدك على إدارة وقتك وتحسين إنتاجيتك في التعلم.",
  },

  {
    id: 3,
    img: img3,
    title: "كيف تختار الدورة المناسبة لك؟",
    text: "مقال يشرح أهم المعايير التي تساعدك في اختيار الدورة المناسبة حسب مستواك واهتماماتك.",
  },
];
const TotalPersonRate = [
  {
    id: 1,
    img,
    title: "Client",
    name: "Halil",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci dunt ut labore et dolore magna eiusmod.",
  },
  {
    id: 2,
    img,
    title: "Client",
    name: "Arwa",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci dunt ut labore et dolore magna eiusmod.",
  },
  {
    id: 3,
    img,
    title: "Client",
    name: "Sami",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci dunt ut labore et dolore magna eiusmod.",
  },
  {
    id: 4,
    img,
    title: "Client",
    name: "Lujain",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci dunt ut labore et dolore magna eiusmod.",
  },
  {
    id: 5,
    img,
    title: "Client",
    name: "sheyma",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci dunt ut labore et dolore magna eiusmod.",
  },
  {
    id: 6,
    img,
    title: "Client",
    name: "maha",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci dunt ut labore et dolore magna eiusmod.",
  },
];

function Home() {
  return (
    <div className="g-home">
      <div class="team-banner flex">
        <div class="team-glass flex">
          <span class="team-dot"></span>
          <p className="flex">
            تم تطوير هذا الموقع من قبل طلاب هذه المنصة التعليمية.
            <Link to="/Team" className="flex">
              تعرّف على الفريق
              <FaArrowLeft className="team-arrow" />
            </Link>
          </p>
        </div>
      </div>
      <main className="container flex">
        <div className="main_img">
          <img src="/Working-at-Office.png" alt="" />
        </div>
        <div className="main_text">
          <p>معًا لبناء مستقبلٍ رقميٍّ مشرق</p>
          <h3>
            دعونا نتعلم <span> مهارات جديدة </span> بسرعة وبطريقة إبداعية
          </h3>
          <p>
            نقدّم لك مجموعة متكاملة من الدورات التعليمية المصممة خصيصًا لمساعدتك
            على تطوير مهاراتك في مختلف المجالات، مع محتوى مناسب لجميع
            المستويات—من المبتدئ الذي يبدأ من الصفر، إلى المتقدم الذي يريد
            الاحتراف.
          </p>
          <div className="startd_box">
            <div className="learn_more flex">
              <Link className="" to="/">
                تعرف علي مزيد{" "}
              </Link>
              <div className="play">
                <span>
                  <FaPlay className="faplay" />
                </span>
              </div>
            </div>
            <Link className="buttun" to="/Courses">
              <span>البدا</span>
            </Link>
          </div>
        </div>
      </main>
      <div className="container d3-curses ">
        <div className="boxs_tob flex">
          <div className="box_text">
            <h5>ماذا نقدّم؟</h5>

            <h3>
              نحن نقدّم لك دورة
              <span> شاملة ومتكاملة</span>
            </h3>
            <p>
              {" "}
              هنا تتعلّم جميع الأساسيات بطريقة احترافية، مع أفضل المدرّسين
              المتخصصين في المجال.
            </p>
            <button>اقرا المزيد</button>
          </div>
          <CourseCard
            description="    هنا تتعلم جميع أساسيات الجافا سكربت بشكل احترافي، مع أفضل المدرسين
              المتخصصين في المجال."
            title="كورس جافا سكريبت"
            imgSrc="/icon-1.png"
          />
          <CourseCard
            description="    هنا تتعلم جميع أساسيات الجافا سكربت بشكل احترافي، مع أفضل المدرسين
              المتخصصين في المجال."
            title="كورس React"
            imgSrc="/icon-2.png"
          />
        </div>
        <div className="boxs_tob flex">
          <CourseCard
            className=""
            description="    هنا تتعلم جميع أساسيات الجافا سكربت بشكل احترافي، مع أفضل المدرسين
              المتخصصين في المجال."
            title="كورس جافا سكريبت"
            imgSrc="/icon-3.png"
          />
          <CourseCard
            description="    هنا تتعلم جميع أساسيات الجافا سكربت بشكل احترافي، مع أفضل المدرسين
              المتخصصين في المجال."
            title="كورس React"
            imgSrc="/icon-6.png"
          />
          <CourseCard
            description="    هنا تتعلم جميع أساسيات الجافا سكربت بشكل احترافي، مع أفضل المدرسين
              المتخصصين في المجال."
            title="كورس React"
            imgSrc="/icon-7.png"
          />
          <CourseCard
            title="كورس التصميم 3D"
            description="    هنا تتعلم جميع أساسيات الجافا سكربت بشكل احترافي، مع أفضل المدرسين
              المتخصصين في المجال."
            imgSrc="/icon-5.png"
          />
        </div>
      </div>
      {/*  */}
      <PartnerCompanies />
      {/*  */}
      <MethodologyS />
      {/*  */}
      <SectionTitle
        subTitle="ميزات الدورات"
        mainTitle="أفضل الدورات المتاحة لك"
        description="نوفر لك دورات تعليمية شاملة تساعدك على تطوير مهاراتك بوضوح وسهولة. جميع الدروس مصممة لتناسب مختلف المستويات مع شرح مبسّط وتمارين تطبيقية."
      />
      <div className="cardss container">
        <Card
          imageSrc="/courses-image3.jpg"
          price="49.00"
          rating="4"
          title="HTML"
          description="تعلم أساسيات بناء صفحات الويب باستخدام HTML من خلال خطوات عملية. تبدأ الدورة بشرح العناصر الدلالية وتنظيم هيكل الصفحة، ثم ستقوم ببناء صفحات كاملة مع النماذج والجداول والوسائط."
          link="/courses/html"
        />
        <Card
          imageSrc="/courses-image2.jpg"
          price="59.00"
          rating="4"
          title="CSS"
          description="أضف الجمال والتنسيق إلى صفحاتك باستخدام CSS الحديثة بأسلوب عملي وممتع. تبدأ الدورة بأساسيات التنسيق والألوان، ثم تتقدم إلى تقنيات متقدمة مثل Flexbox وGrid وتصميم الصفحات المتجاوبة."
          link="/courses/css"
        />
        <Card
          imageSrc="/courses-image1.jpg"
          price="69.00"
          rating="5"
          title="JavaScript"
          description="حوّل صفحاتك من ساكنة إلى تفاعلية باستخدام JavaScript بطريقة عملية ومباشرة. تبدأ الدورة بالأساسيات مثل المتغيرات والدوال، ثم تتعلم التحكم في DOM والأحداث، والعمل مع البيانات عبر Fetch وPromises. ستطبق كل مفهوم في مشاريع صغيرة، لتتمكن بنهاية الدورة من بناء صفحات ديناميكية وتفاعلية بشكل كامل."
          link="/courses/javascript"
        />
      </div>
      <div className="our_working container flex">
        <div className="liner"></div>
        <div className="our_container">
          <p>كيف نعمل؟</p>
          <h3>آلية سير العمل</h3>
          <p className="pour">
            نقدّم لك طريقة عمل بسيطة وواضحة تساعدك على فهم خطواتنا من البداية
            وحتى النهاية. نحرص على أن تكون كل مرحلة منظمة وسهلة لضمان تجربة سلسة
            وفعّالة للمستخدم.
          </p>
          <Our_lis
            classNamess="akivs"
            imgs={<FaRunning />}
            our_titel="اختر دورتك"
            our_p="نقدّم لك مجموعة واسعة من الدورات المصممة بعناية لتناسب جميع ..."
          />

          <Our_lis
            imgs={<FaRegFileAlt />}
            our_titel=" ارسل معلوماتك "
            our_p="بعد ارسل معلوماتك  يمكنك   بدء التعلم بسهولة..."
          />

          <Our_lis
            imgs={<FaRegCreditCard />}
            our_titel="أكمل عملية الشراء"
            our_p="قم بإتمام عملية التسجيل والدفع بخطوات بسيطة وسريعة..."
          />

          <Our_lis
            imgs={<FaTools />}
            our_titel="ابدأ رحلتك وتعلم"
            our_p="ابدأ الآن رحلتك التعليمية معنا! ستتمكن من الوصول إلى الدروس..."
          />
        </div>
        <div className="working_img">
          <img src="/public/homeimgs-removebg-preview.png" width={"300px"} alt="" />
        </div>
      </div>
      <div className="elementor-section container flex ">
        <Elementor
          color={"#00b4ff"}
          namber="8"
          el_icon=""
          eltext="سنوات الخبرة
  "
        />
        <Elementor
          color={"#7c4dff"}
          namber="35"
          el_icon=""
          eltext="تم انهاء المشروع"
        />
        <Elementor
          color={"#00b4ff"}
          namber="80"
          el_icon="%"
          eltext="استعادة الأموال
  "
        />
        <Elementor
          color={"#00b4ff"}
          namber="30"
          el_icon=""
          eltext="  فريق الخبراء
"
        />
        <Elementor
          color={"#7c4dff"}
          namber="150"
          el_icon="h"
          eltext="الممارسة الإبداعية
"
        />
      </div>
      <div className="Halil">
        <div className="Testimonial">
          <div className="Testimonial-left">
            <p className="Testimonial-p1">شهادة العملاء</p>
            <p className="Testimonial-p2">رأي عملائنا</p>
            <p className="Testimonial-p3">
              خدمة مميزة وجودة عالية جعلت تجربتنا أفضل مما توقّعنا.
            </p>
            <Link className="ReadMore" to={"/"}>
              اقرأ المزيد
            </Link>
          </div>
          <div className="Testimonial-right">
            <Swiper
              className="my-swiper"
              slidesPerView="auto"
              spaceBetween={25}
              loop={true}
              freeMode={true}
            >
              {TotalPersonRate.map((person) => (
                <SwiperSlide key={person.id}>
                  <PersonRate
                    img={person.img}
                    name={person.name}
                    text={person.text}
                    title={person.title}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <SectionTitle
        subTitle="ميزات الدورات"
        mainTitle="أفضل الدورات المتاحة لك"
        description="نوفر لك دورات تعليمية شاملة تساعدك على تطوير مهاراتك بوضوح وسهولة. جميع الدروس مصممة لتناسب مختلف المستويات مع شرح مبسّط وتمارين تطبيقية."
      />
      <div className="blog-section container">
        <div className="down-card">
          {Blog_cardd.map((card) => (
            <Link to={`/Blog/BlogCard/${card.id}`}>
              <Blogcard
                key={card.id}
                img={card.img}
                title={card.title}
                text={card.text}
              />
            </Link>
          ))}
        </div>
      </div>{" "}
    </div>
  );
}
export default Home;
