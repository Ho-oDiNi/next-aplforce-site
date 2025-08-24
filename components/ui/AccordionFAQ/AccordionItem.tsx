<<<<<<< HEAD:components/ui/AccordionFAQ/DetailsCard.tsx
import { DetailsCardProps } from "@types";
=======
interface AccordionItemProps {
    title: string;
    description: string;
    isOpen?: boolean;
}
>>>>>>> 6db8bd64ab499ff453dc2a4004d76fbe2e6b946a:components/ui/AccordionFAQ/AccordionItem.tsx

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
