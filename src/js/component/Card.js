import React from "react";
import Proptypes from "prop-types";

export const Card = (props) => {
	return (
		<div className="col-sm-3">
			<div className="card text-center">
				<img
					src={props.imgUrl}
					className="card-img-top"
					alt="..."></img>
				<div className="card-body p-0">
					<h5 className="card-title">{props.tittle}</h5>
					<p className="card-text ps-1 pe-1">{props.description}</p>
					<a
						href={props.urlButton}
						className="btn btn-primary mt-2 mb-4 "
						role="button">
						{props.labelButton}
					</a>
				</div>
			</div>
		</div>
	);
};

Card.prototype = {
	imgUrl: Proptypes.string,
	tittle: Proptypes.string,
	description: Proptypes.string,
	urlButton: Proptypes.string,
	labelButton: Proptypes.string,
};
