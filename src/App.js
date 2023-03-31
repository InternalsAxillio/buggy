import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./homepage";
import Footer from "./footer";
import Navbar from "./navbar";
import Spotlight from "./spotlight";
import Login from "./login";
import Register from "./register";
import ScrollToTop from "./ScrollToTop";
import DeserEx from "./deserexperience";
function App() {
  return (
    <div>
      <BrowserRouter>
        {/* this scrolls to top on route change */}
        <ScrollToTop>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/dsaf"
              element={
                <Spotlight
                  heading="Desert Safari"
                  descriptionHeading="Evening Desert Safari"
                  img1="img-1.webp"
                  img2="img-2.webp"
                  img3="img-3.webp"
                />
              }
            />
            <Route path="/dexp" element={<DeserEx />} />
            <Route
              path="/temp"
              element={
                <Spotlight
                  heading="Desert Experience"
                  descriptionHeading="Once in a lifetime experience"
                  img1="img-4.webp"
                  img2="img-5.webp"
                  img3="img-6.webp"
                />
              }
            />
            <Route
              path="/dbug"
              element={
                <Spotlight
                  heading="Dune Buggies"
                  descriptionHeading="A fun filled ride"
                  img1="img-7.webp"
                  img2="img-8.webp"
                  img3="img-1.webp"
                />
              }
            />
            <Route
              path="/ede"
              element={
                <Spotlight
                  heading="Exclusive Desert Experience"
                  descriptionHeading="A unique Experience"
                  img1="img-7.webp"
                  img2="img-8.webp"
                  img3="img-1.webp"
                />
              }
            />
            <Route
              path="/jsaf"
              element={
                <Spotlight
                  heading="Jeep Safari"
                  descriptionHeading="A Safari through the desert"
                  img1="img-7.webp"
                  img2="img-8.webp"
                  img3="img-1.webp"
                />
              }
            />
            <Route
              path="/cride"
              element={
                <Spotlight
                  heading="Camel Ride"
                  descriptionHeading="Ride a camel like the locals"
                  img1="img-7.webp"
                  img2="img-8.webp"
                  img3="img-1.webp"
                />
              }
            />
            <Route
              path="/hride"
              element={
                <Spotlight
                  heading="Horseback Ride"
                  descriptionHeading="Ride your own stallion"
                  img1="img-7.webp"
                  img2="img-8.webp"
                  img3="img-1.webp"
                />
              }
            />
            <Route
              path="/special"
              element={
                <Spotlight
                  heading="Special offers"
                  descriptionHeading="Special offers just for you"
                  img1="img-1.webp"
                  img2="img-2.webp"
                  img3="img-3.webp"
                />
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
