import React from "react";
import { Card } from "./Card.js";

export const CartGroup = () => {
	return (
		<div className="container p-0 d-flex mt-4 mb-3">
			<div className="row">
				<Card
					imgUrl="https://fondosmil.com/fondo/3879.jpg"
					tittle="Card Tittle"
					description="Some quick example text to build on the card title and make up the bulk of the card's content."
					urlButton="..."
					labelButton="Find Out More!"
				/>
				<Card
					imgUrl="https://fondosmil.com/fondo/3879.jpg"
					tittle="Card Tittle"
					description="Some quick example text to build on the card title and make up the bulk of the card's content."
					urlButton="..."
					labelButton="Find Out More!"
				/>
				<Card
					imgUrl="https://fondosmil.com/fondo/3879.jpg"
					tittle="Card Tittle"
					description="Some quick example text to build on the card title and make up the bulk of the card's content."
					urlButton="..."
					labelButton="Find Out More!"
				/>
				<Card
					imgUrl="https://fondosmil.com/fondo/3879.jpg"
					tittle="Card Tittle"
					description="Some quick example text to build on the card title and make up the bulk of the card's content."
					urlButton="..."
					labelButton="Find Out More!"
				/>
			</div>
		</div>
	);
};
