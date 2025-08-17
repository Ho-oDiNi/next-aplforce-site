import MiniAdvantageList from "./MiniAdvantageList";

interface TitleSectionProps {
  title: string;
  description: string;
  hasMiniAdvantage?: boolean;
}

const TitleSection = (props: TitleSectionProps) => {
  const unitAdvantage = props.hasMiniAdvantage
    ? <MiniAdvantageList />
    : <></>;

  return (
    <section className="text-foreground-secondary bg-[url(/images/home.webp)] bg-cover bg-center bg-no-repeat">
      <div className="flex-center flex-col mx-auto gap-10">
        <hgroup className="max-w-none lg:max-w-2xl">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </hgroup>

        <button className="h-12 w-70 bg-red-500 text-foreground-secondary rounded-xl font-bold">
          Заказать консультацию
        </button>

        {unitAdvantage}
      </div>
    </section>
  );
};

export default TitleSection;
