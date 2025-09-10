"use client";

import Link from "next/link";

interface ObjectPDFProps {
    href: string;
}

const ObjectPDF = (props: ObjectPDFProps) => {
    return (
        <object
            type="application/pdf"
            data={props.href}
            width="700"
            height="600"
            className="w-full rounded-lg p-10"
        >
            <Link href={props.href} download>
                Скачать файл
            </Link>
        </object>
    );
};

export default ObjectPDF;
