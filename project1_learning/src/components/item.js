import React from "react";

class Item extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			image: "",
			rating: 1,
			stars: [],
		};

		this.onremove = this.onremove.bind(this);
		this.onChangeRating = this.onChangeRating.bind(this);
	}

	componentDidMount() {
		this.setState({
			id: this.props.id,
			title: this.props.title,
			image: this.props.image,
			rating: parseInt(this.props.rating),
			stars: Array(parseInt(this.props.rating)).fill(1),
		});
	}

	onremove(e) {
		console.log(this.props.id);
		this.props.onremove(this.props.id);
	}

	onChangeRating(e) {
		const rating = parseInt(e.target.value);
		this.setState({
			rating: parseInt(e.target.value),
			stars: Array(parseInt(e.target.value)).fill(1),
		});

		this.props.onupdaterating({
			id: this.state.id,
			title: this.state.title,
			image: this.state.image,
			rating: rating,
		});
	}

	render() {
		return (
			<div className="bookItem">
				<div className="bookItem__boxImage">
					<img className="bookItem__img" src={"img/" + this.state.image} alt="" />
				</div>

				<h4 class="bookItem__title" >{this.state.title}</h4>

				<div className="rating">
					<p>
						{this.state.stars.map((x) => (
							<img className="rating__img" src="img/star.png" width="25" alt=""/>
						))}
					</p>
					<span className="rating__label">Calificación:</span>
					<select className="rating__options" value={this.state.rating} onChange={this.onChangeRating}>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
				</div>
				<button className="button bookItem__btn" onClick={this.onremove}>Eliminar</button>
			</div>
		);
	}
}

export default Item;
