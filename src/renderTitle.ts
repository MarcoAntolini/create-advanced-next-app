import { getUserPackageManager } from "@/getUserPackageManager";
import figlet from "figlet";
import gradient from "gradient-string";

const colors = {
	blue: "#add7ff",
	cyan: "#89ddff",
	green: "#5de4c7",
	magenta: "#fae4fc",
	red: "#d0679d",
	yellow: "#fffac2",
};

export const renderTitle = () => {
	const gradientColors = gradient(Object.values(colors));

	const packageManager = getUserPackageManager();
	if (packageManager === "yarn" || packageManager === "pnpm") {
		console.log("");
	}

	console.log(gradientColors.multiline(figlet.textSync("Create Advanced Next App")));
};
