import AnswerList from "./AnswerList";

const RewiewSection = () => {
    return (
        <section>
            <div className="flex-center container mx-auto flex-col gap-10">
                <hgroup>
                    <h2>Ответы на вопросы</h2>
                    <p>Ответы на самые популярные вопросы</p>
                </hgroup>

                <AnswerList />
            </div>
        </section>
    );
};

export default RewiewSection;
