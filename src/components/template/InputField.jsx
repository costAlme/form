import React from "react"

function InputField({label,type,value,onChange}){
    return(
        
            
                <div className="input-group, login"> 
                    <label >{label}</label>
                    <input className="input-field" type={type} value={value} onChange={onChange} />    
                </div>
              
    );
}
export default InputField

