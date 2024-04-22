import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';



const coffeeSlice = createSlice({
  name: 'coffee',
  initialState:{
    transactions: [],
    users: axios("http://localhost:3001/users"),
  },
  reducers: {
    buyCoffee(state, action) {
      const { userId, message, value, email } = action.payload;
      state.transactions.push({ userId, amount: value, message, email });

      axios.post('http://localhost:3001/transactions', { userId, amount: value, message,email });
    },
  },
});

export const { setUsers, buyCoffee } = coffeeSlice.actions;

export default coffeeSlice.reducer;


