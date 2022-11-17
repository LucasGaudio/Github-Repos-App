import {useState, useContext} from "react"
import { View, Text, Modal, TextInput } from "react-native";
import {Messages} from "../../constants"
import WefitButton from "../WefitButton"
import styles from "./styles";

import {ReposContext} from "../../context/RepoProvider"

import {useNavigation} from "@react-navigation/native"



const BottomModal = ({modalActive, hideModal}) => {
    const [text, onChangeText] = useState("")

    const { changeRepoName } = useContext(ReposContext)

    const navigation = useNavigation()

    const onSaveButtonPress = (text) => {
        changeRepoName(text)
        // navigation.navigate(Messages.Navigation.details)
        hideModal()
        onChangeText("")

    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalActive}
            onRequestClose={() => hideModal()}
        >
            <View style={styles.outerView}>
                <View style={styles.modalView}>
                    <Text>Alterar usuário selecionado</Text>
                    <TextInput style={styles.textInput} value={text} onChangeText={onChangeText} placeholder="Nome do usuário"/>
                    <View style={styles.buttonContainer}>
                        <WefitButton onPress={() => hideModal()} text={Messages.Buttons.cancel} buttonStyle={styles.cancelButton} textStyle={styles.cancelButtonText}/>
                        <WefitButton onPress={() => onSaveButtonPress(text)} text={Messages.Buttons.save} buttonStyle={styles.saveButton} textStyle={styles.saveButtonText} />
                    </View>

                </View>
            </View>

        </Modal>

    ) 
}

export default BottomModal;