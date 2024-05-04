import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./tarteeb.jpg"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Tarteeb</div>
							<div className="work-subtitle">
								.NET Developer (Intership)
							</div>
							<div className="work-duration">2024/01 - Present </div>
						</div>

						<div className="work">
							<img
								src="./najotlogo.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Najot Ta'lim</div>
							<div className="work-subtitle">
								Foundation Mentor & Principal Examiner
							</div>
							<div className="work-duration">2023/03 - 2024/04</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
