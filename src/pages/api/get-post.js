export default async function handler(req, res) {
    const { slug } = JSON.parse(req.body);
    try {
        const response = await fetch(`https://rankfast.courseo.in/wp-json/wp/v2/posts?slug=${slug}&_embed=true`)
        const post = await response.json()
        res.status(200).json({ post })
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error." })
    }
}