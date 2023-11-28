import React, { useState } from 'react'

export default function UserInput({onSubmit}) {
    const [userName, setUserName] = useState('')

    return (
        <form onSubmit={() => onSubmit(userName)}>
            <input type='text' value={userName} placeholder='Enter your name' onChange={(e) => setUserName(e.currentTarget.value)}/>
            <button type='submit' name='submit'>Submit</button>
        </form>
    )
}