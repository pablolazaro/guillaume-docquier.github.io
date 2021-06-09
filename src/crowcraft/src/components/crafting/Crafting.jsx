import { CompletedStep, StepToComplete } from "./steps"

export const Crafting = () => {
    return (
        <div className="mv3">
            <div className="mb3">
                <CompletedStep title={"Crafting type"} choices={[{ name: "Armor" }]} />
            </div>
            <div className="mb3">
                <StepToComplete title={"Choose an armor rating"} options={[{ name: "Leather" }, { name: "Mail" }, { name: "Plate" }]} />
            </div>
        </div>
    )
}
