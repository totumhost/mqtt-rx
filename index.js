/*
Copyright <2022> <Akshat Bisht>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the 
Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the 
Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION 
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Developed by: Akshat Bisht (a.bisht@auckland.ac.nz)
Developed for: University of Auckland
Example code to read Energy Monitoring Data from the IE Room, University of Auckland

*/


const mqtt = require('mqtt');

var names = 
['HOB',
'Fridge',
'HowWaterBoiler',
'GPO1',
'AV',
'GPO2',
'GPO3',
'Computers',
'ACOutdoor',
'ACIndoor',
'Lighting',
'Lighting1',
'CurtainWindow',
'CONTROLCCT'];


const client = 
mqtt.connect("mqtt://172.22.0.173",{username:"ie_room",password:"smart42Day"});

client.on("connect", () => {
  console.log("connected to mqtt broker");
  client.subscribe("EnergyMonitoring/"+names[8]+"Power", (err) => {
    console.log("Subscribed");
  });
});

client.on("message", (topic,message) => {
  console.log(topic.toString()+':'+message.toString());

});

