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
      {/* Wide screen layout (3x3 grid for large screens) */}
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

      {/* Carousel for small and medium screens */}
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
                      ? "swiper-pagination-bullet-active"
                      : "swiper-pagination-bullet";

                  return `
                    <span class="${className}"
                      style="
                        display: inline-block;
                        width: 28px;
                        maxWidth: 28px;
                        height: 4px;
                        margin: 0 4px;
                        background-color: ${
                          currentPage === index + 1 ? "#d0514a" : "#e9e8d5"
                        };
                        border-radius: 4px;
                      "
                    ></span>`;
                })
                .join("");

              return `
               <div class="swiper-pagination-container" 
                  style="
                    display: flex;
                    justify-content: center;
                    margin: 0 4px;
                    width: 100%;
                  "
                >
                  ${paginationBullets}
              `;
            },
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          spaceBetween={50}
          slidesPerView={1}
          style={{
            overflow: "hidden", // Prevent unwanted scrolling
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            maxWidth: "343px",
            margin: "4px auto 0",
            paddingBottom: "30px", // Reserve space for pagination bullets
          }}
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
