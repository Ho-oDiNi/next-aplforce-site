interface MiniMiniAdvantageElementProps {
  title: string;
  description: string;
}

const MiniAdvantageElement = (props: MiniMiniAdvantageElementProps) => {
  return (
    <div className="text-center">
      <dt className="text-xl font-bold">{props.title}</dt>
      <dd className="text-sm">{props.description}</dd>
    </div>
  );
};

export default MiniAdvantageElement;
