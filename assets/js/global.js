// -----------------------------------------------------------------
//! Starfield
// -----------------------------------------------------------------

//Init timelines
var tlStars1 = new TimelineMax({repeat:-1, repeatDelay: 2});
var tlStars2 = new TimelineMax({repeat:-1, delay:1, repeatDelay: 1});
var tlStars3 = new TimelineMax({repeat:-1});
var tlStars4 = new TimelineMax({repeat:-1});
var tlStars5 = new TimelineMax({repeat:-1, delay: 3, repeatDelay: 3});
var tlStars6 = new TimelineMax({repeat:-1});
var tlStars7 = new TimelineMax({repeat:-1, delay: 2, repeatDelay: 2});
var tlStars8 = new TimelineMax({repeat:-1});
var tlStars9 = new TimelineMax({repeat:-1, repeatDelay: 3});
var tlStars10 = new TimelineMax({repeat:-1});
var tlStars11 = new TimelineMax({repeat:-1});
var tlStars12 = new TimelineMax({repeat:-1});
var tlStars13 = new TimelineMax({repeat:-1, delay: 1, repeatDelay: 1});
var tlStars14 = new TimelineMax({repeat:-1});
var tlStars15 = new TimelineMax({repeat:-1, delay:5, repeatDelay:5});
var tlStars16 = new TimelineMax({repeat:-1});
var tlStars17 = new TimelineMax({repeat:-1});
var tlStars18 = new TimelineMax({repeat:-1, delay:4});
var tlStars19 = new TimelineMax({repeat:-1});
var tlStars20 = new TimelineMax({repeat:-1});

//Create the timing functions
tlStars1.to("#star-1", 		7, 		{xPercent:-100, left:"0%", yPercent:-10, top:"10%", force3D:true, ease:Power0.easeIn});
tlStars2.to("#star-2", 		4, 		{xPercent:-100, left:"0%", yPercent:-20, top:"20%", force3D:true, ease:Power0.easeIn});
tlStars3.to("#star-3", 		13, 	{xPercent:-100, left:"0%", yPercent:-30, top:"30%", force3D:true, ease:Power0.easeIn});
tlStars4.to("#star-4", 		6, 		{xPercent:-100, left:"0%", yPercent:-40, top:"40%", force3D:true, ease:Power0.easeIn});
tlStars5.to("#star-5", 		4.5,	{xPercent:-100, left:"0%", yPercent:-50, top:"50%", force3D:true, ease:Power0.easeIn});
tlStars6.to("#star-6", 		8, 		{xPercent:-100, left:"0%", yPercent:-60, top:"60%", force3D:true, ease:Power0.easeIn});
tlStars7.to("#star-7", 		7.5, 	{xPercent:-100, left:"0%", yPercent:-70, top:"70%", force3D:true, ease:Power0.easeIn});
tlStars8.to("#star-8", 		6, 		{xPercent:-100, left:"0%", yPercent:-80, top:"80%", force3D:true, ease:Power0.easeIn});
tlStars9.to("#star-9", 		3, 		{xPercent:-100, left:"0%", yPercent:-90, top:"90%", force3D:true, ease:Power0.easeIn});
tlStars10.to("#star-10", 	6.5, 	{xPercent:-100, left:"0%", yPercent:-100, top:"100%", force3D:true, ease:Power0.easeIn});	
tlStars11.to("#star-11", 	7, 		{xPercent:-100, left:"0%", yPercent:-110, top:"110%", force3D:true, ease:Power0.easeIn});
tlStars12.to("#star-12", 	5, 		{xPercent:-100, left:"0%", yPercent:-120, top:"120%", force3D:true, ease:Power0.easeIn});
tlStars13.to("#star-13", 	7.5, 	{xPercent:-100, left:"0%", yPercent:-130, top:"130%", force3D:true, ease:Power0.easeIn});
tlStars14.to("#star-14", 	11, 	{xPercent:-100, left:"0%", yPercent:-140, top:"140%", force3D:true, ease:Power0.easeIn});
tlStars15.to("#star-15", 	4.5,	{xPercent:-100, left:"0%", yPercent:-150, top:"150%", force3D:true, ease:Power0.easeIn});
tlStars16.to("#star-16", 	18, 	{xPercent:-100, left:"0%", yPercent:-160, top:"160%", force3D:true, ease:Power0.easeIn});
tlStars17.to("#star-17", 	7.5, 	{xPercent:-100, left:"0%", yPercent:-170, top:"170%", force3D:true, ease:Power0.easeIn});

//Some additional ones on the same paths
tlStars18.to("#star-18", 	8, 		{xPercent:-100, left:"0%", yPercent:-60, top:"60%", force3D:true, ease:Power0.easeIn});
tlStars19.to("#star-19", 	18, 	{xPercent:-100, left:"0%", yPercent:-160, top:"160%", force3D:true, ease:Power0.easeIn});
tlStars20.to("#star-20", 	11, 	{xPercent:-100, left:"0%", yPercent:-140, top:"140%", force3D:true, ease:Power0.easeIn});

