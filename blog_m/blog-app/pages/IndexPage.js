import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

const IndexPage = ({ navigation }) => {
    return (
        <View>
            <Image
                source={require('../assets/header.jpg')}
                style={styles.images}
            />
            <Text style={styles.headerTitle}>Stackie's Blog</Text>
            <View style={styles.container}>
                {/* New Blog Entry Button */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('BlogPage')}
                >
                    <FontAwesome5 name="sticky-note" size={24} color="white" />
                    <Text style={styles.buttonText}>New Blog Entry</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    images: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    headerTitle: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop: 10,
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.9)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        position: 'absolute',
        top: 140,
        left: 20,
    },
    button: {
        backgroundColor: '#1E90FF',
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
      },
      container: {
        height: '100%',
        padding: 20,
        backgroundColor: '#031031',
      },
});

export default IndexPage;