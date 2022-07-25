import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    image: {
        height: '100%',
        width: '100%',
    },
    card: {
        width: 200,
        height: 300,
        borderRadius: 10,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 10,
        overflow: 'hidden',
    }
});