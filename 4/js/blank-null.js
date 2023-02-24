
//<script src="https://code.jquery.com/jquery-1.10.2.js"></script>


//<script src="js/jquery.hotkeys.js"></script>


var delay; // delay = setTimeout(function(){  }, 3000);
   var step = 0;
   var DOWN = 3000;

function scrollbottom() {
    var elmnt = document.getElementById("body");
    elmnt.scrollTop = DOWN;
    DOWN=DOWN+2000;
}
   
 
   
   
   function stop(a){
       if(a==0){
       document.getElementById("command").style.opacity = 0;
       document.getElementById("input").value = "";
        }
       if(a==1){
          document.getElementById("command").style.opacity = 1;
       }
   }
   
   
   
 function space(){
    lines(" ");
 }
 

function lines(a){
var br = document.createElement("br");
var line = document.getElementById("demo");
var p = document.createElement("div");  
var node = document.createTextNode(a);
p.appendChild(node);
line.appendChild(p);
var element = document.getElementById("code");
element.appendChild(line);
}    




function images(a, b){
var line = document.getElementById("demo");
var div = document.createElement("div");  
var img = document.createElement("img");
var br = document.createElement("br");
img.setAttribute("src", a);
img.setAttribute("style", "height:auto; width:70%;")
var node = document.createTextNode(b);
div.appendChild(node);
div.appendChild(br);
div.appendChild(img);
line.appendChild(div);
var element = document.getElementById("code");
element.appendChild(line);
}  



//MEMORY!!!!!

    $( document ).ready(function() {

  $( "#input" ).focus();
 
});

var aa=0;
var mem = [];


        $(document).ready(function(){
            $('#input').bind('keydown.up', function(){if(aa>0){aa=aa-1; var iinp=mem[aa]; document.getElementById("input").value = iinp;} })
			$('#input').bind('keydown.up', function(){if(document.getElementById("input").value=="undefined"){document.getElementById("input").value = "";}; })
                $('#input').bind('keydown.down', function(){if(aa<=mem.length){aa=aa+1; var iinp=mem[aa]; document.getElementById("input").value = iinp;}if(aa<=0){aa=1;}; })
				$('#input').bind('keydown.down', function(){if(document.getElementById("input").value=="undefined"){document.getElementById("input").value = "";}; })
				 $('#input').bind('keydown.return', function(){if(aa==0){var inp=document.getElementById("input").value;  mem.push(inp);aa=mem.length;}else{aa=mem.length; var inp=document.getElementById("input").value;  mem.push(inp); aa=mem.length;}});
				 


	
	$('#input').bind('keydown.return', function(){
	var x=document.getElementById("input").value;
	
	
if (x=="start" || x=="START")
  {
   stop(0);
      lines("Program is already started");
     stop(1); 
scrollbottom();
  }
  
if (x=="help" || x=="HELP"){
    stop(0);
space();
lines("Public commands:");
lines("/log ==> gives a report on the last commands used by admin");
lines("/open 'file' ==> open a document. The program finds the file name in the memory and tries to open it in the default protocol");
lines("/debug 'file' ==> opens a file without stoping on errors");
space();
lines("////////Notes: Users can copy and paste text as in a 'word' document");
lines("////////////// You can change the text color by inputing a color name or a HEX value");
  stop(1);
    scrollbottom();

  }

if (x=="open 'key.jpg', 'experiment1.jpg', 'experiment2.jpg'"|| x=="open experiment1.jpg" || x=="open 'experiment1.jpg'" || x=="open 'experiment2.jpg'" || x=="open experiment2.jpg" || x=="open 'experiment1.jpg', 'experiment2.jpg'" || x=="open 'key.jpg'" || x=="open key.jpg"){
     stop(0);
    space();
    lines("opening...");
    delay = setTimeout(function(){ lines("[ERROR REPORT]");
    lines(" ");
    lines("selected file(s) opened with errors");
    lines(" ");
    lines("Try: /debug 'file'");
     stop(1);
	     scrollbottom();}, 3000);
}
 
if (x=="exit"){
	window.location = 'blank-null.tumblr.com';
	return false;
}
	
	
	
		});
  
            
           
        });


