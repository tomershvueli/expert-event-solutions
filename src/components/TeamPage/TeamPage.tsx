import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Button } from "../Button/Button";

interface Props {
  onClick?: () => void;
}
export default function TeamPage({ onClick }: Props) {
  return (
    <>
      <Header />

      <div className="bg-wheat flex flex-col items-center">
        <div className="flex justify-center flex-col items-center">
          <h1 className=" md:text-mobile-title text-contact-header pt-[120px] font-bold text-lightGingerFlower font-title">
            About Our Team
          </h1>
          <p className="text-center max-w-2xl px-4">
            Meet our dedicated team of hard-working professionals behind our
            small event organization business. We bring passion and attention to
            detail to every project, ensuring your event runs smoothly and
            successfully. Discover the difference a committed team can make!
          </p>
        </div>
        {/* Add Horizontal Image gallery here */}
        <h1> Horizontal Image List placeholder </h1>
        <div>
          <h3>
            Welcome! Check out photos from our past events and see the magic we
            create. Enjoy!
          </h3>
          <h1 className=" md:text-mobile-title text-contact-header pt-[120px] font-bold text-lightGingerFlower font-title">
            Gallery of our past events
          </h1>
          {/* Add Gallery componenet here */}
          <h1>Image Gallery Placeholder</h1>
          <div className="sm:max-w-[343px] flex flex-col items-center  h-[962px] border-[6px] rounded-[70px] sm:rounded-[30px] md:border-4 border-lightGingerFlower">
            <h2 className=" md:text-mobile-title text-contact-header pt-[120px] font-bold text-lightGingerFlower font-title">
              Get started today!
            </h2>
            <p className="flex flex-wrap font-text paragraph-lg text-lightblack width-[438px]">
              Send the Team a Note. Tell us a little more about what you are
              looking for.
            </p>
            <Button
              onClick={onClick}
              buttonText="Drop us a line"
              submitButton={false}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
