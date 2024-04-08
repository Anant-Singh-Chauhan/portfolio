import { createContext } from "react";

export const ExperienceContext = createContext({
    selectedExperienceId : 1,
    handleExperienceSelection : () => {}
})