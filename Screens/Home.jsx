import { useState, useRef } from "react";
import {
	View,
	StyleSheet,
	SafeAreaView,
	Image,
	Dimensions,
} from "react-native";
import WebView from "react-native-webview";

const { width, height } = Dimensions.get("window");

export default function Home() {
	const webViewRef = useRef(null);

	const onMessage = (event) => {
		const { data } = event.nativeEvent;
		// Process the data received from the WebView
		// For example, if the data contains the clipboard content, you can use it here
		console.log(data);
	};

	const [isLoading, setIsLoading] = useState(true);

	const onLoadStart = () => {
		setIsLoading(true);
	};

	const onLoadEnd = () => {
		setIsLoading(false);
	};

	const injectedJavaScript = `
    const style = document.createElement('style');
    style.innerHTML = \`
      /* Your custom CSS styles here */
      .navbar,
	  #blog-posts,
	  footer .align-items-start {
        display: none !important;
      }
	  footer {
		padding-top: 0 !important;
		padding-bottom: 0 !important;
	  }
    \`;
    document.head.appendChild(style);
  `;

	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={{ flex: 1 }}>
				{isLoading && (
					<Image
						style={styles.image}
						resizeMode="cover"
						source={require("../assets/splash.png")}
					/>
				)}
				<WebView
					source={{ uri: "https://limervid.com/" }}
					ref={webViewRef}
					onMessage={onMessage}
					onLoadStart={onLoadStart}
					onLoadEnd={onLoadEnd}
					injectedJavaScript={injectedJavaScript}
					javaScriptEnabled={true}
				/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		backgroundColor: "white",
		height: "100%",
	},
	image: {
		width: width,
		height: height,
	},
});
