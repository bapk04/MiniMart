import { memo, useState} from "react"
import "./style.scss";
import { AiOutlineFacebook, AiOutlineMenu } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import { LiaLinkedin } from "react-icons/lia";
import { IoLogoTwitter } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import { formatter } from 'utils/formatter.js';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ROUTER } from "utils/router";



const Header = () => {
    const [isShowCategories,setisShowCategories] = useState(true);
    const [menus , setMenus] = useState([
        {
           name: "Trang Chủ",
            path: ROUTER.USER.HOME,
        },

        {
            name: "Cửa Hàng",
             path: ROUTER.USER.PRODUCTS,
        },

        {
            name: "Sản Phẩm",
             path: "",
             iShowSubmenu: false,
             Child: [
                {
                    name:"Thịt",
                    path: "",
                },
                {
                    name:"Rau Củ",
                    path: "",
                },
                {
                    name:"Thức Ăn Nhanh",
                    path: "",
                },

             ],
        },

        {
            name: "Bài Viết",
             path: "",
        },

        {
            name: "Liên Hệ",
             path: "",
        },
    
    ]);

    return (
        <>
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
                            <li> <Link to={""}><FaRegUser /></Link><span>Đăng nhập</span></li>                  
                        </ul>
                    </div>                
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row"> 
                <div className="col-xl-3 col-lg-3">
                     <div className="header__logo">
                        <h1>Bali Song</h1>
                     </div>
                </div>
                <div className="col-xl-6 col-lg-3">
                    <nav className="header__menu">
                        <ul>
                            {
                                menus?.map((menu, menuKey) => (
                                    <li key={menuKey} className={menuKey === 0 ? "active" : "" }>
                                        <Link to={menu?.path}> {menu?.name} </Link>
                                        {
                                            menu.Child && (
                                                <ul className="header__menu__dropdowm">
                                                    {
                                                        menu.Child.map((childItems, childKey) => (
                                                            <li key={`{menuKey}-${childKey}`}>
                                                                <Link to={childItems.path}>{childItems.name}</Link>
                                                            </li>
                                                        ))
                                                    }

                                                </ul>
                                            )
                                        }
                                    </li>
                                ))                           
                            }                                                    
                        </ul>
                    </nav>
                </div>
                <div className="col-xl-3 col-lg-3">
                <div className="header__cart">
                    <div className="header__cart__price">
                        <span>{formatter(1001230)}</span> 
                    </div>
                    <ul >
                        <li>
                        <Link to="#"><AiOutlineShoppingCart /> <span>5</span></Link>
                        </li> 
                    </ul>
                </div>
                </div>
            </div>
        </div> 
        <div className="container">
            <div className="row hero__categories__container">
                <div className="col-lg-3 hero__categories">
                    <div className="hero__categories__all" onClick={() => setisShowCategories(!isShowCategories)}> 
                        <AiOutlineMenu/>
                        Danh Sách Sản Phẩm
                    </div>
                   {isShowCategories && (
                    <ul className={isShowCategories ? "" : "hidden"}>                       
                        <li><Link to={"#"}>BALI</Link></li>
                        <li><Link to={"#"}>BALI QUỐC DÂN</Link></li>
                        <li><Link to={"#"}>BALI CSGO</Link></li>
                        <li><Link to={"#"}>BALI VALORANT</Link></li>
                        <li><Link to={"#"}>BALI CUTE</Link></li>
                        <li><Link to={"#"}>MÓC KHÓA</Link></li>
                    </ul>
                   )}                  
                </div>
                <div className="col-lg-9">Phai</div>             
            </div>
        </div>       
        </>   
    );
};

export default memo(Header);