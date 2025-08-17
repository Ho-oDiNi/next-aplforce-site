import Header from "@/components/shared/Header";
import TitleSection from "./_components/TitleSection";
import ServiceSection from "./_components/ServiceSection";
import AdvantageSection from "./_components/AdvantageSection";
import Footer from "@/components/shared/Footer";
import ExampleSection from "./_components/ExampleSection";
import RewiewSection from "./_components/RewiewSection";
import AnswerSection from "./_components/AnswerSection";
import ConsultSection from "./_components/ConsultSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <TitleSection />
        <ServiceSection />
        <AdvantageSection />
        <ExampleSection />
        <RewiewSection />
        <AnswerSection />
        <ConsultSection />
      </main>
      <Footer />
    </>
  );
}
