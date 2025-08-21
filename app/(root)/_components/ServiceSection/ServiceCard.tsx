import StyledLink from "@ui/StyledLink"

interface ServiceCardProps {
    title: string;
    description: string;
    price: number;
    isLinearMeter?: boolean;
}

const ServiceCard = (props: ServiceCardProps) => {
    const unitExplanation = props.isLinearMeter
        ? "рублей за погонный метр"
        : "рублей за квадратный метр";
    const unitText = props.isLinearMeter ? "руб./п.м." : "руб./м²";

    return (
        <div className="bg-background-secondary flex flex-col justify-between gap-6 rounded-3xl p-8">
            <dt>{props.title}</dt>
            <dd>{props.description}</dd>
            <div className="flex-between flex-col gap-3 lg:flex-row">
                <p className="bg-background-primary w-full rounded-lg px-4 py-2 text-center whitespace-nowrap text-red-500 lg:w-auto">
                    от <data value={props.price}>{props.price}</data>{" "}
                    <abbr className="no-underline" title={unitExplanation}>
                        {unitText}
                    </abbr>
                </p>
                <StyledLink
                    href=""
                    variant="secondary"
                    size="max"
                    className="px-4 lg:w-auto"
                >
                    Подробнее
                </StyledLink>
            </div>
        </div>
    );
};

export default ServiceCard;
