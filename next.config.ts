import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: "/services",
                destination: "/services/sealing",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
