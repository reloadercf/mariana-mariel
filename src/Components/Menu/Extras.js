import React from 'react';




const Extras = ({extras, checkExtra}) => {

    return(
        <div>
            {extras.map((extra, i)=>(
               <form>
                  <span>{extra.ingrediente}</span>
                <input 
                  checked = {extra.checked} 
                  type= 'checkbox'   
                  onClick={()=>{ 
                    checkExtra(i)
                  
                  }}>
                </input>
            </form>
            ))
            }
            
        </div>
    )
}

export default Extras