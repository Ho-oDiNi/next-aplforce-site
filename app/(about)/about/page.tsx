import AboutSection from "../_components/AboutSection";
import EquipmentSection from "../_components/EquipmentSection";
import LicenseSection from "../_components/LicenseSection";

// import MapSection from "../_components/MapSection";

const About = async () => {
    return (
        <>
            <AboutSection />
            <LicenseSection />
            <EquipmentSection />
            {/* <MapSection /> */}
        </>
    );
};
export default About;
