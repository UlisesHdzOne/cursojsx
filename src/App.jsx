import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { BlogPage } from "./pages/BlogPage";
import { PostDetails } from "./components/PostDetails";
import { Settings } from "./pages/Settings";
import ErrorPage from "./pages/ErrorPage";



function App() {
  return (
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<PostDetails />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    
  );
}
 
export default App;
