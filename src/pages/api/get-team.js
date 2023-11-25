import client from "@/config/sanity"

export default async function handler(req, res) {
    try {
        const team = await client.fetch(`*[_type == "team"]`)
        res.status(200).json({ team })
    } catch (error) {
        res.status(500).json({ message: "Internal server error." })
    }
}