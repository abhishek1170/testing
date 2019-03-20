import React from "react";
import {Switch,Route} from "react-router-dom";
import Login from "./login";
import Index from "./index";
import Register from "./register";
import Timeline from "./timeline";
import Singlepost from "./single_post";


export default function App(){
    return (
        <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/index" component={Index}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/index" component={Index}/>
                <Route exact path="/timeline" component={Timeline}/>
                <Route exact path="/singlepost:data" component={Singlepost}/>
        </Switch>
    )
}