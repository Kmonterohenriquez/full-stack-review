import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className='Header'>
			<Link to='/'>Products</Link>
			<Link to='/cart'>Cart</Link>
		</div>
	);
};

export default Header;
