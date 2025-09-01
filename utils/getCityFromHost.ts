import { headers } from "next/headers";

import { cityMap } from "@/types";

const getCityFromHost = async () => {
    const headersList = await headers();
    const host = headersList.get("host") || "";

    const subdomain = host.split(".")[0];
    return cityMap[subdomain] || "Новосибирск";
};

export default getCityFromHost;
