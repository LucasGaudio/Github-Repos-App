import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../constants"

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        width: width * 0.9 ,
        borderRadius: 4,
        backgroundColor: Colors.white,
        shadowColor: Colors.black,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        padding: 20,
        elevation: 5,
        marginVertical: 15,
    },
    repoName: {
        fontSize: 12
    },
    repoNameBold: {
        fontWeight: "700"
    },
    repoOwnerInfoBlock: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    repoAvatar: {
        height: 30,
        width: 30,
        borderRadius: 50
    },
    repoDescription: {
        color: Colors.darkGray,
        marginTop: 15

    },
    line: {
        fontSize: 12,
        color: Colors.lightGray
    },
    repoFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 15,
        
    },
    icon: {
        width: 18,
        height: 18
    },
    footerBox: {
        flexDirection: "row",
        alignItems: "center",
    },
    footerText: {
        color: Colors.darkGray,
        fontSize: 12,
        marginLeft: 7
    },
    ellipse: {
        width: 8,
        height: 8
    }
   
})

export default styles;