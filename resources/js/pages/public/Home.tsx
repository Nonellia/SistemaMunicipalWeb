import PublicLayout from "@/layouts/public-layout";
import HeroInstitucional from "@/layouts/public/hero/HeroInstitucional";

export default function Home() {
  return (
    <>
      <HeroInstitucional />
      {/* Otras secciones */}
    </>
  );
}

Home.layout = (page: React.ReactNode) => (
  <PublicLayout
    title="Municipalidad de Río Gallegos | Portal Oficial"
    description="Trámites, servicios y gestión pública municipal"
  >
    {page}
  </PublicLayout>
);
