import { Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function Title() {
    return (
        <Text style={styles.title}>Opponent's Guess</Text>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
    }
});

export default Title;