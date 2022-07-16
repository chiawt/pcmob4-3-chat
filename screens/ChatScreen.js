import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";

import firebase from "../database/firebaseDB";
import { useNavigation } from "@react-navigation/native";
const auth = firebase.auth();

export default function ChatScreen() {
const navigation = useNavigation();

useEffect(() => {
    auth.onAuthStateChanged((user) => {
        if (user) navigation.navigate("Chat", { id: user.id, email: user.email });
        else navigation.navigate("Login");
    });

    navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity onPress={logout}>
                <MaterialCommunityIcons name="logout" size={30} color="grey" />
            </TouchableOpacity>
        ),
    })
}, []) ;

const logout = () => auth.signOut();

return (
    <View style={styles.container}>
    </View>
)}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 24,
        backgroundColor: "lightcyan",
      },
});