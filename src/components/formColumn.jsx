import React from 'react';
import FormTemplate from "./formTemplate.jsx"


export default function FormColumn(props){

  let render = () => {
    return props.objects.map( (item) => {
      return <FormTemplate id={item.id} label={item.label}/>
    })
  }

  return <>
    <form>
      <div className="form-group">
        {render()}
      </div>
    </form>
  </>
}
