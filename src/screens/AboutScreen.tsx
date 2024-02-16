import React from "react";
import { View, Text, StyleSheet, Alert} from "react-native";

export default function AboutScreen(){
    return (
        <View style={styles.container}>
            <Text style={styles.body}
                onPress={() =>Alert.alert('This is About Screen')}>
                    About Screen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    body:{
        fontSize: 24,
        fontWeight: 'bold',
    }
})