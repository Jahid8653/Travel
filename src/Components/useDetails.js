import { useEffect, useState } from "react";
import axios from 'axios';

const useDetails = (props_url) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(props_url)
        .then((res) => {
            console.log(res.data);
            setData(res.data);
    })
    .catch(err => console.log(err))
}, [props_url]) ;
return [data];
}
export default useDetails;
