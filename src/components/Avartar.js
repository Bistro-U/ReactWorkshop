import React from 'react';

function Avartar(props) {
    return (
        <img src={props.user.avatarUrl} alt={props.user.name}/>
    );
}

export default Avartar;