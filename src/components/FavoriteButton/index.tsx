import {Text, Image, TouchableOpacity } from "react-native";
import styles from './styles';
import {Icons, Messages} from "../../constants"

interface FavoriteButtonProps {
    onPress: () => void;
}

const FavoriteButton = ({ onPress}: FavoriteButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.favoriteBox}>
            <Image style={styles.icon} source={Icons.star_yellow} />
            <Text style={styles.favoriteText}>{Messages.Buttons.favorite}</Text>
        </TouchableOpacity> 
    ) 
}

export default FavoriteButton;