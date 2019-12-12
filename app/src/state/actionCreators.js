import {GET_QUOTES_BY_PAGE, GET_RANDOM_QUOTE} from "./actionTypes";
import axios from 'axios';

export const getQuotes = () => dispatch =>{
    axios.get(`https://programming-quotes-api.herokuapp.com/quotes/page/1`)
    .then(response=>{
        dispatch({
            type:GET_RANDOM_QUOTE,
            payload: response.data
        });
    })
    .catch(error=>{
        console.error(error);
    });
}