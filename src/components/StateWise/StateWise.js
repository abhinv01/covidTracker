import React, {useEffect, useState} from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./StateWise.css"

const StateWise = () => {

    const [data, setData] = useState([])

    const getCovidData = async () => {
        const res = await fetch('https://api.covid19india.org/data.json')
        const actualData = await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
    }

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <> 
            < div className = "table_head" > 
                <h1>
                <span>😷India's</span> Statewise Covid-19 Count</h1>
            </div>

    <table className="table table-hover">
        <thead className="tableH text-center">
            <tr>
                <th>State Number</th>
                <th>
                    State</th>

                <th>Confirmed</th>
                <th>
                    Recovered</th>
                <th>
                    deaths</th>
                <th>
                    active</th>

                <th>updated ON</th>
            </tr>
        </thead>



        <tbody className="text-center table_body">

            {
                data.map((currElement, index) => {
                    return (
                        <tr key = {index}>
                            <td>{index}</td>
                            <td>{currElement.state}</td>
                            <td>{currElement.confirmed}</td>
                            <td>{currElement.recovered}</td>
                            <td>{currElement.deaths}</td>
                            <td>{currElement.active}</td>
                            <td>{currElement.lastupdatedtime}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>

</>
    )

}

export default StateWise;