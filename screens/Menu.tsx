import { Text, View } from "react-native"
import { Search, TopicItem } from "../components/atoms";
import { Topic } from "../components/atoms/Topic";

export const Menu = () => {
    return(
        <View>
            <Search/> 
            {/* this code should be updated */}
            <TopicItem title="სხეულის ენა" imgUrl="blaa"/>
            <Topic/> 
        </View>
    );
};

