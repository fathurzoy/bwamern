import axios from "axios";
import { CHECKOUT_BOOKING } from "../types";

export const checkoutBooking = (payload) => (dispatch) => {
  dispatch({
    type: CHECKOUT_BOOKING,
    payload: payload,
  });
};

export const submitBooking = (payload) => () => {
  return axios.post(
    `https://admin-staycation-api.herokuapp.com/api/v1/member/booking-page`,
    payload,
    { header: { contentType: "multipart/form-data" } }
  );
};
