import styles from "./Card.module.css"

export default function CardTitle({ className = "", children, ...rest }) {

	const finalClassName = `${className} ${styles.title}`.trim()

	return (
		<div className={finalClassName} {...rest}>{children}</div>
	)
}
