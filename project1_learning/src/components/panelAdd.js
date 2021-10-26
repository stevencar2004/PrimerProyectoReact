import React from "react";

class PanelAdd extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			image: "",
			rating: 1,
		};

		this.cancelAction = this.cancelAction.bind(this);
		this.createItem = this.createItem.bind(this);
		this.onChangeImage = this.onChangeImage.bind(this);
		this.onChangeTitle = this.onChangeTitle.bind(this);
		this.onChangeRating = this.onChangeRating.bind(this);
	}

	cancelAction(e) {
		this.props.onhide();
	}

	onChangeTitle(e) {
		this.setState({ title: e.target.value });
	}

	onChangeImage(e) {
		this.setState({ image: e.target.value });
	}

	onChangeRating(e) {
		const rating = parseInt(e.target.value);
		this.setState({ rating: rating });
	}

	createItem(e) {
		e.preventDefault();
		const title = this.state.title;
		const image = this.state.image;
		const rating = this.state.rating;
		this.props.onadd({ title: title, image: image, rating: rating });
		this.cancelAction();
	}

	render() {
		return (
			<div className="panelAdd">
				<div className="panelModal">
					<form onSubmit={this.createItem} className="panelModal__form">
						<div className="panelModal__group  panelModal__group--title">
							<label className="panelModal__label">Título del libro</label>
							<input
								type="text"
								name="title"
								className="panelModal__input"
								onChange={this.onChangeTitle}
								placeholder="Ingrese el titulo"
							/>
						</div>

						<div className="panelModal__group panelModal__group--img">
							<label className="panelModal__label">Nombre de imagen</label>
							<input
								type="text"
								name="image"
								className="panelModal__input"
								onChange={this.onChangeImage}
								placeholder="Ingrese la ruta de la imagen"
							/>
						</div>

						<div className="panelModal__group panelModal__group--rating">
							<label className="panelModal__label">Calificación</label>
							<select onChange={this.onChangeRating} className="panelModal__input">
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
							</select>
						</div>

						<button className="button button__cancel" onClick={this.props.onhide}>
							Cancelar
						</button>
						<button type="submit" className="button button__add">
							Agregar Libro
						</button>
					</form>
				</div>
			</div>
		);
	}
}
export default PanelAdd;
