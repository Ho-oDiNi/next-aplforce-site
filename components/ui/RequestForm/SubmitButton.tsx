import { FormStatus, useFormStatus } from "react-dom";
import StyledButton from "../StyledButton";

interface SubmitButtonProps {
    buttonPending: boolean;
}

const SubmitButton = (props :SubmitButtonProps) => {
    return (
        <StyledButton
            variant="primary"
            size="max"
            type="submit"
            disabled={props.buttonPending}
            aria-disabled={props.buttonPending}
        >
            {props.buttonPending ? "Отправка..." : "Отправить заявку"}
        </StyledButton>
    );
}

export default SubmitButton;