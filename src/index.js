import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./pages/home/Home"
import Blog from "./pages/blog/BlogPage"
import CreatorPage from "./pages/creatorpage/CreatorPage"
import FaqPage from "./pages/faqPage/FaqPage"
import CreatorsPage from './pages/creators/CreatorsPage';
import ErrorPage from './pages/ErrorPage';
import { Provider } from 'react-redux';
import { Store } from './Store';
import BlogsPage from './pages/blogs/BlogsPage';


const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
       {
        path:"/",
        element:<Home/>
       },
       {
        path:"/blog/:id",
        element:<Blog/>
       },
       {
        path:"/faq",
        element:<FaqPage/>
       },
       {
        path:"/creator/:id",
        element:<CreatorPage/>
       },
       {
        path:"/creators",
        element:<CreatorsPage/>
       },
       {
        path:"*",
        element:<ErrorPage/>
       },
       {
        path:"/blogs",
        element:<BlogsPage/>
       } 
    ] 
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <RouterProvider router={router}/>
  </Provider>
);


