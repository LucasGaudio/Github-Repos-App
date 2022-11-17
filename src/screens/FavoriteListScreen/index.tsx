import { useState, useEffect, useContext, FC} from "react";

import {api} from "../../service/api"
import {View} from "react-native"

import RepoCards from "../../components/RepoCards"

import {ReposContext} from "../../context/RepoProvider"

import styles from './styles';

const FavoriteListScreen: FC = () => {

    const { repoName, favoriteList } = useContext(ReposContext)

    return (
        <View style={styles.container}>  
            <RepoCards repoData={favoriteList} homeTab={false} />
        </View>
    )
}

export default FavoriteListScreen