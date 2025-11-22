import { useContext } from "react"
import { BannerContext } from "./Banner"
import styles from "./Banner.module.css"

export default function Header({ className = "", style = {}, children, ...rest }) {

	const finalClassName = `${className || ""} ${styles.header}`.trim()
	const status = useContext(BannerContext)
	const innerStyle = { color: statusColors[status], ...style }

	return (
		<div className={finalClassName} style={innerStyle} {...rest}>{children}</div>
	)
}

const statusColors = {
	success: "#065F46",
	warning: "#92400E",
	error: "#92400E",
	neutral: "#1E40AF"
}
