import React from "react";
import "./Framework.css";

export default function Framework(props) {
	return (
		<div className="flip-card">
			<div className="flip-card-inner">
				<div className="flip-card-front">
					<img src={props.image} alt="Avatar" />
				</div>
				<div className="flip-card-back">
					<h1>{props.title}</h1>
					<p>{props.text}</p>
					<p>Tools: {props.tools}</p>
					<div>
						<a href={props.github} target="_blank">
							<button className="btn-4">GitHub</button>
						</a>
						<a href={props.website} target="_blank">
							<button className="btn-4">Website</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
