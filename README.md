❤️ Namaste React 🙏
Namaste React Live Course from Zero to Hero 🚀 by Akshay Saini Founder of NamasteDev. This repository for Assignment & Class Notes taken during this First Live course.
💖 This Repository was trending on Github 🔥

🎨 Contents

This repository contains a Collection of Assignments & Class Notes, which help you understand the concepts of React.js.

📚 Chapter 01 - Inception (Date: 08-08-2024)

#what is Emmet ?
emmet is just just like visual studio to genratre some code

cdn is content delivery network link
cdn is place where libary hoisted

how to write js code hellow world
let data =document.createElement("welcome");
let root =document.getElementById("root");
root.append(data);
# react how to hellow worlds how to write
React.createElement("tag",{"object they taken"},{"element they taken"})
createElement is just like object 


 const heading=document.createElement("h1");
        heading.innerHTML='hellow worlds ';
        heading.style.paddingLeft="123px";
        heading.style.backgroundColor="red";
        
        const root =document.getElementById("root");
        root.append(heading)
        </script>

# react js session content
# js write hellow worlds
# react write hellow worlds
# nested hellow world 
# cdn
# crossorigin
# react dom and reactElement

# what is react js 
react js javascript open source javascript to build spa using help react js
what is libary  and frame work
libary is a collection snipeete to perform specfic task
# what is framework 
framework is a provide is basic foundation and structrure of a website is called frame work
# what is difference libary and framework ?

 When library, the control remains with the developer who
tells the application when to call library functions. and the framework tells the developer where code needs to be
provided and calls it as it requires.

# Create Hello World Program using only HTML?
<html>
 <head>
  <title>hellow world prgramming</title>
 </head>
 <bod>
  <h3>hellow world </h3>
 </bod>
</html>
# Create Hello World Program using only JavaScript?
<html>
 <head>
  <title>hellow world prgramming</title>

 </head>
 <body>
  <div id="root"></div>
  <script >
   let data = document.createElement("hellow world");
   let appendata =document.getElementById("root");
   appendata.append(data);
  </script>
 </body>
</html>
 # Create Hello World Program using only React?
 <body>
<div id="root"></div>
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script>
 let data = React.createElement("h1",{id:"headingtag"},"hellow world);
 let datadispaly= ReactDom.createRoot(document.getElemetbyId("root");
 datadispaly.render(data)
</script>
 
 </body>

 # corsorigin
  The crossorigin attribute in the script tag enables CrossOrigin Resource Sharing (CORS) for loading external JavaScript
files from different origin than the hosting web page. 
# <div class="parent">
<div class="child">
<h3>the is first child</h3>
<h3>this is secound child</h3>
 
</div>
<div>
 <h4>this is third child</h4>
 <h4>this is five child</h4>
</div>
</div>
#  example how to u write a code react createElement to create object 
let data = React.createElement("div", { id: "Parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", null, "Heading 1"),
        React.createElement("h2", null, "Heading 2")
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", null, "Heading 1"),
        React.createElement("h2", null, "Heading 2")
    ])
]);

let dumydata = ReactDOM.createRoot(document.getElementById("root"));
dumydata.render(data);


# homework first session Namaste react js


Theory -

● What is Emmet?

● Difference between a Library and Framework?
● What is CDN? Why do we use it?
● Why is React known as React?
● What is crossorigin in script tag?
● What is diference between React and ReactDOM
● What is difference between react.development.js and react.production.js files via CDN?
● What is async and defer? - see my Youtube video ;)
Coding -
● Set up all the tools in your laptop
○ VS Code
○ Chrome
○ Extensions of Chrome
● Create a new Git repo
● Build your first Hello World program using,
○ Using just HTML
○ Using JS to manipulate the DOM
○ Using React
■ use CDN Links
■ Create an Element
■ Create nested React Elements
■ Use root.render
● Push code to Github (Theory as well as code)
● Learn about Arrow Functions before the next class




