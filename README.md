# npm-rjn-export

A javascript front-end export utility.
It can allow browser to download text file on the client side only(without server side).
And it support export JSON file and CSV file.

Install:
npm install --save rjn-export


Usage (ES6):
<pre>
import { exportText, exportFile, exportJson, exportCSV } from 'rjn-export'

 //Export a file with specific mime type. In this example, it will export a csv file
exportFile( 'Hello,World', 'someFileName.csv', 'text/csv');

//Export and download a file with text 'Hello', the default file name is 'download.txt'
exportText('Hello'); 

//Export and download a file with text 'Hello' with the file name is 'someFileName.txt'
exportText('Hello','someFileName.txt'); 

//Export and download a json file by object, the default file name is 'download.json'
exportJson({ hello: 'world' , hi: 'world'}); 

//Export and download a json file by object, the file name is 'someFileName.json'
exportJson(['Hello','World'],'someFileName.json'); 

//Export and download a CSV file by Array, the default file name is 'download.csv'
exportCSV([{A:1, B:1},{A:2, B:2}]); 

//Export and download a CSV file by Array, the file name is 'someFileName.csv'
exportCSV([{A:1, B:1},{A:2, B:2}],'someFileName.csv'); 

//Export and download a CSV file by Array, the file name is 'someFileName.csv', with specifiy column headers
exportCSV(
    [{A:1, B:1},{A:2, B:2}],
    'someFileName.csv',
    {
        columns: {
            A: 'Column 1',
            B: 'Column 2'
        }
    }
); 
</pre>

