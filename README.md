Etherpad plugin to insert Piwik analytics code inside a pad.

This is a fork from
[ep_googleanalytics](https://github.com/JohnMcLear/ep_google_analytics)
by [John McLear](https://github.com/JohnMcLear).

# Installation

Go to the plugin manager in your etherpad admin interface, search for
"piwik" and install the plugin.

# Configuration

Add these settings inside your *settings.json* :

```
  "ep_piwik": {
    "url": "piwik.website.com",
    "siteId": "1234"
  }
```

* *url* : this is the website where you've installed your Piwik
* *siteId* : this is the number given inside Piwik administration to the
website you want to track
