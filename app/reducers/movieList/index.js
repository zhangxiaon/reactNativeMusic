import {GET_MOVIE_LIST,CHANGE_LOADING} from "../../actions/actionTypes/index"
import {handleActions} from "redux-actions"

const initialState = {
    movieList: [],
    loading:false,
    errorMsg:""
};

const getMovielist =  handleActions({
    [GET_MOVIE_LIST]:{
        next(state,action){
            console.log("reduvvcer start ________________________")
            console.log(action)
            console.log("reduvvcer end ________________________")
            return {
                ...state,
                movieList:action.payload.movies,
                loading:action.payload.loading
            }
        },
        throw(state,action){
            return {
                ...state,
                loading:action.payload.loading,
                errorMsg:action.payload.errorMsg
            }
        }
    },
    [CHANGE_LOADING]:{
        next(state,action){
            console.log("reduvvcer start ________________________")
            console.log(action)
            console.log("reduvvcer end ________________________")
            return {
                ...state,
                loading:action.payload
            }
        },
        throw(state,action){
            return {
                ...state,
                loading:action.payload
            }
        }
    }
},initialState)


export default getMovielist