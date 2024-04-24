import Button from 'react-bootstrap/Button';
import React from "react";

import '../App.css';

const LogInButton = ({ submit }) => {
    return (
        <Button variant="secondary " id="secondary-btn" onClick={() => submit()}>Log in</Button>
    )
}
export default React.memo(LogInButton);