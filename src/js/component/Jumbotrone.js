import React from "react";

export const Jumbotrone = () => {
	return (
		<div className="container p-3 pt-5 pb-5 mt-4 mb-2 bg-light text-dark">
			<h1>A Warm Welcome!</h1>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500s, when an unknown printer took a galley
				of type and scrambled it to make a type specimen book. It has
				survived not only five centuries, but also the leap into
				electronic typesetting.
			</p>
			<button type="button" className="btn btn-primary">
				Call to action!
			</button>
		</div>
	);
};
