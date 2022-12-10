import About from "../pages/about/About";
import AllBlog from "../pages/dashboard/allBlogs/AllBlog";
import CreatBlog from "../pages/dashboard/createBlog/CreatBlog";
import Dashboard from "../pages/dashboard/Dashboard";
import ErrorPage from "../pages/errorPage/ErrorPage";
import ReadingHistory from "../pages/readingHistory/ReadingHistory";
import SingleBlog from "../pages/singleBlog/SingleBlog";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../pages/home/Home");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/blog/:blogId',
        element: <SingleBlog />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard/create-blog',
                element: <CreatBlog />
            },
            {
                path: '/dashboard/all-blogs',
                element: <AllBlog />
            }
        ]
    },
    {
        path: '/reading-history',
        element: <ReadingHistory />
    },
])

export default router;