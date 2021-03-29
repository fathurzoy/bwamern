// menentukan semua kegiantan kita yg bakal 

import { CHECKOUT_BOOKING } from '../types';

const initialState = null; //setup null ketika awal load

export default function(state = initialState , action){
  switch (action.type){
    case CHECKOUT_BOOKING:
      return action.payload;
    default: 
      return state;
  }
}