import React, {PropTypes, Component} from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Select from 'react-select';
import axios from 'axios';

import {ReactSelectize, SimpleSelect, MultiSelect} from 'react-selectize';
import 'react-select/dist/react-select.css';

const goals = [
    { label: 'Education', value: 'educational' },
    { label: 'Finiancial', value: 'financial' },
    { label: 'Spiritual', value: 'spiritual' },
    { label: 'Physical', value: 'physical' },
      { label: 'Other', value: 'other' },

];
const contact = [
    { label: 'Email', value: 'email' },
    { label: 'Phone', value: 'phone' },
    { label: 'Text', value: 'text' },


];
const mentorlevel = [
    { label: 'Cheer leader', value: 'cheerleader' },
    { label: 'Mentor', value: 'mentor' },
    { label: 'Coach', value: 'coach' },
    { label: 'Tutor', value: 'tutor' },


];
const availability = [
    { label: 'Monday', value: 'Monday' },
    { label: 'Tuesday', value: 'Tuesday' },
    { label: 'Wednesday', value: 'Wednesday' },
    { label: 'Thursday', value: 'Thursday' },
    { label: 'Friday', value: 'Friday' },
    { label: 'Saturday', value: 'Saturday' },
    { label: 'Sunday', value: 'Sunday' },


];
const edulevel = [
    { label: 'High School Student', value: 'High School Student' },
    { label: 'High School Graduate', value: 'High School Graduate' },
    { label: 'College Student', value: 'College Student' },
    { label: 'Associate Degree', value: 'Associate Degree' },
    { label: 'Bachelors', value: 'Bachelors' },
    { label: 'Masters', value: 'Masters' },
    { label: 'P.H.D', value: 'P.H.D' },


];

export default class MentorSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {

      contact: [],
      mentorlevel:'',
      goals:[],
      availability:[],
      edulevel:'',
      name:'',
    };
    this.handle_goals = this.handle_goals.bind(this);
    this.handle_mentor_level = this.handle_mentor_level.bind(this);
    this.handle_contact = this.handle_contact.bind(this);
    this.handle_availaiblity = this.handle_availaiblity.bind(this);
    this.handle_edu = this.handle_edu.bind(this);
    this.handle_submit = this.handle_submit.bind(this);
    this.handle_input = this.handle_input.bind(this);

  }

  handle_input(event) {
//console.log(event.target.value);
    this.setState({ name:event.target.value });
      console.log(this.state);
  }

  handle_goals(value) {

    this.setState({ goals:value });
      console.log(this.state);
  }
  handle_mentor_level(value) {
    console.log(this.state);
    this.setState({ mentorlevel:value });
  }
  handle_contact(value) {
    console.log(this.state);
    this.setState({ contact:value });
  }
  handle_availaiblity(value) {
    console.log(this.state);
    this.setState({ availability:value });
  }
  handle_edu(value) {
    console.log(this.state);
    this.setState({ edulevel:value });
  }
  handle_submit(event){
    event.preventDefault();

    axios({
      method: 'POST',
      url: 'http://custommentor/custom_mentor/serverapi/searchmentor.php',
      data: `requesttype=SearchMentor&data=${JSON.stringify(this.state)}`,
    }).then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });
    console.log(this.state);

  }

  static propTypes = {
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.object,
    ])
  }

  render () {
        return (
            <div className="screen">
                <h2>Mentor Search</h2>


                    <Col sm={2}>
              <Form onSubmit={this.handle_submit}>
               <Input type="text" name="name" value={this.state.name} id="exampleEmail" placeholder="Enter A Mentor Name" onInput={this.handle_input}/>
                <br/>
                   <Select multi simpleValue value={this.state.goals} placeholder="Goals " options={goals} onChange={this.handle_goals} /><br/>


               <Select simpleValue value={this.state.mentorlevel} placeholder="Mentoring Level" options={mentorlevel} onChange={this.handle_mentor_level} />
<br/>

              <Select multi simpleValue value={this.state.contact} placeholder=" Contact" options={contact} onChange={this.handle_contact} />
<br/>

             <Select multi simpleValue value={this.state.availability} placeholder=" Availability" options={availability} onChange={this.handle_availaiblity} />
<br/>

            <Select  simpleValue value={this.state.edulevel} placeholder=" Educational Level" options={edulevel} onChange={this.handle_edu} />
<br/>
                <Button color="primary" size="sm">Search</Button>{' '}

         </Form>
       </Col>
       <Col sm={10}>
         asdasd
       </Col>


            </div>
        );
    }
}
