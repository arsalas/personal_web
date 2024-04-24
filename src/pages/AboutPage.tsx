import Section from "../components/Section";

export default function AboutPage() {
  return (
    <Section>
      <article id="about" className="flex flex-col justify-center items-center min-h-svh">
        <div className=" max-w-4xl">
          <h2 className="text-4xl font-semibold text-slate-200 mb-5 text-center">
            About
          </h2>

          <p className="container text-slate-400 my-5">
            Soy una persona apasionada de la programación con más de tres años
            de experiencia. Mi experiencia se centra principalmente en el
            desarrollo de aplicaciones web y el desarrollo de videojuegos con
            Ureal Engine. Mi objetivo principal es crear soluciones
            personalizadas y escalables para cada uno de mis clientes. En cada
            proyecto, me esfuerzo por mantener una comunicación fluida y
            transparente, para garantizar que todas las expectativas en términos
            de calidad y tiempo de entrega se cumplan. Estas son algunas de las
            tecnologías que utilizo para la elaboración de mis proyectos.
          </p>
        </div>
      </article>
    </Section>
  );
}
