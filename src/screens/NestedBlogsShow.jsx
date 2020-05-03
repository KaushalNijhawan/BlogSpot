import React from "react" ;
import {Text,View,FlatList, TouchableOpacity} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";

class NestedBlogsShow extends React.Component{
    
    
    render(){
        return(
                <View style={{flexDirection:"row"  , borderRadius:2 , borderWidth:2 , marginHorizontal:5 , marginTop:5}}>
                            <TouchableOpacity style={{flex:1 , flexDirection:"column"}} onPress = {()=>this.props.onGet(this.props.item.name)}>
                            <Text style={{fontSize:30 , alignSelf:"center"}}>{this.props.item.name.toUpperCase()}</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity onPress = {()=>this.props.onMove(this.props.item.name)}>
                            <MaterialIcons name="cancel" size={50}></MaterialIcons>    
                            </TouchableOpacity>
                        </View>
        );
    }
}
export default NestedBlogsShow;