import { Image, StyleSheet, View } from 'react-native';
export default function ImagePick({image, setImage}) {
    return (
        <View style={styles.imageContainer}>
            <Image
                source={image ? { uri: image } : require('../assets/images/icon.png')}
                style={styles.image}
                contentFit="cover"
            />
            {/* <TouchableOpacity onPress={() => setImage(null)} style={styles.removeButton}>
                <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>  */}
        </View>
    );
}
const styles = StyleSheet.create({
    imageContainer: {
        position: 'relative',
        marginBottom: 20,
        height: 200,
        width: 200,
        marginHorizontal: 'auto',
        borderWidth: 2,
        borderColor: '#ccc',
        borderStyle: 'dashed',
        borderRadius: 10,},
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    removeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 5,
        borderRadius: 5,
    },
    removeButtonText: {
        color: '#fff',
    },
});