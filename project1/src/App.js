import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc')
            .then(response => {
                setUser(response.data.results[0]);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    return (
        <div className="App">
            {user && <Card user={user} />}
        </div>
    );
}

export default App;
