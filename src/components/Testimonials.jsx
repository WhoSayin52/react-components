import Testimonial from "./Testimonial/Testimonial";
import "./Testimonials.css"
import img from "../assets/place_holder.jpg"

export default function Testimonials() {
	return (
		<section>
			<h2>Testimonial</h2>
			<Testimonial className="testimonial" imgSrc={img}>
				<div className="flex-col testimonial-content">
					<i className="fa-solid fa-quote-left testimonial-icon"></i>
					<p className="testimonial-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
					</p>
					<div>
						<p className="testimonial-signature-name">May Andersons</p>
						<p className="testimonial-signature-position">Workcation, CTO</p>
					</div>
				</div>
			</Testimonial>
		</section>
	)
}
