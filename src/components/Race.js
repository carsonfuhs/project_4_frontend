import React from "react"
import {Link} from "react-router-dom"
import Card from 'react-bootstrap/Card'

const Race = ({race}) => {

    //style objects
    const div = {
        textAlign: "center",
        margin: "5px auto",
        width: "40%"
    }

    return <div style={div}>
        <Card>
            <Card.Body>
                <Link to={`/races/${race.id}`}>
                    <strong>{race.name}</strong>
                </Link>
            </Card.Body>
        </Card>
    </div>

}

export default Race;