//Start some of them out kinda already in motion
tlStars1.seek(1.5);
tlStars3.seek(8.5);
tlStars4.seek(3);
tlStars7.seek(5.25);
tlStars10.seek(3.25);
tlStars11.seek(6.5);
tlStars14.seek(5.5);
tlStars16.seek(9);


// -----------------------------------------------------------------
//! Planets
// -----------------------------------------------------------------

var tlPlanet1 = new TimelineMax({repeat:-1, repeatDelay: 20}); 
var tlPlanet2 = new TimelineMax({repeat:-1, delay:11, repeatDelay: 10});
var tlPlanet3 = new TimelineMax({repeat:-1, delay:2, repeatDelay: 10});
var tlPlanet4 = new TimelineMax({repeat:-1, delay:12, repeatDelay: 6});
var tlPlanet5 = new TimelineMax({repeat:-1, delay:2, repeatDelay: 10});
//var moon = new TimelineMax({repeat:-1, repeatDelay: 1});

tlPlanet1.to("#planet-1",	10,	{xPercent:-110, left:"-10%", yPercent:-30, top:"30%", force3D:true, ease:Power0.easeIn});
tlPlanet2.to("#planet-2",	19,	{xPercent:-110, left:"-10%", yPercent:-90, top:"90%", force3D:true, ease:Power0.easeIn});
tlPlanet3.to("#planet-3",	24,	{xPercent:-110, left:"-10%", yPercent:-40, top:"40%", force3D:true, ease:Power0.easeIn});
tlPlanet4.to("#planet-4",	32,	{xPercent:-110, left:"-10%", yPercent:-120, top:"120%", force3D:true, ease:Power0.easeIn});
tlPlanet5.to("#planet-5",	20,	{xPercent:-110, left:"-10%", yPercent:-170, top:"170%", force3D:true, ease:Power0.easeIn});
/*

//Moon
moon
	.to("#moon", 3, {top:"50%",ease:Back.easeIn.config(3), force3D:true}, "moon_in")
	.to("#moon", 3, {scale:1, ease:Power0.easeIn, force3D:true}, "moon_in")
	.to("#moon", 3, {top:"112.5%", ease:Back.easeOut.config(3), force3D:true}, "moon_out")
	.to("#moon", 3, {scale:0, ease:Power0.easeIn, force3D:true}, "moon_out")
;
*/


// -----------------------------------------------------------------
//! Rocket
// -----------------------------------------------------------------

var tlRocket = new TimelineMax({repeat:-1}); 
var tlFlames = new TimelineMax({repeat:-1}); 
var tlSparksOdd = new TimelineMax({repeat:-1}); 
var tlSparksEven = new TimelineMax({repeat:-1, delay: 1}); 


tlRocket
	.to("#rocket",	1.5,	{x:20,y: 20, ease:Power0.easeIn})
	.to("#rocket",	1.5,	{x:0,y: 0, ease:Power0.easeOut})	
;

tlFlames
	.to("#flames",	1.5,	{y: -10, ease:Power0.easeIn})
	.to("#flames",	1.5,	{y: 0, ease:Power0.easeIn})	
;

tlSparksOdd
	.to("#spark1",	1,	{y: 3, ease:Power0.easeIn}, "sparkOne")
	.to("#spark3",	1,	{y: 3, ease:Power0.easeIn}, "sparkOne")
	.to("#spark5",	1,	{y: 3, ease:Power0.easeIn}, "sparkOne")
	.to("#spark7",	1,	{y: 3, ease:Power0.easeIn}, "sparkOne")
	.to("#spark1",	1,	{y: 0, ease:Power0.easeIn}, "sparkTwo")
	.to("#spark3",	1,	{y: 0, ease:Power0.easeIn}, "sparkTwo")
	.to("#spark5",	1,	{y: 0, ease:Power0.easeIn}, "sparkTwo")
	.to("#spark7",	1,	{y: 0, ease:Power0.easeIn}, "sparkTwo")			
;

tlSparksEven
	.to("#spark2",	1,	{y: 3, ease:Power0.easeIn}, "sparkOne")
	.to("#spark4",	1,	{y: 3, ease:Power0.easeIn}, "sparkOne")
	.to("#spark6",	1,	{y: 3, ease:Power0.easeIn}, "sparkOne")
	.to("#spark8",	1,	{y: 3, ease:Power0.easeIn}, "sparkOne")	
	.to("#spark2",	1,	{y: 0, ease:Power0.easeIn}, "sparkTwo")
	.to("#spark4",	1,	{y: 0, ease:Power0.easeIn}, "sparkTwo")
	.to("#spark6",	1,	{y: 0, ease:Power0.easeIn}, "sparkTwo")
	.to("#spark8",	1,	{y: 0, ease:Power0.easeIn}, "sparkTwo")	
;
