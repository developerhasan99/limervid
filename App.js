import { View, StatusBar } from "react-native";
import Home from "./Screens/Home";

export default function App() {
	return (
		<View>
			<StatusBar
				translucent={true}
				backgroundColor="#240752"
				barStyle="light-content"
			/>
			<Home />
		</View>
	);
}
