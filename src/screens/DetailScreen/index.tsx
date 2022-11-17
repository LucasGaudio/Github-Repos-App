import { useContext, FC} from "react"

import {Text, View, Image, Linking} from "react-native"

import styles from './styles';

import {ReposContext} from "../../context/RepoProvider"

import {Icons, Messages} from "../../constants/"

import WefitButton from "../../components/WefitButton"

import {useNavigation} from "@react-navigation/native"

import AsyncStorage from "@react-native-async-storage/async-storage"


const DetailScreen: FC = (props) => {
    const detail = props?.route.params.detail
    const isFromhomeTab = props?.route.params.homeTab

    const { favoriteList, getAsyncRepoData } = useContext(ReposContext)

    const itemToStorage = {id: detail?.id, login: detail?.owner?.login, name: detail?.name, avatar_url: detail?.avatar_url, description: detail?.description, stargazers_count: detail?.stargazers_count, language: detail?.language, clone_url: detail?.clone_url }

    const navigation = useNavigation()

    const handleFavoriteButton = async () => {
        if (isFromhomeTab) {
            if (favoriteList?.length > 0) {
                await AsyncStorage.setItem("@favoritedList", JSON.stringify([ ... JSON.parse(await AsyncStorage.getItem("@favoritedList")), itemToStorage]))
            } else {
                await AsyncStorage.setItem("@favoritedList", JSON.stringify([itemToStorage]))
            }
            navigation.navigate(Messages.Navigation.wefit)


        } else {
            const oldFavoritedList = favoriteList

            const newFavoritedList = oldFavoritedList.filter(object => {
                return object?.id !== itemToStorage?.id;
            });

            //TODO codigo para substituir o valor do AsyncStorage com o novo valor
            // await AsyncStorage.mergeItem("@favoritedList", JSON.stringify([newFavoritedList]))
            await AsyncStorage.removeItem("@favoritedList");
            await AsyncStorage.setItem("@favoritedList", JSON.stringify(newFavoritedList))

            navigation.navigate(Messages.Navigation.favorite)


        }
        

        return getAsyncRepoData()
    }

    return (
        <View style={styles.container}>
            <View style={styles.bodyContainer}>
                <Text style={styles.repoName}>
                    {isFromhomeTab ? detail?.owner?.login :detail?.login }/
                    <Text style={styles.repoNameBold}>
                        {detail?.name}
                    </Text>
                </Text>
                <Text style={styles.repoDescription}>{detail?.description}</Text>
                <View style={styles.languageBox}>
                        <Image style={styles.ellipse} source={Icons.ellipse} />
                        <Text style={styles.languageText}>{detail?.language}</Text>
                </View>


            </View>

            <View style={styles.footerContainer}>
                <WefitButton onPress={() => Linking.openURL(detail?.clone_url)} text={Messages.Buttons.repo} icon={Icons.clip} buttonStyle={styles.repoTextButton} textStyle={styles.repoTextButtonText}/>
                {
                    isFromhomeTab ?
                    <WefitButton onPress={handleFavoriteButton } text={ Messages.Buttons.favorite} icon={Icons.star_black} buttonStyle={styles.favoriteButton} textStyle={styles.favoriteButtonText} />
                    :
                    <WefitButton onPress={handleFavoriteButton } text={ Messages.Buttons.unfavorite} icon={Icons.star_vector} buttonStyle={styles.unFavoriteButton} textStyle={styles.unFavoriteButtonText} />
                }
            </View>
        </View>

    )
}

export default DetailScreen