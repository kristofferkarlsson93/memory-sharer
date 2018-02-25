import { getAllUserDataActions } from './actionTypes';
import { getUserSummary } from '../services/userService';


export const getAllUserData = (token) => {
  return async(dispatch) => {
    dispatch(gettingData());
    const userSummary = await getUserSummary(token);
    console.log('userSummary', userSummary);
    dispatch(summaryIsFetched(userSummary));
    
  }
}


const gettingData = () => ({ type: getAllUserDataActions.GETTING_DATA });

const summaryIsFetched = (summary) => ({type: getAllUserDataActions.SUMMARY_IS_FETCHED, summary});

const gettingDataSuccess = (data) => ({type: getAllUserDataActions.GETTING_DATA_SUCCESS, data});

const gettingDataFailure = (error) => ({type: getAllUserDataActions.GETTING_DATA_FAILURE, error});