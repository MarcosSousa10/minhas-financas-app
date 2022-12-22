import React from "react"
class card extends React.Component{
    render(){
        return(
            <div className="card md-3">
                <div className="card-header">{this.props.title}</div>
                <div className="card-body">{this.props.children}</div>
            </div>
        )
    }
}
export default card;