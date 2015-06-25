var eejs = require('ep_etherpad-lite/node/eejs/');
var settings = require('ep_etherpad-lite/node/utils/Settings');

if(settings.ep_piwik){
  var piwikSettings = true;
  if(settings.ep_piwik.url){
    var piwikUrl = settings.ep_piwik.url;
  }else{
    var piwikUrl = false;
  }

  if(settings.ep_piwik.siteId){
    var piwikSiteId = settings.ep_piwik.siteId;
  }else{
    var piwikSiteId = false;
  }
} else {
  var piwikSettings = false;
}

exports.eejsBlock_scripts = function (hook_name, args, cb) {
  if(!piwikSettings){
    var piwikString = "<script>alert('ep_piwik not set in settings.json, insert it in /admin/settings')</script>";
  }
  else if(!piwikUrl){
    var piwikString = "<script>alert('ep_piwik.url not set in settings.json, insert it in /admin/settings')</script>";
  }
  else if(!piwikSiteId) {
    var piwikString = "<script>alert('ep_piwik.siteId not set in settings.json, insert it in /admin/settings')</script>";
  }
  else {
    var piwikString = "<script type='text/javascript'>var _paq = _paq || [];_paq.push(['trackPageView']);_paq.push(['enableLinkTracking']);(function() {var u=\"//" + piwikUrl + "/\";_paq.push(['setTrackerUrl', u+'piwik.php']);_paq.push(['setSiteId', " + piwikSiteId + "]);var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);})();</script>";
    piwikString += "<noscript><p><img src='//" + piwikUrl + "/piwik.php?idsite=" + piwikSiteId +"'style='border:0;' alt='' /></p></noscript>";
  }

  args.content = args.content + piwikString; // add Piwik to the contents
  return cb();
}


