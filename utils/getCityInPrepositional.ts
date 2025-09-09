import { prepositionalCityMap } from "@/types";

const getCityInPrepositional = (city: string): string => {
    return prepositionalCityMap[city] || city;
};

export default getCityInPrepositional;
