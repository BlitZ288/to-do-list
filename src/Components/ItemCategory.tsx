import React from 'react';
import ICategory from '../Model/Category';


class ItemCategory extends React.Component<ICategory>{


    render(): React.ReactNode {
        return(
            <div className='continerItem'>
                <div key={this.props.id} className='itemTodo'>
                    <div className='infoItem'>
                        <div className='headerItem'>
                            <label className='name'>{this.props.name}</label>                            
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
export default ItemCategory;
