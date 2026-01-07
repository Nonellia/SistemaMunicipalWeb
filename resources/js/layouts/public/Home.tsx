import PublicLayout from "@/layouts/public-layout";
import HeroInstitucional from "@/layouts/public/hero/HeroInstitucional";

export default function Home() {
  return (
    <>
      <HeroInstitucional />
    </>
  );
}

// ASIGNAR LAYOUT
Home.layout = (page: React.ReactNode) => (
  <PublicLayout
    title="Municipalidad de Río Gallegos | Portal Oficial"
    description="Portal oficial del Gobierno Municipal de Río Gallegos"
  >
    {page}
  </PublicLayout>
);
