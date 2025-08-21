import ImageComparison from "./ImageComparison";
import StyledButton from "@ui/StyledButton"

const CompareSection = () => {
    return (
        <div className="container mx-auto py-(--space-inside-y)">
            <ImageComparison />
            <div className="bg-background-secondary flex flex-col gap-4 rounded-b-2xl p-8">
                <strong>Герметизация межпанельных швов</strong>
                <p>ул. Ленина, 45</p>
                <div className="flex-start gap-2">
                    <StyledButton variant="primary" size="sm">До</StyledButton>
                    <StyledButton variant="secondary" size="sm">После</StyledButton>
                </div>
            </div>
        </div>
    );
};

export default CompareSection;
