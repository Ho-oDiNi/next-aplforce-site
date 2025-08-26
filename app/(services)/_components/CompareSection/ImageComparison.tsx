"use client";
// ДОРАБОТАТЬ

import sliderIcon from "@icons/slider-white.svg";
import houseSecondImage from "@images/comp1.png";
import houseFirstImage from "@images/comp2.png";
import Image from "next/image";
import React, { useState } from "react";

const ImageComparison = () => {
    const [sliderPosition, setSliderPosition] = useState(50);

    const handleMove = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSliderPosition(Number(event.target.value));
    };

    return (
        <div className="relative aspect-[8/5] w-full overflow-hidden rounded-t-2xl md:aspect-[8/3]">
            <Image alt="SEO" fill src={houseFirstImage} />
            <div
                className="absolute top-0 right-0 left-0 aspect-[8/5] w-full overflow-hidden md:aspect-[8/3]"
                style={{
                    clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                }}
            >
                <Image fill src={houseSecondImage} alt="SEO" />
            </div>

            <label
                htmlFor="compare-image-slider"
                className="absolute top-0 bottom-0 z-10 w-10 cursor-col-resize"
                style={{ left: `calc(${sliderPosition}% - 20px)` }}
            >
                <div className="absolute top-1/2 left-1/2 h-full w-1 -translate-x-1/2 -translate-y-1/2 transform bg-white" />
                <Image
                    className="absolute top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 transform"
                    src={sliderIcon}
                    alt=""
                />
            </label>

            <input
                id="compare-image-slider"
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleMove}
                className="absolute z-20 h-full w-full cursor-col-resize opacity-0"
            />
        </div>
    );
};

export default ImageComparison;
