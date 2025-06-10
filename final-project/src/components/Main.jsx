import React from "react"; 
import Map from "./MapComponent.jsx";
import Message from "./MessageComponent.jsx";
import Sched from "./SchedComponent.jsx";
import Settings from "./SettingsComponent.jsx";
import Notes from "./NoteComponent.jsx";
import {Switch, Route, Redirect, withRouter} from "react-router-dom";
import Login from "./LoginComponent.jsx";
import Sign from "./SignComponent.jsx";
import Forgot from "./ForgotComponent.jsx";
import Change from "./ChangePass.jsx";



function Main(props){
    return(
        <React.Fragment>
            <Switch>
            <Route path="/map"><Map name={props.name}/></Route>
            <Route path="/message" component={Message}/>
            <Route path="/sched" component={Sched}/> 
            <Route path="/notes" component={Notes}/>
            <Route path="/Settings" component={Settings}/>
            <Route path="/Login" component={Login}/>
            <Route path="/sign" component={Sign}/>
            <Route path="/forgot" component={Forgot}/>
            <Route path="/change" component={Change}/>
            <Redirect to="/Login"/>
            </Switch>
        </React.Fragment>
    )

};

export default withRouter(Main);