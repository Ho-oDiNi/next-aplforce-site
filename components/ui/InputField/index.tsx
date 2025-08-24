import { InputFieldProps } from "@types"

const InputField = (props: InputFieldProps) => {
    return (
        <label className="flex flex-col gap-4">
            {props.label}
            <input
                name={props.name}
                type={props.type}
                inputMode={props.inputMode}
                className={`${props.bgColor} w-full rounded-2xl px-4 py-3`}
                placeholder={props.placeholder}
                autoComplete="on"
                required
            />
        </label>
    );
};

export default InputField;
