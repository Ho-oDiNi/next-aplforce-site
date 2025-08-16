import ExampleCard from "./ExampleCard";

const ExampleList = () => {
  return (
    <dl className="grid grid-cols-3 gap-6">
      <ExampleCard
        img="house1.png"
        title="Ремонт кровли многоэтажного дома"
        description="ул. Ленина, 45"
      />
      <ExampleCard
        img="house2.png"
        title="Ремонт кровли многоэтажного дома"
        description="ул. Ленина, 45"
      />
      <ExampleCard
        img="house3.png"
        title="Ремонт кровли многоэтажного дома"
        description="ул. Ленина, 45"
      />
    </dl>
  );
};

export default ExampleList;
