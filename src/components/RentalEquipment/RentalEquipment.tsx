import imageTent from "../../images/image-tent.png";
import imageInflatableProjector from "../../images/image-inflatable-projector.png";
import imageTentWithFoam from "../../images/image-tent-withfoam.png";
import imageArchways from "../../images/image-archways.png";

export function RentalEquipment() {
  return (
    <div className="bg-wheat flex flex-col items-center">
      <h1 className="font-bold text-lightGingerFlower text-welcome-title font-title">
        Renting Equipment
      </h1>
      <div className="flex flex-col gap-[80px] ">
        <img src={imageTent} alt="Rental Equipment Image 1" />
        <img src={imageInflatableProjector} alt="Rental Equipment Image 2" />
        <img src={imageTentWithFoam} alt="Rental Equipment Image 3" />
        <div className=" flex flex-col items-center  h-[962px] border-[6px] rounded-[110px] sm:border-4 md:border-4 border-lightGingerFlower">
          <img src={imageArchways} alt="Rental Equipment Image 4" />
          <h2 className="text-contact-header pt-[120px] font-bold text-lightGingerFlower font-title">
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
