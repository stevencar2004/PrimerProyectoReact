import React from "react";

class BookItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "La culpa fue de la vaca",
			image: "Soy una imagen",
			rating: 1,
			stars: [],
		};

	}

	render() {
		return (
			<div className="bookItem">
				<div className="bookItem__boxImage">
					<img className="bookItem__img" src={"img/" + this.state.image} alt="" />
				</div>

				<h4 class="bookItem__title" >{this.state.title}</h4>

				<div className="rating">
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

function BookList(props) {
	return (
		<section className="bookSection">
            <h1>Hola Soy un libro</h1> 
			{props.books.map((item) => (
				<BookItem
					key={item.id}
					id={item.id}
					title={item.title}
					image={item.image}
					rating={item.rating}
				/>
			))}
		</section>
	);
}

export default BookList;