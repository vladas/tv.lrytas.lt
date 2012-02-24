$(function(){
    var flashvars = $('#video_win object param[name=flashvars]').attr("value");
//    console.log(flashvars);
    var pattern = /(src="|href="|">|\s>)?(https?|ftp):\/\/media[-A-Z0-9+&@#\/%?=~_|!:,.;ï]*[-A-Z0-9+&@#\/%=~_|ï]/gim;
    var matches = flashvars.match(pattern);
//    console.log(matches);
    $('#video_win object').remove();
    
    iframeUrl = chrome.extension.getURL('player.html') + "?src=" + matches[0]
    
    var el = document.createElement("iframe");
    el.setAttribute('id', 'html5videoifrm');
    el.setAttribute('src', iframeUrl);
    el.setAttribute('height', 400);
    el.setAttribute('width', 679);
    el.setAttribute('scrolling', 'no');
    el.setAttribute('frameborder', 0);
    
    $('#video_win').prepend(el);
});
