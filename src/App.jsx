import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Lazy Load Components
const Homepage = lazy(() => import("./components/pages/private/Homepage"));
const LoginPage = lazy(() => import("./components/pages/public/Login"));
const SignupPage = lazy(() => import("./components/pages/public/Signup"));
const BookConsultation = lazy(() => import("./components/pages/private/BookConsultation"));
const Navbar = lazy(() => import("./components/pages/private/Navbar"));
const Footer = lazy(() => import("./components/pages/private/Footer"));

// Section Pages
const BedSection = lazy(() => import("./components/pages/private/BedSection"));
const BohemianSection = lazy(() => import("./components/pages/private/BohemianSection"));
const BrowseIdea = lazy(() => import("./components/pages/private/BrowseIdea"));
const BudgetFriendlySection = lazy(() => import("./components/pages/private/BudgetFriendlySection"));
const DiningSection = lazy(() => import("./components/pages/private/DiningSection"));
const FrontSection = lazy(() => import("./components/pages/private/FrontSection"));
const KitchenSection = lazy(() => import("./components/pages/private/KitchenSection"));
const LivingSection = lazy(() => import("./components/pages/private/LivingSection"));
const LuxurySection = lazy(() => import("./components/pages/private/LuxurySection"));
const MinimalistSection = lazy(() => import("./components/pages/private/MinimalistSection"));
const OfficeSection = lazy(() => import("./components/pages/private/Office"));
const RusticSection = lazy(() => import("./components/pages/private/RusticSection"));
const TraditionalSection = lazy(() => import("./components/pages/private/TraditionalSection"));

// Admin Pages
const AdminLogin = lazy(() => import("./components/pages/private/AdminLogin"));
const DashboardIndex = lazy(() => import("./components/api/dashboard/index"));
const CustomerIndex = lazy(() => import("./components/api/customer/index"));
const CustomerForm = lazy(() => import("./components/api/customer/form"));
const UserIndex = lazy(() => import("./components/api/user/index"));
const UserForm = lazy(() => import("./components/api/user/form"));
const DesignIndex = lazy(() => import("./components/api/design/index"));
const DesignForm = lazy(() => import("./components/api/design/form"));
const BookingIndex = lazy(() => import("./components/api/booking/index"));

const queryClient = new QueryClient();

const PrivateUserRoute = () => {
  const token = localStorage.getItem("token");
  const isAuthenticated = !!token; // Converts to a boolean

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

const PrivateRoute = () => {
  const token = localStorage.getItem("token");
  const isAuthenticated = !!token;

  return isAuthenticated ? <Outlet /> : <Navigate to="/admin/login" replace />;
};


// Layout Wrapper to Include Navbar/Footer
const UserLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

// Define Routes
const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },

  // User Routes with Navbar/Footer (Protected by Authentication)
  {
    path: "/",
    element: <UserLayout />,
    children: [
      { path: "home", element: <Homepage /> }, // Accessible to everyone
      {
        element: <PrivateUserRoute />, // Protects all other routes
        children: [
          { path: "bookconsultation", element: <BookConsultation /> },
          { path: "bedsection", element: <BedSection /> },
          { path: "bohemiansection", element: <BohemianSection /> },
          { path: "browseidea", element: <BrowseIdea /> },
          { path: "budgetfriendly", element: <BudgetFriendlySection /> },
          { path: "diningsection", element: <DiningSection /> },
          { path: "frontsection", element: <FrontSection /> },
          { path: "kitchensection", element: <KitchenSection /> },
          { path: "livingsection", element: <LivingSection /> },
          { path: "luxurysection", element: <LuxurySection /> },
          { path: "minimalistsection", element: <MinimalistSection /> },
          { path: "officesection", element: <OfficeSection /> },
          { path: "rusticsection", element: <RusticSection /> },
          { path: "traditionalsection", element: <TraditionalSection /> },
        ]
      }
    ]
  },
  

  // Admin Routes (Protected by Admin Authentication)
  {
    path: "/admin",
    element: <PrivateRoute />,
    children: [
      { path: "login", element: <AdminLogin /> },
      { path: "dashboard", element: <DashboardIndex /> },
      { path: "customer", element: <CustomerIndex /> },
      { path: "customer/:id", element: <CustomerForm /> },
      { path: "customer/form", element: <CustomerForm /> },
      { path: "design", element: <DesignIndex /> },
      { path: "design/form", element: <DesignForm /> },
      { path: "design/:id", element: <DesignForm /> },
      { path: "booking", element: <BookingIndex /> },
    ],
  },
]);

// App Component
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
