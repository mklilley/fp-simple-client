# fp-simple-client

Source code for a docker image [mklilley/fp-simple-client](https://hub.docker.com/r/mklilley/fp-simple-client).

The docker image creates a simple web client that is served on port 80 and performs a GET request to http://locahost:3000

You can run the image locally with the following command:

`docker run -d -p 80:80 mklilley/fp-simple-client`

Then open a browser at http://localhost. 

If you've got an API server that returns `{"greeting" : "Hello"}` from a GET request to `http://locahost:3000` then the greeting text will be displayed on screen
