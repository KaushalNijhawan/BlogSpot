import React from "react";
import { View, Text, TextInput , TouchableOpacity} from "react-native";
import { Foundation } from "@expo/vector-icons";
import Axios from "axios";
class EditComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blog: [],
            name: this.props.navigation.state.params?.blogname,
            message: "",
            blogdesc: ""

        }

    }
    componentDidMount = () => {

        Axios.get("http://192.168.0.105:3001/blog/data/" + this.state.name)
            .then(res => {
                this.setState({ blog: this.state.blog.concat(res.data) });
            }).catch(err => {
                console.log(err);
            })
    }
    handleEditofBlog = () => {
        const blog= {
            name:this.state.name,
            description:this.state.blogdesc
        }
        Axios.post("http://192.168.0.105:3001/blog/dataUpdate/" + this.state.name,blog)
            .then(res => {
                this.setState({ message: "Successfully!" })
            }).catch(err => {
                console.log(err);
            })
            this.handleRedirectOfPage();
    }
    handleRedirectOfPage = ()=>{
        return this.props.navigation.navigate("Index");
    }
    handleChangeInBlogDesc = (term) => {
        this.setState({ blogdesc: term });
    }
    render() {
        console.log(this.state.blog[0]?.description);
        return (
            <View>
               <View style={{ flexDirection: "row", borderRadius: 4, borderWidth: 2, marginHorizontal: 5, marginTop: 5 }}>
                    <Text style={{ flex: 1, fontSize: 40, fontWeight: "bold", marginLeft: 110 }}>Add Blog</Text><Foundation name="clipboard-pencil" size={50}></Foundation>
                </View>
                <View >
                    <Text style={{marginTop:20 , fontSize: 30, fontWeight:"bold",textDecorationLine : "underline" , marginHorizontal : 5}}>{this.state.name?.toUpperCase()}</Text>
                    <TextInput
                        onChangeText={(term) => this.handleChangeInBlogDesc(term)}
                        placeholder={this.state.blog[0]?.description}
                        style={{
                            height: 100,
                            width: 400,
                            borderWidth: 2,
                            borderColor: "black",
                            fontSize: 30,
                            marginTop:20,
                            marginLeft:5
                            
                        }}
                        editable
                        multiline
                        placeholderTextColor = {"black"}
                    />
                </View>
                <TouchableOpacity style={{ borderWidth: 1, borderColor: "black", marginTop: 40, alignSelf: "center", width: 240 }}
               onPress ={()=>this.handleEditofBlog()}
                >
                    <Text style={{ fontSize: 30, alignSelf: "center"}}>Save</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default EditComponent;