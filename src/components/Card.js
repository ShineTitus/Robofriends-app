import React from 'react';

const Card = ({ name, email, id }) => {
	return (
		<div className='tc bg-lightest-green dib br3 pa3 ma2 grow shadow-5'>
			<img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
			<div>
				<h2>{ name }</h2>
				<h4>{ email }</h4>
			</div>
		</div>
	)
}

export default Card;