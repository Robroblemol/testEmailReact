import React, {Component} from 'react'
import './EmailRow.css'

export default class Inbox extends Component{


    render(){
        return (
        <div className = "email-row">
            <div className ="email-date">
                {this.props.email.date}
            </div>
            <div className ="email-from">
                {this.props.email.email}
            </div> 
            <div className ="email-subject">
                {this.props.email.subject}
            </div>
            <div className ="email-body">
                {this.props.email.body}
            </div> 
        </div>
        )
        
        
        
    }
}