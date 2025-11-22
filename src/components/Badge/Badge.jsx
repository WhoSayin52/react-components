import styles from "./Badge.module.css"

export default function Badge({ variant = "square", color = "grey", className = "", style = {}, children, ...rest }) {

	const inlineStyle = { ...colors[color.toLowerCase()], ...style }

	const styleType = variant.toLowerCase() === "pill" ? styles.badgePill : styles.badgeSquare

	let finalClassName = `${className} ${styleType}`.trim();

	return (
		<span className={finalClassName} style={inlineStyle} {...rest}>
			{children}
		</span>
	)
}

const colors = {
	grey: {
		color: "#1F2937",
		backgroundColor: "#F3F4F6"
	},
	red: {
		color: "#991B1B",
		backgroundColor: "#FEE2E2"
	},
	yellow: {
		color: "#92400E",
		backgroundColor: "#FEF3C7"
	},
	green: {
		color: "#065F46",
		backgroundColor: "#D1FAE5"
	},
	blue: {
		color: "#1E40AF",
		backgroundColor: "#DBEAFE"
	},
	indigo: {
		color: "#3730A3",
		backgroundColor: "#E0E7FF"
	},
	purple: {
		color: "#5B21B6",
		backgroundColor: "#EDE9FE"
	},
	pink: {
		color: "#9D174D",
		backgroundColor: "#FCE7F3"
	},
}
