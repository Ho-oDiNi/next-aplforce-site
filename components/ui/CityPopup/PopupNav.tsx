"use client";

import locationIcon from "@icons/location-blue-dark.svg";
import { cityMap } from "@types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import pasteCityIntoUrl from "@/utils/pasteCityIntoUrl";

interface CityData {
    activeEntry: [string, string] | null;
    otherEntries: [string, string][];
}

const PopupLink = () => {
    const [cityData, setCityData] = useState<CityData>({
        activeEntry: null,
        otherEntries: [],
    });

    useEffect(() => {
        const hostname = window.location.hostname;
        const subdomain = hostname.substring(0, hostname.indexOf("."));

        const entries = Object.entries(cityMap);
        const activeEntry = entries.find(([key]) => key === subdomain) || null;
        const otherEntries = entries.filter(([key]) => key !== subdomain);

        setCityData({ activeEntry, otherEntries });
    }, []);

    return (
        <nav className="flex flex-col gap-4">
            {cityData.activeEntry && (
                <div className="flex-start gap-4 text-blue-500">
                    <Image src={locationIcon} alt="SEO" />
                    <span className="text-base">{cityData.activeEntry[1]}</span>
                </div>
            )}
            {cityData.otherEntries.map(([slug, cityValue]) => (
                <Link
                    key={slug}
                    href={pasteCityIntoUrl({
                        url: window.location.href,
                        newSubdomain: slug,
                    })}
                    className="text-base hover:opacity-70"
                >
                    {cityValue}
                </Link>
            ))}
        </nav>
    );
};

export default PopupLink;
