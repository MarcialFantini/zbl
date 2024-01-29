import Image from "next/image";
import styled from "./styled.module.css";

import srcMilei from "../../../public/images/news/javier-milei-1577162.jpeg";
import srcZBL from "../../../public/images/news/startup-594090_1280.jpg";

export const NewsZBL = () => {
  return (
    <div className={styled.containerNews}>
      <h2 className={styled.title}>News from ZBL</h2>
      <p>
        Como lideres en nuestro campo, mira las increíbles noticias con nuestra
        mirada y no te olvides suscribirte a nuestra news letter.{" "}
      </p>
      <ul className={styled.list}>
        <li>
          <picture>
            <Image className={styled.img} src={srcMilei} alt=""></Image>
          </picture>
          <div className={styled.containerText}>
            <h4>Javier Milei Presidente</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              aperiam asperiores architecto modi omnis commodi dolor possimus,
              vero maiores eveniet quam. Minima, voluptas officiis. Quaerat
              atque blanditiis nemo cumque officiis?
            </p>
            <button>Leer</button>
          </div>
        </li>
        <li>
          <picture>
            <Image className={styled.img} src={srcZBL} alt=""></Image>
          </picture>
          <div className={styled.containerText}>
            <h4>ZBL líder mundial en Planificación patrimonial </h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloribus nulla amet tempora possimus nostrum ex quae. Officia
              ratione harum architecto quod porro numquam nostrum vitae. Id
              dolorum culpa ipsa est.
            </p>
            <button>Leer</button>
          </div>
        </li>
      </ul>
    </div>
  );
};
