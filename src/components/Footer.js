import React from "react";

export default function Footer() {
    return (
        <Footer className="bg-gray-800 text-white py-4 text-center">
            <div className="container mx-auto">
                <p className="text-sm">
                    All rights reserved @ {new Date().getFullYear()}
                </p>
                <p className="text-sm mt-2">
                    Developed ANd designed by Karpagapriya A
                </p>
            </div>
        </Footer>
    );
}

