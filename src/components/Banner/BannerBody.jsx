import { useContext } from "react"
import { BannerContext } from "./Banner"
import styles from "./Banner.module.css"

export default function BannerBody({ className = "", style = {}, children, ...rest }) {

	const finalClassName = `${className || ""} ${styles.body}`.trim()
	const status = useContext(BannerContext)
	const innerStyle = { color: statusColors[status], ...style }

	return (
		<div className={finalClassName} style={innerStyle} {...rest}>{children}</div>
	)
}

const statusColors = {
	success: "#047857",
	warning: "#B45309",
	error: "#B45309",
	neutral: "#1C51B9"
}
