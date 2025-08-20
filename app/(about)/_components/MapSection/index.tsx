import Image from "next/image";
import locationIcon from "@icons/location-blue-light.svg";
import mockImage from "@images/mock-map-image.jpg";

// Исправить - не работает + привязать Яндекс API

const MapSection = () => {
    return (
        <section>
            <div className="flex-center container mx-auto flex-col">
                <h2 className="mb-4 md:mb-8">География работ</h2>
                <div className="flex-between w-full flex-col lg:flex-row lg:gap-14">
                    <dl className="flex-center flex-col">
                        <dt>Основные города</dt>
                        <div className="mb-8 grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3 lg:grid-cols-1">
                            <div className="flex-start gap-x-2 md:gap-x-4">
                                <Image src={locationIcon} alt="" />
                                <dd>Новосибирск</dd>
                            </div>
                            <div className="flex-start gap-x-2 md:gap-x-4">
                                <Image src={locationIcon} alt="" />
                                <dd>Бердск</dd>
                            </div>
                            <div className="flex-start gap-x-2 md:gap-x-4">
                                <Image src={locationIcon} alt="" />
                                <dd>Академгородок</dd>
                            </div>
                            <div className="flex-start gap-x-2 md:gap-x-4">
                                <Image src={locationIcon} alt="" />
                                <dd>Обь</dd>
                            </div>
                            <div className="flex-start gap-x-2 md:gap-x-4">
                                <Image src={locationIcon} alt="" />
                                <dd>Искитим</dd>
                            </div>
                            <div className="flex-start gap-x-2 md:gap-x-4">
                                <Image src={locationIcon} alt="" />
                                <dd>Кольцово</dd>
                            </div>
                            <div className="flex-start gap-x-2 md:gap-x-4">
                                <Image src={locationIcon} alt="" />
                                <dd>Краснообск</dd>
                            </div>
                            <div className="flex-start gap-x-2 md:gap-x-4">
                                <Image src={locationIcon} alt="" />
                                <dd className="text-nowrap">Пригороды НСО</dd>
                            </div>
                        </div>
                    </dl>
                    <Image
                        src={mockImage}
                        alt=""
                        className="w-full max-w-5xl rounded-2xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default MapSection;
