import ConsultForm from "./ConsultForm";

interface ConsultSectionProps {
  isWhite?: boolean;
}

const ConsultSection = (props: ConsultSectionProps) => {
  const colorUnit = {
    "bgColor": props.isWhite ? "bg-background-secondary" : "bg-background-primary",
    "formColor": !props.isWhite ? "bg-background-secondary" : "bg-background-primary",
  } 
  return (
    <section className={`${colorUnit.bgColor}`}>
      <div className="container mx-auto flex-center flex-col gap-10">
        <hgroup>
          <h2>Готовы начать работу?</h2>
          <p>Получите бесплатную консультацию и расчет стоимости работ для вашего дома</p>
        </hgroup>
        
        <ConsultForm bgColor={colorUnit.bgColor} formColor={colorUnit.formColor}/>
       
      </div>
    </section>
  );
};

export default ConsultSection;
