Chapter 03 - Laying the Foundation

Topics
● JSX

jsx is just like html like syntax jsx is stand for javscript xml 

● React.createElement vs JSX
react.createElement is when code wriiten it create object then render html template
jsx is =>react.cratelement =>object =>html dom render
● Benefits of JSX
1.devloper experience
2.syntetic sugar
3.readabilty
4.less code

● Behind the Scenes of JSX

JSX => React.createElement => Object => HTMl(DOM)
● Babel & parcel role in JSX
babel  babel type and required bable to transpile it.
parcel is beast  and parcel is file wathcing alig
● Components
components is only bulidng block component button is component ,card is one component 

● Functional Components
○ Composing Components
Functional Component- NEW
Class Based Component - OLD


Assignment
● What is JSX?
JSX is a syntex extensin created by Facebook. It makes us easy to understand the code and makes the code easy to maintain.


● Superpowers of JSX
1.Easy to maintain
2.Secure
3.Easy to debug

● Role of type attribute in script tag? What options can I use there?


The type attribute in the script tag defines the type of script that we we want to run inside our app. type attribute can be of the following types:

text/javascript : It is the basic standard of writing javascript code inside the <script> tag.
e.g

<script type="text/javascript">
    const a = "Hello";
    const b = "World!";
    console.log(a + " " + b); // Hello World!
</script>
text/ecmascript : this value indicates that the script is following the EcmaScript standards.

module: This value tells the browser that the script is a module that can import or export other files or modules inside it.

text/babel : This value indicates that the script is a babel type and required bable to transpile it.

text/typescript: As the name suggest the script is written in TypeScript.

● {TitleComponent} vs {<TitleComponent/>} vs
{<TitleComponent></TitleComponent>} in JSX


{TitleComponent}: This value describes the TitleComponent as a javascript expession or a value. The {} can embed a javascript expression or a values inside it.

<TitleComponent/> : This value represents a Component that is basically returning Some JSX value. in simple terms TitleComponent a function that is returning a JSX value. A compoenet is written inside the {<  />} expression.

<TitleComponent></TitleComponent> : <TitleComponent /> and <TitleComponent></TitleComponent> are equivalent only when < TitleComponent /> has no children components.The opening and closing tags are created to include the child components.

e.g.

<TitleComponent>
    <ChildComponen1 />
    <ChildComponen2 />
    <ChildComponen3 />
</TitleComponent>


Coding Assignment:
● Create a Nested header Element using React.createElement(h1,h2,h3 inside a
div with class “title”)

const title = React.createElement(
  "h1", 
  null, 
  React.createElement(
    "h2",
    null, 
    React.createElement(
      "h3",
      { id: 'title' }, 
      "hello world" 
    )
  )
);

const jsxHeading = <h1 id="heading">Namaste React Using JSX🚀</h1>;

○ Create the same element using JSX
○ Create a functional component of the same with JSX
const HeadingComponent = () => <h1>Namaste React from Functional Component</h1>;
const HeadingComponent = () => (
    <h1 className="heading">
    Namaste React from Functional Component</h1>
   );const HeadingComponent = () => {
//   return (
//     <div className="container">
//       <h1>Namaste React from Functional Component</h1>
//     </div>
//   );
// };
○ Pass attributes into the tag in JSX
○ Composition of Component(Add a component inside another)
○ {TitleComponent} vs {<TitleComponent/>} vs
{<TitleComponent></TitleComponent>} in JSX
● Create a Header Component from scratch using Functional Components with
JSX
○ Add a Logo on left
○ Add a search bar in middle
○ Add User icon on right
○ Add CSS to make it look nice