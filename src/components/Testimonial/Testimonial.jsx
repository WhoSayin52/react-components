import styles from "./Testimonial.module.css"

function Testimonial({ imgSrc = "", backgroundColor = "#2545B8", className = "", style = {}, children, ...rest }) {

	const finalClassName = `${className} ${styles.containerWithImg}`.trim()
	const innerStyle = { backgroundColor, ...style }

	return (
		<div className={finalClassName} style={innerStyle} {...rest}>
			<img className={styles.img} src={imgSrc} />

			<div>{children}</div>
		</div>
	)
}

export default Testimonial
