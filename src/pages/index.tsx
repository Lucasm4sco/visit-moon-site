import Heading from "@/components/heading/heading";
import SectionMoonAnimated from "@/components/sections/MoonAnimated";
import SectionExploreTheMoon from "@/components/sections/ExploreTheMoon";
import SectionTextInfinite from "@/components/sections/TextInfinite";
import SectionGallery from "@/components/sections/Gallery";
import SectionHowToExplore from "@/components/sections/HowToExplore";
import SectionBuyTicket from "@/components/sections/BuyTicket";
import SectionDepositions from "@/components/sections/Depositions";
import SectionContactUs from "@/components/sections/ContactUs";

export default function Page() {
  return (
    <>
      <title>Visit moon</title>
      <Heading />
      <main>
        <SectionMoonAnimated />
        <SectionExploreTheMoon />
        <SectionTextInfinite text="the moon"/>
        <SectionGallery />
        <SectionHowToExplore />
        <SectionBuyTicket />
        <SectionTextInfinite text="to the space"/>
        <SectionDepositions />
        <SectionContactUs />
      </main>
    </>
  )
}
