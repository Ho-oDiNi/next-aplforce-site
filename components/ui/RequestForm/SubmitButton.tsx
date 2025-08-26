import StyledButton from "../StyledButton";
import { SubmitButtonProps } from "@types";

const SubmitButton = (props: SubmitButtonProps) => {
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
};

export default SubmitButton;
