import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import User from "./pages/User"
import NotFound from "./pages/NotFound"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Alert from "./components/layout/Alert"
import { GithubProvider } from "./Context/github/GithubContext"
import { AlertProvider } from "./Context/alert/AlertContext"
import Counter from "./redux/features/counter/Counter";
import PostsList from "./redux/features/posts/PostsList";
import AddPostForm from "./redux/features/posts/AddPostForm";


function App() {
  return (
    // <GithubProvider>
    //   <AlertProvider>
    //     <Router>
    //       <div className="flex flex-col justify-between h-screen">
    //         <Navbar />

    //         <main className="container mx-auto px-3 pb-12">
    //           <Alert />
    //           <Routes>
    //             <Route path='/' element={<Home />} />
    //             <Route path='/about' element={<About />} />
    //             <Route path='/user/:login' element={<User />} />
    //             <Route path='/notfound' element={<NotFound />} />
    //             <Route path='/*' element={<NotFound />} />
    //           </Routes>
    //         </main>

    //         <Footer />
    //       </div>
    //     </Router>
    //   </AlertProvider>
    // </GithubProvider>
    <main className="App">
      {/* <Counter /> */}
      <PostsList />
      <AddPostForm />
    </main>
  );
}

export default App;