import CarouselSlider from "./CarouselSlider";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Slider(){
    return(
        <div className="mt-4 w-[80%] mx-auto">
            <img className="rounded-lg" src="/13_Novb300d0b198eb117aebbbc77b50cf0d6e.png" alt="" />
            <CarouselSlider/>
        </div>
    )
}
export default Slider