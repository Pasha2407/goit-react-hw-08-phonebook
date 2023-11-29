import { createSelector } from "@reduxjs/toolkit"
export const selectContacts = state => state.contacts.contacts
export const selectContactsIsLoading = state => state.contacts.isLoading
export const selectContactslsError = state => state.contacts.error
export const selectFilter = state => state.filter.value

export const selectVisibleContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => {
        return contacts.filter(item => item.name.toLowerCase()
            .includes(filter.toLowerCase()))
    }
)