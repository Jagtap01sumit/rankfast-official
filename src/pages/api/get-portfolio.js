import client from "@/config/sanity";

export default async function handler(req, res) {
    try {
        const projects = await client.fetch(`*[_type == "portfolio"]`)
        res.status(200).json({ data: projects })
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
}