"use client";

import locationIcon from "@icons/location-blue-dark.svg";
import { cityMap } from "@types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface CityData {
    activeEntry: [string, string] | null;
    otherEntries: [string, string][];
    domain: string;
}

const PopupLink = () => {
    const [cityData, setCityData] = useState<CityData>({
        activeEntry: null,
        otherEntries: [],
        domain: "",
    });

    useEffect(() => {
        const hostname = window.location.hostname;
        const fullURL = window.location.href;

        const subdomain = hostname.substring(0, hostname.indexOf("."));
        const domain = fullURL.substring(fullURL.indexOf(".") + 1);

        const entries = Object.entries(cityMap);
        const activeEntry = entries.find(([key]) => key === subdomain) || null;
        const otherEntries = entries.filter(([key]) => key !== subdomain);

        setCityData({ activeEntry, otherEntries, domain });
    }, []);

    return (
        <nav className="flex flex-col gap-4">
            {cityData.activeEntry && (
                <div className="flex-start cursor-pointer gap-4 text-blue-500">
                    <Image src={locationIcon} alt="SEO" />
                    <span>{cityData.activeEntry[1]}</span>
                </div>
            )}
            {cityData.otherEntries.map(([slug, cityValue]) => (
                <Link
                    key={slug}
                    href={`http://${slug}.${cityData.domain}`}
                    className="hover:opacity-70"
                >
                    {cityValue}
                </Link>
            ))}
        </nav>
    );
};

export default PopupLink;
