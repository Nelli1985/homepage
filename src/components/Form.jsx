import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import './Form.css';

export default class Form extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleChange = this.handleChange.bind(this);
  
      this.state = {
        value: ''
      };
    }
  
    getValidationState() {
      const length = this.state.value.length;
      if (length > 3) return 'success';
      else if (length > 0) return 'error';
      return null;
    }
  
    handleChange(e) {
      this.setState({ value: e.target.value });
    }
  
    render() {
      return (
        <form horizontal className="form">
          <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}
          >
            <ControlLabel>Contact us:</ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Name..."
              onChange={this.handleChange}
            />
            <FormControl
              type="text"
              placeholder="Email..."
            />
            <FormControl
                type="text"
                placeholder="Message..."
            />
            <FormControl.Feedback />
          </FormGroup>
        </form>
      );
    }
  }

