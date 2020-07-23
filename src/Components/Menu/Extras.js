import React, { Fragment } from 'react';




const Extras = ({extras, checkExtra}) => {

    return(
        <Fragment>
            {extras.map((extra, i)=>(
               <form key={extra.ingrediente}>
                  <span>{extra.ingrediente}</span>
                {/* <input 
                  checked = {extra.checked} 
                  type= 'checkbox'   
                  onClick={()=>{ 
                    checkExtra(i)
                  
                  }}> 
                </input> */}
            </form>
            ))
            }
            
        </Fragment>
    )
}

export default Extras