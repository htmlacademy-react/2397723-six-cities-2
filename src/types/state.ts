import { store } from '../redux';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
