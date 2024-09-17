import { Image } from "../Image/Image";
import eventImage1 from "../../assets/event_diningTable.png";
import eventImage2 from "../../assets/event_walledTent.png";
import eventImage3 from "../../assets/event_conference.png";
import eventImage4 from "../../assets/event_beachPopupTents.png";
import eventImage5 from "../../assets/event_colorLights.png";
import eventImage6 from "../../assets/event_treeLights.png";
import eventImage7 from "../../assets/event_marathonFinishLine.png";
import eventImage8 from "../../assets/event_groupOutdoor.png";
import eventImage9 from "../../assets/event_SantaPhotos.png";

export const Gallery = () => {
  const images = [
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

  return (
    <div className="gallery-container">
      {/* Layout for wide screens */}
      <div className="sm:hidden grid grid-cols-3 gap-20px">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Event Image ${index + 1}`}
            context="gallery"
          />
        ))}
      </div>

      {/* Placeholder carousel code for small screens */}
      <div className="hidden sm:block ">
        {/* Placeholder for the carousel, I will add package here later */}
        <div className="carousel">
          <Image src={images[0]} alt="Event Image 1" context="gallery" />
          <div className="carousel-indicators"></div>
        </div>
      </div>
    </div>
  );
};
