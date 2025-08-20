import Link from "next/link";

interface LicenseCardProps {
    title: string;
    href: string;
}

const LicenseCard = (props: LicenseCardProps) => {
    return (
        <div className="bg-background-secondary riunded-2xl flex h-full flex-col justify-between gap-6 rounded-2xl p-8">
            <dt>{props.title}</dt>
            <Link
                href={props.href}
                className="flex-center h-8 w-20 rounded-lg bg-blue-500 text-sm text-white"
            >
                Скачать
            </Link>
        </div>
    );
};

export default LicenseCard;
