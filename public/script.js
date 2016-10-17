
 (function() {
   //"http://vjs.zencdn.net/5.4.6/video.js
    loadjscssfile("video-js.css", "css"); //dynamically load and add this .css file
    loadjscssfile("video.js", "js"); //dynamically load "video.js" as a JavaScript file
    loadjscssfile("videojs.vast.vpaid.css", "css"); 
    loadjscssfile("videojs_5.vast.vpaid.js", "js");

   
    function loadjscssfile(filename, filetype){
        if (filetype=="js"){ //if filename is a external JavaScript file
            var fileref=document.createElement('script')
            fileref.setAttribute("type","text/javascript")
            fileref.setAttribute("src", filename)

        }
        else if (filetype=="css"){ //if filename is an external CSS file
            var fileref=document.createElement("link")
            fileref.setAttribute("rel", "stylesheet")
            fileref.setAttribute("type", "text/css")
            fileref.setAttribute("href", filename)
        }
        if (typeof fileref!="undefined")
            console.log(fileref);
            document.getElementsByTagName("head")[0].appendChild(fileref)
    }
    function loadVideo(){
        //Se puede cargar al tag video el data setup
        //data_setup = '{"fluid":true,"plugins": {"vastClient": {"adTagUrl": "sample-vast.xml","adCancelTimeout": 5000,"adsEnabled": true}}}';
        
        var videoTag = '<video id="example_video_1" class="video-js vjs-default-skin" data-setup={} controls autoplay=true preload="auto">'+
        '<source src="http://vjs.zencdn.net/v/oceans.mp4" type="video/mp4"/>' +
        '<source src="http://vjs.zencdn.net/v/oceans.webm" type="video/webm"/>' +
        '<source src="http://vjs.zencdn.net/v/oceans.ogv" type="video/ogg"/>' +
        '<p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that ' +
        '<a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>' +
        '</p>' +
        '</video>';
        document.getElementById('second').innerHTML = videoTag; 
    }

    function loadscript(){
        // var x = document.createElement("script");
        // //Agregar para dimesionar tamaño
        // //'width': 640 ,'height': 480
        // var t = document.createTextNode("var player = videojs('example_video_1', { 'controls': true, 'autoplay': true, 'poster': 'http://vjs.zencdn.net/v/oceans.png', 'fluid':true });var adsCancelTimeout = 3000;var vastAd = player.vastClient({adTagUrl: 'vast.xml',playAdAlways: true,adCancelTimeout: adsCancelTimeout, adsEnabled: true ,vpaidFlashLoaderPath: 'VPAIDFlash.swf'});");
        // x.appendChild(t);
        // document.getElementById("second").appendChild(x);
        var x = document.createElement("script");
        //Agregar para dimesionar tamaño
        //'width': 640 ,'height': 480
        //var t = document.createTextNode("var player = videojs('example_video_1', { 'controls': true, 'poster': 'http://vjs.zencdn.net/v/oceans.png', 'fluid':true });player.pause().then(function() {player.currentTime = 0;player.play();}, function() {});var adsCancelTimeout = 3000;var vastAd = player.vastClient({adTagUrl: 'vast.xml',playAdAlways: true,adCancelTimeout: adsCancelTimeout, adsEnabled: true ,vpaidFlashLoaderPath: 'VPAIDFlash.swf'});");
        var t = document.createTextNode("var player = videojs('example_video_1', { 'controls': true,'poster': 'http://vjs.zencdn.net/v/oceans.png', 'fluid':true });var adsCancelTimeout = 3000;var vastAd = player.vastClient({adTagUrl: 'vast.xml',playAdAlways: true,adCancelTimeout: adsCancelTimeout, adsEnabled: true ,vpaidFlashLoaderPath: 'VPAIDFlash.swf'});");
        x.appendChild(t);
        //document.getElementById("second").appendChild(x);
        
        var contendor = document.getElementById('second');
        contendor.parentNode.insertBefore(x, contendor.nextSibling);
    }
    

    window.onload = function(){
        //cargar un innerHTML tomando el id 'second' del div que se encuentra en el sitio web 
        loadVideo();
        //este funcion coloca el script a ejecutarse luego del div del video
        loadscript(); 
    }

//http://cdn3.viblast.com/streams/hls/airshow/playlist.m3u8
})();



