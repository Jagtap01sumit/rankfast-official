import { JSDOM } from 'jsdom';
import axios from 'axios';

export default async function handler(req, res) {
    const { website } = JSON.parse(req.body);

    try {
        const response = await axios.get(website);
        const html = response.data;

        const dom = new JSDOM(html);
        const document = dom.window.document;

        const getTitle = () => document.querySelector('title')?.textContent || 'Title is missing';
        const getDescription = () => document.querySelector('meta[name="description"]')?.getAttribute('content') || 'Description is missing';
        const getKeywords = () => document.querySelector('meta[name="keywords"]')?.getAttribute('content') || 'Keywords are missing';
        const getCanonical = () => document.querySelector('link[rel="canonical"]')?.getAttribute('href') || 'Canonical is missing';
        const getRobots = () => document.querySelector('meta[name="robots"]')?.getAttribute('content') || 'Robots is missing';
        const getAuthor = () => document.querySelector('meta[name="author"]')?.getAttribute('content') || 'Author is missing';

        const title = getTitle();
        const description = getDescription();
        const keywords = getKeywords();
        const canonical = getCanonical();
        const robots = getRobots();
        const author = getAuthor();

        const headingCount = {
            h1: document.querySelectorAll('h1').length,
            h2: document.querySelectorAll('h2').length,
            h3: document.querySelectorAll('h3').length,
            h4: document.querySelectorAll('h4').length,
            h5: document.querySelectorAll('h5').length,
            h6: document.querySelectorAll('h6').length,
        };

        const headings = [];
        for (let i = 1; i <= 6; i++) {
            const headingElements = document.querySelectorAll(`h${i}`);
            headingElements.forEach((heading) => {
                headings.push({ heading: heading.textContent, tag: `h${i}` });
            });
        }

        const images = [];
        const imageElements = document.querySelectorAll('img');
        imageElements.forEach((image) => {
            const src = image.getAttribute('src') || '';
            const alt = image.getAttribute('alt') || 'Alt text is missing';
            const size = {
                width: image.width,
                height: image.height,
            };
            const extension = src.split('.').pop().split('?')[0]; // Extract extension from the image URL
            images.push({ src, alt, size, extension });
        });

        const links = [];
        const linkElements = document.querySelectorAll('a');
        linkElements.forEach((link) => {
            links.push({
                href: link.getAttribute('href') || '',
                text: link.textContent || '',
            });
        });

        const favicon = document.querySelector('link[rel="icon"]')?.getAttribute('href') || 'Favicon is missing';

        const seoMeta = { title, description, keywords, canonical, robots, author, headingCount, images, links, headings, favicon };
        res.status(200).json({ seoMeta });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
}