//COLORES!!!!
		
   var colorines = [
  "black", 	"#000000",	
"navy" , "#000080"	 	,
"darkblue" ,	 "#00008b"	, 
"mediumblue" ,	 "#0000cd"	, 	 
"blue" ,	 "#0000ff"	 	, 
"darkgreen" ,	 "#006400"	 ,	 
"green", 	 "#008000" 	 ,
"teal", 	 "#008080"	 ,	 
"darkcyan" ,	 "#008b8b",	 	 
"deepskyblue", "#00bfff"	, 	 
"darkturquoise", "#00ced1"	 ,	 
"mediumspringgreen", "#00fa9a",	 	 
"lime", "#00ff00",
"springgreen", "#00ff7f"	 	 ,
"aqua", "#00ffff"	 	 ,
"cyan", "#00ffff"	 	 ,
"midnightblue", "#191970",	 	 
"dodgerblue", "#1e90ff"	 ,	 
"lightseagreen", "#20b2aa",	 	 
"forestgreen", "#228b22"	, 	 
"seagreen", "#2e8b57"	 	 ,
"darkslategray", "#2f4f4f"	 ,	 
"limegreen", "#32cd32"	 	 ,
"mediumseagreen", "#3cb371"	 ,	 
"turquoise", "#40e0d0"	 	 ,
"royalblue", "#4169e1"	 	 ,
"steelblue", "#4682b4"	 	 ,
"darkslateblue", "#483d8b"	 ,	 
"mediumturquoise", "#48d1cc"	, 	 
"indigo ", "#4b0082"	 	 ,
"darkolivegreen", "#556b2f"	 ,	 
"cadetblue", "#5f9ea0"	 	 ,
"cornflowerblue", "#6495ed"	 ,	 
"rebeccapurple", "#663399"	 ,	 
"mediumaquamarine", "#66cdaa",	 	 
"dimgray", "#696969" 	 ,
"slateblue", "#6a5acd"	 ,	 
"olivedrab", "#6b8e23"	 ,	 
"slategray", "#708090"	 ,	 
"lightslategray", "#778899"	 	 ,
"mediumslateblue", "#7b68ee"	 ,	 
"lawngreen", "#7cfc00"	 	 ,
"chartreuse", "#7fff00"	 	 ,
"aquamarine", "#7fffd4"	 	 ,
"maroon", "#800000"	 	 ,
"purple", "#800080"	 	 ,
"olive", "#808000"	 	 ,
"gray", "#808080"	 	 ,
"skyblue", "#87ceeb"	 ,	 
"lightskyblue", "#87cefa",	 	 
"blueviolet", "#8a2be2"	 ,	 
"darkred", "#8b0000"	 ,	 
"darkmagenta", "#8b008b"	, 	 
"saddlebrown", "#8b4513"	 ,	 
"darkseagreen", "#8fbc8f"	 ,	 
"lightgreen", "#90ee90"	 	 ,
"mediumpurple", "#9370db"	 ,	 
"darkviolet", "#9400d3"	 	 ,
"palegreen", "#98fb98"	 	 ,
"darkorchid", "#9932cc"	 	 ,
"yellowgreen", "#9acd32"	 ,	 
"sienna", "#a0522d"	 	 ,
"brown", "#a52a2a"	 	 ,
"darkgray", "#a9a9a9"	 ,	 
"lightblue", "#add8e6"	 ,	 
"greenyellow", "#adff2f"	, 	 
"paleturquoise", "#afeeee"	 ,	 
"lightsteelblue", "#b0c4de"	 ,	 
"powderblue", "#b0e0e6"	 	 ,
"firebrick", "#b22222"	 	 ,
"darkgoldenrod", "#b8860b"	 ,	 
"mediumorchid", "#ba55d3"	 ,	 
"rosybrown", "#bc8f8f"	 	 ,
"darkkhaki", "#bdb76b"	 	 ,
"silver", "#c0c0c0"	 	 ,
"mediumvioletred", "#c71585"	, 	 
"indianred ", "#cd5c5c"	 	, 
"peru", "#cd853f"	 	 ,
"chocolate", "#d2691e"	 ,	 
"tan", "#d2b48c"	 	 ,
"lightgray", "#d3d3d3"	 ,	 
"thistle", "#d8bfd8"	 ,	 
"orchid", "#da70d6"	 	 ,
"goldenrod", "#daa520"	 ,	 
"palevioletred", "#db7093",	 	 
"crimson", "#dc143c"	 	, 
"gainsboro", "#dcdcdc"	 	 ,
"plum", "#dda0dd"	 	 ,
"burlywood", "#deb887"	 ,	 
"lightcyan", "#e0ffff"	 ,	 
"lavender", "#e6e6fa"	 ,	 
"darksalmon", "#e9967a"	 ,	 
"violet", "#ee82ee"	 	 ,
"palegoldenrod", "#eee8aa",	 	 
"lightcoral", "#f08080"	 	, 
"khaki", "#f0e68c"	 	 ,
"aliceblue", "#f0f8ff"	 ,	 
"honeydew", "#f0fff0"	 ,	 
"azure", "#f0ffff"	 	 ,
"sandybrown", "#f4a460"	 ,	 
"wheat", "#f5deb3"	 	 ,
"beige", "#f5f5dc"	 	 ,
"whitesmoke", "#f5f5f5"	 ,	 
"mintcream", "#f5fffa"	 ,	 
"ghostwhite", "#f8f8ff"	 ,	 
"salmon", "#fa8072"	 	 ,
"antiquewhite", "#faebd7",	 	 
"linen", "#faf0e6"	 	 ,
"lightgoldenrodyellow", "#fafad2"	 	, 
"oldlace", "#fdf5e6"	 	 ,
"red", "#ff0000"	 	 ,
"fuchsia", "#ff00ff"	 ,	 
"magenta", "#ff00ff"	 ,	 
"deeppink", "#ff1493"	 ,	 
"orangered", "#ff4500"	 ,	 
"tomato", "#ff6347"	 	 ,
"hotpink", "#ff69b4"	 ,	 
"coral", "#ff7f50"	 	 ,
"darkorange", "#ff8c00"	 ,	 
"lightsalmon", "#ffa07a"	, 	 
"orange", "#ffa500"	 	 ,
"lightpink", "#ffb6c1"	 ,	 
"pink", "#ffc0cb"	 	 ,
"gold", "#ffd700"	 	 ,
"peachpuff", "#ffdab9"	 ,	 
"navajowhite", "#ffdead"	, 	 
"moccasin", "#ffe4b5"	 	 ,
"bisque", "#ffe4c4"	 	 ,
"mistyrose", "#ffe4e1"	 ,	 
"blanchedalmond", "#ffebcd"	 	, 
"papayawhip", "#ffefd5"	 	, 
"lavenderblush", "#fff0f5"	 	 ,
"seashell", "#fff5ee"	 	 ,
"cornsilk", "#fff8dc"	 	 ,
"lemonchiffon", "#fffacd"	 ,	 
"floralwhite", "#fffaf0"	 ,	 
"snow", "#fffafa"	 	 ,
"yellow", "#ffff00"	 	 ,
"lightyellow", "#ffffe0"	, 	 
"ivory", "#fffff0"	 	 ,
"white", "#ffffff"];
   
    $( document ).ready(function() {
	
	  var colour = localStorage.getItem("color");
      $("body").css("color", colour);
       $("#input").css("color", colour);
       
	
	});
   
   
$( "#norman" ).submit(function( ) {
	var ranColor = $("#input").val();
	var randomColor = ranColor.toLowerCase();
	for(var i=0; i<=colorines.length;i++){
		if(randomColor == colorines[i]){
     
   
      $("body").css("color", $( "#input" ).val());
       $("#input").css("color", $("#input").val());
       
        localStorage.setItem("color", randomColor);
		 }
		 }
        $( "input" ).val( "" );
        
       
        
        $("html, body").animate({ scrollTop: $(document).height() }, "slow");
        $("#input").focus();
		
    return;
  event.preventDefault();
	
});
		
		





