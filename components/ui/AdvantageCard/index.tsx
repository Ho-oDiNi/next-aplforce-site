import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface AdvantageCardProps {
    icon: string | StaticImport;
    title: string;
    description: string;
    commitmentArray?: string[];
}

const AdvantageCard = (props: AdvantageCardProps) => {
    return (
        <div className="bg-background-primary flex flex-col rounded-2xl">
            <div
                className={`text-foreground-secondary flex-center flex-col gap-2 rounded-2xl bg-blue-900 p-8 text-center`}
            >
                <Image src={props.icon} alt="" />
                <dt>{props.title}</dt>
                <dd>{props.description}</dd>
            </div>
            {props.commitmentArray && props.commitmentArray.length !== 0 && (
                <div className="p-6">
                    {props.commitmentArray.map((commitment, key) => (
                        <div className="flex-start mt-2" key={`${key}`}>
                            <span className="relative ml-3 text-sm before:absolute before:-left-3 before:content-['•']">
                                {commitment}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AdvantageCard;
