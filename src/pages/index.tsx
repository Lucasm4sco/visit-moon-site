import Heading from "@/components/heading/heading";
import SectionMoonAnimated from "@/components/SectionMoonAnimated";
import SectionExploreTheMoon from "@/components/SectionExploreTheMoon";
import SectionTextInfinite from "@/components/SectionTextInfinite";

export default function Page() {
  return (
    <>
      <title>Visit moon</title>
      <Heading />
      <main>
        <SectionMoonAnimated />
        <SectionExploreTheMoon />
        <SectionTextInfinite text="the moon"/>
      </main>
    </>
  )
}
