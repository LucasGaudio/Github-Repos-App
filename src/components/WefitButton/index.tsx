import { Text, Image, TouchableOpacity, TextStyle, ImageSourcePropType } from "react-native";
import styles from "./styles";

interface WefitButtonProps {
    text: string;
    onPress: () => void;
    buttonStyle: TextStyle;
    textStyle: TextStyle;
    icon?: ImageSourcePropType;
}

const WefitButton = ({text, onPress, buttonStyle, textStyle, icon}: WefitButtonProps) => {
    return (
		<TouchableOpacity onPress={onPress} style={ [styles.buttonContainer, buttonStyle]}>
            <Text style={[styles.buttonTitle, textStyle]} > {text} </Text>
            {icon ? <Image resizeMode={"contain"} style={styles.icon} source={icon} /> : <></>}
        </TouchableOpacity>
    ) 
}

export default WefitButton;