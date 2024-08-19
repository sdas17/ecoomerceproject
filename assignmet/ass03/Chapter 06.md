Chapter 06 - Exploring the world
● What is a Microservice?

A microservice is an unique entity that provides a unique service to an application. 
It can be a database, a server or a UI of the application. 
These microservices are connected via APIs to make a complete application and are separated from each other as a different application in itself.

● What is Monolith architecture?
A monolith architecture is a entire application consisting of all the services inside
  
● What is the difference between Monolith and Microservice?
monolith                                                         microservice
Every service is inside the application                        services are scattered
Single code base	                                 Code base is divided into separated applications
Hard to maintain	                                     Easy to maintain
Deployment takes more time	                           Deployment is easy
● Why do we need a useEffect Hook?
useEffect is a Hook provided by react . This hook is responsible for maintaining the state of the application when anything that 
triggers this hook changes.
 two arguments a callback functin and a dependency array. eg.   useEffect(() => {}, [])

● What is Optional Chaining?
Optional chaning is good way of accessing the object keys, it prevents the application from being crashed if the key that we are trying to access is not present. If the key is not present then instead of a key error, it returns undefined.

● What is Shimmer UI?
Shimmer UI is a great way for loading the applications. Instead of showing a loading circle we can design a shimmer UI for our application that is good for user experience.
● What is the difference between JS expression and JS statement
● What is Conditional Rendering, explain with a code example

● What is CORS?
CORS stands for Cross Origin Resource Sharing , It is a header based machanism that allows a server to indicate any origin other that it's own. We can create requests to other domains or ports to get the data from our browser.

● What is async and await?

● What is the use of `const json = await data.json();` in getRestaurants()




Coding Assignment :
● Play with the useEffect Hook to see when it is called?(before or after render)
● Play with dependency array in useEffect Hook
● Play with the developer console by putting a debugger in render and useEffect
● Call an actual API to get data
● Handle Error in your API call
● Build Shimmer UI when data in not loaded
● Render your UI with actual API data
● Make Search functionality work
● Make a Login Logout button which toggles with a state