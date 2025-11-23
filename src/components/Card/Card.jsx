import styles from "./Card.module.css"
import CardTitle from "./CardTitle"
import CardBody from "./CardBody"



function Card({ icon, IconBackgroundColor = "#3F75FE", className = "", children, ...rest }) {

	const finalClassName = `${className} ${styles.card}`.trim()

	const defaultIcon = <i
		style={{ color: "white" }}
		className="fa-solid fa-cloud-arrow-up" >
	</i >

	return (
		<div className={finalClassName} {...rest}>
			<div
				className={styles.icon}
				style={{ backgroundColor: IconBackgroundColor }}
			>
				{icon || defaultIcon}
			</div>
			{children}
		</div >
	)
}

Card.Title = CardTitle
Card.Body = CardBody

export default Card;
