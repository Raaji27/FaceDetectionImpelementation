const video= document.getElementById('video')
//to hook up web cam with video element
function startvodeo(){
    navigator.getUserMedia(     //to get the webcam   //it takes object as first parameter
        {video: { } },
        stream => video.scrObject = stream,     //It is for whats coming on our webcam
        //error function (displays msn when error occurs)
        err=> console.error(err)
    )
}

startvideo()