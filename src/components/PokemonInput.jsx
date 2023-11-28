import React, { useState } from 'react'

export default function PokemonInput({onNameChange}) {
    const [name, setName] = useState('')

    const handleSubmit = (name) => {
        onNameChange(name)
        setName('')
    }
    
    return (
        <form onSubmit={() => handleSubmit(name)}>
            <input type='text' value={name} placeholder='Enter new name' onChange={(e) => setName(e.currentTarget.value)}/>
            <button type='submit' name='change name'>Change Name</button>
        </form>
    )
}
