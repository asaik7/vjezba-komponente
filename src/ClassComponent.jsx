import { Component } from "react";
import FuncComponent from "./FuncComponent";

export default class ClassComponent extends Component
{
    render ()
    {
      
        console.log(this.props);
        return (
         <p>
             ClassComponent

             <FuncComponent />
         </p>
        );
    }
}