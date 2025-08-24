import { AccordionItemProps } from "@/types";

const AccordionItem = (props: AccordionItemProps) => {
    return (
        <details
            open={props.isOpen}
            className="bg-background-secondary w-full rounded-2xl p-8 lg:max-w-2xl"
        >
            <summary>{props.title}</summary>
            <p className="mt-4">{props.description}</p>
        </details>
    );
};

export default AccordionItem;
