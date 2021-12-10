import { useEffect } from "react";
import { useState } from "react"
import { MyDB } from "../DB/DB";
import { baseUrl } from "./useUrl";

const usePackages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
       // setPackages(MyDB.services);
       const url=baseUrl+'/packages'
        fetch(url)
            .then(res => res.json())
            .then(data => setPackages(data));
        
    }, []);
    return [packages, setPackages];
}

export default usePackages;