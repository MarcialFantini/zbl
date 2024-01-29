import Image from "next/image";
import styled from "./styled.module.css";
import srcPortada from "../../../public/images/portada/building-91228_1920.jpg";
import { WhoWeAreHome } from "@/components/WhoWeAreHome";
import { HowWeDoHome } from "@/components/HowWeDoHome";
import { NewsZBL } from "@/components/NewsZBL";
import { Footer } from "@/components/Footer";

export const HomePage = () => {
  return (
    <main className={styled.containerHome}>
      <div className={styled.header}>
        <picture className={styled.picture}>
          <Image
            className={styled.img}
            alt="From page Image"
            src={srcPortada}
          ></Image>
        </picture>
        <div className={styled.filterImage}></div>
        <div className={styled.containerText}>
          <h2>
            International <span className={styled.detail}>Legal Service</span>
          </h2>
          <p>
            Startup que inició sus operaciones en febrero de 2020. La compañía
            nació de la idea de Nicolás de la Plaza.
          </p>
        </div>
      </div>
      <WhoWeAreHome></WhoWeAreHome>
      <HowWeDoHome></HowWeDoHome>
      <NewsZBL></NewsZBL>
      <Footer></Footer>
    </main>
  );
};
