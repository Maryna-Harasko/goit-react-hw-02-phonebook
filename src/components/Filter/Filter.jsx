import React from "react";

export const Filter = ({value, onChange}) => {
  return(
    <div>
      <label>Find contacts by name
        <input 
          type="text" 
          name="name" 
          value={value} 
          onChange={onChange} 
        />
      </label>
   </div>
  )
}