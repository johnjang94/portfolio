// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function DevSwiper() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={200}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="w-[90vw] h-[45vh] justify-center items-center text-center mt-[50px] md:w-[90vw] md:h-[70vh] md:justify-center md:items-center md:text-center md:mt-[50px] lg:w-[90vw] lg:h-[80vh] lg:justify-center lg:items-center lg:text-center lg:mt-[50px] xl:w-[90vw] xl:h-[95vh] xl:justify-center xl:items-center xl:text-center xl:-mt-5"
    >
      <SwiperSlide>
        <img
          src={require("../utils/dev/football.png")}
          alt="Example 1"
          className="text-center w-[70vw] h-[35vh] mx-auto my-5 md:text-center md:w-[70vw] md:h-[60vh] md:mx-auto md:my-5 lg:text-center lg:w-[70vw] lg:h-[65vh] lg:mx-auto lg:my-[50px] xl:text-center xl:w-[70vw] xl:h-[80vh] xl:mx-auto xl:my-[50px] rounded-xl"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={require("../utils/dev/to-do-list.png")}
          alt="Example 2"
          className="text-center w-[70vw] h-[35vh] mx-auto my-5 md:text-center md:w-[70vw] md:h-[60vh] md:mx-auto md:my-5 lg:text-center lg:w-[70vw] lg:h-[65vh] lg:mx-auto lg:my-[50px] xl:text-center xl:w-[70vw] xl:h-[80vh] xl:mx-auto xl:my-[50px] rounded-xl"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={require("../utils/dev/guess.png")}
          alt="Example 3"
          className="text-center w-[70vw] h-[35vh] mx-auto my-5 md:text-center md:w-[70vw] md:h-[60vh] md:mx-auto md:my-5 lg:text-center lg:w-[70vw] lg:h-[65vh] lg:mx-auto lg:my-[50px] xl:text-center xl:w-[70vw] xl:h-[80vh] xl:mx-auto xl:my-[50px] rounded-xl"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={require("../utils/dev/news-app.png")}
          alt="Example 4"
          className="text-center w-[70vw] h-[35vh] mx-auto my-5 md:text-center md:w-[70vw] md:h-[60vh] md:mx-auto md:my-5 lg:text-center lg:w-[70vw] lg:h-[65vh] lg:mx-auto lg:my-[50px] xl:text-center xl:w-[70vw] xl:h-[80vh] xl:mx-auto xl:my-[50px] rounded-xl"
        />
      </SwiperSlide>
    </Swiper>
  );
}
