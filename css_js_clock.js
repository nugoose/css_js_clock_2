var domReady = function(callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

domReady(function() {
    
        var t = new Date(),
        h = t.getHours(),
        m = t.getMinutes(),
        s = t.getSeconds(),
        hDeg = 'rotate(' + ((h % 12)*30) + 'deg)',
        mDeg = 'rotate(' + (m * 6) + 'deg)',
        sDeg = 'rotate(' + (s * 6) + 'deg)';
    
    setInterval(function(){
        s += 1;
        sDeg = 'rotate(' + (s * 6) + 'deg)';
        if((s*6) % 360 === 0){
            m += 1;
            mDeg = 'rotate(' + (m * 6) + 'deg)';
            if((m*6) % 360 === 0){
                h += 1;
                hDeg = 'rotate(' + ((h % 12)*30) + 'deg)';
            }
        }
        
        /////hours////
        document.getElementById('hoursHand').style.transform = hDeg;
        ////minutes////
        document.getElementById('minutesHand').style.transform = mDeg;
        /////seconds/////
        document.getElementById('secondsHand').style.transform = sDeg;
    }, 1000);
    
});