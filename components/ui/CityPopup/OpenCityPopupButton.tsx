"use client";

import { PopupProps } from "@types";
import React, { useState } from "react";

import CityPopup from ".";

const OpenCityPopupButton = (props: PopupProps) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const openDialog = () => setIsDialogOpen(true);
    const closeDialog = () => setIsDialogOpen(false);

    // TODO: раскомментировать onClick
    return (
        <div className="relative">
            <button
                // onClick={openDialog}
                className="flex-center cursor-pointer gap-4 hover:opacity-70"
            >
                {props.children}
            </button>
            <CityPopup isOpen={isDialogOpen} onClose={closeDialog} />
        </div>
    );
};

export default OpenCityPopupButton;
