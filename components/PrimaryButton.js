import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

function PrimaryButton({children, onPress}) {
    return (
        <View style={styles.outerContainer}>
            <Pressable 
                style={styles.innerContainer} 
                onPress={onPress} 
                android_ripple={{color: Colors.primaryButton1}}>
                    <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    innerContainer: {
        backgroundColor: Colors.primaryButton2,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    outerContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    }
});

export default PrimaryButton;