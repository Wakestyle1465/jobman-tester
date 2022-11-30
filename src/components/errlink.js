import React from "react";

import '../css/err.css'

//If there is no corresponding route, this is displayed

const ErrLink = () => {
    return (
        <div>
            <p>Hmmm. I can't seem to find what you want.</p>
            <a href = '/' >Back to Home</a>
        </div>
    )
}
export default ErrLink