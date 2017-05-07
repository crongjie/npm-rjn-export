# npm-rjn-export

A javascript front-end export utility.
It can allow browser to download text file on the client side only(without server side).

<b>Install:<b/>
<pre>
npm install --save rjn-export
</pre>

<b>Usage (ES6):<b/>
<pre>
import { exportText, exportFile } from 'rjn-export'

exportText('Hello'); //Export and download a file with text 'Hello', the default file name is 'download.txt'
exportText('Hello','someFileName.txt'); //Export and download a file with text 'Hello' with the file name is 'someFileName.txt'

exportFile( 'Hello,World', 'someFileName.csv', 'text/csv'); //Export a file with specific mime type. In this example, it will export a csv file
</pre>


<b>Demo<b/>
<p>https://rawgit.com/crongjie/npm-rjn-demo/master/index.html#/npm-rjn-export</p>
