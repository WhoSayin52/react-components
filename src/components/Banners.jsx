import Banner from "./Banner/Banner";
import "./Banners.css"

export default function Banners() {
	return (
		<section>
			<h2>Banners</h2>

			<div className="flex-col banners-container">
				<div className="flex-row banners-type-row">
					<h3>Multi Line</h3>
					<h3>Single Line</h3>
				</div>


				{statuses.map((status) => (
					<div key={status.type} className="flex-row banner-row">
						<h3 className="banner-row-left">{status.type}</h3>
						<div className="flex-row banner-row-right">
							<Banner status={status.type}>
								<Banner.Title>{status.title}</Banner.Title>
								<Banner.Body>{status.text}</Banner.Body>
							</Banner>

							<Banner status={status.type}>
								<Banner.Title>{status.title}</Banner.Title>
							</Banner>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

const statuses = [
	{
		type: "Success",
		title: "Congratulations!",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
	},
	{
		type: "Warning",
		title: "Attention",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
	},
	{
		type: "Error",
		title: "There is a problem with your application",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
	},
	{
		type: "Neutral",
		title: "Update available",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
	}
]
