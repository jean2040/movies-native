export const DATA_AVAILABLE = 'DATA_AVAILABLE';
export const SELECT_ITEM = 'SELECT_ITEM';
export const DESELECT_ITEM = 'SELECT_ITEM';

//..........................
export const GET_MOVIES = 'GET_MOVIES';
export const GET_TVSHOWS = 'GET_TVSHOWS';
//..........................
//..........................

export const getMovies = () => {
    return (dispatch) => {
        console.log('GET_MOVIES');
        setTimeout(() => {
            return fetch('https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=54990a7c99582d0e4be944feff253c63')
                .then((response) => response.json())
                .then((responseJson) => {
                    return dispatch({type: 'GET_MOVIES', data: responseJson.results});
                });

        }, 2000);

    };
}

export const getTV = () => {
    return (dispatch) => {
        console.log('GET_TVSHOWS');
        setTimeout(() => {
            return fetch('https://api.themoviedb.org/3/tv/popular?page=1&language=en-US&api_key=54990a7c99582d0e4be944feff253c63')
                .then((response) => response.json())
                .then((responseJson) => {
                    return dispatch({type: 'GET_TVSHOWS', data: responseJson.results});
                });

        }, 2000);

    };
}
//..........................


// this is the action that will trigger the  Reducer. It sends the selected item
export const selectItem = (item) => {
    return(dispatch)=>{
        console.log("action");
        return dispatch({type: SELECT_ITEM, item: item})
    };

};

export const deselectItem = () => {
    return(dispatch)=>{
        console.log("deselect");
        return dispatch({type: DESELECT_ITEM})
    };

};
