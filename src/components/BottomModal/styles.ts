import { StyleSheet } from "react-native";
import { Colors } from "../../constants"

const styles = StyleSheet.create({
    outerView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: Colors.lightBlack
    },
    modalView: {
        backgroundColor: Colors.white,
        padding: 20,
        width: "100%",
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    textInput: {
        height: 40,
        marginVertical: 12,
        borderBottomWidth: 1,
        padding: 10,
        backgroundColor: "rgba(0, 0, 0, 0.06)"
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        marginBottom: 10
    },
    button: {
        borderWidth: 1,
    },
    cancelButton: {
        justifyContent: 'center',
        width: '49%',
        marginRight: 10,
        borderWidth: 0
    },
    cancelButtonText: {
        color: Colors.blue,
        textTransform: "uppercase"
    },
    saveButton: {
        justifyContent: 'center',
        width: '49%',
        backgroundColor: Colors.blue,
        borderColor: Colors.blue,

    },
    saveButtonText: {
        color: Colors.white,
        textTransform: "uppercase"
    }

})

export default styles;