interface MiniMiniAdvantageElementProps {
    title: string;
    description: string;
}

const MiniAdvantageElement = (props: MiniMiniAdvantageElementProps) => {
    return (
        <div className="text-center">
            <dt className="text-nowrap">{props.title}</dt>
            <dd>{props.description}</dd>
        </div>
    );
};

export default MiniAdvantageElement;
