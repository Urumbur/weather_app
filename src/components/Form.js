import React from 'react';
import '../styles/Form.css';

const Form = (props) => {

    return (
        <form>
            <input className="find" type="text" value={props.value} placeholder="Wpisz miasto" onChange={props.handleInputChange} />
        </form>
    );
}

export default Form;