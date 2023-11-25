export default async function handler(req, res) {
    try {
        const response = await fetch('https://pritams3.sg-host.com/wp-json/wp/v2/categories?_embed=true&per_page=99')
        const data = await response.json()
        res.status(200).json({ categories: data })
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error." })
    }
}