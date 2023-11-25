import client from "@/config/sanity"

export default async function handler(req, res) {
    const { slug } = JSON.parse(req.body)
    try {
        const query = `*[_type == "job" && slug.current == $slug]`;
        const params = { slug };
        const data = await client.fetch(query, params);
        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error.' })
    }
}