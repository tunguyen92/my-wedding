import { lazy, Suspense } from "react";

const HomeCarousel = lazy(() => import("~/sections/carousel.jsx"));
const Header = lazy(() => import("~/sections/header.jsx"));
const WeddingDate = lazy(() => import("~/sections/wedding-date"));
const Couple = lazy(() => import("~/sections/couple"));
const LoveStory = lazy(() => import("~/sections/love-story"));
const WeddingEvents = lazy(() => import("~/sections/wedding-events"));
const Wishes = lazy(() => import("~/sections/wishes"));
const Gallery = lazy(() => import("~/sections/gallery"));
const Rsvp = lazy(() => import("~/sections/rsvp"));
const Footer = lazy(() => import("~/sections/footer"));

const App = () => {
  return (
    <Suspense fallback={<div>Loskdfbskdbfsbdkfsbdfkjsb...............</div>}>
      <HomeCarousel />
      <Header />
      <WeddingDate />
      <Couple />
      <LoveStory />
      <WeddingEvents />
      <Wishes />
      <Gallery />
      <Rsvp />
      <Footer />
    </Suspense>
  );
};
export default App;
