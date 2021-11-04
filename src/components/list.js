import React from "react";
import Item from "./item";

function List(props) {
	return (
		<section className="bookSection">
			{props.books.map((item) => (
				<Item
					key={item.id}
					id={item.id}
					title={item.title}
					image={item.image}
					rating={item.rating}
					onremove={props.onremove}
					onupdaterating={props.onupdaterating}
				/>
			))}
		</section>
	);
}

export default List;
