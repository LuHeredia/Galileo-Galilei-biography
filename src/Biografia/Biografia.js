import React from "react";
import "./Biografia.css";
import galileo from "../Imagenes/galileo.jpg";

const Biografia = () => {
  return (
    <div className="container">
      <header>
        <h1>Galileo Galilei</h1>
        <h2>y su luna</h2>
      </header>
      <div className="content">
        <img src={galileo} className="image-galileo" />
        <p>
          Galileo Galilei fue un científico italiano del siglo XVI y XVII que
          hizo importantes contribuciones al campo de la astronomía. Entre sus
          numerosos logros, Galileo realizó observaciones detalladas de la Luna
          que revolucionaron nuestra comprensión de nuestro satélite natural.
        </p>
        <p>
          Utilizando un telescopio que él mismo construyó, Galileo pudo examinar
          la Luna con un nivel de detalle nunca antes alcanzado. Sus
          observaciones demostraron que la superficie lunar no era una esfera
          perfectamente lisa, como se creía en ese momento, sino que estaba
          cubierta de cráteres, montañas y valles.
        </p>
        <p>
          Uno de los descubrimientos más significativos de Galileo fue que la
          Luna tenía una topografía accidentada. Observó montañas, algunas de
          las cuales alcanzaban alturas considerablemente altas, y cráteres que
          eran evidencia de impactos pasados. Estos hallazgos contradecían la
          creencia anterior de que la Luna era un cuerpo celestial perfecto y
          sin imperfecciones.
        </p>
        <p>
          Además, las observaciones de Galileo también revelaron que la
          superficie de la Luna no era estática. A través de cambios en la
          apariencia de los cráteres y las sombras proyectadas, pudo determinar
          que había una rotación lunar.
        </p>
        <p>
          Las observaciones de Galileo de la Luna no solo cambiaron nuestra
          comprensión de su topografía y geología, sino que también tuvieron un
          impacto en la forma en que entendemos el sistema solar en su conjunto.
          Sus descubrimientos proporcionaron evidencia adicional de que la
          Tierra no era el centro del universo, respaldando así el modelo
          heliocéntrico propuesto por Nicolás Copérnico.
        </p>
      </div>
      <div className="datos">
        <p>
          Telescopio mejorado: Galileo Galilei diseñó y construyó su propio
          telescopio mejorado, que le permitió observar la Luna con una mayor
          claridad y detalle. Su telescopio tenía una mayor capacidad de aumento
          y una mejor calidad óptica en comparación con los modelos anteriores.
        </p>
        <p>
          Fases de la Luna: Galileo observó y documentó las diferentes fases de
          la Luna. Sus observaciones demostraron que la Luna no era una fuente
          de luz propia, sino que reflejaba la luz del Sol. Al observar las
          diferentes fases, pudo deducir que la apariencia cambiante de la Luna
          se debía a su posición relativa respecto al Sol y la Tierra.
        </p>
        <p>
          Ley de la caída de los cuerpos: Aunque no está directamente
          relacionado con la Luna, Galileo realizó experimentos en la Tierra
          para estudiar el movimiento de los cuerpos. Sus experimentos con
          objetos en caída libre y en pendientes inclinadas le llevaron a
          formular la Ley de la caída de los cuerpos, que proporcionó una base
          para entender la gravedad y el movimiento tanto en la Tierra como en
          otros cuerpos celestes.
        </p>
        <p>
          Apoyo al modelo heliocéntrico: Las observaciones de Galileo de la Luna
          y otros cuerpos celestes reforzaron la idea del modelo heliocéntrico
          propuesto por Copérnico, que afirmaba que los planetas, incluida la
          Tierra, giran alrededor del Sol. La evidencia que Galileo recopiló de
          la Luna ayudó a respaldar esta teoría y a desafiar la visión
          geocéntrica del universo.
        </p>
        <p>
          Persecución de la Inquisición: Aunque sus observaciones de la Luna y
          otros descubrimientos científicos eran revolucionarios, Galileo fue
          perseguido por la Iglesia Católica. Sus ideas chocaban con las
          creencias religiosas y fue acusado de herejía. Fue condenado a prisión
          domiciliaria y se le prohibió seguir difundiendo sus ideas.
        </p>
      </div>
      <footer>
        <p>© {new Date().getFullYear()} Galileo Galilei</p>
      </footer>
    </div>
  );
};

export default Biografia;
