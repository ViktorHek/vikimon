import axios from 'axios';
// import { useDispatch } from 'react-redux';

const route = 'http://localhost:3001/';

export function getAllPokemons(dispatch) {
    return(dispatch) => {
        return axios.get(route+ 'myPokemons').then((res) => {
            dispatch({type: 'POPULATE_POKEMON_PARTY', payload: res})
        })
    }
}



// export default function Api() {
    
//     const dispatch = useDispatch()
    
//     async function getAllPokemons(q) {
//         console.log('before call:', route + q)
//         await axios.get(route + q)
//             .then(res => {
//                 console.log('call get all then, ', res)
//                 dispatch({type: 'POPULATE_POKEMON_PARTY', payload: res.data})
//                 return res;
//             }).catch((err) => {
//                 console.log('Error @ /api/index - getAllPokemons()', err);
//             });
//             console.log('after call')
    
//     };
//     getAllPokemons('myPokemons')
// }

// export default function useKeys(funk) {
//   useEffect(() => {
//     window.addEventListener("keydown", funk)
//     return () => window.removeEventListener("keydown", funk)
//   }, [funk])
// }