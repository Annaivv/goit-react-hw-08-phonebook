import { createSelector } from '@reduxjs/toolkit';

export const selectLoading = state => state.contacts.loading;

export const selectAllContacts = state => state.contacts.items;

export const selectFilter = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectAllContacts, selectFilter],
  (contacts, queryFilter) => {
    const filterContacts = queryFilter
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(queryFilter)
        )
      : contacts;
    return filterContacts;
  }
);
