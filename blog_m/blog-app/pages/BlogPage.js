import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, TextInput, Alert } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BlogPage = ({ route, navigation }) => {
    const { blog } = route.params || {};
    const [title, setTitle] = useState(blog ? blog.title : '');
    const [content, setContent] = useState(blog ? blog.content : '');
    const [pageState, setPageState] = useState(blog ? 'edit' : 'new');
    const [blogData, setBlogData] = useState(blog ? blog : {});
    return (
        
    );
}

