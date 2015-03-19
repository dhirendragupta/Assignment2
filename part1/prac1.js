var fs = require('fs');

var FromJsonFileToTextFile = function(jsonFile, txtFile)
{ 
	if (jsonFile == null) 
	{
		console.log('jsonFile is not provided')
	};
	if (txtFile == null) 
	{
		console.log('txtFile is not provided')
	};
	if (jsonFile != null && txtFile != null) 
	{
	
		console.log('Started reading a file');
		//read the json file
		fs.readFile(jsonFile, function(error, data) 
		{
			if (error) 
			{
				console.log('error: '+error);
	        }
	        else
	        {
	        	console.log('Content of file: ' + data);
				//parse the received data into json object
	    		var studentObject = JSON.parse(data);
	    		console.log('First Record: ', studentObject.students[0]);

				//heading line for the text file
	    		var wholeDataString = 'ID  |  FName  |  LName  |  Score' + '\n';

	    		for (var i = 0; i < studentObject.students.length; i++) 
	    		{
	        		//concat each record to a varible
	      			wholeDataString = wholeDataString + studentObject.students[i].id + ' |  ' + studentObject.students[i].fName + '  |  ' + studentObject.students[i].lName + '  |  ' + studentObject.students[i].score + '\n';

	        		console.log('Students' + ': ' + studentObject.students[i].id + ' |  ' + studentObject.students[i].fName + '  |  ' + studentObject.students[i].lName + '  |  ' + studentObject.students[i].score + '\n');
	    		}

	    		console.log('wholeDataString: ' + '\n' + wholeDataString);
				//writting all the data at once
	    		fs.writeFile(txtFile, wholeDataString, function(error, data1) 
	    		{
	    			if (error) 
	    			{
	    				console.log('error in writting to text file: '+error);
	    			}
	    			else
	    			{
	        			console.log('Wrote to the file');
	        		}
	    		});

	        }

		});
		console.log('finished executing');
	};
}

exports.FromJsonFileToTextFile = FromJsonFileToTextFile;