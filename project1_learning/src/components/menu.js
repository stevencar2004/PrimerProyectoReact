import React from "react";
import Search from "./search";
import PanelAdd from "./panelAdd";

class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = { newItemPanel: false };

		this.add = this.add.bind(this);
		this.onCancel = this.onCancel.bind(this);
	}

	add() {
		this.setState({ newItemPanel: true });
	}

	onCancel() {
		this.setState({ newItemPanel: false });
	}

	render() {
		return (
			<header className="header">
				<nav className="navBar">
					<div className="navBar__logo">
						<i className="fab fa-amazon navBar__icon"></i>
						<h2 className="navBar__title">{this.props.title}</h2>
					</div>

					<div className="search">
						<Search onsearch={this.props.onsearch} />
					</div>

					<div className="navBar__actions">
						<button onClick={this.add} className="button button__modalAdd">
							<i class="fas fa-plus button__icon"></i>
							Añadir nuevo libro
						</button>
					</div>
				</nav>

				{this.state.newItemPanel ? (
					<PanelAdd onhide={this.onCancel} onadd={this.props.onadd} />
				) : (
					""
				)}
			</header>
		);
	}
}
export default Menu;
