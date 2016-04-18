function startAd(){  
           var stl = new TimelineLite();
    stl.from("#bradSpotlight", .6, {x:-60, y:-95,rotation:98, transformOrigin:"left 50%", ease: Power3.easeOut})
        .to("#bradSpotlight", .8, {x:131, y:90,rotation:101, transformOrigin:"left 50%", ease: Power3.easeOut})
        .to("#bradSpotlight", .8, {x:-10, y:194, rotation:82, transformOrigin:"left 50%", ease: Power3.easeOut}, "+=.2")
        .to("#bradSpotlight", .8, {x:42, y:322, rotation:90, transformOrigin:"left 50%", ease: Power3.easeOut}, "+=.2")
        .to("#bradSpotlight", 1, {y:120, scale:1, opacity:0, ease: Power3.easeOut}, "+=.2");
    
    var bgtl = new TimelineLite();
    bgtl.to("#bradBlackBackground", 1, {opacity:0});
    
    var ttl = new TimelineLite();
    ttl.to("#txt1a", .4, {opacity:0})
        .to("#txt1b", .4, {opacity:0}, "-=.4")
        .to("#txt1c", .4, {opacity:0}, "-=.4")
        .from("#txt2", .8, {opacity:0,ease: Power3.easeOut}, "-=.4")
        .from("#txt3", .8, {opacity:0,ease: Power3.easeOut}, .8);
    
    var ztl = new TimelineLite();
    ztl.from("#bradZoe", 1.2, {opacity:0, x: 0, y:-60, ease: Power3.easeOut});
    
    var ctl = new TimelineLite();
    ctl.from("#bradFooter", .4, {opacity:0,ease: Power3.easeOut})
    .from("#bradFooterCTA", .8, { opacity:0,ease: Power3.easeOut}, .7)
       .from("#bradFooterCTAT", .4, {opacity:0, ease: Power3.easeOut},"-=.8")
        .from("#bradFooterImageContainer", .8, {opacity:0,ease: Power3.easeOut}, "-=.8" );
    
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
    
    TweenLite.set("#bradContainer", {opacity:1});
    TweenLite.set("#bradSpotlight", {left:35, top:-590, scale:.805, rotation:84, transformOrigin:"left 50%"});
    addListeners();
    startAd();
              } 
     }

window.addEventListener('load', checkInit);

var tl = new TimelineLite({onUpdate:updateSlider});
tl.eventCallback("onComplete", animationComplete);


$("#play").click(function() {
  //play() only plays forward from current position. If timeline has finished, play() has nowhere to go.
  //if the timeline is not done then play() or else restart() (restart always restarts from the beginning).

  if(tl.progress() != 1){
    //carl just changed this again
		tl.play();
  } else {
    tl.restart();
  }
});
		
$("#pause").click(function() {
		tl.pause();
});
		
$("#restart").click(function() {
		tl.restart();
});		
	
$("#slider").slider({
  range: false,
  min: 0,
  max: 100,
  step:.1,
  slide: function ( event, ui ) {
    tl.pause();
    //adjust the timeline's progress() based on slider value
    tl.progress( ui.value/100 );
    }
});	
		
function updateSlider() {
  $("#slider").slider("value", tl.progress() *100);
} 	