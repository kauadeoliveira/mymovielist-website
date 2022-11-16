import React, { useEffect, useState } from "react";

export function useWindowSize() {
    const [size, setSize] = useState([]);

    useEffect(() => {
        const handleResize = () => setSize([window.innerHeight, window.innerWidth]);

        window.addEventListener("resize", handleResize)
    }, [])

    return size
}