import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Box, Image } from "@chakra-ui/react";

export default function SliderShow1() {
  return (
    <Box maxWidth="100%" margin="auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            alt="1"
            src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/01-JAN/AppBanner/Blaze/01/Desktop_1920x694.jpg"
            width={"100%"}
            height={"auto"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="2"
            src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/AppBanner/solitaireOffer/01/Desktop_1920x694.jpg"
            width={"100%"}
            height={"auto"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="3"
            src="https://cdn.caratlane.com/media/static/images/V4/2022/Shaya/12_Dec/20_12_2022/Desktop/Desktop_1920x694_1.jpg"
            width={"100%"}
            height={"auto"}
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}