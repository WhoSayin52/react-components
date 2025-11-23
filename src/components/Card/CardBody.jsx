import styles from "./Card.module.css"

export default function CardBody({ className = "", children, ...rest }) {

	const finalClassName = `${className} ${styles.body}`.trim()

	return (
		<div className={finalClassName} {...rest}>{children}</div>
	)
}
