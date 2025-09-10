import "./globals.css";
import { Metadata } from "next";
import React from "react";

import { DialogContainer, DialogProvider } from "./api/context/DialogContext";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import RobotoFont from "@/components/ui/RobotoFont";
import getCityFromHost from "@/utils/getCityFromHost";

export const metadata: Metadata = {
    title: `Alpforce – высотные работы и ремонт многоквартирных домов по доступным ценам`,
    description: `Команда профессиональных промышленных альпинистов Alpforce. Комплексное обслуживание МКД. Работа по ГОСТ с допусками и страховкой. Аварийный выезд 24/7`,
};

const RootLayout = async ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const cityName = await getCityFromHost();
    return (
        <html lang="ru">
            <body className={`${RobotoFont.className} antialiased`}>
                <DialogProvider>
                    <Header cityName={cityName} />
                    <main>{children}</main>
                    <DialogContainer />
                    <Footer />
                </DialogProvider>
            </body>
        </html>
    );
};

export default RootLayout;
