import ImageComparison from "./ImageComparison";

const CompareSection = () => {
    return (
        <div className="container mx-auto py-(--space-inside-y)">
            <ImageComparison />
            <div className="bg-background-secondary flex flex-col gap-4 rounded-b-2xl p-8">
                <strong>Герметизация межпанельных швов</strong>
                <p>ул. Ленина, 45</p>
                <div className="flex-start gap-2">
                    <button className="rounded-2xl bg-red-500 px-4 py-2 text-white">
                        До
                    </button>
                    <button className="rounded-2xl bg-blue-500 px-4 py-2 text-white">
                        После
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CompareSection;
