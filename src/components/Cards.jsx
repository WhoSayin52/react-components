import Card from "./Card/Card"
import "./Cards.css"

export default function Cards() {
	return (
		<section className="cards">
			<h2>Cards - Try hover effect</h2>
			<Card className="card-container">
				<Card.Title>Easy Deployment</Card.Title>
				<Card.Body>
					Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
				</Card.Body>
			</Card>
		</section>
	)
}
