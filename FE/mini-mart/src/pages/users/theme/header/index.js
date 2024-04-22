import { memo, useState} from "react"
import "./style.scss";
import { AiOutlineFacebook, AiOutlineMenu, AiOutlinePhone } from "react-icons/ai";
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
            name: "Sản Phẩm",
             path: ROUTER.USER.PRODUCTS.MAIN,
             iShowSubmenu: false,
             Child: [
                {
                    name:"Bali NewBie",
                    path: ROUTER.USER.PRODUCTS.BALISONG_NEW_BIE,
                },
                {
                    name:"Bali Valorant",
                    path: ROUTER.USER.PRODUCTS.BALISONG_VALORANT,
                },
                {
                    name:"Bali csgo",
                    path: ROUTER.USER.PRODUCTS.BALISONG_CS_GO,
                },

             ],
        },

        {
            name: "Phụ Kiện",
            path: ROUTER.USER.PRODUCTS.MAIN,
            iShowSubmenu: false,
            Child: [
               {
                   name:"Móc khóa",
                   path: ROUTER.USER.PRODUCTS.MOC_KHOA,
               },
               {
                   name:"bảo Dưỡng",
                   path: ROUTER.USER.PRODUCTS.BAO_DUONG,
               },
               {
                   name:"STICkER",
                   path: ROUTER.USER.PRODUCTS.STICKER,
               },

            ],
        },

        {
            name: "Bài Viết",
             path: ROUTER.USER.POST,
        },

        {
            name: "Liên Hệ",
             path: ROUTER.USER.CONTACT,
        },
    
    ]);

    // Mảng chứa các URL hình ảnh
const images = [
    "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/09/Valorant-Riot-approved-butterfly-knife-tricks.jpg",
    "https://cdn.esportsdriven.com/media/upload/images/recon_balisong.large.png",
    "https://valorantstrike.com/wp-content/uploads/2021/08/Valorant-Recon-Collection-Knife-Red-Variant.jpg",
];

let i = 0;
setInterval(() => {
    // Thay đổi hình ảnh nền của .hero__items sau mỗi 2 giây
    document.querySelector(".hero__items").style.backgroundImage = `url(${images[i]})`;
    i = (i + 1) % images.length; // quay lại đầu mảng khi đến cuối
}, 5000);

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
                        <li><Link to={ROUTER.USER.PRODUCTS.BALISONG_NEW_BIE}>BALI</Link></li>
                        <li><Link to={ROUTER.USER.PRODUCTS.BALISONG_NEW_BIE}>BALI HỌC TẬP</Link></li>
                        <li><Link to={ROUTER.USER.PRODUCTS.BALISONG_NEW_BIE}>BALI QUỐC DÂN</Link></li>
                        <li><Link to={ROUTER.USER.PRODUCTS.BALISONG_CS_GO}>BALI CSGO</Link></li>
                        <li><Link to={ROUTER.USER.PRODUCTS.BALISONG_VALORANT}>BALI VALORANT</Link></li>
                        <li><Link to={ROUTER.USER.PRODUCTS.MOC_KHOA}>BALI CUTE</Link></li>
                        <li><Link to={ROUTER.USER.PRODUCTS.MOC_KHOA}>MÓC KHÓA</Link></li>
                    </ul>
                   )}                  
                </div>
                <div className="col-lg-9 hero__search__container">
                    <div className="hero__search">
                        <div className="hero__form">
                            <form>
                                <input type="text"  placeholder="Bạn Đang Tìm Gì" />
                                    <button type="submit" >Tìm Kiếm</button>                            
                            </form>
                        </div>
                        <div className="hero__phone">
                            <div className="hero__phone__icon">
                                <AiOutlinePhone/>
                            </div>
                            <div className="hero__phone__text">
                                <p>(+84)935 769 306</p>
                                <span>Gọi Hỗ Trợ Ngay Khi Bạn Cần!!!!</span>
                            </div>
                        </div>
                    </div>
                    <div className="hero__items">
                        <div className="hero__text">
                            <span>  Chơi BALISONG Đón Hè sang </span>
                            <h2> KHUYẾN MÃI THÁNG 4<br/> CHƠI BALISONG THẢ GA </h2>
                            <h6> miễn phí ship cho đơn hàng từ 200k <br/> tặng nhiều phần quà hấp dẫn <br/> giảm ngay 30-50% nhiều mặt hàng</h6>
                            <div className="hero__text__button">
                                <button type="submit" >
                                    <Link to="">BALISONG</Link>
                                </button>
                                <button type="submit" >
                                    <Link to="ROUTER.USER.PRODUCTS.BALISONG_VALORANT">BALISONG VALORANT</Link>
                                </button>
                                <button type="submit" >
                                    <Link to="">BALISONG HỌC TẬP</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>             
            </div>
        </div>       
        </>   
    );
};

export default memo(Header);