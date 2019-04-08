import React, {Component} from 'react'
import { withRouter, Link } from 'react-router-dom'

class EmailRead extends Component{
     render(){
         const emailId = this.props.match.params.id;
         const email = this.props.emails.filter(email => {
            return  email.id === emailId;
         })[0]
         if(!email){
             return <di>
                 <h1>Erro trovis Emailo</h1>
                 <p>
                     Emailo id malvera. { }
                     <Link to = "/">
                        iras hejme.
                     </Link>
                </p>
             </di> 
         }
         return (
            <div>
                <h1>{email.subject}</h1>
                <h3>{email.date}{' '}{email.email}</h3>
                {
                    email.body.split('\n\n').map((paragraphText,index) =>{
                        return <p key = {index} >{paragraphText}</p>
                    })
                }
                <p>{email.body}</p>
            </div>
         )
     }
}

export default withRouter(EmailRead)