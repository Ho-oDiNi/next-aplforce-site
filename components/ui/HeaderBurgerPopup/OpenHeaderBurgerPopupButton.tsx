"use client";

import { PopupProps } from "@types";
import React, { useState } from "react";

import HeaderBurgerPopup from ".";

const OpenPopupButton = (props: PopupProps) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const openDialog = () => setIsDialogOpen(true);
    const closeDialog = () => setIsDialogOpen(false);

    return (
        <>
            <button
                onClick={openDialog}
                className="block cursor-pointer hover:opacity-70 md:hidden"
                aria-label="SEO"
            >
                {props.children}
            </button>

            <HeaderBurgerPopup isOpen={isDialogOpen} onClose={closeDialog} />
        </>
    );
};

export default OpenPopupButton;
