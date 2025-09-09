"use client";

import { PopupProps } from "@types";
import React, { useState } from "react";

import CityPopup from ".";

const OpenPopupButton = (props: PopupProps) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const openDialog = () => setIsDialogOpen(true);
    const closeDialog = () => setIsDialogOpen(false);

    return (
        <div className="flex-center relative">
            <button onClick={openDialog}>
                <div className="flex-center cursor-pointer gap-4 hover:opacity-70">
                    {props.children}
                </div>
            </button>
            <CityPopup isOpen={isDialogOpen} onClose={closeDialog} />
        </div>
    );
};

export default OpenPopupButton;
