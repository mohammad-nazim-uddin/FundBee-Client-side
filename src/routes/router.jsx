import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Home from "../pages/Home";
import AddCampaign from "../pages/AddCampaign";
import AllCampaign from "../pages/AllCampaign";
import Donation from "../pages/Donation";
import MyCampaign from "../pages/MyCampaign";
import ErroPage from "../components/ErroPage";
import PrivateRoute from "../PrivteRoute/PrivateRoute";
import auth from "../firebase/firebase.config";
import UpdateCamp from "../components/UpdateCamp";
import CampaignDetails from "../components/CampaignDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErroPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://fund-bee-server.vercel.app/allCampaign')
            },
            {
                path: '/addCampaign',
                element: <PrivateRoute>
                    <AddCampaign />
                </PrivateRoute>
            },
            {
                path: '/allCampaign',
                element: <AllCampaign />,
                loader: () => fetch('https://fund-bee-server.vercel.app/allCampaign')

            },
            {
                path: '/MyCampaign',
                element: <PrivateRoute>
                    <MyCampaign />
                </PrivateRoute>,
                loader: () => fetch(`https://fund-bee-server.vercel.app/mycampaign?email=${auth.currentUser.email}`)

            },
            {
                path: '/donation',
                element: <PrivateRoute>
                    <Donation />
                </PrivateRoute>,
                loader: () => fetch('https://fund-bee-server.vercel.app/myDonation')
            },
            {
                path: '/campaignDetails/:id',
                element: <PrivateRoute>
                    <CampaignDetails />
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://fund-bee-server.vercel.app/allCampaign/${params.id}`)
            },
            {
                path: '/updateCampaign/:id',
                element: <UpdateCamp />,
                loader: ({ params }) => fetch(`https://fund-bee-server.vercel.app/allCampaign/${params.id}`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }

])

export default router