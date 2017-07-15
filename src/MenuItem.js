import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MenuItem extends Component {

	render () {

		let sLabel = this.props.label;
		let sMenuItemClassName = "menuItem " + this.props.class;
		let sLink = this.props.link;

		return (
				<div className={sMenuItemClassName}>
					<Link to={sLink}>
					<div className={"innerBox " + this.props.class}>{sLabel}</div>
					</Link>
				</div>
			);
	}
}

MenuItem.propTypes = {
	label: PropTypes.string.isRequired,
	class: PropTypes.string,
	link: PropTypes.string
}

export default MenuItem;