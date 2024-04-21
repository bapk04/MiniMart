import {memo } from "react"
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import "./style.scss"
import feat1 from "assets/users/image/featured/feat-1.webp";
import feat2 from "assets/users/image/featured/feat-2.webp";
import feat3 from "assets/users/image/featured/feat-3.webp";
import feat4 from "assets/users/image/featured/feat-4.webp";
import feat5 from "assets/users/image/featured/feat-5.webp";
import feat6 from "assets/users/image/featured/feat-6.webp";
import feat7 from "assets/users/image/featured/feat-7.webp";
import feat8 from "assets/users/image/featured/feat-8.webp";
import { Link } from 'react-router-dom';

import { render } from "@testing-library/react";

import { Tabs, Tab, TabPanel,TabList } from "react-tabs";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";

const HomePage = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 2 
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1
        },
      };

      // slider img lấy các ảnh tự động trong assets/user/image/category/...
    //   const sliderItems =[
    //     {
    //         bgImg:  img1 ,
    //         name: "",
    //     },
    //     {
    //         bgImg: img2,
    //         name: "",
    //     },
    //     {
    //         bgImg: img3,
    //         name: "",
    //     },
    //     {
    //         bgImg: img4,
    //         name: "",
    //     },
    //     {
    //         bgImg: img5,
    //         name: "",
    //     },
    //     {
    //         bgImg: img6,
    //         name: "",
    //     },
    //     {
    //         bgImg: img7,
    //         name: "",
    //     },
    //   ]

    const featProduct ={
      all:{
        title:"Toàn Bộ",
        products:[

          {
            img: feat1,
            name: "Siêu Hot",
            price: 50000,
          },
          {
            img: feat3,
            name: "Siêu Hot Hòn Họt",
            price: 50000,
          },
          {
            img: feat4,
            name: "Siêu Sieu Hot Hòn Họt",
            price: 50000,
          },

        ]
      },

      new:{
        title:"SẢN PHẨM MỚI NHẤT",
        products:[

          {
            img: feat4,
            name: "Siêu Chạy",
            price: 40000,
          },
          {
            img: feat6,
            name: "Siêu Muot",
            price: 50000,
          }
        ]
      },
      bestSaleing:{
        title:"SẢN PHẨM BÁN CHẠY",
        products:[

          {
            img: feat7,
            name: "Siêu Chạy",
            price: 40000,
          },
          {
            img: feat3,
            name: "Siêu Muot",
            price: 50000,
          }
        ]
      },
      good:{
        title:"TOP ĐÁNH GIÁ",
        products:[

          {
            img: feat5,
            name: "Siêu Chạy",
            price: 40000,
          },
          {
            img: feat8,
            name: "Siêu Muot",
            price: 50000,
          }
        ]
      }
    }

    const renderFeatureProducts = (data) => {
      const tablist = [];
      const tabPanels = [];

     
     
      Object.keys(data).forEach((key, index) =>
    {
        tablist.push(<Tab key={index}>{data[key].title}</Tab>)

        const tabPanel = [];
        data[key].products.forEach((items,k) =>{
          tabPanel.push(<div className="col-lg-3" key={k}>
            <div className="featured__item">
              <div className="featured__item__pic" style={{
                backgroundImage: `url(${items.img})`,
              }}>
                <ul className="featured__item__pic__hover">
                  <li>
                    <AiOutlineEye />
                  </li>
                  <li>
                    <AiOutlineShoppingCart />
                  </li>                
                </ul>                
              </div>
              <div className="featured__item__text">
                <h6>
                  <Link to="">{items.name}</Link>
                </h6>
                <h5>
                  <Link to="">{items.price}</Link>
                </h5>
              </div>
            </div>

          </div>
          )
        })
        tabPanels.push(tabPanel)
       
    }
    )
    
   

      return (
      <Tabs>
      <TabList>
          {tablist}
      </TabList>
  
  {
    tabPanels.map((items,key) => (
      <TabPanel key={key}>
        <div className="row"> {items}</div>
      </TabPanel>
    ))
  }

    </Tabs>
      );
    }
    return (
        // loi slider bi mat goc
        <>  
        {/*Categories Begin*/} 
                <div className="container container__categories_slider">
                <Carousel responsive={responsive} className="categories_slider"  >                   
                      <div className="categories_slider_items" style={{backgroundImage: `URL("https://hicokeobalisong.com/wp-content/uploads/2024/03/z5215017419149_becd93522001fe6adf1957758ee2fc2a-min.jpg" )` } }>
                      <p>LƯỢC BALI  TẠO KIỂU TẬP MÚA SIÊU NGẦU</p>
                      </div>
                      <div className="categories_slider_items" style={{backgroundImage: `URL("https://hicokeobalisong.com/wp-content/uploads/2024/01/z5110909938536_acc2d165838c7082cb131a34c4444f2e.jpg")`}}>
                      <p>LƯỢC BALI CHẢI TÓC TẠO KIỂU TẬP MÚA SIÊU NGẦU</p>
                      </div>
                      <div className="categories_slider_items" style={{backgroundImage: `URL("https://hicokeobalisong.com/wp-content/uploads/2024/02/z5132454163060_fb4bcdd98aa77ad8071fcfe811a46b0b-min.jpg")`}}>
                      <p>CSGO BALI SALE CHỈ CÒN ĐỒNG GIÁ 50K</p>
                      </div>
                      <div className="categories_slider_items" style={{backgroundImage: `URL("https://hicokeobalisong.com/wp-content/uploads/2024/01/z5107480698534_364ccb3bf2f0cea3c220335dd7d8e060.jpg")`}}>
                      <p>MÓC KHÓA VALORANT CỰC XINH TẶNG KÈM KỆ TRƯNG PART 1</p>
                      </div>
                      <div className="categories_slider_items" style={{backgroundImage: `URL("https://hicokeobalisong.com/wp-content/uploads/2024/01/z5107519844687_677b2123c55cb9911daa1c916b2f697e.jpg")`}}>
                      <p>MÓC KHÓA VALORANT CỰC XINH TẶNG KÈM KỆ TRƯNG PART 1</p>
                      </div>
                      <div className="categories_slider_items" style={{backgroundImage: `URL("https://hicokeobalisong.com/wp-content/uploads/2024/01/z5109673502710_711ccdeb8c76a88f17c457bf93137f1a-scaled.jpg")`}}>
                      <p>MÓC KHÓA VALORANT CỰC XINH TẶNG KÈM KỆ TRƯNG PART 1</p>
                      </div>
                      <div className="categories_slider_items" style={{backgroundImage: `URL("https://hicokeobalisong.com/wp-content/uploads/2024/01/z5107553063002_3652e5a25948c5c6985e358b9baa5a59.jpg")`}}>
                      <p>MÓC KHÓA VALORANT CỰC XINH TẶNG KÈM KỆ TRƯNG PART 1</p>
                      </div>
                      <div className="categories_slider_items" style={{backgroundImage: `URL("https://hicokeobalisong.com/wp-content/uploads/2024/02/z5107149161061_a161f4effc1251939c99c2d8193520ea-min-scaled.jpg")`}}>
                      <p>TRITON V2 BEARINGS BALI TRAINER CỰC XINH </p>
                      </div>
                  </Carousel>
                </div>
        {/*Categories End*/} 
        {/*CFeatures Begin*/} 
          <div className="container">
            <div className="featured">
              <div className="section-title">
                <h2>Sản Phẩm Nổi Bậc</h2>
                
              </div>
                {renderFeatureProducts(featProduct)}
            </div>
          </div>
        {/*CFeatures End*/} 

        {/*Banner Begin*/} 
          <div className="container">
            <div className="banner">
              <div className="banner__pic">
                <img src={feat6} alt="banner" style={{width: '500px'}} />
              </div>
              <div className="banner__pic">
                <img src={feat7} alt="banner" style={{width: '385px'}}/>
              </div>
            </div>
          </div>
        {/*Banner End*/} 
        </>     
    );
      
};

export default memo(HomePage);