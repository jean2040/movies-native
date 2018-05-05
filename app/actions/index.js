export const DATA_AVAILABLE = 'DATA_AVAILABLE';
export const SELECT_ITEM = 'SELECT_ITEM';
export const DESELECT_ITEM = 'SELECT_ITEM';
export const RANDOM_MOVIE = 'RANDOM_MOVIE';


export function getData(){
    return(dispatch)=>{
        console.log('API');
        //Make API call
        setTimeout(()=> {

            return fetch('https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=54990a7c99582d0e4be944feff253c63')
                .then((response) => response.json())
                .then((responseJson)=> {
                    //console.log(responseJson);
                    return dispatch({type: 'DATA_AVAILABLE', data: responseJson.results});
                });

        },2000);

    };
}
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

export const randomMovie = () => {
    return(dispatch)=>{
        console.log("deselect");
        return dispatch({type: RANDOM_MOVIE})
    };

};
