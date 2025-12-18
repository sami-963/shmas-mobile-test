import "../../pages/Team/Team.css"
import { FaStar } from "react-icons/fa";
function PersonRate({ img, text, title, name }) {

    return <div className="Person">

        <p className="person-p1">{text}</p>
        <div>
            <div>
                <FaStar color="#FFD700" />
                <FaStar color="#FFD700" />
                <FaStar color="#FFD700" />
                <FaStar color="#FFD700" />
                <FaStar color="#FFD700" />
            </div>
            <div className="person-2">
                <img src={img} alt="" width={"50px"} style={{ borderRadius: "50%", userSelect: "none" }} />
                <div className="person-3">
                    <p className="person-p2">{name}</p>
                    <p className="person-p3">{title}</p>
                </div>
            </div>
        </div>
    </div>
}
export default PersonRate