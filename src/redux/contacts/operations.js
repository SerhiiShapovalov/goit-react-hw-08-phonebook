import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await fetch('https://connections-api.herokuapp.com');
  const data = await response.json();
  return data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contactData => {
    const response = await fetch('https://connections-api.herokuapp.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });
    const data = await response.json();
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    await fetch(`https://connections-api.herokuapp.com/contacts/${contactId}`, {
      method: 'DELETE',
    });
    return contactId;
  }
);
