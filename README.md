# REPTILEHAUS ExpressJS Facebook Login


## Setup

You will need a familiarity with setting up a Facebook app, once thats done you need to update these variables below.

    const facebookAppID       = "23242423424234234";
    const facebookAppSecret   = "324uri3453jekjqrjjwekj3222324234234";
    const facebookCallBackUrl = "http://example.io/login/facebook/return";

## Setting up the hosts

If you are building and running this locally you will need to map a domain using your hosts file on mac and linux it
should be at /etc/hosts. An entry like the following should be fine:

    127.0.0.1         example.io

this app runs on port 80 so to start the express server you will probably need to use sudo as port 80 
operates with high privileges:

    $ sudo node app.js 

## Why do I need to setup a host

This whole mapping a local domain is pretty necessary because Facebook forces you to enter 
a redirect URL otherwise it wont work and assuming you want to test this locally this is the only way to do that


Visit my Website [reptilehaus.io](https://www.reptilehaus.io/)
Follow on Twitter [@REPTILE_HAUS](https://twitter.com/reptile_haus)