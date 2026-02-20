import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import ParksPage from "./pages/parks/ParksPage";
import ParkPage from "./pages/parks/ParkPage";
import WaitTimesPage from "./pages/WaitTimesPage";
import NewsPage from "./pages/NewsPage";
import DealsPage from "./pages/DealsPage";
import PlannerPage from "./pages/planner/PlannerPage";
import TripPage from "./pages/planner/TripPage";
import BlogPage from "./pages/blog/BlogPage";
import BlogPostPage from "./pages/blog/BlogPostPage";
import NewBlogPostPage from "./pages/blog/NewBlogPostPage";
import ProfilePage from "./pages/ProfilePage";
import AccountPage from "./pages/AccountPage";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/parks" element={<ParksPage />} />
          <Route path="/parks/:parkSlug" element={<ParkPage />} />
          <Route path="/wait-times" element={<WaitTimesPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/deals" element={<DealsPage />} />
          <Route path="/planner" element={<PlannerPage />} />
          <Route path="/planner/:tripId" element={<TripPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/new" element={<NewBlogPostPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

