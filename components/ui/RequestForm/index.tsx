"use client";

import Form from "next/form";
import InputField from "@ui/InputField";
import ConsentCheckbox from "@ui/ConsentCheckbox";
import SubmitButton from "./SubmitButton"
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

interface RequestFormProps {
    bgColor: string;
    formColor: string;
    formAction: (
        prevState: FormState,
        formData: FormData,
    ) => Promise<FormState>;
}

interface FormState {
    errors?: {
        name?: string;
        phone?: string;
        consent?: string;
    };
    success?: boolean;
    message?: string;
}

const RequestForm = (props: RequestFormProps) => {
    const { pending } = useFormStatus();
    const [state, action] = useActionState(props.formAction, {});

    return (
        <Form
            action={action}
            className={`p-8 lg:max-w-2xl ${props.formColor} rounded-2xl`}
        >
            <div className="xs:gap-12 flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <InputField
                        label="Имя"
                        name="name"
                        type="text"
                        inputMode="text"
                        bgColor={props.bgColor}
                        placeholder="Напишите ваше имя"
                    />
                    <InputField
                        label="Телефон"
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        bgColor={props.bgColor}
                        placeholder="+7 ( 000 ) 000 - 00 - 00"
                    />
                </div>

                <div className="flex flex-col gap-4">
                    <SubmitButton buttonPending={pending}/>
                    <ConsentCheckbox />

                    {state?.message && (
                        <div
                            className={`mt-2 text-sm ${
                                state.success
                                    ? "text-green-600"
                                    : "text-red-600"
                            }`}
                        >
                            {state.message}
                        </div>
                    )}
                </div>
            </div>
        </Form>
    );
};

export default RequestForm;
