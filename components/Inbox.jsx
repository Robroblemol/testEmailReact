import React, {Component} from 'react'
import { Link }  from 'react-router-dom'

import EmailRow from './EmailRow'
import EmailRead from './EmailRead'

export default class Inbox extends Component{
    


    render(){
        return (
        <div className="app-container">
            <h1>Inbox</h1>
            <p>Vi havas {this.props.emails.length} emailoj </p>
            <div id = "all-emails">
                {this.props.emails.map((email, index) =>{
                    return <Link key = {index} to={`/read/${email.id}`} >
                        <EmailRow  email = {email}/>
                    </Link> 
                })}
            </div>
        </div>
        )
        
        
        
    }
}