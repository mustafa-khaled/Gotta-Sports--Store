import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { reviewsData } from "../../data/data";

import "swiper/css/navigation";
import "swiper/css";

import Container from "../../ui/Container";
import SectionHead from "../../ui/SectionHead";

function CustomersReview() {
  return (
    <Container>
      <SectionHead
        title={"Customers Say"}
        description={"The Best Pizza Menu In Town"}
      />
      <div className="mt-[30px]">
        <Swiper
          className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] 
          sm:grid-cols-[repeat(auto-fill,minmax(270px,1fr))]"
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={50}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            400: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 2,
            },
          }}
        >
          {reviewsData.map((el) => {
            return (
              <SwiperSlide
                key={el.id}
                className="bg-gray p-[10px] text-center sm:p-[20px]"
              >
                <img
                  src={el.image}
                  alt={el.name}
                  className="mx-auto w-[100px] sm:w-auto"
                />

                <p className="my-[10px] text-sm text-darkGray sm:text-base">
                  “ Fantastic makeup, went on great and I felt so much better
                  protected all day! Would recommend to anyone. ”
                </p>
                <h4 className="text-xl font-medium sm:text-2xl">{el.name}</h4>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Container>
  );
}

export default CustomersReview;
