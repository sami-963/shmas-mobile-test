import "./JoinUs.css"
import threeDCardImg from "../../../public/3dCard-removebg-preview.png"
import { Link } from "react-router-dom"
export default function JoinUs(){
    return (
        <>
            <section className="joinUsCard container flex">
              <div className="joinUsSectionImg">
                <img src={threeDCardImg} alt="threeDDesignImg"  className="subsucribeFirstImg"/>
              </div>
                <div className="joinUsContent flex">
                  <div className="JoinUsSmallTitle">
                      <span>انضم إلينا</span>
                  </div>
                  <div className="sectionMainTitle">
                    <h2>اشترك في تحديثات منصّة التعلم</h2>
                  </div>
                  <div className="joinUsDescription">
                    <p>
                      انضم إلى منصتنا التعليمية واحصل على أحدث الدروس والمقالات والنصائح التي تساعدك على تطوير مهاراتك في مختلف المجالات.
                      من خلال اشتراكك ستصلك تحديثات منتظمة حول الدورات الجديدة، العروض الخاصة، والمحتوى المميز المصمم خصيصًا لدعم رحلتك التعليمية خطوة بخطوة.
                    </p>
                  </div>
      
                  <div className="joinUsEmailContainer flex">
                      <input type="email" placeholder="أدخل بريدك الإلكتروني" required/>
                      <Link to="/LongIn" className="joinNow flex">اشترك الآن</Link>
                  </div>
                </div>
                <div className="joinUsSectionImg">
                  <img src={threeDCardImg} alt="threeDDesignImg"  className="subsucribeLastImg" />
                </div>
            </section>
        </>
    )
}
