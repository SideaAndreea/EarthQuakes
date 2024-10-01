import React from "react";

function Label(props) {
	const styles = {
		labelContainer: {
			backgroundColor: "#f0f8ff",
			padding: "15px",
			borderRadius: "10px",
			marginTop: "10px",
		},
		labelItem: {
			marginBottom: "10px",
		},
		dt: {
			fontWeight: "bold",
			color: "#007bff",
		},
		dd: {
			margin: "0",
			paddingLeft: "10px",
			color: "#333",
		},
	};

	return (
		<div style={styles.labelContainer}>
			<dl>
				<div style={styles.labelItem}>
					<dt style={styles.dt}>Title:</dt>
					<dd style={styles.dd}>{props.title}</dd>
				</div>
				<div style={styles.labelItem}>
					<dt style={styles.dt}>Place:</dt>
					<dd style={styles.dd}>{props.place}</dd>
				</div>
				<div style={styles.labelItem}>
					<dt style={styles.dt}>Time:</dt>
					<dd style={styles.dd}>{new Date(props.time).toLocaleString()}</dd>
				</div>
				<div style={styles.labelItem}>
					<dt style={styles.dt}>Status:</dt>
					<dd style={styles.dd}>{props.status}</dd>
				</div>
				<div style={styles.labelItem}>
					<dt style={styles.dt}>Tsunami Risk:</dt>
					<dd style={styles.dd}>{props.tsunami ? "Yes" : "No"}</dd>
				</div>
			</dl>
		</div>
	);
}

export default Label;
