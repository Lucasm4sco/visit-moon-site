import Heading from "@/components/heading/heading";
import SectionMoonAnimated from "@/components/SectionMoonAnimated";
import SectionExploreTheMoon from "@/components/SectionExploreTheMoon";

export default function Page() {
  return (
    <>
      <title>Visit moon</title>
      <Heading />
      <main>
        <SectionMoonAnimated />
        <SectionExploreTheMoon />
      </main>
    </>
  )
}
