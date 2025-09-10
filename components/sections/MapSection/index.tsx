"use client";

import CityList from "./CityList";
import YandexMap from "./YandexMap";

import StyledSection from "@/components/ui/StyledNode/StyledSection";
import { CityCoordinates } from "@/types";

// Данные о городах с координатами
const cities: CityCoordinates[] = [
    { name: "Новосибирск", coordinates: [54.984, 82.896] },
    { name: "Бердск", coordinates: [54.758, 83.107] },
    { name: "Академгородок", coordinates: [54.847, 83.107] },
    { name: "Обь", coordinates: [54.994, 82.693] },
    { name: "Искитим", coordinates: [54.639, 83.305] },
    { name: "Кольцово", coordinates: [54.937, 83.182] },
    { name: "Краснообск", coordinates: [54.919, 82.99] },
    { name: "Пригороды НСО", coordinates: [54.984, 82.896] },
];

const MapSection = () => {
    return (
        <StyledSection>
            <h2 className="m-0">География работ</h2>
            <div className="flex-between w-full flex-col lg:flex-row lg:gap-14">
                <CityList cities={cities} />
                <YandexMap cities={cities} />
            </div>
        </StyledSection>
    );
};

export default MapSection;
