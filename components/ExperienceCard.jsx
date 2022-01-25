import React from "react";

import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	CardHeader,
	Col,
} from "reactstrap";

import Color from "color-thief-react";

import { Fade } from "react-reveal";
import Image from "next/image";

const ExperienceCard = ({ data }) => {
	return (
		<Col lg="4">
			<Fade left duration={1000} distance="40px">
				<Card
					style={{ flex: 1 ,minHeight:'700px'}}
					className="shadow-lg--hover shadow border-0 text-center rounded"
				>
					<Color src={process.env.NEXT_PUBLIC_BASE_PATH + data.companylogo} format="hex">
						{(color) => (
							<CardHeader style={{ background: color.data }}>
								<h5 className="text-white">{data.company}</h5>
							</CardHeader>
						)}
					</Color>
					<CardBody className="py-5">
						<div
							
							
						>
							<img
								src={process.env.NEXT_PUBLIC_BASE_PATH + data.companylogo}
								width={"160px"}
								height={"80px"}
								alt={data.companylogo}
							/>
						</div>
						<br/>
						<CardTitle tag="h5">{data.role}</CardTitle>
						<CardSubtitle>{data.date}</CardSubtitle>
						<CardText className="description my-3 text-left">
							{data.desc}
							<ul>
								{data.descBullets
									? data.descBullets.map((desc) => {
											return <li key={desc}>{desc}</li>;
									  })
									: null}
							</ul>
						</CardText>
					</CardBody>
				</Card>
			</Fade>
		</Col>
	);
};

export default ExperienceCard;
