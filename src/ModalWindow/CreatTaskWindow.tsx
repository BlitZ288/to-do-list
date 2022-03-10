import React from 'react';
import TempleteModal from './TempleteModalWindow';

 

function CreateWindowTask()
{
    return (
            <form className='form-add'>
             <div className="header-modal">
                 Создания задачи                
             </div>
             <div className='continer-input'>
                <fieldset> 
                    <legend>Имя<span className='req'>*</span></legend> 
                    <input type="text" placeholder="Введите имя задачи" required />
                </fieldset>
                </div>
             </form>
             
      
       
    )
}



export default CreateWindowTask