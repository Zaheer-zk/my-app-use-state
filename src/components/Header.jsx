import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Header.css'

const Header = (props) => {

    const [nameVal, setNameVal] = useState(' ');
    const nam = () => {
        setNameVal(props.name);
    }

    return (
        <div>
            <h1 className='primary__heading'>Hello {nameVal} !</h1>
            <button onClick = {nam} >Click Me</button>
        </div>
        )
}

Header.propTypes = {
    name: PropTypes.string
}

export default Header