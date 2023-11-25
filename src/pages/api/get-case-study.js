import client from "@/config/sanity";

export default async function handler(req, res) {
    const { slug } = JSON.parse(req.body)
    try {
        if (!slug) {
            res.status(500).json({ error: 'slug is undefined', success: false })
        }

        const query = `*[_type == "caseStudy" && seo.slug.current == $slug]`;
        const params = { slug };

        const data = await client.fetch(query, params);
        res.status(200).json({ data, success: true });

    } catch (error) {
        res.status(500).json({ error: error.message, success: false })
    }
}