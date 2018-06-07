import React from "react";
import Slider from "react-slick";
import { Image } from 'react-bootstrap';

function RightNavButton(props) {
  const { className, style, onClick} = props
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}

function LeftNavButton(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}

export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:'10px',
      marginBottom: '10px',
      marginLeft: '15%',
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      nextArrow: <LeftNavButton />,
      prevArrow: <RightNavButton />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Slider {...settings}>
        <div>
          <Image className="image" src={require("./../assets/img/fii1.png")} />
        </div>
        <div>
          <Image className="image" src={require("./../assets/img/fii2.png")} />
        </div>
        <div>
          <Image className="image" src={require("./../assets/img/fii3.png")} />
        </div>
        <div>
          <Image className="image" src={require("./../assets/img/fii4.png")} />
        </div>
        <div>
          <Image className="image" src={require("./../assets/img/fii5.png")} />
        </div>
        <div>
          <Image className="image" src={require("./../assets/img/fii6.png")} />
        </div>
      </Slider>
    );
  }
}