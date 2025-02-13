import { ReactNode, useEffect, useRef, useState } from "react";
import "./FadeScrollTransition.css";

interface FadeScrollTransitionProps {
    children: ReactNode[];
}

export const FadeScrollTransition = ({ children }: FadeScrollTransitionProps) => {
    const [index, setIndex] = useState(0);
    const [scrollingDirection, setScrollingDirection] = useState<"up" | "down" | null>(null);
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const isScrolling = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            if (isScrolling.current) return;  // Prevent multiple scrolls at once
            isScrolling.current = true;

            // Get the current scroll position and section height
            const scrollPosition = scrollContainerRef.current?.scrollTop || 0;
            const containerHeight = scrollContainerRef.current?.clientHeight || 1;
            const sectionIndex = Math.floor(scrollPosition / containerHeight);

            // Determine scroll direction
            const newDirection = scrollPosition > scrollContainerRef.current!.scrollTop ? "down" : "up";
            setScrollingDirection(newDirection);

            // Update index to next section
            if (sectionIndex !== index) {
                setIndex(sectionIndex);
            }

            // Allow scroll again after a delay for smoother transition
            setTimeout(() => {
                isScrolling.current = false;
            }, 800);
        };

        const scrollContainer = scrollContainerRef.current;
        scrollContainer?.addEventListener("scroll", handleScroll);

        return () => {
            scrollContainer?.removeEventListener("scroll", handleScroll);
        };
    }, [index, children.length]);

    return (
        <div
            ref={scrollContainerRef}
            className="scrollContainer"
            style={{
                height: "100vh",
                width: "100vw",
                overflowY: "auto",
                scrollSnapType: "y mandatory",  // Enables smooth snap scrolling
                scrollBehavior: "smooth",
            }}
        >
            {children.map((child, i) => (
                <div
                    key={i}
                    className="section"
                    style={{
                        height: "100vh",  // Ensure sections take full height of viewport
                        opacity:
                            (i === index && scrollingDirection !== "up") // Fade in current section
                                ? 1
                                : 0,  // Fade out others
                        transition: "opacity 1s ease-in-out",  // Smooth fade-in/out
                    }}
                >
                    {child}
                </div>
            ))}
        </div>
    );
};