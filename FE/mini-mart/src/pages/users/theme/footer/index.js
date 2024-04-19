import {memo} from "react"
import "./style.scss";
import { Link } from 'react-router-dom';
import { AiOutlineFacebook } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import { LiaLinkedin } from "react-icons/lia";
import { IoLogoTwitter } from "react-icons/io";


const Footer = () => {
    return <footer className="footer">
        <div className="container">
            <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-sx-12">
                <div className="footer__about">
                    <h1 className="footer__about__logo">Balisong Shop</h1>
                <ul>
                    <li>Địa Chỉ: 255 ,Cầu Dứa ,Phú Nông</li>
                    <li>Số ĐIển Thoại: 0935-769-306</li>
                    <li>Email: ngogiakiet20012004@gmail.com</li>
                </ul>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-sx-12">
                    <div className="footer__widget">
                        <h6>Cửa Hàng</h6>
                        <ul>
                            <li>
                                <Link to="/contact">Liên Hệ</Link>
                            </li>
                            <li>
                                <Link to="/about">Thông Tin Về Chúng Tôi</Link>
                            </li>
                            <li>
                                <Link to="/products">Sản Phẩm Kinh Doanh</Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to="/account">Thông Tin Tài khoản</Link>
                            </li>
                            <li>
                                <Link to="/cart">Giỏ Hàng</Link>
                            </li>
                            <li>
                                <Link to="/wishlist">Danh Sách Ưa Thích</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            <div className="col-lg-3 col-md-12 col-sm-12 col-sx-12">
                <div className="footer__widget">
                    <h6>Khuyến Mãi Và Ưu Đãi</h6>
                    <p>Đăng Ký Nhận thông Tin Tại Đây</p>
                    <form action="#">
                        <div className="inpit-group">
                            <input type="text" placeholder="Nhập Email"></input>
                            <button type="submmit" className="button-submit">
                                Đăng Ký
                            </button>
                        </div>
                        <div className="footer__widget__social">
                            <div> 
                            <AiOutlineFacebook />
                            </div>
                            <div> 
                            <GrInstagram />
                            </div>
                            <div> 
                            <LiaLinkedin />
                            </div>
                            <div> 
                            <IoLogoTwitter />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </div>            
        </div>
    </footer>
};

export default memo(Footer);