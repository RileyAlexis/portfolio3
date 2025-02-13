import { ReactNode } from "react";

import './FadeScroll.css';

interface FadeScrollProps {
    children: ReactNode[]
}

export const FadeScroll = ({ children }: FadeScrollProps) => {

    return (
        <div className="fade-scroll-scrollContainer">
            {children.map((child, index) => (
                <div key={index} className="fade-scroll-section">
                    {child}
                </div>
            ))}
        </div>
    )
}