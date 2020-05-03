import React from "react";
import { Text, View, TextInput, Button } from "react-native";
import { Foundation } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Axios from "axios";
class AddBlog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            message:""
        }
    }
    handleDescChange=(text)=>{
            this.setState({description:text});
    }
    handleNameChange=(text)=>{
        this.setState({name:text})
    }
    handleSubmitForm =()=>{
        const blogobj = {
            name:this.state.name,
            description:this.state.description
        }
        Axios.post("http://192.168.0.105:3001/blog/data",blogobj)
        .then(res=>{
            this.setState({message:"Submitted"})
        }).catch(err=>{
            console.log(err);
        })
        this.handleRedirectofPage();
    }
    handleRedirectofPage=()=>{
      return this.props.navigation.navigate("Index");  
    }
    render() {
        return (
            <View>
                <View style={{ flexDirection: "row", borderRadius: 4, borderWidth: 2, marginHorizontal: 5, marginTop: 5 }}>
                    <Text style={{ flex: 1, fontSize: 40, fontWeight: "bold", marginLeft: 110 }}>Add Blog</Text><Foundation name="clipboard-pencil" size={50}></Foundation>
                </View>
                <View>
                    <Text style={{marginHorizontal: 10 , fontSize:30 , marginTop:30 , fontWeight:"bold"}}>Enter Title:</Text>
                    <TextInput style={{
                        marginHorizontal:5,
                        height: 40,
                        width: 400,
                        borderWidth: 1,
                        borderColor: "Black",
                        fontSize:30
                        
                    }} 
                    onChangeText ={(text)=>this.handleNameChange(text)}
                    />
                </View>
                <View>
                    <Text style={{marginHorizontal: 10 ,fontSize:30 , marginTop:30,fontWeight:"bold"}}>Enter Content:</Text>
                    <TextInput style={{
                        marginHorizontal:5,
                        height: 100,
                        width: 400,
                        borderWidth: 1,
                        borderColor: "Black",
                        fontSize:30
                    }}
                    onChangeText ={(text)=>this.handleDescChange(text)}
                    multiline
                    />
                </View>
                <TouchableOpacity style={{ borderWidth: 1, borderColor: "black", marginTop: 40, alignSelf: "center", width: 240 }}
                onPress={()=>this.handleSubmitForm()}
                >
                    <Text style={{ fontSize: 30, alignSelf: "center"}}>Save</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default AddBlog;