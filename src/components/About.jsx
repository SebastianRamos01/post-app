import Footer from "./Footer";
import Background from "./Background";

export default function About() {
  return (
    <Background>
      <section className="mx-5 font-sans">
        <div className="bg-black bg-opacity-40 p-5">
          <h3 className="text-xl">Sobre el Proyecto</h3>
          <p>
            Como seres humanos, nos sentimos atraidos por el misterio del
            universo. Queremos saber de donde venimos, como funciona el universo
            y si hay otros seres vivos en el.
          </p>
          <p>
            Desde lo más pequeño a lo más grande, el Universo es todo lo que
            existe desde el mundo invisible de las partículas que constituyen
            nuestros cuerpos hasta las grandes galaxias formadas por millones y
            millones de estrellas. Todo lo que es, lo que ha sido y lo que será.
            Eso es el Universo.
          </p>
          <h3 className="underline mt-5">Importante:</h3>
          <p>
            El universo sigue en constante evolucion y estudio por ende NO
            considerar ningun post como verdad absoluta, este blog tiene el
            proposito de informar y fomentar la curiosidad del lector sobre el
            universo del que somos parte. <br />
            Este blog se encuentra aun en desarrollo, en caso de tener
            alguna duda, sugerencia, cuestion o interes en participar del
            proyecto ponerse en contacto.
          </p>
        </div>
        <div className="h-[560px] rounded-lg min-w-[280px] max-w-[385] relative overflow-hidden">
          <img
            src="/images/space.jpeg"
            alt="space-img"
            className="absolute scale-[1.4]"
          />
        </div>
        <div className="bg-black bg-opacity-40 p-5">
          <p>
            Somos el medio para que el Cosmos se conozca a sí mismo. -Carl Sagan
          </p>
          <p>
            En algún lugar, algo increíble está esperando a ser descubierto.
            -Carl Sagan
          </p>
          <p>
            Mira a las estrellas y no a tus pies. Intenta dar sentido a lo que
            ves y pregúntate qué hace que el universo exista. Sé curioso.
            -Stephen Hawking
          </p>
        </div>
      </section>
      <Footer></Footer>
    </Background>
  );
}
