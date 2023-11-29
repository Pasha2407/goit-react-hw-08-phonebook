import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts.reducer';
import { filterReducer } from './filter.reducer';

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    }
});
