import React from "react";
import { Image } from "../Image/Image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

import eventImage1 from "../../images/event_diningTable.png";
import eventImage2 from "../../images/event_walledTent.png";
import eventImage3 from "../../images/event_conference.png";
import eventImage4 from "../../images/event_beachPopupTents.png";
import eventImage5 from "../../images/event_colorLights.png";
import eventImage6 from "../../images/event_treeLights.png";
import eventImage7 from "../../images/event_marathonFinishLine.png";
import eventImage8 from "../../images/event_groupOutdoor.png";
import eventImage9 from "../../images/event_SantaPhotos.png";

const defaultImages = [
  eventImage1,
  eventImage2,
  eventImage3,
  eventImage4,
  eventImage5,
  eventImage6,
  eventImage7,
  eventImage8,
  eventImage9,
];

interface GalleryProps {
  images?: string[];
}
export const Gallery: React.FC<GalleryProps> = ({ images = defaultImages }) => {
  return (
    <div className="gallery-container">
      <div className="sm:hidden md:hidden grid grid-cols-3 gap-5">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Event Image ${index + 1}`}
            context="gallery"
          />
        ))}
      </div>

      <div className="hidden sm:flex md:flex">
        <Swiper
          pagination={{
            type: "custom",
            renderCustom: (swiper, currentPage, totalPages) => {
              const paginationBullets = Array(totalPages)
                .fill(null)
                .map((_, index) => {
                  const className =
                    currentPage === index + 1
                      ? "w-full bg-gingerFlower"
                      : "w-full bg-offWhite";
                  return `
                      <span class="${className} inline-block w-7 h-1.5 mx-1 rounded-lg"></span>`;
                })
                .join("");

              return `<div class="flex justify-center mx-1 w-full">
                        ${paginationBullets}
                      </div>`;
            },
            clickable: true,
          }}
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          className="!pb-[30px] relative flex justify-center items-center w-full max-w-[343px] mx-auto overflow-hidden"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <Image
                src={src}
                alt={`Event Image ${index + 1}`}
                context="gallery"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
