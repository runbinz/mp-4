'use client';

import type {DanbooruImage} from "@/interfaces/DanbooruImage";
import DanbooruDisplay from "@/components/DanbooruDisplay";
import getDanbooruImage from "@/lib/getSafebooruImage";
import { useState, useEffect } from "react";

export default function DanbooruImage() {
    const [image, setImage] = useState<DanbooruImage[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchImages() {
            try {
                const images = await getDanbooruImage('');
                console.log("Fetched Images: ", images);
                if (Array.isArray(images) && images.length > 0) {
                    setImage(images);
                } else {
                    setError("No images found.");
                }
            } catch (error) {
                setError("Something went wrong while fetching images. Error:" + error);
            }

        }
        fetchImages();
    }, []);

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <>
            <DanbooruDisplay image={image}/>
        </>
    )
}