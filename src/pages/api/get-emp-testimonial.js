import client from "@/config/sanity"

export default async function handler(req, res) {
    try {
        const data = await client.fetch(`*[_type == "employeeFeedback"]`);
        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' })
    }
}