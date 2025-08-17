import ExampleCard from "./ExampleCard";

const ExampleList = () => {
  return (
    <dl>
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
