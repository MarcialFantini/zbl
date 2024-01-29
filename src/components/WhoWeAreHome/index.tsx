import Image from "next/image";
import styled from "./styled.module.css";

import icon1 from "../../../public/images/iconBus/Icon.png";
import icon2 from "../../../public/images/iconBus/Icon-1.png";
import icon3 from "../../../public/images/iconBus/Icon-2.png";

export const WhoWeAreHome = () => {
  return (
    <div className={styled.containerWho}>
      <div className={styled.column}>
        <p className={styled.subText}>Somos</p>
        <h2 className={styled.title}>ZBL es una startup</h2>
        <p className={styled.text}>
          La compañía nació de la idea de Nicolás de la Plaza (Abogado UBA, LLM
          Oklahoma, STEP UK)
        </p>
        <p className={styled.text}>
          Quien trabajó como General Counsel para importantes firmas de EEUU y
          Argentina, nutrido componente legal que compone el Derecho Patrimonial
          Internacional.
        </p>
        <div className={styled.btnContainer}>
          <button className={styled.btnMore}>Sobre nosotros</button>
          <button className={styled.btnDetail}>Nuestras certificaciones</button>
        </div>
      </div>
      <div className={styled.column + " " + styled.containerItems}>
        <div className={styled.item}>
          <picture>
            <Image src={icon1} alt=""></Image>
          </picture>
          <div className={styled.containerText}>
            <h3>Operaciones en 3 países estratégicos</h3>
            <p className={styled.text}>
              N cantidad de compañías miembros de nuestros servicios
            </p>
          </div>
        </div>
        <div className={styled.item}>
          <picture>
            <Image src={icon2} alt=""></Image>
          </picture>
          <div className={styled.containerText}>
            <h3>Operaciones en 3 países estratégicos</h3>
            <p className={styled.text}>
              N cantidad de compañías miembros de nuestros servicios
            </p>
          </div>
        </div>
        <div className={styled.item}>
          <picture>
            <Image src={icon3} alt=""></Image>
          </picture>
          <div className={styled.containerText}>
            <h3>Operaciones en 3 países estratégicos</h3>
            <p className={styled.text}>
              N cantidad de compañías miembros de nuestros servicios
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
