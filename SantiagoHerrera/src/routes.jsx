//pages
import Home from "./pages/Home";
// import AboutMe from "./pages/AboutMe";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import ContactInfo from "./pages/ContactInfo";
import ErrorPage from "./pages/ErrorPage";

export const appRoutes = [
    {
        id: 0,
        path: "/",
        component: <Home />
    },
    {
        id: 0,
        path: "/experience",
        component: <Experience />
    },
    {
        id: 0,
        path: "/projects",
        component: <Projects />
    },
    {
        id: 0,
        path: "/contact",
        component: <ContactInfo />
    },
    {
        id: 0,
        path: "*",
        component: <ErrorPage />
    }
]