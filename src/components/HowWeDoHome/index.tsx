import Image from "next/image";
import styled from "./styled.module.css";

import first from "../../../public/images/services/first.jpg";
import second from "../../../public/images/services/second.jpg";
import thir from "../../../public/images/services/thir.jpg";

export const HowWeDoHome = () => {
  return (
    <div className={styled.containerHow}>
      <h2 className={styled.title}>Nuestros Servicios</h2>
      <p className={styled.text}>Los servicios en donde nos destacamos.</p>

      <ul className={styled.list}>
        <li>
          <picture className={styled.picture}>
            <Image className={styled.img} src={first} alt=""></Image>
          </picture>
          <h2>Incorporación de LLCs y Corps en EEUU</h2>
          <p>
            Creamos sociedades Estadounidenses en cualquier estado, les abrimos
            su cuenta corporativa en Florida
          </p>
          <button>Leer más </button>
        </li>
        <li>
          <picture className={styled.picture}>
            <Image className={styled.img} src={second} alt=""></Image>
          </picture>
          <h2>Planificación patrimonial</h2>
          <p>
            Solucionamos sus preocupaciones de privacidad, hereditarias y
            protección de sus activos.
          </p>
          <button>Leer más </button>
        </li>
        <li>
          <picture className={styled.picture}>
            <Image className={styled.img} src={thir} alt=""></Image>
          </picture>
          <h2>Golden Visas y Real Estate en España </h2>
          <p>
            Asesoramiento de Golden Visas para residencia legal a traves de
            inversiones inmobiliarias.
          </p>
          <button>Leer más </button>
        </li>
      </ul>
    </div>
  );
};
