import {FC} from 'react'
import {View, Text, Pressable, ImageBackground, StyleSheet} from 'react-native'

interface itemProps {
    title: string;
    imgUrl: string;
}

export const TopicItem: FC<itemProps> = ({title, imgUrl}) => {

    return(
        <Pressable style={s.container}>
            <ImageBackground style={s.backgroundImage} resizeMode='cover' source={{uri: 'https://thumbs.dreamstime.com/b/pedestrians-crossing-road-colorful-illustration-people-all-ages-crosswalk-pedestrian-red-pram-wheelchair-95199391.jpg'}}>
                <View style={s.textWrapper}>
                    <Text style={s.textStyle}>{title}</Text>
                </View>
            </ImageBackground>
        </Pressable>
    );
}

const s = StyleSheet.create({
    container: {
        height: 190,
        width: '90%',
        backgroundColor: 'red',
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 20,
        overflow: 'hidden',
    },
    backgroundImage: {
        height: '100%',
        width: '100%',
    },
    textWrapper: {
        marginTop: 10,
        marginLeft: 20,
        backgroundColor: 'green',
        width: 140,
        borderRadius: 20,
    },
    textStyle: {
        textAlign: 'center',
        paddingVertical: 4,
        paddingHorizontal: 10,
        fontWeight: '500',
        fontSize: 15,
    }
})