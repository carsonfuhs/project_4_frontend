import React from "react"
import Race from "../components/Race"

const AllRaces = (props) => {
    return props.races.map((race) => {
        return <Race race={race} key={race.id}/>
    })
}

export default AllRaces;