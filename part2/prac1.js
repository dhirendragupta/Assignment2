var fs = require('fs');

var sortJsonAndSaveToAFile = function(jsonFileName, txtFileName)
{

    if (jsonFileName == null) 
    {
        console.log('jsonFileName is not provided')
    }

    if (txtFileName == null) 
    {
        console.log('txtFileName is not provided')
    }

    if (jsonFileName != null && txtFileName != null) 
    {
        fs.exists('./'+jsonFileName, function (exists)
        {
            if(exists)
            {
                

        console.log('Started reading a file');
        //read the json file

        fs.readFile(jsonFileName, function(error, data) 
        {

            if (error) 
            {
                console.log('error reading the jsonFile: '+error);
            }
            else
            {
                console.log('Content of file: ' + data);
        	   //parse the received data into json object
                var studentObject = JSON.parse(data);
                console.log('First Record: ', studentObject.students[0]);

          	     //sort the jsonArray
        	   var sortedObj = studentObject.students.sort(function(a,b) { return  parseInt(b.score) - parseInt(a.score)  } );
        	   console.log('sortedObj: '+sortedObj);

        	   //heading line for the text file
                var wholeDataString = 'ID  |  FName  |  LName  |  Score' + '\n';

                for (var i = 0; i < sortedObj.length; i++) 
                {
                    //concat each record to a varible
              	    wholeDataString = wholeDataString + sortedObj[i].id + ' |  ' + sortedObj[i].fName + '  |  ' + sortedObj[i].lName + '  |  ' + sortedObj[i].score + '\n';

                    console.log('Students' + ': ' + sortedObj[i].id + ' |  ' + sortedObj[i].fName + '  |  ' + sortedObj[i].lName + '  |  ' + sortedObj[i].score + '\n');
                }

                console.log('wholeDataString: ' + '\n' + wholeDataString);

                if(error)
                {
                    console.log('error writting to text file: '+error);
                }
                else
                {

                    fs.exists('./'+xmlFileName, function (exists) 
                    {
                        if (exists) 
                        {
                             
            	   //writting all the data at once
                    fs.writeFile(txtFileName, wholeDataString, function(error, data) 
                    {
                        console.log('Wrote to the file');
                    });
                        }
                        else
                        {
                            console.log('Text file '+txtFileName+' does not exists, created a new text file');
                        }
                    }
                }
            }
            console.log('finished executing');
        });
            }
            else
            {
                console.log('source file '+jsonFileName+' does not exists!');
            }

            console.log('finished all the execution');
        });
    }
}
exports.sortJsonAndSaveToAFile = sortJsonAndSaveToAFile;