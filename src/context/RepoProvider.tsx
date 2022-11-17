import { createContext, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, SetStateAction, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"

interface ReposProviderValues {
    changeRepoName: React.SetStateAction<string>;
    repoName: string;
    favoriteList: never[];
    setFavoriteList: React.Dispatch<React.SetStateAction<never[]>>;
    getAsyncRepoData: () => Promise<void>;
}

export const ReposContext = createContext<ReposProviderValues>({})

function ReposProvider(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }){

    const [repoName, setRepoName] = useState('facebook')

    const [favoriteList, setFavoriteList] = useState([])

    const getAsyncRepoData = async () => {
        const response = JSON.parse(await AsyncStorage.getItem("@favoritedList"))
        
        // await AsyncStorage.clear()  
                
        return setFavoriteList(response)
    }

    const changeRepoName = (newRepoName: SetStateAction<string>) => {
        setRepoName(newRepoName)
    }

    return(
        <ReposContext.Provider value={{changeRepoName, repoName, favoriteList, setFavoriteList, getAsyncRepoData:() => getAsyncRepoData()}}>
            {props.children}
        </ReposContext.Provider>

    )
}

export default ReposProvider