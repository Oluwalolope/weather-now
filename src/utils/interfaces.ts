export type AppCtx = {
    data: AppState;
    handleChange: (identifier: string, value: string | boolean) => void
}

export type AppState = {
  unit: 'metric' | 'imperial';
  chosenDay: string;
  isValidLocation: boolean;
  isSearching: boolean;
  isServerWorking: boolean;
}