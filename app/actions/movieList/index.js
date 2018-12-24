import {GET_MOVIE_LIST,CHANGE_LOADING} from "../actionTypes"

import {createAction} from "redux-actions"


const getData = () => {
    return (dispatch)=>{
        fetch("http://api.douban.com/v2/movie/in_theaters")
            .then((response) => response.json())
            .then((responseData) => {       // 获取到的数据处理
                let data = {
                    movies: responseData.subjects,
                    loading: false
                }
                dispatch(getMovieList(data))
                dispatch(changeLoading(false))
            })
            .catch((error) => { // 错误处理
                let data =  {
                    errorMsg: error,
                    loading: false
                }
                dispatch(getMovieList(data))
                dispatch(changeLoading(false))
            })
            .done()
    }

}



const getMovieList = createAction(GET_MOVIE_LIST, (data) => {
        return data
    }
)
const changeLoading = createAction(CHANGE_LOADING, (data) => {
        return data
    }
)

export {
    getMovieList,
    getData,
    changeLoading
};