import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import MapComponent from "../MapComponent/MapComponent";
import Label from "./Label";

const DetailsPage = () => {
	const navigate = useNavigate();
	const [post, setPost] = useState(null);
	const location = useLocation();
	const url = location.state;

	useEffect(() => {
		if (url) {
			axios.get(url).then((response) => {
				setPost(response.data);
			});
		}
	}, [url]);

	if (!post) return null;

	const { properties } = post;

	return (
		<>
			<div className="details">
				<button className="buttonBack" onClick={() => navigate(-1)}>
					{"<= Go Back"}
				</button>
				<h1>Earthquake Details:</h1>
			</div>

			<div className="details-container">
				<aside className="mag">
					<div className="Magnitude">{`Magnitude: ${properties?.mag}`}</div>
				</aside>
				<div className="map">
					<MapComponent earthquakes={post} height={250} width={400} />
				</div>
			</div>

			<div className="containerLabel">
				<Label
					title={properties?.title}
					place={properties?.place}
					time={properties?.time}
					status={properties?.status}
					tsunami={properties?.tsunami}
				/>
			</div>
		</>
	);
};

export default DetailsPage;
