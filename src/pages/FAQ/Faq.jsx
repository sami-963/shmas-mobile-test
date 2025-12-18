import "./Faq.css";
import "../../styles/global.css";
import JoinUs from "../../components/JoinUs/JoinUs.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Blogcard from "../../components/Blogs/BlogCard";
// import ShareOpinionCard from "../../components/shareOpinionCard/ShareOpinionCard.jsx";
import ShareOpinionCard from "../../components/shareOpinionCard/ShareOpinionCard.jsx"


import img1 from "../../../public/tablet-and-computers.jpg";
import img2 from "../../../public/printer-in-modern.jpg";
import img3 from "../../../public/house-interior.jpg";

/* ================= Blog Cards ================= */
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
    text: "تعرف على أفضل الأساليب والطرق التي تساعدك على إدارة وقتك وتحسين إنتاجيتك.",
  },
  {
    id: 3,
    img: img3,
    title: "كيف تختار الدورة المناسبة لك؟",
    text: "مقال يشرح أهم المعايير التي تساعدك في اختيار الدورة المناسبة.",
  },
];

/* ================= FAQ Card ================= */
function FAQ_card({ card_text, card_body, isOpen, onToggle }) {
  return (
    <div className={`cardd ${isOpen ? "open" : ""}`}>
      <header
        onClick={onToggle}
        aria-expanded={isOpen}
        className="card_header flex"
      >
        <span className="card_text">{card_text}</span>
        <span className="iconn">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </span>
      </header>

      {isOpen && (
        <div className="card_body">
          <p>{card_body}</p>
        </div>
      )}
    </div>
  );
}

/* ================= FAQ Page ================= */
export default function FAQ() {
  // هون منتحكم بأي سؤال مفتوح
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faaq">
      {/* ===== Header ===== */}
      <div className="FAQ-header">
        <div className="flex">
          <div className="faqtext">
            <h3>الاسئله الشائعه</h3>
            <p>في معهد شمس لكل سؤال جواب</p>
          </div>
          <div className="Faqimg"></div>
        </div>
      </div>

      {/* ===== Questions Section ===== */}
      <div className="question container flex">
        <div className="question_text">
          <h4>الاسئله الشائعة</h4>
          <h2>سؤال ذو صلة</h2>
          <p>
            في هذا القسم تجد إجابات مختصرة وواضحة لأكثر الأسئلة شيوعًا حول
            الكورسات وطريقة التعلم، لمساعدتك على فهم كل ما تحتاجه بسهولة.
          </p>

          <div className="coard_contanier">
            <FAQ_card
              card_text="ما هي متطلبات القبول؟"
              card_body="لا توجد متطلبات صعبة، يكفي أن تمتلك جهازًا متصلًا بالإنترنت ورغبة في التعلم."
              isOpen={openIndex === 0}
              onToggle={() => toggleCard(0)}
            />

            <FAQ_card
              card_text="هل أحصل على شهادة عند إكمال الدورة؟"
              card_body="نعم، ستحصل على شهادة إلكترونية بعد الانتهاء من الدورة."
              isOpen={openIndex === 1}
              onToggle={() => toggleCard(1)}
            />

            <FAQ_card
              card_text="كم تستغرق مدة الدورة؟"
              card_body="تختلف المدة حسب محتوى الدورة، وغالبًا بين 3 إلى 8 أسابيع."
              isOpen={openIndex === 2}
              onToggle={() => toggleCard(2)}
            />

            <FAQ_card
              card_text="هل يمكنني استعادة أموالي؟"
              card_body="نعم، نوفر نظام استعادة الأموال خلال 14 يومًا."
              isOpen={openIndex === 3}
              onToggle={() => toggleCard(3)}
            />
          </div>
        </div>

        <div className="question_img">
          <img src="/public/faq-AUCVSV9-800x962.png" alt="FAQ" />
        </div>
      </div>

      {/* ===== Share Opinion ===== */}
      <ShareOpinionCard />

      {/* ===== Blog Section ===== */}
      <div className="bolg_header_text">
        <SectionTitle
          subTitle="مدونتنا"
          mainTitle="آخر المقالات والأخبار"
          description="نقدّم لك مجموعة من المقالات والأفكار حول التكنولوجيا والتعليم وريادة الأعمال."
        />
      </div>

      <div className="blog-section container">
        <div className="down-card">
          {Blog_cardd.map((card) => (
            <Link key={card.id} to={`/pages/Blog/BlogCard/${card.id}`}>
              <Blogcard
                img={card.img}
                title={card.title}
                text={card.text}
              />
            </Link>
          ))}
        </div>
      </div>

      {/* ===== JoinUs ===== */}
      <JoinUs />
    </div>
  );
}
