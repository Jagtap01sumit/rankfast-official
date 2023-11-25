export default async function handler(req, res) {
    try {
        const response = await fetch('https://rankfast.courseo.in/wp-json/wp/v2/posts?_embed=true');

        if (response.ok) {
            const totalRecords = parseInt(response.headers.get('X-WP-Total'));
            const totalPages = parseInt(response.headers.get('X-WP-TotalPages'));

            const data = await response.json();
            const postsData = { data, totalRecords, totalPages }

            res.status(200).json({ postsData });
        } else {
            console.error('Request failed with status:', response.status);
            res.status(500).json({ message: "Internal Server Error." });
        }
    } catch (error) {
        console.error('Fetch error:', error);
        res.status(500).json({ message: "Internal Server Error." });
    }
}
