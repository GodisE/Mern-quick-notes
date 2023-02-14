import { useState } from "react"

export default function NoteForm () {
    const [notes, setNotes] = useState({
        text: "",
        
    })
    const [error, setError] = useState("")

    function handleChange(evt){
        setNotes({ 
            ...notes,
            [evt.target.text]: evt.target.value
         })
    }

    async function handleSubmit (evt){
        try{ 
        console.log("clicked")
        evt.preventDefault()
        setNotes(notes)

        } catch {
            setError("Login Error")
        }
        
    }
    return(
        <div className='form-container'>
        <form autoComplete='off' onSubmit={handleSubmit}>

            <label><h1>Notes:</h1></label>
            <textarea 
                type='text'
                name='text'
                value={notes.value}
                onChange={handleChange}
                required
            />
            <button 
            onClick={handleSubmit}
            type='submit' >Add Note</button>
        </form>
        <p className='error-message' >{error}</p>
    </div>
    )
}