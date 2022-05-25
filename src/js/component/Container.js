import React from "react";
import { CartGroup } from "./CartGroup";
import { Jumbotrone } from "./Jumbotrone";

export const Container = () => {
	return (
		<div>
			<Jumbotrone />
			<CartGroup />
		</div>
	);
};
