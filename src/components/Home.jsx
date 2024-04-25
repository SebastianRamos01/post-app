import Header from "./Header";
import Featured from "./Featured";
import Footer from "./Footer";
import Background from "./Background";
import Button from "./Button";
import CardBg from "./CardBg";
import Recent from "./Recent";

export default function Home() {
  return (
    <Background>
      <Header></Header>
      <section className="flex flex-col justify-center items-center h-[400px]">
        <div className="text-center w-[80%]">
          <p className="text-lg">
            Somos parte de un universo del que conocemos muy poco, materia
            oscura, energia oscura, espacio infinto. Este blog explora
            brevemente las maravillas y misterios del vasto cosmos que
            comformamos.
          </p>
        </div>
        <Button route={"about"} action={"Mas info"}></Button>
      </section>
      <CardBg>
        <Recent></Recent>
        <Featured></Featured>
        <Footer></Footer>
      </CardBg>
    </Background>
  );
}
