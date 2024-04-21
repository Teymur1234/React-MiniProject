// coffeeSlice.js
import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transactions: [],
  users: [],
};

const coffeeSlice = createSlice({
  name: 'coffee',
  initialState,
  reducers: {
    setUsers(state, action) {
      state.users = action.payload;
    },
    buyCoffee(state, action) {
      const { userId, message } = action.payload;
      // Update user balance
      const userIndex = state.users.findIndex(user => user.id === userId);
      if (userIndex !== -1) {
        state.users[userIndex].balance += 1;
      }
      // Add transaction
      state.transactions.push({ userId, amount: 1, message });

      // Update db.json using JSON Server
      axios.post('http://localhost:3001/transactions', { userId, amount: 1, message });
      axios.patch(`http://localhost:3001/users/${userId}`, { balance: state.users[userIndex].balance });
    },
    // sendMessage(state, action) {
    //   const { message } = action.payload;
      
    //   state.users.forEach(user => {
    //     // Implement your message sending logic here
    //   });
    // },
  },
});

export const { setUsers, buyCoffee } = coffeeSlice.actions;

export default coffeeSlice.reducer;

export const fetchUsers = () => async dispatch => {
  const response = await axios("http://localhost:3001/users");
  dispatch(setUsers(response.data));
};
