import React, { useEffect } from 'react'
import './scss/error.scss'

const Error = (message) => (
    <div>
        <h2> Something happened:</h2>
        <p>{message}</p>
    </div>
)

export default Error;