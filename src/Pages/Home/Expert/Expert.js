import React from 'react';

const Expert = ({ expert }) => {
    const { name, img, expertize } = expert;
    return (
        <div className="col col-md-6">
            <div className="w-75 mx-auto card border-0 shadow p-3">
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h4>{expertize}</h4>
            </div>
        </div>
    );
};

export default Expert;