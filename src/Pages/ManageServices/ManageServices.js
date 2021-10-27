import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://floating-tor-16332.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    /// handle delete 
    const handleDelete = id => {
        const url = `https://floating-tor-16332.herokuapp.com/services${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Deleted Successfully')
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                }

            })
    }

    return (
        <div>
            <h2>manage services</h2>

            {
                services.map(service => <div key={service._id}>

                    <h5>{service.name}</h5>
                    <h5>{service._id}</h5>
                    <p>{service.description}</p>
                    <button onClick={() => handleDelete(service._id)} className="btn btn-danger">Delete</button>

                </div>)
            }

        </div>
    );
};

export default ManageServices;