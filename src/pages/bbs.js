import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'gatsby'

function TitlePage() {
    const [value,setValue] = useState([]);
    useEffect(() => {
        async function Mount() {
            const {data} = await axios.get("http://localhost:8080/apis/articles");    
            console.log(data);                  
            setValue(data.titles.map(user => {
                return (
                    <>
                    <Link to="/threads">({user.titlenum}){user.title}</Link>
                        ::(date){user.datetime}<br />
                    {user.name}
                    <hr />
                    </>
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