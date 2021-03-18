import React from "react";
import { View, Text, StyleSheet} from "react-native"

export const Card = props => (
    <View style={styles.default}>
        {props.children}
    </View>
)

const styles = StyleSheet.create({
    default: {
        marginBottom: 10,
        padding: 20,
        backgroundColor: "#F0D4AA",
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 2 },
        elevation: 8,
        borderRadius: 10,
    }
})