import { FaArrowLeft, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { GroubMb } from "../../pages/Team/TeamMemberInformation/TeamMemberInformation"
import { iconMap } from "../../pages/Team/TeamMemberInformation/TeamMemberInformation"
import "../../pages/Team/Team.css"

function GroupMemberCard({ img, title, icons, id }) {
  const member = GroubMb.find(m => m.id === id)


  return (
    <div className="GroupMember1">
      <div className="GroupMemberImg-div">
        <img className="GroupMemberImg" src={img} alt={title} />
      </div>
      <div className="GroubMember1-div">
        <p className="title1">{title}</p>
        <p className="text-title">
          {member?.text}
        </p>
        <div className="icon-div">
          {icons.map((item, index) => {
            const Icon = iconMap[item.type]
            return (
              <a
                key={index}
                href={item.url}
                target={item.type === "email" || item.type === "phone" ? "_self" : "_blank"}
                rel="noopener noreferrer"
              >
                <Icon />
              </a>
            )
          })}
        </div>
      </div>
    </div >
  )
}
export default GroupMemberCard