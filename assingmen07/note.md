# path session

# brush up useeffect hooks
useeffect call 
1.callback 
2.argument

useEffect =(()=>{

},[])

//if no dependency array => useeffect is called on every render
//if dependency array is empty =>[]=>useEffect is called on inital render (just one)
//if dependency array is [btnNameReact] => called every time btnName is updated

useEffect =(()=>{

},[btnNameReact])
# useState
never create useState outside render ()
use State is used for local state varible inside function component

# always created top 
# never create if and else,for loop,function loop use state try to use  conditon rendering


# let move routing session
🔯 current version routing 6.4 previous old version project is r using 
🌟 how to create react routing
 # npm i react-router-dom

 import {createBroserRouter,ROUTERprovide} from "react-router-dom';

 const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Applayout/>,
    errorElement:<Error>
  },
  {
    path:"/about,
    element:<About/>
  },{
    path:'/Contact',
    element:<Contact/>
  }

 ])

 go for root level configuraion
 # cofigruraion some information what going on tell route
 object is define
root.render(<RouterProvide router={appRouter}>)

# REACT ROUTER 
one more hooks are useRouteError();
# outlet is one component render entire child component is render is suing

# link is super power react router dom
link is exactly same is anchor tag
<LInk to="/">


