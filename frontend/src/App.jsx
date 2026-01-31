import { Navigate, Route, Routes } from "react-router";
import ChatPage from "./pages/ChatPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import { useAuthStore } from "./store/useAuthStore.js";
import {useEffect} from "react";
import PageLoader from "./components/PageLoader.jsx";

import {Toaster} from "react-hot-toast";

function App() {
    const {checkAuth, isCheckingAuth, authUser} = useAuthStore();

    useEffect(() => {
        checkAuth();
    },[checkAuth]);

    console.log({authUser});

    if(isCheckingAuth) return <PageLoader />
    return (
        <div className="min-h-screen bg-[#0F1419] relative flex items-center justify-center p-4 overflow-hidden">

            {/* subtle grid */}
            <div className="absolute inset-0 opacity-30 
                bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),
                    linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]
                bg-[size:32px_32px]" />

            {/* mint glow */}
            <div className="absolute -top-32 -right-32 size-[520px] bg-[#5EEAD4]/15 blur-[140px]" />

            <Routes>
                <Route path="/" element={authUser ? <ChatPage /> : <Navigate to={"/login"} />} />
                <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to={"/"} />} />
                <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />} />
            </Routes>

            <Toaster />
        </div>
    );
}
export default App;