import React, { FC, useRef, useState } from "react";

interface BentoTiltProps {
    children: React.ReactNode,
    className: string
}

export const BentoTilt: FC<BentoTiltProps> = ({ children, className }) => {
    const [transformStyle, setTransformStyle] = useState("");
    const itemRef = useRef<HTMLDivElement | null>(null);

    const handleMouseMove = (event: React.MouseEvent) => {
        if (!itemRef.current) return;

        const { left, top, width, height } =
            itemRef.current?.getBoundingClientRect();

        const relativeX = (event.clientX - left) / width;
        const relativeY = (event.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 5;
        const tiltY = (relativeX - 0.5) * -5;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1, 1, 1)`;
        setTransformStyle(newTransform);
    };

    const handleMouseLeave = () => {
        setTransformStyle("");
    };

    return (
        <div
            ref={itemRef}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform: transformStyle }}
        >
            {children}
        </div>
    );
};

export default BentoTilt;