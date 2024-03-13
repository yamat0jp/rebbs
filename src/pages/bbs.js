import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'gatsby'

function TitlePage() {
    const [value,setValue] = useState([]);
    useEffect(() => {
        async function Mount() {
            const {data} = await axios.get("http://localhost:8080/apis/articles");    
            console.log(data);        
            let count = 0;          
            setValue(data.titles.map(user => {
                count++;
                return (
                    <div key={count} style={{textAlign:"center"}}>
                    <Link to="/threads">({user.titlenum}){user.title}</Link>
                        ::(date){user.datetime}<br />
                    {user.name}                    
                    <hr />
                    </div>                    
                )
            }));        
        };
        Mount();
    },[]);      
    return (
        <>            
            {value}
        </>
    )    
}

export default TitlePage;