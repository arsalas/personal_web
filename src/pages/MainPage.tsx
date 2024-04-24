import Menu from "../components/Menu";
import Section from "../components/Section";

export default function MainPage() {
  return (
    <Section>
      <div className="flex justify-center items-center flex-col min-h-svh">
        <h1 className="text-5xl font-bold text-slate-200 my-5">
          Alberto Ramirez Salas
        </h1>
        <h2 className="text-3xl font-semibold text-slate-200 my-5">
          Aplicaciones Web | Videojuegos | Profesor
        </h2>
        <h3 className="text-2xl font-semibold text-slate-400 my-5">
          Desarrollo aplicaciones web, videojuegos y doy clases de programación.
        </h3>
        <div className="my-10"></div>
        <Menu />
      </div>
    </Section>
  );
}
