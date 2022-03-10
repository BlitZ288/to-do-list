import React from 'react';
import '../css/modal.css';
interface ITempleteModal
{
    active :boolean
    setActive : (active:boolean)=> void
    content:JSX.Element
}

class TempleteModal extends React.Component<ITempleteModal>
{
    render(): React.ReactNode {
        return(
            <div className={this.props.active ? "modal active" :"modal"} onClick={()=>this.props.setActive(false)}>
                <div className='modal-content' onClick={e => e.stopPropagation()}>
                    {this.props.content}
                </div>
            </div>
        )
    }

}

export default TempleteModal