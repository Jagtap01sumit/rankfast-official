import client from "@/config/sanity";

export default async function handler(req, res) {
    const { slug } = JSON.parse(req.body);

    const query = `*[_type == "services" && slug.current == $slug]`;
    const params = { slug };

    try {
        const page = await client.fetch(query, params);
        res.status(200).json({ page: page[0] });
    } catch (error) {
        res.status(400).json({ error: "Page not found!" });
    }
}
