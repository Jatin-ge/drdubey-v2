import { generatePageMetadata } from "@/lib/seo.config";

export const revalidate = 3600;
import HomePageContent from "@/components/HomePageContent";
import { PhysicianJsonLd, MedicalBusinessJsonLd } from "@/components/seo/JsonLd";

export const metadata = generatePageMetadata({});

export default function CardWithForm() {
  return (
    <>
      <PhysicianJsonLd />
      <MedicalBusinessJsonLd />
      <HomePageContent />
    </>
  );
}
