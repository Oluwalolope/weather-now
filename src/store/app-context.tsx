import { createContext } from "react";
import type { AppCtx } from "../utils/interfaces";


const AppContext = createContext<AppCtx>({
    data: {
        unit: 'metric' as 'metric' | 'imperial',
        chosenDay: 'Monday',
        isValidLocation: true,
        isSearching: false,
        isServerWorking: false
    },
    handleChange: () => {}
});

export default AppContext;