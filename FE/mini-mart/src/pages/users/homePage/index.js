import {memo } from "react"
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import "./style.scss"

const HomePage = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
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
          slidesToSlide: 2
        }
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
    return (
        // loi slider bi mat goc
        <>  
        {/*Categories Begin*/} 
                <div className="container container__categories_slider">
                <Carousel responsive={responsive} className="categories_slider">                   
                      <div className="categories_slider_items" style={{backgroundImage: `URL("https://hicokeobalisong.com/wp-content/uploads/2024/01/z5109633486616_15eb3d7676d08b1f3e983808b4f92f1f-scaled.jpg")`}}>
                      <p>LƯỢC BALI CHẢI TÓC TẠO KIỂU TẬP MÚA SIÊU NGẦU</p>
                      </div>
                      <div className="categories_slider_items" style={{backgroundImage: `URL("https://hicokeobalisong.com/wp-content/uploads/2024/01/z5110909938536_acc2d165838c7082cb131a34c4444f2e.jpg")`}}>
                      <p>LƯỢC BALI CHẢI TÓC TẠO KIỂU TẬP MÚA SIÊU NGẦU</p>
                      </div>
                      <div className="categories_slider_items" style={{backgroundImage: `URL("https://hicokeobalisong.com/wp-content/uploads/2024/01/z5116250726640_3566e116570865c8a379cb35097df805-min.jpg")`}}>
                      <p>MÓC KHÓA VALORANT CỰC XINH TẶNG KÈM KỆ TRƯNG PART 1</p>
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
                  </Carousel>
                </div>
        {/*Categories End*/} 
        </>     
    );
      
};

export default memo(HomePage);