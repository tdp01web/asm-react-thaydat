import React, { Component } from "react";
import Slider from "react-slick";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#d9d9d9", right: 0, zIndex:'2', width: "30px", height:'50px',textAlign:'center', lineHeight:"70px" }}
      onClick={onClick}
    >
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#d9d9d9", left: 0, zIndex: '2',width: "30px", height:'50px',textAlign:'center', lineHeight:"70px" }}
      onClick={onClick}
    />
  );
}
export default class CarouselSlider extends Component {
  constructor(props) {
    super(props);
    
  }
 
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,

    };
    return (
      <div>
        <Slider className="mt-[-50px]"  ref={slider => (this.slider = slider)} {...settings}>
          <div >
            <img className="rounded-lg" src="/05_Octb516d2fb3bffbaacac193bdc0e288add.webp" alt="" />
          </div>
          <div>
              <img className="rounded-lg" src="/15_Nov2b6721be0497612d5ecdaf01507a0d69.webp" alt="" />
          </div>
          <div>
            <img className="rounded-lg" src="/01_Nov489aa80faeaf8deb3b8d006f43798985.webp" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}