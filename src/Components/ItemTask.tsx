import React from 'react';
import ITask from '../Model/Task';

class ItemTask extends React.Component<ITask>{
    
    render(): React.ReactNode {
        return(           
            <div className='continerItem'>
                <div key={this.props.id} className='itemTodo'>
                    <div className='infoItem'>
                        <div className='headerItem'>
                            <label className='name'>{this.props.name}</label>
                            <div className='additionalInfo'>
                                <img src='./img/folder.svg'></img>
                                <label className='nameAdditionl'>{this.props.categoryId}</label>
                            </div>
                        </div>
                        <div className='description'>
                        {this.props.description}
                        </div>
                    </div>
                    <div className='containerButton'>
                        <div className='editItem'></div>
                        <div className='deleteItem'></div>
                    </div>
        
                </div>
            </div>
        )
    }

}
export default ItemTask;
