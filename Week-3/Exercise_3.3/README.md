# Exercise 3.3
[![Screenshot-2022-09-15-171916.png](https://i.postimg.cc/L68210fc/Screenshot-2022-09-15-171916.png)](https://postimg.cc/9zK63bLb)

## Reason
Output will be </br>
Count is 0 </br>
Reason being when createIncrement() is assigned and called, </br>
the message = 'Count is ${count}' where count at that instance is 0, is set to Count is 0 </br>
when increment() function is called thrice, count becomes 3 </br>
but when log() is called and console.log(message) is requested, message is still 'Count is 0', it isnt 'count is 3'. </br>
if createIncrement() is called again then message will become 'count is 3' </br>