import {memo} from "react"
import "./style.scss";
import { AiOutlineFacebook } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import { LiaLinkedin } from "react-icons/lia";
import { IoLogoTwitter } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import { formatter } from 'utils/formatter.js';


const Header = () => {
    return (
    <div className="header_top">
        <div className="container"> 
            <div className="row">
                <div className="col-6 header_top_left">
                    <ul>
                        <li>
                            <Link to={""}>
                               <MdMailOutline />
                           </Link>
                            ngogiakiet20012004@gmail.com                           
                        </li>
                        <li>
                            Miễn Phí Ship Đơn Từ {formatter(200000)}
                        </li>
                    </ul>
                </div>
                <div className="col-6 header_top_right">
                        <ul>
                            <li> <Link to={"https://www.facebook.com/"}><AiOutlineFacebook /></Link></li>
                            <li> <Link to={"https://www.instagram.com/"}><GrInstagram /></Link></li>
                            <li> <Link to={""}><LiaLinkedin /></Link></li>
                            <li> <Link to={""}><IoLogoTwitter /></Link></li>
                            <li> <Link to={""}><FaRegUser /></Link></li>
                            <span>Đăng nhập</span>
                        </ul>
                </div>                
            </div>
        </div>
    </div>
    );
};

export default memo(Header);