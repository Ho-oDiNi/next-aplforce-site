import React from "react";

import StyledSection from "../StyledNode/StyledSection";

import AccordionItem from "./AccordionItem";

export type AccordionItemType = [
    string | React.ReactNode,
    string | React.ReactNode,
];

export interface AccordionFAQProps {
    title: string | React.ReactNode;
    description: string | React.ReactNode;
    AccordionItems: AccordionItemType[];
}

const AccordionFAQ = ({
    title,
    description,
    AccordionItems,
}: AccordionFAQProps) => {
    return (
        <StyledSection>
            <hgroup>
                <h2>{title}</h2>
                <p>{description}</p>
            </hgroup>
            <div className="flex-start w-full flex-col gap-4">
                {AccordionItems.map(([question, answer], index) => (
                    <AccordionItem
                        key={index}
                        title={question}
                        description={answer}
                        isOpen={index === 0}
                    />
                ))}
            </div>
        </StyledSection>
    );
};

export default AccordionFAQ;
