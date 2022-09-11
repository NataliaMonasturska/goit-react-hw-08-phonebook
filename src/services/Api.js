const axios = require('axios').default;

// const CONTACTS_URL = 'https://63150aa45b85ba9b11dba549.mockapi.io/contacts/';
const API_BASE_URL = 'https://connections-api.herokuapp.com'


// export const getContacts = async () => {
//   const response = await axios.get(`${CONTACTS_URL}`);
//   const contacts = await response.data;
//   return contacts;
// };

// export const addContact = async (newContact) => {
//   const response = await axios.post(CONTACTS_URL, newContact);
//   const contact = await response.data;
//   return contact;
// };

// export const deleteContact = async (contactId) => {
//   const response = await axios.delete(`${CONTACTS_URL}${contactId}`);
//   const id = await response.data.id;
//   return id;
// };



// 8 ДЗ

//Создать нового пользователя

export const getUsers = async (userData) => {
  const response = await axios.post(`${API_BASE_URL}/users/signup`, userData);
  const user = await response.data;
  return user;
}
// Залогинить пользователя

export const userLogin = async (values) => {
  const response = await axios.post(`${API_BASE_URL}/users/login`, values);
  const login = await response.data;
  return login;
}
// Разлогинить пользователя

export const userLogout = async () => {
  const response = await axios.post(`${API_BASE_URL}/users/logout`);
  const logout = await response.data;
  return logout;
}

// получить информацию о текущем пользователе
export const getUserData = async () => {
  const response = await axios.get(`${API_BASE_URL}/users/current`);
  const userData = await response.data;
  return userData;
}

// получить все контакты пользователя

export const getAllUserContacts = async () => {
  const response = await axios.get(`${API_BASE_URL}/contacts`);
  const contacts = await response.data;
  return contacts
}

// Создать новый контакт

export const CreateNewContact = async (value) => {
  const response = await axios.post(`${API_BASE_URL}/contacts`, value);
  const newContact = await response.data;
  return newContact;
}

// Удалить контакт

export const contactDelete = async (contactId) => {
  const response = await axios.delete(`${API_BASE_URL}/contacts/${contactId}`);
  const id = await response.data
  return id;
}

// Обновить существующий контакт

export const UpdateExistingContact = async (contactId) => {
  const response = await axios.patch(`${API_BASE_URL}/contacts/${contactId}`);
  const contact = await response.data;
  return contact;
}