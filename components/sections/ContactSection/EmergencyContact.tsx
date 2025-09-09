import StyledLink from "@/components/ui/StyledNode/StyledLink";
import React from "react";

const EmergencyContact = () => {
    return (
        <>
            <StyledLink href="tel:+79831310113" variant="primary" size="max">
                Аварийный вызов
            </StyledLink>
            <StyledLink
                href={`https://wa.me/79831310113?text=${encodeURI("Добрый день!\nЯ хочу воспользоваться услугами по ремонту многоквартирного дома")}`}
                target="_blank"
                variant="whatsapp"
                size="max"
            >
                Написать в WhatsApp
            </StyledLink>
        </>
    );
};

export default EmergencyContact;
