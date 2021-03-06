import React from 'react';
import { connect } from 'react-redux';
import { createEntity } from 'redux-json-api';

let AddSetForm = ({ dispatch }) => {
  let input;

  return (
    <form onSubmit={ (e) => {

        e.preventDefault();
        if (!input.value) return;

        const set = {
          type: 'biomaterial_sets',
          attributes: {
            name: input.value.trim()
          }
        };

        dispatch(createEntity(set));
        input.value = '';

      }}>

      <div className="form-group">
        <label className="sr-only" htmlFor="setName">Name</label>
        <input ref={(node) => input = node} type="text" className="form-control" id="setName" placeholder="Set Name"></input>
      </div>
      <button style={{width: '100%'}} type="submit" className="btn btn-primary">Create</button>
    </form>
    );
};

AddSetForm = connect()(AddSetForm);

export default AddSetForm;