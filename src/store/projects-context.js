import {createContext} from 'react';

export const ProjectContext = createContext({
    selectedProjectId : 1,
    handleProjectSelection : () => {}
});
