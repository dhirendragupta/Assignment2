var fs = require('fs');
var js2xmlparser = require('js2xmlparser');

var jsonToXml = function(jsonFileName, xmlFileName)
{  
        if (jsonFileName == null) 
        {
          console.log('jsonFileName is not provided')
        }
        if (xmlFileName == null) 
        {
          console.log('xmlFileName is not provided')
        }
        if (jsonFileName != null && xmlFileName != null) 
        {
            console.log('Started reading a file');

            fs.exists('./'+jsonFileName, function (exists) 
            {
              //util.debug(exists ? "it's there" : "no passwd!");
                  if (exists) 
                  {
                      //read the json file
                        fs.readFile(jsonFileName, function(error, data) 
                        {
                            if (error) 
                            {
                                console.log('error reading jsonFileName: '+error);
                            }
                              else
                              {
                                  console.log('Content of file: ' + data);
                                //parse the received data into json object
                                var studentObject = JSON.parse(data);
                              
                                //converting the object into xml
                                var xmlData = js2xmlparser('students', studentObject);
                              
                                console.log("xmlData: "+xmlData);

                                fs.exists('./'+xmlFileName, function (exists) 
                                {
                                  if (exists) 
                                  {

                                      //writting xml date to a xml file
                                        fs.writeFile(xmlFileName, xmlData, function(error, data) 
                                        {
                                          if (error) 
                                          {
                                            console.log('error writting to xml file: '+error);
                                          }
                                          else
                                          {
                                            console.log('Wrote to the file');   
                                          }

                                          console.log('finished all callback execution');
                                        });
                                  }

                                  else
                                  {
                                    console.log('xmlFile does not exists, new '+xmlFileName+' is created');
                                    //writting xml date to a xml file
                                        fs.writeFile(xmlFileName, xmlData, function(error, data) 
                                        {
                                          if (error) 
                                          {
                                            console.log('error writting to xml file: '+error);
                                          }
                                          else
                                          {
                                            console.log('Wrote to the file');   
                                          }

                                          console.log('finished all callback execution');
                                        });
                                  }
                                });
                              }

                            });
                      console.log("finished executing");
                }
                else
                {
                    console.log('source.json file does not exist');
                }
              
            });
        }
}
exports.jsonToXml = jsonToXml;