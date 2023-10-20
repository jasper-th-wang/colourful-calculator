Today we will be desinging and implemnting a calculator using JS.
- The calculator should be able to perform basic operations such as addition, subtraction, multiplication, and division.
- The calculator should be able to perform operations on negative numbers.
- The calculator should keep a log of previous operations. 
- Each item in the histroy log should be colored by the operation type. 
- Each item in the history log can be deleted. The whole log can be cleared. 
- The calculator should be able to perform operations on decimal numbers. 


![](https://cdn.discordapp.com/attachments/1149469347123830804/1163847435844587674/image.png?ex=65411063&is=652e9b63&hm=9c81f11155fbb318a6b80e283eb5315e7cbcbd0aa032da2e2255a735e39df819&)

Hint - Since history items/divs/spans are added to the DOM after the creation of DOM, we need a special care for these newly added items. The `on()` jQuery methods play a primary role into fixing this issue. It allows us to bind newly added elements to the DOM to an event.

# Marking Scheme
Total 100 points  
50 points for the calculator functionality  
50 points for the history functionality