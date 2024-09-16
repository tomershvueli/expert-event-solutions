import { Header } from "../Header/Header";
import { Image } from "../Image/Image";
import { Footer } from "../Footer/Footer";

export function StaffingServices() {
  return (
    <>
      <Header />
      <Image
        src="src/assets/image-staffing.png"
        alt="Staffing Services"
        context="staffing"
      />
      <Footer />
    </>
  );
}
