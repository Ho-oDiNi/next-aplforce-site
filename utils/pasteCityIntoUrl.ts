interface CityUrlData {
    url: string;
    newSubdomain: string;
}

const pasteCityIntoUrl = ({ url, newSubdomain }: CityUrlData) => {
    try {
        const urlObj = new URL(url);
        const hostParts = urlObj.hostname.split(".");

        if (hostParts.length > 1) {
            hostParts[0] = newSubdomain;
            urlObj.hostname = hostParts.join(".");
        } else {
            urlObj.hostname = `${newSubdomain}.${urlObj.hostname}`;
        }

        return urlObj.toString();
    } catch (error) {
        console.error("Invalid URL:", error);
        return url;
    }
};

export default pasteCityIntoUrl;
