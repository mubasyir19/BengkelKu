import React from "react";
import Navbar from "../UI/Navbar";

export default function LandingPageLayout({ children }) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
}
