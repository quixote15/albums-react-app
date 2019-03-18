import React from 'react'
import {View, Text, Image} from 'react-native'
import Card from './Card';
import CardSection from './CardSection';


const AlbumDetail = ({album}) =>{

    const {thumbnail_image, title, artist, image} = album;
    return (
            <Card>
                <CardSection>
                    <View style={styles.thumbnailContainerStyle}>
                        <Image style={styles.thumbnailStyle} source={{uri: thumbnail_image}}/>
                    </View>
                    <View style={styles.headerContentStyles}>
                        <Text style={styles.headerTextStyle}>{title}</Text>
                        <Text>{artist}</Text>
                    </View>
                </CardSection>

                <CardSection>
                    <Image 
                        style={styles.imageStyle}
                        source={{uri: image}}/>
                </CardSection>
            </Card>
        )
}

const styles = {
    headerContentStyles: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },

    headerTextStyle:{
        fontSize: 18
    },

    thumbnailStyle : {
        width: 50,
        height: 50
    },

    thumbnailContainerStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },

    imageStyle: {
        height: 300, 
        flex: 1,
        width: null
    }
}

export default AlbumDetail