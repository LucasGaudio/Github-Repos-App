import { FlatList, SafeAreaView, ListRenderItemInfo } from "react-native";
import styles from './styles';

import RepoSingleCard from "../RepoSingleCard"

interface GithubRepository {
    id: number;
	full_name: string;
	description: string;
    name: string;
    stargazers_count: number;
    language: string;
    owner: {
        login: string;
        avatar_url: string;
    }
}



const RepoCards = ({repoData, homeTab}: any) => {

    const renderItem = ({item} : ListRenderItemInfo<GithubRepository>) => {
        return <RepoSingleCard item={item} homeTab={homeTab} />
    }


    return (
        <SafeAreaView style={styles.safeAreaView}>
            <FlatList 
                 data={repoData}
                 renderItem={renderItem}
                 keyExtractor={item => item?.id}
             /> 
        </SafeAreaView>
    )
}

export default RepoCards;
