import {DanbooruImage} from "@/interfaces/DanbooruImage";
import Image from "next/image";

interface DanbooruDisplayProps {
    image: DanbooruImage[];
}

const DanbooruDisplay = ({image}: DanbooruDisplayProps) => {
    return (
        <div>
            {image.map((img) => {
                let sourceElem = null;

                if (img.source) {
                    sourceElem = (
                        <p>
                            Source: <a href={img.source} target="_blank" rel="noopener noreferrer">{img.source}</a>
                        </p>
                    );
                }

                const tagsArray = img.tag_string ? img.tag_string.split(' ') : [];

                return (
                    <div key={img.id}>
                        <Image
                            src={img.preview_file_url}
                            alt={"Image " + img.id}
                            width={img.image_width}
                            height={img.image_height}
                            quality={100}
                        />
                        <p>Artist: {img.tag_string_artist || 'Unknown'}</p>
                        <p>Tags: {tagsArray.join(", ")}</p>
                        <p>Score: {img.score}</p>
                        {sourceElem}
                    </div>
                );
            })}
        </div>
    )
}

export default DanbooruDisplay;

