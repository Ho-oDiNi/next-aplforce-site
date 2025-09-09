import ServiceContent from "./ServiceContent";
import ServiceSwitchNav from "./ServiceSwitchNav";

import { Service } from "@/data/services";

interface ServiceSectionProps {
    service: Service;
}

export default function ServiceMain({ service }: ServiceSectionProps) {
    return (
        <div className="container mx-auto px-(--space-inside-x) py-8 md:py-(--space-inside-y)">
            <ServiceSwitchNav />
            <section className="bg-background-secondary rounded-2xl p-8">
                <ServiceContent service={service} />
            </section>
        </div>
    );
}
