import { useContext, useEffect} from "react"
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from './styles';
import {Icons, Messages} from "../../constants"
import {useNavigation} from "@react-navigation/native"
import FavoriteButton from "../FavoriteButton"

import AsyncStorage from "@react-native-async-storage/async-storage"
import {ReposContext} from "../../context/RepoProvider"

interface RepoSingleCardProps {
    item: any;
    homeTab: boolean
}   

const RepoSingleCard = ({item, homeTab }: RepoSingleCardProps) => {
    const { favoriteList, getAsyncRepoData } = useContext(ReposContext)

    const itemToStorage = {id: item?.id, login: item?.owner?.login, name: item?.name, avatar_url: item?.owner?.avatar_url, description: item?.description, stargazers_count: item?.stargazers_count, language: item?.language, clone_url: item?.clone_url }

    const navigation = useNavigation()

    const handleFavoriteButton = async () => {

        if (favoriteList?.length > 0) {
            await AsyncStorage.setItem("@favoritedList", JSON.stringify([ ... JSON.parse(await AsyncStorage.getItem("@favoritedList")), itemToStorage]))
        } else {
            await AsyncStorage.setItem("@favoritedList", JSON.stringify([itemToStorage]))
        }
        return getAsyncRepoData()
    }

    useEffect(() => {
        getAsyncRepoData()
    },[])

    let filterFavoriteItem = []
    if (favoriteList?.length > 0 ) {
        filterFavoriteItem = favoriteList.filter(el => {
            if ([el][0]?.id === item?.id) {
                return [el][0]?.id === item?.id
            } else {
                return el[0]?.id === item?.id
            }
        })
    } 

    return (

         <TouchableOpacity onPress={() => navigation.navigate(Messages.Navigation.details, {detail: item, homeTab: homeTab})} style={[styles.container, {display: homeTab === true && filterFavoriteItem?.length > 0 ? "none" : "flex"}]}>
              <View style={styles.repoOwnerInfoBlock}>
                <Text style={styles.repoName}>
                    {homeTab ? item?.owner?.login : item?.login}/
                    <Text style={styles.repoNameBold}>
                        {item?.name}
                    </Text>
                </Text>

                <Image style={styles.repoAvatar} source={{uri: homeTab ? item?.owner?.avatar_url : item?.avatar_url}} />

            </View>
            
            <View>
                <Text style={styles.line} numberOfLines={1} ellipsizeMode={"clip"}>
                    _________________________________________________________
                </Text>
                <Text style={styles.repoDescription}>
                    {item?.description} 
                </Text>
            </View>

            <View style={styles.repoFooter}>
                {
                    homeTab ? (
                        <FavoriteButton onPress={handleFavoriteButton}/>
                    ) : <></>
                }
               
                <View style={styles.footerBox}>
                    <Image style={styles.icon} source={Icons.star_yellow} />
                    <Text style={styles.footerText}>{item?.stargazers_count}</Text>
                </View>

                <View style={styles.footerBox}>
                    <Image style={styles.ellipse} source={Icons.ellipse} />
                    <Text style={styles.footerText}>{item?.language}</Text>
                </View>
                
            </View>
        </TouchableOpacity>
       ) 
}

export default RepoSingleCard;