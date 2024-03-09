import React,{useState} from 'react'
import axios from 'axios'
import {Link} from 'gatsby'

function TitlePage() {
    const [value,setValue] = useState([]);
    async function Mount() {
        const {data} = await axios.get("http://localhost:8080/apis/articles");                      
        setValue(data.map(user => user.name));
    };  
    Mount();
    return (
        <>            
            {value}
        </>
    )    
}

export default TitlePage;