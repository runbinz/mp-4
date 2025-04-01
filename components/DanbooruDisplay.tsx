import {DanbooruImage} from "@/interfaces/DanbooruImage";
import Image from "next/image";

interface DanbooruDisplayProps {
    image: DanbooruImage[];
}

const DanbooruDisplay = ({image}: DanbooruDisplayProps) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
            {/* Added grid styling */}
            {image.map((img) => {
                let sourceElem = null;

                if (img.source) {
                    sourceElem = (
                        <p className="text-sm text-gray-400">
                            Source: <a href={img.source} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{img.source}</a>
                        </p>
                    );
                }

                const tagsArray = img.tag_string ? img.tag_string.split(' ') : [];

                return (
                    <div
                        key={img.id}
                        className="bg-white rounded-2xl shadow-md overflow-hidden p-4 transition-all hover:shadow-lg"
                    >
                        <Image
                            src={img.preview_file_url}
                            alt={"Image " + img.id}
                            width={1000}
                            height={1000}
                            className="w-full h-auto rounded-lg"
                            quality={100}
                        />
                        <div className="mt-4 space-y-2">
                            <p className="text-lg font-semibold text-gray-800">
                                Artist: {img.tag_string_artist || 'Unknown'}
                            </p>
                            <p className="text-sm text-gray-500">
                                Tags: {tagsArray.join(", ")}
                            </p>
                            <p className="text-sm text-gray-500">
                                Score: {img.score}
                            </p>
                            {sourceElem}
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default DanbooruDisplay;

