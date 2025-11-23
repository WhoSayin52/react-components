import { createContext } from "react"
import BannerTitle from "./BannerTitle"
import BannerBody from "./BannerBody"
import styles from "./Banner.module.css"


export const BannerContext = createContext()

function Banner({ status = "neutral", className = "", style = {}, children, ...rest }) {

	status = status.toLowerCase()

	const finalClassName = `${className} ${styles.banner}`.trim();

	const innerStyle = { backgroundColor: statuses[status].backgroundColor, ...style }

	return (
		<div className={finalClassName} style={innerStyle} {...rest}>
			{statuses[status].icon}
			<BannerContext.Provider value={status}>
				{children}
			</BannerContext.Provider>
		</div>
	)
}

const statuses = {
	success: {
		icon: <i className={`${styles.statusIcon} fa-solid fa-circle-check`} style={{ color: "#34D399" }}></i>,
		backgroundColor: "#ECFDF5"
	},
	warning: {
		icon: <i className={`${styles.statusIcon} fa-solid fa-triangle-exclamation`} style={{ color: "#FBBF24" }}></i>,
		backgroundColor: "#FFFBEB"
	},
	error: {
		icon: <i className={`${styles.statusIcon} fa-solid fa-circle-xmark`} style={{ color: "#F87171" }} ></i>,
		backgroundColor: "#FEF2F2"
	},
	neutral: {
		icon: <i className={`${styles.statusIcon} fa-solid fa-circle-info`} style={{ color: "#60A5FA" }}></i>,
		backgroundColor: "#EFF6FF"
	}
}

export default Banner;

Banner.Title = BannerTitle;
Banner.Body = BannerBody;

<i class="fa-solid fa-circle-info"></i>
