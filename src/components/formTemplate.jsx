import React from 'react';

export default function FormTemplate(props){
  return <>
      <div className="form-group">
        <label>{props.label}</label>
        <input id={props.id} type="text"></input>
      </div>
  </>
}