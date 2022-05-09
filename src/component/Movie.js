import React, { useState,useEffect } from "react";
import "./Movie.css";


function Movie() {
const [users, setusers] = useState([]);
useEffect(() => {
    async function data() {
        try {
            const userdata = await fetch("https://jsonmock.hackerrank.com/api/moviesdata/search")
            let res = await userdata.json();
            setusers(res.data);
            console.log('res',res.data);
        } catch (error) {

            console.log(error);
        }
    }

    data();
}, []);
console.log(users);
return (<> {
       users.map((ele, index) =>
            <div className = 'MO'
            key = { index } >
            <h4> Title: { ele.Title } </h4>  
            <h4> Year: { ele.Year } </h4>
            <h4> Year: { ele.imdbID } </h4>
            </div>
        )
    }
    
    </>
    )

}
export default Movie;