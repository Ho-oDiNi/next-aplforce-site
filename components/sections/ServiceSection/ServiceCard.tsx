import { ServiceCardProps } from "@types";

import StyledLink from "@/components/ui/StyledNode/StyledLink";

const ServiceCard = (props: ServiceCardProps) => {
    const unitExplanation = props.isLinearMeter
        ? "рублей за погонный метр"
        : "рублей за квадратный метр";
    const unitText = props.isLinearMeter ? "руб./п.м." : "руб./м²";

    return (
        <section className="bg-background-secondary flex flex-col justify-between gap-6 rounded-3xl p-8">
            <hgroup className="text-start">
                <h3 className="2xs:text-lg xs:text-xl mb-6 text-base font-bold">
                    {props.title}
                </h3>
                <p className="2xs:text-base text-sm">{props.description}</p>
            </hgroup>

            <div className="flex-between flex-col gap-3 lg:flex-row">
                <span className="bg-background-primary w-full rounded-lg px-4 py-2 text-center text-sm whitespace-nowrap text-red-500 lg:w-auto">
                    от <data value={props.price}>{props.price}</data>{" "}
                    <abbr className="no-underline" title={unitExplanation}>
                        {unitText}
                    </abbr>
                </span>
                <StyledLink
                    href={props.link}
                    variant="secondary"
                    size="sm"
                    className="w-full lg:w-auto"
                >
                    Подробнее
                </StyledLink>
            </div>
        </section>
    );
};

export default ServiceCard;
