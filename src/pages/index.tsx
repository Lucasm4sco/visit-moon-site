import Heading from "@/components/heading/heading";
import SectionMoonAnimated from "@/components/SectionMoonAnimated";
import SectionExploreTheMoon from "@/components/SectionExploreTheMoon";
import SectionTextInfinite from "@/components/SectionTextInfinite";
import SectionGallery from "@/components/SectionGallery";
import SectionHowToExplore from "@/components/SectionHowToExplore";
import SectionBuyTicket from "@/components/SectionBuyTicket";
import SectionDepositions from "@/components/SectionDepositions";

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
      </main>
    </>
  )
}
