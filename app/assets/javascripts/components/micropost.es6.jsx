class Micropost extends React.Component {
	constructor(props){
		super(props)
		this.state = {
				clicked:false
			
		}
	}
	_touchedMe() {
		var newState = {};
		newState["clicked"] = true;
		this.setState(newState);
	}
  render () {
  	let open = <a className="clicker" onClick={this._touchedMe.bind(this)} > show </a>
  	if (this.state.clicked){
  		open = <div>
    		<h2>{this.props.micropost.message} </h2>
    		<p> {this.props.micropost.email} </p>
    	</div>;
  	}

    return (
    	<div>
    		{open}
    	</div>
    )
  }
}


