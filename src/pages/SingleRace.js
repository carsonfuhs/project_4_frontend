import React from "react";
import {Link} from "react-router-dom"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'

const SingleRace = ({races, match, edit, deleteRace, history}) => {
  const id = parseInt(match.params.id)
  const race = races.find((race) => {
    return race.id === id
  })
  //////////////////////
  // Styles
  //////////////////////
  const div = {
    textAlign: "center",
    width: "50%",
    margin: "5px auto"
  }

  return <div style={div}>
  <Card>
    <Card.Header>{race.name}</Card.Header>
    <Card.Body>
      <Card.Title>{race.track}</Card.Title>
      <ListGroup variant="flush" width='50%'>
        <ListGroup.Item>First Place: {race.firstPlace}</ListGroup.Item>
        <ListGroup.Item>Second Place: {race.secondPlace}</ListGroup.Item>
        <ListGroup.Item>Third Place: {race.thirdPlace}</ListGroup.Item>
      </ListGroup>
      <Button onClick={(event) => {
      edit(race)
    }}>Edit</Button>{" "}
    <Button onClick={(event) => {
      deleteRace(race)
      history.push("/")
    }}>Delete</Button>{" "}
    <Link to="/">
      <Button>Go Back</Button>
    </Link>
    </Card.Body>
  </Card>
</div>;

};





export default SingleRace;