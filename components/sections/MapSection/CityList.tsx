import locationIcon from "@icons/location-blue-light.svg";
import Image from "next/image";

import { CityCoordinates } from "@/types";

interface CityListProps {
    cities: CityCoordinates[];
}

const CityList = ({ cities }: CityListProps) => {
    return (
        <aside className="flex-center flex-col gap-6">
            <h3 className="2xs:text-lg xs:text-xl text-base font-bold text-nowrap">
                Основные города
            </h3>
            <ul className="mb-8 grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3 lg:grid-cols-1">
                {cities.map((city, index) => (
                    <li key={index} className="flex-start gap-x-2 md:gap-x-4">
                        <Image
                            src={locationIcon}
                            alt=""
                            width={16}
                            height={16}
                        />
                        <span className="2xs:text-base text-sm">
                            {city.name}
                        </span>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default CityList;
