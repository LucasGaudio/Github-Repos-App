import { StyleSheet } from "react-native";
import { Colors } from "../../constants"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
    },
    bodyContainer: {
        borderRadius: 4,
        padding: 15,
        backgroundColor: Colors.white

    },
    repoName: {
        fontSize: 20,
        lineHeight: 24
    },
    repoNameBold: {
        fontWeight: "700"
    },
    repoDescription: {
        color: Colors.darkGray,
        marginTop: 15,
        fontSize: 16,

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
    languageBox: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15
    },
    languageText: {
        color: Colors.darkGray,
        fontSize: 14,
        marginLeft: 7
    },
    ellipse: {
        width: 12,
        height: 12
    },
    footerContainer: {
        justifyContent: "flex-end",
        alignItems: 'center',
        backgroundColor: Colors.white,
        paddingVertical: 15
    },
    repoTextButton: {
        width: '90%',
        justifyContent: 'center',
        borderWidth: 0,

    },
    repoTextButtonText: {
        color: Colors.blue,
        textTransform: "uppercase",
    },
    favoriteButton: {
        width: '90%',
        justifyContent: 'center',
        backgroundColor: Colors.darkYellow,
    },
    favoriteButtonText: {
        color: Colors.black,
        textTransform: "uppercase",
    },
    unFavoriteButton: {
        width: '90%',
        justifyContent: 'center',
        backgroundColor: Colors.white,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: Colors.black,
    },
    unFavoriteButtonText: {
        color: Colors.black,
        textTransform: "uppercase",
    },
})

export default styles;