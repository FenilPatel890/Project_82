import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, StatusBar, SafeAreaView, FlatList } from 'react-native';

export default class Profile extends Component {
    render() {
        return (
           <View style = {styles.container}>
                <View style = {styles.cardContainer}>
                    <View style = {authorContainer}>
                        <View style = {styles.authorImageContainer}>
                            <Image
                                source = {require("../assets/profile_img.png")}
                                style = {styles.profileImage}
                            ></Image>
                        </View>
                        <View style = {styles.authorNameConainer}>
                            <Text style = {styles.authorNameText}>{this.props.post.author}</Text>
                        </View>
                    </View>
                    <Image source = {require("../assests/post.jpeg")} style = {styles.postImage} />
                    <View style = {styles.captionContainer}>
                        <Text style = {styles.caaptionText}>
                            {this.props.post.caption}
                        </Text>
                    </View>
                    <View style = {styles.actionContainer}>
                        <View style = {styles.likeButton}>
                            <Ionicon name = {"heart"} size = {RFValue(30)} color = {"whiite"}/>
                            <Text style = {styles.likeText}> 12k </Text>
                        </View>
                    </View>        
                </View>
           </View>
        )
    }
}