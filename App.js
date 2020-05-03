import {createAppContainer} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import IndexBlog from "./src/screens/IndexBlog";
import AddBlog from "./src/screens/AddBlogComponent";
import EditComponent from "./src/screens/EditComponent";
const navigator = createStackNavigator({
  Index: IndexBlog,
  Addition : AddBlog,
  Edit : EditComponent
},{
  initialRouteName:'Index',
  defaultNavigationOptions:{
      title:"Blogs",
      
  }
});
export default createAppContainer(navigator);