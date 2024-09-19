import imageTent from "../../images/image-tent.png";
import imageInflatableProjector from "../../images/image-inflatable-projector.png";
import imageTentWithFoam from "../../images/image-tent-withfoam.png";
import imageArchways from "../../images/image-archways.png";
import { Image } from "../Image/Image";

export const RentalEquipment = () => {
  return (
    <div className="bg-wheat flex flex-col items-center">
      <h1 className="md:text-mobile-title pt-[142px] pb-[80px] font-bold text-lightGingerFlower text-welcome-title font-title">
        Renting Equipment
      </h1>

      <div className="sm:items-center flex flex-col gap-[80px] sm:gap-[510px]  ">
        {/* First image container w/description */}
        <div className="relative sm:max-h-[418px] sm:w-[343px] ">
          <Image src={imageTent} alt="" context="equipment" />
          <div className=" hidden absolute h-[553px] top-[19.75rem] sm:block border-4 border-lightGingerFlower bg-wheat rounded-[60px] overflow-hidden  ">
            <h1 className="text-section-subtext text-center text-gingerFlower font-title pt-[40px] w-[331px] pb-[24px] font-bold">
              20x20 Marquee Tent
            </h1>
            <p className="text-paragraph-sm w-[335px] text-center overflow-wrap break-word font-normal font-text">
              Our heavy duty marquee tent is perfect for your outdoor event
              where you need more space for family and friends. This tent can
              accommodate 60 to 80 people at tables. Check with us for your
              table needs as well. We offer 6' and 8' rectangle tables, 4' round
              tables and high tops as well as folding chairs for rent.
            </p>
          </div>
        </div>
        {/* Second image container w/description */}
        <div className="relative sm:max-h-[922px] sm:w-[343px]">
          <Image src={imageInflatableProjector} alt="" context="equipment" />
          <div className="hidden absolute h-[553px] top-[19.75rem] sm:block border-4 border-lightGingerFlower bg-wheat rounded-[60px] overflow-hidden ">
            <h1 className="text-section-subtext text-center text-gingerFlower font-title pt-[40px] pb-[24px] font-bold">
              Outdoor Blowup Movie Screen and Projector
            </h1>
            <p className=" text-paragraph-sm w-[335px] text-center overflow-wrap break-word font-normal font-text ">
              Our outdoor blowup movie screen and projector are perfect for a
              movie night for the whole neighborhood. The 20' inflatable screen,
              projector and speaker provide a large viewing area for crowds of
              over 100. This rental requires one staff member present to set up
              and operate.
            </p>
          </div>
        </div>
        {/* Third image container w/description */}
        <Image src={imageTentWithFoam} alt="" context="equipment" />
        {/* Fourth image container w/description */}
        <div className="relative sm:h-[922px] sm:w-[343px]">
          <Image src={imageArchways} alt="" context="equipment" />
          <div className="hidden absolute h-[553px] top-[19.75rem] sm:block border-4 border-lightGingerFlower bg-wheat rounded-[60px] overflow-hidden ">
            <h1 className="text-section-subtext text-center text-gingerFlower font-title w-[319px] pt-[40px] pb-[24px] font-bold">
              Inflatable Archways
            </h1>
            <p className=" text-paragraph-sm w-[335px] text-center overflow-wrap break-word font-normal font-text ">
              We have multiple inflatable archways that can be used to meet your
              start line, finish line, or entrance needs for your event.
              Inflatables come with blowers, and sandbags and need power to
              operate. Our staff will set up and tear down the arches. You can
              also have custom banners designed to meet your marketing needs.
            </p>
          </div>
        </div>

        {/* <img
          className="sm:max-w-[343px]"
          src={imageInflatableProjector}
          alt="Rental Equipment Image 2"
        /> */}
        {/* <img
          className="sm:max-w-[343px]"
          src={imageTentWithFoam}
          alt="Rental Equipment Image 3"
        /> */}
        <div className="sm:max-w-[343px] flex flex-col items-center  h-[962px] border-[6px] rounded-[70px] sm:rounded-[30px] md:border-4 border-lightGingerFlower">
          {/* <img
            className="sm:max-w-[343px]"
            src={imageArchways}
            alt="Rental Equipment Image 4"
          /> */}
          <h2 className=" md:text-mobile-title text-contact-header pt-[120px] font-bold text-lightGingerFlower font-title">
            Tell us about your Event
          </h2>
          <p className="flex flex-wrap font-text paragraph-lg text-lightblack width-[438px]">
            Send the team a Note. Tell us a little more about what you are
            looking for
          </p>
        </div>
      </div>
    </div>
  );
};
