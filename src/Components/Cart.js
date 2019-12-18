import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthModal from './AuthModal';
class Cart extends Component {
	state = {
		cart: []
	};
	render() {
		return (
			<div className='Cart'>
				{this.props.user ? <AuthModal /> : <div>Cart</div>}
			</div>
		);
	}
}

const mapStateProps = reduxState => {
	return reduxState;
};
export default connect(mapStateProps)(Cart);
