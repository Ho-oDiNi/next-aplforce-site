import RequestForm from "@ui/RequestForm";
import { submitForm } from "@/app/api/actions/formActions";
import StyledSection from "@/components/ui/StyledSection";
import { ConsultSectionProps } from "@types";

const ConsultSection = (props: ConsultSectionProps) => {
    const colorUnit = {
        bgColor: props.isWhite
            ? "bg-background-secondary"
            : "bg-background-primary",
        formColor: !props.isWhite
            ? "bg-background-secondary"
            : "bg-background-primary",
    };
    return (
        <StyledSection isSecondary={props.isWhite}>
            <hgroup>
                <h2>Готовы начать работу?</h2>
                <p>
                    Получите бесплатную консультацию и расчет стоимости
                    работ для вашего дома
                </p>
            </hgroup>

            <RequestForm
                formAction={submitForm}
                bgColor={colorUnit.bgColor}
                formColor={colorUnit.formColor}
                />
        </StyledSection>
    );
};

export default ConsultSection;
