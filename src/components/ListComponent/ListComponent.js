import React from "react";
import { useNavigate } from "react-router-dom";
import "./ListComponent.css";

const ListComponent = ({ id, mag, title, detail }) => {
	const navigate = useNavigate();

	const getStyleByMagnitude = (magnitude) => {
		if (magnitude >= 4.5)
			return { color: "red", backgroundColor: "lightcoral" };
		if (magnitude >= 2.5)
			return { color: "orange", backgroundColor: "lightyellow" };
		return { color: "green", backgroundColor: "lightgreen" };
	};

	const { color, backgroundColor } = getStyleByMagnitude(mag);

	return (
		<ul className="ulListComponent">
			<li className="liListComponent" key={id}>
				<span
					className="magnitude-circle"
					style={{
						backgroundColor,
						color,
					}}
				>
					{mag}
				</span>
				<span>{title}</span>
				<button
					className="details-button"
					onClick={() => navigate("/DetailsPage", { state: detail })}
					style={{ backgroundColor: color }}
				>
					View Details
				</button>
			</li>
		</ul>
	);
};

export default ListComponent;
