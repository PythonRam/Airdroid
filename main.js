function updateWebviews() {
  var webview = document.querySelector("webview");
  webview.style.height = document.documentElement.clientHeight + "px";
  webview.style.width = document.documentElement.clientWidth + "px";

  
};

 function loaded(){
 	updateWebviews();
 	console.log(getElementByXPath('//*[@id="block-desktop"]/div[2]/div[1]/div[3]/div[11]'))
 }  for (el of document.querySelectorAll('.notifications_ad')) el.style.visibility = 'hidden';
var getElementByXPath = function(a,b){b=document;return b.evaluate(a,b,null,9,null).singleNodeValue};

onload = loaded;
window.onresize = loaded;