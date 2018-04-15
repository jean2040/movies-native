export const DATA_AVAILABLE = 'DATA_AVAILABLE';

// Importing the Sample data
import Data from '../instructions.json';

export function getData(){
    return(dispatch)=>{
        //Make API call
        setTimeout(()=>{
            const data = Data.instructions;
            dispatch({type: DATA_AVAILABLE, data:data});
        },2000);
    };
}