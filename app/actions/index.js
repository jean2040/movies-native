export const DATA_AVAILABLE = 'DATA_AVAILABLE';

// Importing the Sample data
import Data from '../instructions.json';

export function getData(){
    return(dispatch)=>{
        console.log('API');
        //Make API call
        setTimeout(()=> {

            return fetch('https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=54990a7c99582d0e4be944feff253c63')
                .then((response) => response.json())
                .then((responseJson)=> {
                    console.log(responseJson);
                    return dispatch({type: 'DATA_AVAILABLE', data: responseJson.results});
                });
            //const data = newData.results;


            /*let url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=54990a7c99582d0e4be944feff253c63&language=en-US&page=1';
            fetch(url)
                .then(response => response.json())
                .then(
                    data => dispatch({type: 'DATA_AVAILABLE', data: data}),

                )*/
        },2000);

    };
}