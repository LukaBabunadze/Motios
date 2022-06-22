import { FC } from "react";
import { Text, View, StyleSheet, Pressable, ImageBackground } from "react-native"

interface TopicProps {
    title: string,
    imgUrl?: string | undefined,
}

export const Topic: FC<TopicProps> = ({title, imgUrl}) => {
    return(
        <View>
            <Pressable style={s.container}>
                <ImageBackground style={s.image} resizeMode={'cover'} source={{uri: `${imgUrl}`}}/>
                <Text style={s.title}>
                    {title}
                </Text>
            </Pressable>
        </View>
    );
};

const s = StyleSheet.create({
    container: {
        height: 200,
        width: 180,
        marginRight: 10,
        marginVertical: 5,
        backgroundColor: 'red',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: 20,
        overflow: 'hidden',
        elevation: 2,
        marginLeft: 7,
    },
    image: {
        height: '100%',
        width: '100%',
    },
    title: {
        backgroundColor: 'yellow',
        position: 'absolute',
        bottom: 15,
        alignSelf: 'center',
    }
})


