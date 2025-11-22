import Badge from "./Badge/Badge"
import "./Badges.css"

const colors = ["Grey", "Red", "Yellow", "Green", "Blue", "Indigo", "Purple", "Pink"]

export default function Badges() {
	return (
		<section>
			<h2>Badges</h2>

			<div className="flex-row badges-container">
				<div className="flex-col badges-left">
					<h3>Square</h3>
					<h3>Pill</h3>
				</div>

				<div className="flex-row badges-right">
					{colors.map((color) => (
						<div className="flex-col badge-col">
							<span className="badge-color-text" key={color}>{color}</span>

							<Badge
								key={color}
								color={color}
							>
								Badge
							</Badge>

							<Badge
								key={color}
								variant="pill"
								color={color}
							>
								Badge
							</Badge>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
