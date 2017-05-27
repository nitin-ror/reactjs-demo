class Microposts extends React.Component {
  render () {
    return (
    	<div>
    		<h2> All Microposts </h2>
      	{this.props.microposts.map(function(x){
      		return (
      			<p key={x.id} > <a href={"/microposts/" + x.id} >{x.message} </a> : {x.email}  </p>
      		)
      	})}
    	</div>
    )
  }
}


