function startAd(){  
    var stl = new TimelineLite();
    stl.from("#bradSpotlight", .6, {x:-60, y:-110,rotation:65, transformOrigin:"left 50%", ease: Power3.easeOut})
        .to("#bradSpotlight", .8, {x:215, y:-106, rotation:70, transformOrigin:"left 50%", ease: Power3.easeOut})
        .to("#bradSpotlight", .8, {x:17, y:185, rotation:15, transformOrigin:"left 50%", ease: Power3.easeOut}, "+=.2")
        .from("#txt1c", .002, {opacity:0})
        .to("#bradSpotlight", .8, {x:140, y:90, rotation:40, transformOrigin:"left 50%", ease: Power3.easeOut}, "+=.2")
        .to("#bradSpotlight", 1, {x:-12, y:-40, scale:1, opacity:0, ease: Power3.easeOut}, "+=.2");
    
    var bgtl = new TimelineLite();
    bgtl.to("#bradBlackBackground", 1, {opacity:0});
    
    var ttl = new TimelineLite();
    ttl.to("#txt1a", .4, {opacity:0})
        .to("#txt1b", .4, {opacity:0}, "-=.4")
        .to("#txt1c", .4, {opacity:0}, "-=.4")
        .from("#txt2", .8, {opacity:0,ease: Power3.easeOut}, "-=.4")
        .from("#txt3", .8, {opacity:0,ease: Power3.easeOut}, .4);
    
    var ztl = new TimelineLite();
    ztl.from("#bradZoe", 1.2, {opacity:0, x: -20, y:-20, ease: Power3.easeOut});
    
    var ctl = new TimelineLite();
    ctl.from("#bradFooter", .4, {opacity:0,ease: Power3.easeOut})
        .from("#bradFooterImageContainer", .8, {opacity:0,ease: Power3.easeOut}, .6)
        .from("#bradFooterCTA", .8, { opacity:0,ease: Power3.easeOut}, "-=.8")
       //.from("#bradFooterCTAT", .4, {opacity:0, ease: Power3.easeOut}, "-=1");
    
    tl.add(stl, 0);
    tl.add(bgtl, 3.6);
    tl.add(ttl, 3.6);
    tl.add(ztl, 3.6);
    tl.add(ctl, 3.6);
    
    tl.totalDuration(11);
       
};

function addListeners(){
    document.getElementById("bradContent").addEventListener("click", clickthrough);
};

function clickthrough() {
    EB.clickthrough();
}


function animationComplete(evt){
};

function checkInit() {
              if (!EB.isInitialized()) {
                 EB.addEventListener(EBG.EventName.EB_INITIALIZED, onInit); 
                 // This code checks whether the EB object is initialized, if the object is initialized, it
                     //launches the function "onInit", otherwise "EB_INITIALIZED" event. 
              }
              else {
                      onInit();
               }         
               function onInit() {
    
   TweenLite.set("#bradSpotlight", {left:-360, top:-360, scale:.8, rotation:35, transformOrigin:"left 50%"}); 
    TweenLite.set("#bradContainer", {opacity:1});
    addListeners();
    startAd();
              } 
     }

window.addEventListener('load', checkInit);

var tl = new TimelineLite();
tl.eventCallback("onComplete", animationComplete);
