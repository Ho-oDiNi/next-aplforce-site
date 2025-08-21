"use server";

// Экранировать данные

export async function submitForm(prevState: any, formData: FormData) {
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const consent = formData.get("consent");

    const errors: { [key: string]: string } = {};

    if (!name) {
        errors.name = "Введите корректное имя";
    }
    if (!phone) {
        errors.phone = "Введите корректный телефон";
    }
    if (!consent) {
        errors.consent = "Необходимо согласие на обработку данных";
    }

    if (Object.keys(errors).length > 0) {
        return { errors, success: false, message: "Исправьте ошибки в форме" };
    }

    try {
        const telegramResponse = await fetch(
            `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: process.env.TELEGRAM_CHAT_ID,
                    text: `📥 Новая заявка!\nИмя: ${name}\nТелефон: ${phone}`,
                    parse_mode: "HTML",
                }),
            },
        );

        if (!telegramResponse.ok) {
            throw new Error("Ошибка при отправке в Telegram");
        }

        return {
            success: true,
            message:
                "Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.",
        };
    } catch (error) {
        return {
            success: false,
            message:
                "Ошибка при отправке формы. Попробуйте еще раз или попробуйте позднее",
        };
    }
}
