import { Text, View } from "react-native"
import { Search, TopicItem } from "../components/atoms";

export const Menu = () => {
    return(
        <View>
            <Search />
            <TopicItem title="სხეულის ენა" imgUrl="blaa"/> 
        </View>
    );
};

