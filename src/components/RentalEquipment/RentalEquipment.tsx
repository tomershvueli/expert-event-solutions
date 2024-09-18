import imageTent from "../../images/image-tent.png";
import imageInflatableProjector from "../../images/image-inflatable-projector.png";
import imageTentWithFoam from "../../images/image-tent-withfoam.png";
import imageArchways from "../../images/image-archways.png";

export function RentalEquipment() {
  return (
    <div className="bg-wheat flex flex-col items-center">
      <h1 className="md:text-mobile-title pt-[142px] pb-[80px] font-bold text-lightGingerFlower text-welcome-title font-title">
        Renting Equipment
      </h1>
      <div className="sm:items-center flex flex-col gap-[80px] ">
        <img
          className="sm:max-w-[343px]"
          src={imageTent}
          alt="Rental Equipment Image 1"
        />
        <div className=" hidden sm:block border-4 border-lightGingerFlower rounded-[110px] ">
          <p className="text-sm">This is the description for the image.</p>
        </div>
        <img
          className="sm:max-w-[343px]"
          src={imageInflatableProjector}
          alt="Rental Equipment Image 2"
        />
        <img
          className="sm:max-w-[343px]"
          src={imageTentWithFoam}
          alt="Rental Equipment Image 3"
        />
        <div className="sm:max-w-[343px] flex flex-col items-center  h-[962px] border-[6px] rounded-[70px] sm:rounded-[30px] md:border-4 border-lightGingerFlower">
          <img
            className="sm:max-w-[343px]"
            src={imageArchways}
            alt="Rental Equipment Image 4"
          />
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
}
