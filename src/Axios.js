import axios from "axios";

const url = "https://rickandmortyapi.com/api/character";

axios.get(url+'/1')
.then((data)=>console.log(data.data))
.catch((error)=>console.log('error: ' +error))

export default axios