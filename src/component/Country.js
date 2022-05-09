import React, { useState, useEffect } from 'react'
import '../component/Country.css'

function Country() {

    const [users, setusers] = useState([]);
    useEffect(() => {
        async function data() {
            try {
                const userdata = await fetch("https://restcountries.com/v2/all")
                let res = await userdata.json();
                setusers(res);
            } catch (error) {

                console.log(error);
            }
        }

        data();
    }, []);

    return (<> {
            users.map((ele, index) =>
                <div className = 'App'
                key = { index } >
                <h4> Country Name: { ele.name } </h4>  
                <h4> population: { ele.population } </h4>

                </div>
            )
        }

        </>
    )

}
export default Country;