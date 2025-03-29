export interface DanbooruImage {
    id: number;
    file_url: string;
    preview_file_url: string;
    image_width: number;
    image_height: number;
    tag_string_artist: string;
    tag_string: string;
    source?: string;
    score: number;
}
