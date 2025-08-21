import Link from "next/link";

const ConsentCheckbox = () => {
    return (
        <label className="flex-center cursor-pointer text-neutral-500">
            <input type="checkbox" className="mr-2" name="consent" required />
            <p className="text-xs">
                Даю согласие на обработку персональных данных в соответствии{" "}
                <Link className="text-xs text-blue-900" href="">
                    с политикой конфиденциальности
                </Link>
            </p>
        </label>
    );
};

export default ConsentCheckbox;
