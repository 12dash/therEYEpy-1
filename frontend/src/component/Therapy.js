import  React,{ Component } from "react";

class Therapy extends Component{

    constructor(props){
        super(props);

        this.state = {

        }

    }

    componentDidMount(){
        (function(d, m){
            var kommunicateSettings = {"appId":"e052bcb34257f549bcca24df74fbbc4e","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
          })(document, window.kommunicate || {});
    }

    render(){
        return(
            <>
            Therapy
            </>
        )

    }
}
export default Therapy;
