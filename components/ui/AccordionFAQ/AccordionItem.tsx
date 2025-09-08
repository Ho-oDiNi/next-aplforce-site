import { AccordionItemProps } from "@/types";

const AccordionItem = (props: AccordionItemProps) => {
    return (
        <details
            open={props.isOpen}
            className="bg-background-secondary w-full rounded-2xl p-8 lg:max-w-2xl"
        >
            <summary className="font-bold">{props.title}</summary>
            <p className="mt-4 text-base">{props.description}</p>
        </details>
    );
};

export default AccordionItem;
