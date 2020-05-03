import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Axios from "axios";
import { AntDesign } from "@expo/vector-icons";
import ShowingBlogs from "./ShowingBlogs";
class IndexBlog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: [],
          
        }
    }
   
    render() {
        const { navigation } = this.props;
      console.log(this.state.blogs);
        return (
            <View>
                <View style={{ flexDirection: "row", borderRadius: 5, borderWidth: 1, marginHorizontal: 5, marginTop: 5 }}>
                    <Text style={{ flex: 1, fontWeight: "bold", fontSize: 40, marginLeft: 140 }}>Blogs</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Addition")}>
                        <AntDesign style={{ alignSelf: "flex-end" }} name="plus" size={50}></AntDesign>
                    </TouchableOpacity>

                </View>
                <ShowingBlogs showblogs={this.state.blogs} navigation = {navigation}/>
            </View>
        )
    }
}
export default IndexBlog;