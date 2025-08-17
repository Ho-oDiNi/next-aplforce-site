import Header from "@/components/shared/Header";
import TitleSection from "./_components/TitleSection";
import ServiceSection from "./_components/ServiceSection";
import AdvantageSection from "./_components/AdvantageSection";
import Footer from "@/components/shared/Footer";
import ExampleSection from "./_components/ExampleSection";
import RewiewSection from "./_components/RewiewSection";
import AnswerSection from "./_components/AnswerSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="text-foreground-primary">
        <TitleSection />
        <ServiceSection />
        <AdvantageSection />
        <ExampleSection />
        <RewiewSection />
        <AnswerSection />
      </main>
      <Footer />
    </>
  );
}
