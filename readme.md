#quoting tool backend

Installation:

* `npm i -g typescript gulp`
* Oracle Instant Client:
    - Download instantclient-basic-windows.x64-12.2.0.1.0.zip (http://www.oracle.com/technetwork/topics/winx64soft-089540.html)
    - Extract it somewhere
    - Add path to the client to PATH
    - Install VS 2013 redist (https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads)
* `npm install`
* In case of error like "Could not load the Visual C++ component VCBuild" - run `npm install -g --production windows-build-tools` as administrator and restart your computer
* `gulp run`

npm i
gulp build
