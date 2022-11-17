import { StyleSheet } from "react-native";
import { Colors } from "../../constants"

const styles = StyleSheet.create({
    favoriteBox: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        backgroundColor: Colors.lightYellow,
        borderRadius: 4,
    },
    favoriteText: {
        color: Colors.darkYellow,
        fontWeight: "700",
        fontSize: 12,
        marginLeft: 7
    },
    icon: {
        width: 18,
        height: 18
    },
})

export default styles;