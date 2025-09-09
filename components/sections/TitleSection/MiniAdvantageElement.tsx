import { MiniMiniAdvantageElementProps } from "@types";

const MiniAdvantageElement = (props: MiniMiniAdvantageElementProps) => {
    return (
        <div className="text-center">
            <dt className="text-nowrap">{props.title}</dt>
            <dd>{props.description}</dd>
        </div>
    );
};

export default MiniAdvantageElement;
