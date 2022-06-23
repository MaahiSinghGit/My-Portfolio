import { TOTAL_SCREENS } from "./commonUtils"
import {Subject} from "rxjs"

export default class ScrollServices{
    static ScrollHandler=new ScrollServices();
    static currentScreenBroadCaster=new Subject()
    static currentScreenFadeIn=new Subject()

    constructor(){
        window.addEventListener("scroll", this.checkCurrentSreenUnderViewport);
    }
    scroolToHireMe=()=>{
        let contactmeScreen=document.getElementById("ContactMe");
        if(!contactmeScreen) return;
        contactmeScreen.scrollIntoView({behavior: "smooth"});
    };
    scroolToHome=()=>{
        let homeScreen=document.getElementById("Home");
        if(! homeScreen) return;
        homeScreen.scrollIntoView({behavior: "smooth"});
    };
    isElemntInView=(elem,type) =>{
        let rec=elem.getBoundingClientRect();
        let elementTop=rec.top;
        let elementBottom=rec.bottom;
        
        let partiallyVisible=elementTop<window.innerHeight && elementBottom>=0;
        let completelyVisible=elementTop>=0 && elementBottom<=window.innerHeight;

        switch(type){
            case "partial":return partiallyVisible;
            case "complete":return completelyVisible;
            default: return false
        }
    }
    checkCurrentSreenUnderViewport=(event)=>{
        if(!event || Object.keys(event).length<1)
        return;
        for(let screen of TOTAL_SCREENS){
            let screenFromDOM=document.getElementById(screen.screen_name);
            if(!screenFromDOM)
            continue;
            let fullyvisible=this.isElemntInView(screenFromDOM,"complete")
            let partiallyVisible=this.isElemntInView(screenFromDOM,"partial")


            if(fullyvisible || partiallyVisible){
                if(partiallyVisible && !screen.alreadyRendered){
                    ScrollServices.currentScreenFadeIn.next({
                        fadeInScreen:screen.screen_name,
                    });
                    screen['alreadyRendered']=true;
                    break;
                }
                if(fullyvisible){
                    ScrollServices.currentScreenBroadCaster.next({
                        screenInView: screen.screen_name,
                    });
                    break;
                }
            }

        }
    }
}