import React, { useState } from 'react';

const Home = () => {

    let [data, setData] = useState([]);

    const Api = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(res => setData(res))
    }
    Api()

    return (
        <>
            {data.map(db => (
                <div>
                    <h1>{db.name}</h1>
                    <i>{db.username}</i><br />
                    <i>{db.email}</i>
                    <h4>{db.phone}</h4>
                    <a href={db.website} target="_blank">Web Site</a><hr />
                </div>
            ))}
        </>
    );
};


export default Home;