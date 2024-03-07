import React from 'react'
import axios from 'axios'

async function TitlePage() {
    const {json} = await axios.get("http://localhost:8080/apis/articles");          
    const member = [];
    for (var i=0;i<json.length;i++) member.push([i,json]);
    const result = member.map(data => {
        return (
        <>
            ({data.titlenum})<a href={"/threads/"+data.db+"/"+data.titlenum}>{data.title}</a>
            {data.name}{data.datetime}
        </>
        )});
    console.log(result[0]);
    return (
        <>            
            {result}
        </>
    )
}

export default TitlePage;