import { useState } from "react";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import img from "../../../public/handsome-guy.jpg";
import GirlImg from "../../../public/teamGirlProfile-removebg-preview.png";
import GroupMembers from "../../components/Team/GroupMemberCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../Team/Team.css";
import PersonRate from "../../components/Team/PersonRate";
import JoinUs from "../../components/JoinUs/JoinUs.jsx";

import { FreeMode, Pagination } from "swiper/modules";
import { FaRegEnvelope, FaMobileAlt } from "react-icons/fa";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { GroubMb } from "./TeamMemberInformation/TeamMemberInformation"



function Team() {

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
            name: "Sheyma",
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
    const [Project, SetProject] = useState(80);
    const [YearExperience, SetYearExperience] = useState(90);
    const [Money, SetMoney] = useState(100);
    const [ExpertTeam, SetExpertTeam] = useState(80);
    const [CreativePractice, SetCreativePractice] = useState(280);
    //ScrollToTop

    // useEffect(() => {
    //     const target = 128
    //     if (Project >= target) return

    //     const timer = setTimeout(() => {
    //         setProject(prev => prev + 1)
    //     }, 20)

    //     return () => clearTimeout(timer)
    // }, [Project])

    // useEffect(() => {
    //     const target = 38
    //     if (YearExperience >= target) return

    //     const timer = setTimeout(() => {
    //         setYearExperience(prev => prev + 1)
    //     }, 100)

    //     return () => clearTimeout(timer)
    // }, [YearExperience])

    // useEffect(() => {
    //     const target = 100
    //     if (Money >= target) return

    //     const timer = setTimeout(() => {
    //         setMoney(prev => prev + 1)
    //     }, 50)

    //     return () => clearTimeout(timer)
    // }, [Money])

    // useEffect(() => {
    //     const target = 63
    //     if (ExpertTeam >= target) return

    //     const timer = setTimeout(() => {
    //         setExpertTeam(prev => prev + 1)
    //     }, 35)

    //     return () => clearTimeout(timer)
    // }, [ExpertTeam])

    // useEffect(() => {
    //     const target = 270
    //     if (CreativePractice >= target) return

    //     const timer = setTimeout(() => {
    //         setCreativePractice(prev => prev + 1)
    //     }, 100)

    //     return () => clearTimeout(timer)
    // }, [CreativePractice])
    return (
        <div className="Halil">
            <div className="All-p">
                <p className="our-team-p">فريقنا</p>
                <div className="div-p">
                    <p className="our-team-p1">التقِ مع فريق الخبراء أعضاء مشروعنا</p>
                </div>
            </div>
            <div className="Members">
                {GroubMb.map((person) => (
                    <GroupMembers
                        key={person.id}
                        img={person.gender === "male" ? person.img : person.GirlImg}
                        title={person.title}
                        id={person.id}
                        icons={person.icons}
                    />
                ))}
            </div>
            <div className="Statistics">
                <div className="statis">
                    <div className="numbers">
                        <span className="operation">k</span>
                        <span className="nmb">{Project}</span>
                    </div>
                    <p className="sta-p">اكتمال المشروع</p>
                </div>
                <div className="statis">
                    <div className="numbers">
                        <span className="operation">+</span>
                        <span className="nmb">{YearExperience}</span>
                    </div>
                    <p className="sta-p">سنوات خبرة</p>
                </div>
                <div className="statis">
                    <div className="numbers">
                        <span className="operation">%</span>
                        <span className="nmb">{Money}</span>
                    </div>
                    <p className="sta-p">استرجاع المال</p>
                </div>
                <div className="statis">
                    <div className="numbers">
                        <span className="operation">+</span>
                        <span className="nmb">{ExpertTeam}</span>
                    </div>
                    <p className="sta-p">فريق خبير</p>
                </div>
                <div className="statis">
                    <div className="numbers">
                        <span className="operation">k</span>
                        <span className="nmb">{CreativePractice}</span>
                    </div>
                    <p className="sta-p">ممارسة إبداعية</p>
                </div>
            </div>
            <div className="Statistics-Mobile">
                <div className="Statistics-Mobile-div-1">
                    <div className="statis">
                        <div className="numbers">
                            <span className="operation">k</span>
                            <span className="nmb">{Project}</span>
                        </div>
                        <p className="sta-p">اكتمال المشروع</p>
                    </div>
                    <div className="statis">
                        <div className="numbers">
                            <span className="operation">+</span>
                            <span className="nmb">{YearExperience}</span>
                        </div>
                        <p className="sta-p">سنوات خبرة</p>
                    </div>
                </div>
                <div className="Statistics-Mobile-div-2">
                    <div className="statis">
                        <div className="numbers">
                            <span className="operation">%</span>
                            <span className="nmb">{Money}</span>
                        </div>
                        <p className="sta-p">استرجاع المال</p>
                    </div>
                    <div className="statis">
                        <div className="numbers">
                            <span className="operation">+</span>
                            <span className="nmb">{ExpertTeam}</span>
                        </div>
                        <p className="sta-p">فريق خبير</p>
                    </div>
                </div>
                <div className="statis last-div">
                    <div className="numbers">
                        <span className="operation">k</span>
                        <span className="nmb">{CreativePractice}</span>
                    </div>
                    <p className="sta-p">ممارسة إبداعية</p>
                </div>
            </div>

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
            <div className="swipe-hint">→ اسحب ←</div>
            <JoinUs></JoinUs>
        </div>
    );
}
export default Team;
