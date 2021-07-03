import AllRaces from "./pages/AllRaces"
import SingleRace from "./pages/SingleRace"
import Form from "./pages/Form"
import React, {useState, useEffect} from "react"
import {Route, Switch, Link} from "react-router-dom"
import Button from 'react-bootstrap/Button'

function App(props) {

  ///////////////////
  // Style Objects
  ///////////////////

  const h1 = {
    textAlign: "center",
    margin: "10px"
  }

  const button = {
    display: "block",
    margin: "auto"
  }

  //state and other variables

  //api url
  const url = "https://formula-one-cf.herokuapp.com/races/"

  //state to hold the list of posts
  const [races, setRaces] = useState([])

  const nullRace = {
    name: "",
    track: "",
    firstPlace: "",
    secondPlace: "",
    thirdPlace: ""
  }

  const [targetRace, setTargetRace] = useState(nullRace)

  //functions
  const getRaces = async() => {
    const response = await fetch(url)
    const data = await response.json()
    setRaces(data)
  }

  const addRace = async (newRace) => {
    const response = await fetch(url,{
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newRace)
    })

    getRaces()
  }

  const getTargetRace = (race) => {
    setTargetRace(race)
    props.history.push("/edit")
  }

  const updateRace = async (race) => {
    const response = await fetch(url + race.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(race)
    })
    getRaces()
  }

  const deleteRace = async (race) => {
    const response = await fetch(url + race.id + "/", {
      method: "delete"
    })
    getRaces()
  }

  //use effects
  useEffect(() => {getRaces()}, [])

  return (
    <div className="App">
      <h1 style={h1}>Formula One Tracker</h1>
      <Link to="/new">
        <Button style={button} size="lg" variant="success">Track New Race</Button>
      </Link>
      <br></br>
      <Switch>
        <Route
          exact
          path="/"
          render={(rp) => <AllRaces races={races} {...rp}/>}
        />
        <Route
          exact
          path="/races/:id"
          render={(rp) => <SingleRace 
            races={races} 
            edit={getTargetRace} 
            deleteRace={deleteRace}
            {...rp}/>}
        />
        <Route
          exact
          path="/new"
          render={(rp) => <Form 
            initialRace={nullRace}
            handleSubmit={addRace}
            buttonLabel="create race"
            {...rp}/>}
        />
        <Route
          exact
          path="/edit"
          render={(rp) => <Form 
            initialRace={targetRace}
            handleSubmit={updateRace}
            buttonLabel="update race"
            {...rp}/>}
        />
      </Switch>
    </div>
  );
}

export default App;
