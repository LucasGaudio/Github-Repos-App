import { useState, useEffect, useContext, FC} from "react";

import {api} from "../../service/api"
import {View, ActivityIndicator} from "react-native"

import RepoCards from "../../components/RepoCards"

import {ReposContext} from "../../context/RepoProvider"

import styles from './styles';

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
	};
}

const HomeScreen: FC = () => {

    const [repos, setRepos] = useState<GithubRepository>()
    const { repoName } = useContext(ReposContext)

    useEffect(() => {
        const getRepos = async (event: void): Promise<void> => {
            const response = await api.get<GithubRepository>(`/users/${repoName}/repos`);
            const repository = response.data;
            setRepos(repository)
        }
        getRepos();
    },[repoName])

    return (
        <View style={styles.container}>  
            {
                !repos ? 
                    <ActivityIndicator />
                    :
                    <View>    
                        <RepoCards repoData={repos} homeTab={true} />
                    </View>   
            }    
        </View>
    )
}

export default HomeScreen