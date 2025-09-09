import { FeatureCardProps } from "@types";
import Image from "next/image";

const FeatureCard = (props: FeatureCardProps) => {
    return (
        <section className="bg-background-primary flex flex-col rounded-2xl p-0">
            <div
                className={`text-foreground-secondary flex-center flex-col gap-2 rounded-2xl bg-blue-900 p-8 text-center`}
            >
                <Image src={props.icon} alt="" />
                <hgroup>
                    <h3 className="2xs:text-lg xs:text-xl mb-2 text-base font-bold">
                        {props.title}
                    </h3>
                    <p className="2xs:text-base text-sm">{props.description}</p>
                </hgroup>
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
        </section>
    );
};

export default FeatureCard;
