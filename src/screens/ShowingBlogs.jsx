import React from "react";
import {Text,View,FlatList, Alert} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import Axios from "axios";
import NestedBlogsShow from "./NestedBlogsShow";

class ShowingBlogs extends React.Component{
    constructor(props){
        super(props);
        this.state={
            blogs:this.props.showblogs,
            message:"",
            isLoading : false,
            message:""
        }
    }
    handleEditNavigate=(name)=>{
        

        this.handleRedirectionOfPage(name);
    }
    handleRedirectionOfPage=(name)=>{
        if(this.state.message==="deleted!"){
            return this.props.navigation.navigate("Edit" , {blogname: name});
        }else{
            this.setState({message:""});
        }
        console.log(name);
        
    }
    handleGetBlogData = async ()=>{
        this.setState({isLoading : true});
        await Axios.get("http://192.168.0.105:3001/blog/Alldata")
        .then(res => {
            this.setState({ blogs: res.data });
        }).catch(err => {
            console.log(err); 
        }).finally(()=>this.setState({isLoading:false}));
    }
    
    componentDidMount(){
      //this.handleGetBlogData();
      setTimeout(()=>{
        this.handleGetBlogData()
      }
          ,500);

    }  
   
    handleDeleteBlog = (name)=>{
        
        console.log(name);
        console.log("here");
        this.setState({isLoading : true});
           Axios.get("http://192.168.0.105:3001/blog/datadelete/" + name)
            .then(res=>{
                this.setState({
                 message : "deleted!"
                })
            }).catch(err=>{
                console.log(err);
            }).finally(()=>this.setState({isLoading:false}));
            this.handleRedirectionOfPage();
          
    }
    


    render(){
       const {navigation} = this.props;
        return(
            <View style={{marginTop: 40}}>
                <FlatList
                showsVerticalScrollIndicator ={false} 
                refreshing = {this.state.isLoading}
                onRefresh ={this.handleGetBlogData}
                data={this.state.blogs}
                keyExtractor = {(item)=> item._id}
                renderItem= {({item})=>{
                    
                    const name = item.name;
                    return(
                     <NestedBlogsShow item = {item} onMove = {(name) => this.handleDeleteBlog(name)} onGet={(name)=>this.handleEditNavigate(name)}/>
                    )
                }}
                />
            </View>
        );
    }
}
export default ShowingBlogs;