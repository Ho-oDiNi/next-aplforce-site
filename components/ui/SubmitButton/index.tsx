function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            variant="primary"
            className="h-12 w-full rounded-xl font-bold"
            disabled={pending}
            aria-disabled={pending}
        >
            {pending ? "Отправка..." : "Отправить заявку"}
        </Button>
    );
}
