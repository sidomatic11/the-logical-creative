import React, {Component} from 'react';
import MenuItem from './MenuItem';

class MenuContainer extends Component {

	render () {
		return (
				<div className="menuContainer">
				<MenuItem label="Projects" class="projects" link="/projects"/>
				<MenuItem label="Notes" class="notes" link="/notes"/>
				<MenuItem label="About" class="about" link="/about"/>
				</div>
			);
	}
}

export default MenuContainer;