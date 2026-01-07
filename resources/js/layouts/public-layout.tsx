import { ReactNode } from "react";
import { Head } from "@inertiajs/react";

import HeaderInstitucional from "./public/header/HeaderInstitucional";
import Navbar from "./public/header/Navbar";
import FooterInstitucional from "./public/footer/FooterInstitucional";
import EmergenciasSection from "./public/emergencias/EmergenciasSection";
import Gobierno from  '../pages/public/Gobierno';
import Tramites from  '../pages/public/Tramites';
type PublicLayoutProps = {
  children: ReactNode;
  title?: string;
  description?: string;
};

export default function PublicLayout({
  children,
  title = "Municipalidad de Río Gallegos",
  description = "Portal oficial del Gobierno Municipal de Río Gallegos",
}: PublicLayoutProps) {
  return (
    <>
      {/* SEO correcto con Inertia */}
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <header className="sticky top-0 z-50">
        <HeaderInstitucional />
        <Navbar />
      </header>
    
      <main className="bg-gris-claro text-gris-oscuro">
        {children}
      </main>

      <Tramites></Tramites>
      <hr></hr>
      <Gobierno ></Gobierno>

      <EmergenciasSection />
      <FooterInstitucional />
    </>
  );
}
