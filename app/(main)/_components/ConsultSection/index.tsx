import ConsultForm from "./ConsultForm";

const ConsultSection = () => {
  return (
    <section className="bg-background-secondary">
      <div className="container mx-auto flex-center flex-col gap-10">
        <hgroup>
          <h2>Готовы начать работу?</h2>
          <p>Получите бесплатную консультацию и расчет стоимости работ для вашего дома</p>
        </hgroup>
        
        <ConsultForm />
       
      </div>
    </section>
  );
};

export default ConsultSection;
