function startAd(){  
           var stl = new TimelineLite();
    stl.from("#bradSpotlight", .6, {x:-140, y:-40,rotation:25, transformOrigin:"left 50%", ease: Power3.easeOut})
        .to("#bradSpotlight", .8, {x:120, y:55,rotation:-4, transformOrigin:"left 50%", ease: Power3.easeOut})
        .to("#bradSpotlight", .8, {x:225, y:27, rotation:4, transformOrigin:"left 50%", ease: Power3.easeOut}, "+=.2")
        .to("#bradSpotlight", .8, {x:360, y:36, rotation:0, transformOrigin:"left 50%", ease: Power3.easeOut}, "+=.2")
        .to("#bradSpotlight", 1, {x:120, scale:1, opacity:0, ease: Power3.easeOut}, "+=.2");
    
    var bgtl = new TimelineLite();
    bgtl.to("#bradBlackBackground", 1, {opacity:0});
    
    var ttl = new TimelineLite();
    ttl.to("#txt1a", .4, {opacity:0})
        .to("#txt1b", .4, {opacity:0}, "-=.4")
        .to("#txt1c", .4, {opacity:0}, "-=.4")
        .from("#txt2", .8, {opacity:0,ease: Power3.easeOut}, "-=.4")
        .from("#txt3", .8, {opacity:0,ease: Power3.easeOut}, "-=.4");
    
    var ztl = new TimelineLite();
    ztl.from("#bradZoe", 1.2, {opacity:0, x: -20, y:0, ease: Power3.easeOut});
    
    var ctl = new TimelineLite();
    ctl.from("#bradFooter", .4, {x:20, opacity:0,ease: Power3.easeOut})
    .from("#bradFooterImageContainer", .8, {opacity:0,ease: Power3.easeOut}, "-=.4" )
    .from("#bradFooterCTA", .8, { opacity:0,ease: Power3.easeOut}, "-=.8")
      // .from("#bradFooterCTAT", .4, {opacity:0, ease: Power3.easeOut},"-=.8");
    
    tl.add(stl, 0);
    tl.add(bgtl, 3.6);
    tl.add(ttl, 3.6);
    tl.add(ztl, 3.6);
    tl.add(ctl, 4.2);
    
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
    
    TweenLite.set("#bradContainer", {opacity:1});
    TweenLite.set("#bradSpotlight", {left:-440, top:-60, scale:.7, rotation:5, transformOrigin:"left 50%"});
    addListeners();
    startAd();
              } 
     }

window.addEventListener('load', checkInit);

var tl = new TimelineLite();
tl.eventCallback("onComplete", animationComplete);

