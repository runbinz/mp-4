'use server';

const danbooru_key = process.env.DANBOORU_KEY;
const danbooru_username = process.env.DANBOORU_USERNAME;

export default async function getSafebooruImage(tag: string) {
    try {
        const encodedTag = encodeURIComponent(tag);

        const headers = new Headers();
        if (danbooru_username && danbooru_key) {
            const authString = `${danbooru_username}:${danbooru_key}`;
            const base64Auth = Buffer.from(authString).toString('base64');
            headers.append('Authorization', `Basic ${base64Auth}`);
        }

        const timestamp = new Date().getTime();
        const url = `https://safebooru.donmai.us/posts.json?tags=${encodedTag}&limit=6&order=random&_${timestamp}`;

        const response = await fetch(url, {
            headers: headers,
        });

        console.log("HTTP Status:", response.status);
        if (!response.ok) {
            return {message: "There was an error fetching from Safebooru!"}
        }

        const data = await response.json();
        console.log("API Response Data:", data);

        if (!data || data.length === 0) {
            return {message: "There is no image for this tag!"}
        }

        return data;
    } catch (error) {
        console.log(error);
        return {message: "There was an error elsewhere"}
    }
}