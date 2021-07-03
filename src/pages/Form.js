import React, {useState} from "react"

const Form = ({initialRace, handleSubmit, buttonLabel, history}) => {

    // copy of the current
    // const newState = {...formData}
    // newState[event.target.name] = event.target.value
    // setFormData(newState)

    //form state
    const [formData, setFormData] = useState(initialRace)

    //functions
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value })
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        handleSubmit(formData)
        history.push("/")
    }

    return <form onSubmit={handleSubmission}>
        <input 
        type="text" 
        onChange={handleChange} 
        value={formData.name}
        name="name"
        placeholder="Grand Prix Name"
        />
        <input 
        type="text" 
        onChange={handleChange} 
        value={formData.track}
        name="track"
        placeholder="Track Name"
        />
        <input 
        type="text" 
        onChange={handleChange} 
        value={formData.firstPlace}
        name="firstPlace"
        placeholder="First Place Finisher"
        />
        <input 
        type="text" 
        onChange={handleChange} 
        value={formData.secondPlace}
        name="secondPlace"
        placeholder="Second Place Finisher"
        />
        <input 
        type="text" 
        onChange={handleChange} 
        value={formData.thirdPlace}
        name="thirdPlace"
        placeholder="Third Place Finisher"
        />
        <input type="submit" value = {buttonLabel}/>
    </form>
}

export default Form;