"use client";

import { useState, useEffect } from "react";

import OpenDialogButton from "@/components/ui/DialogNode/OpenDialogButton";
import ObjectPDF from "@/components/ui/ObjectPDF";
import StyledLink from "@/components/ui/StyledNode/StyledLink";

const LicenceDownload = (props: { href: string }) => {
    const [isPdfViewerEnabled, setIsPdfViewerEnabled] = useState(false);
    const dialogContentObjectPDF = {
        component: ObjectPDF,
        props: {
            href: props.href,
        },
    };

    useEffect(() => {
        setIsPdfViewerEnabled(navigator.pdfViewerEnabled);
    }, []);

    return isPdfViewerEnabled ? (
        <OpenDialogButton
            variant="secondary"
            size="sm"
            dialogContent={dialogContentObjectPDF}
            dialogClassName="w-11/12"
        >
            Скачать
        </OpenDialogButton>
    ) : (
        <StyledLink href={props.href} download variant="secondary" size="sm">
            Скачать
        </StyledLink>
    );
};

export default LicenceDownload;
