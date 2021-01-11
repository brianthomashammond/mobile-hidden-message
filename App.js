import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
    const startMessage = "Can you find the hidden message?";
    const decoyMessage = "😭 This is not the hidden message. 😭";
    const hiddenMessage = "⭐⭐⭐ You found the hidden message!!! ⭐⭐⭐";
    const [message, setMessage] = useState(startMessage);
    const [style, setStyle] = useState(styles.startContainer);
    const [textStyle, setTextStyle] = useState(styles.startStyle);

    const onPress = () => {
        if (message === hiddenMessage) {
            setMessage(startMessage);
            setStyle(styles.startContainer);
            setTextStyle(styles.startText);
        } else {
            setMessage(decoyMessage);
        }
    };

    const onLongPress = () => {
        setMessage(hiddenMessage);
        setStyle(styles.winContainer);
        setTextStyle(styles.winText);
    };

    return (
        <View style={style}>
            <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
                <Text style={textStyle}>{message}</Text>
                <StatusBar style="auto" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    startContainer: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    winContainer: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
    },
    startText: {
        color: "#000",
    },
    winText: {
        color: "#fff",
    },
});
