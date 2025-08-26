import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "avatars.mds.yandex.net",
                pathname: "/get-yapic/**",
            },
        ],
    },
};

export default nextConfig;
