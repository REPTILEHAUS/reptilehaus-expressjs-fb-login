# reptilehaus-expressjs-fb-login


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

This whole mapping a local domain is pretty necessary because facebook forces you to enter 
a redirect URL otherwise it wont work.


