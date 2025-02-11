import { useEffect, useRef } from "react";

export const FullScroll = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.section');
            const scrollPostion = containerRef.current?.scrollTop || 0;
            const containerHeight = containerRef.current?.clientHeight || 1;

            sections.forEach((section, index) => {
                const sectionOffset = index * containerHeight;
                const progress = Math.min(1, Math.max(0, (scrollPostion - sectionOffset) / containerHeight));
                (section as HTMLElement).style.transform = `scale(${1 + progress * 0.1})`;
                (section as HTMLElement).style.opacity = `${1 - progress * 0.5}`;
            });
        };
        const container = containerRef.current;
        container?.addEventListener('scroll', handleScroll);

        return () => container?.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div ref={containerRef} className="scrollContainer">
            <div className='section'>Page 1</div>
            <div className='section'>Page 2</div>
            <div className='section'>Page 3</div>
        </div>
    )
}