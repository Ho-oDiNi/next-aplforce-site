import { ExampleCardProps } from "@types";
import Image from "next/image";

const ExampleCard = (props: ExampleCardProps) => {
    return (
        <div className="bg-background-secondary overflow-hidden rounded-2xl">
            <Image
                className="h-50 w-full object-cover"
                src={`/images/${props.img}`}
                height={200}
                width={404}
                alt=""
            />
            <div className="flex flex-col gap-4 p-8">
                <dt>{props.title}</dt>
                <dd>{props.description}</dd>
                <div className="flex-center text-foreground-secondary h-8 w-25 rounded-lg bg-blue-900">
                    Завершено
                </div>
            </div>
        </div>
    );
};

export default ExampleCard;
