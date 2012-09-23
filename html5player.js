$(function(){
    var flashvars = $('#video_win object param[name=flashvars]').attr("value");
    var pattern = /(src="|href="|">|\s>)?(https?|ftp):\/\/media[-A-Z0-9+&@#\/%?=~_|!:,.;ï]*[-A-Z0-9+&@#\/%=~_|ï]/gim;
    var matches = flashvars.match(pattern);
    $('#video_win object').remove();
    
    $('#video_win').prepend("<video id=\"html5video\" controls  preload=\"auto\" width=\"679\" height=\"400\" src=\"\"></video>");
    $('#html5video').attr("src", matches[0]);
    
    $('#video_win').prepend(el);
});
