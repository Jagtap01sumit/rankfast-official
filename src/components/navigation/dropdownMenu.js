import React, { useState } from 'react'
import Link from 'next/link';

const DropdownMenu = ({ closeMobileMenu, dropdownfor }) => {
    const [click, setClick] = useState(false);

    const handleOnClick = () => {
        setClick(!click)
    }

    const dropdownMenu = {
        Tools: [
            { id: "tool1", name: "HTML Minifier", path: "/tools/html-minifier" },
            { id: "tool2", name: "CSS Minifier", path: "/tools/css-minifier" },
            { id: "tool3", name: "Javascript Minifier", path: "/tools/javascript-minifier" },
            { id: "tool4", name: "SEO Meta in One Click", path: "/tools/seo-meta-in-one-click" },
            { id: "tool5", name: "Robot.txt Generator", path: "/tools/robot-txt-generator" },
            { id: "tool6", name: "PageSpeed Insight", path: "/tools/page-speed-insight" },
            { id: "tool7", name: "Schema Markup Generator", path: "/tools/schema-markup-generator" },
            { id: "tool8", name: "Meta Tags Generator", path: "/tools/meta-tags-generator" },
            { id: "tool9", name: "Sitemap Generator", path: "/tools/sitemap-generator" },
            { id: "tool10", name: "Sitemap URL EXtractor", path: "/tools/sitemap-url-extractor" },
            { id: "tool11", name: "Webpage Image Extractor", path: "/tools/webpage-image-extractor" },
            { id: "tool12", name: "Webpage Word Count", path: "/tools/webpage-word-count" },
            // { id: "tool13", name: "Website Audit Generator", path: "/tools/site-audit" },
            // { id: "tool14", name: "Keyword Research Analysis", path: "/tools/keyword-research-analysis" },
            { id: "tool15", name: "Title Tag Checker", path: "/tools/title-tag-checker" },
            { id: "tool16", name: "Meta Description Checker", path: "/tools/meta-description-checker" },
            { id: "tool17", name: "Plagiarisms Checker", path: "/tools/plagiarisms-checker" },
            { id: "tool18", name: "Header Tag Checker", path: "/tools/header-checker" },
            { id: "tool19", name: "Image Alt Tag Checker", path: "/tools/image-alt-tag-checker" },
            { id: "tool20", name: "H1 tag Checker", path: "/tools/h1-tag-checker" },
            { id: "tool21", name: "Canonical Tag Checker", path: "/tools/canonical-tag-checker" },
            { id: "tool22", name: "Robots.txt Checker", path: "/tools/robots-txt-checker" },
            { id: "tool23", name: "Paraphasing Tool", path: "/tools/paraphasing-tool" },
            { id: "tool24", name: "Favicon Checker", path: "/tools/favicon-checker" },
            { id: "tool25", name: "SERP Simulator", path: "/tools/serp-simulator" },
            { id: "tool26", name: "Bulk Domain Authority Checker", path: "/tools/bulk-domain-authority-checker" },
            { id: "tool27", name: "Google Search Result", path: "/tools/google-search-result" },
            { id: "tool28", name: "Keyword Extract Tool", path: "/tools/keyword-extract-tool" },
            { id: "tool29", name: "Redirect To WWW", path: "/tools/rewrite-to-www" },
            { id: "tool30", name: "Redirect File Diectory", path: "/tools/redirect-file-directory" },
            { id: "tool31", name: ".htaccess Genearotor", path: "/tools/htaccess-generator" },
            { id: "tool32", name: "Phone Number Spelling Tool", path: "/tools/phone-number-spelling-tool" },
            { id: "tool33", name: "Broken Links Detector", path: "/tools/broken-link-detector" },
            { id: "tool34", name: "My Ip Address", path: "/tools/my-ip-address" },
            { id: "tool35", name: "Whois Domain Lookup Tool", path: "/tools/whois-domain-lookup-tool" },
            { id: "tool36", name: "Password Generator", path: "/tools/password-generator" },
            { id: "tool37", name: "Fetch HTML Content", path: "/tools/fetch-html-content" },
            { id: "tool38", name: "What My Browser Size", path: "/tools/whats-my-browser-size" },
            { id: "tool39", name: "HTML To PHP Convertor", path: "/tools/html-php-convertor" },
            { id: "tool40", name: "Spell Check Tool", path: "/tools/spell-check-tool" },
            // { id: "tool41", name: "Image To PDF Convertor", path: "/tools/image-pdf-convertor" },
            { id: "tool42", name: "MD5 Generator", path: "/tools/md5-generator" },
            { id: "tool43", name: "PNG to JPG Convertor", path: "/tools/png-jpg" },
            { id: "tool44", name: "JPG to PNG", path: "/tools/jpg-png" },
        ],
        SEO: [
            { id: 'menu-2-sub-menu-1', name: "Technical SEO", path: "/services/technical-seo/" },
            { id: 'menu-2-sub-menu-2', name: "SEO Audit", path: "/services/seo-audit/" },
            { id: 'menu-2-sub-menu-3', name: "Local SEO", path: "/services/local-seo/" },
            { id: 'menu-2-sub-menu-4', name: "SEO Consultation", path: "/services/seo-consultation-services/" },
            { id: 'menu-2-sub-menu-5', name: "Wordpress SEO", path: "/services/wordpress-seo/" },
            { id: 'menu-2-sub-menu-6', name: "YouTube SEO", path: "/services/youtube-seo/" },
            { id: 'menu-2-sub-menu-7', name: "International SEO", path: "/services/international-seo/" },
            { id: 'menu-2-sub-menu-8', name: "E-Commerce SEO", path: "/services/e-commerce-seo/" },
            { id: 'menu-2-sub-menu-9', name: "On Page SEO", path: "/services/on-page-seo/" },
            { id: 'menu-2-sub-menu-10', name: "Keyword Research and Analysis", path: "/services/keyword-research-analysis/" },
            { id: 'menu-2-sub-menu-11', name: "Off Page SEO", path: "/services/off-page-seo/" },
            { id: 'menu-2-sub-menu-12', name: "Topical Mapping Service", path: "/services/topical-mapping-service/" },
            { id: 'menu-2-sub-menu-13', name: "White Label SEO", path: "/services/white-label-seo/" },
            { id: 'menu-2-sub-menu-14', name: "National SEO", path: "/services/national-seo/" },
        ],
        // Other: [
        //     { id: "menu-3-sub-menu-1", name: "UI-UX", path: "/services/ui-ux/" },
        //     { id: "menu-3-sub-menu-2", name: "Web Development", path: "/services/web-development/" },
        //     { id: "menu-3-sub-menu-3", name: "Public Relation", path: "/services/public-relation/" },
        //     { id: "menu-3-sub-menu-4", name: "Linkedin Marketing", path: "/services/linkedin-marketing/" },
        //     { id: "menu-3-sub-menu-5", name: "Social Media Marketing", path: "/services/social-media-marketing/" },
        //     { id: "menu-3-sub-menu-6", name: "Content Marketing", path: "/services/content-marketing/" },
        // ],
        About: [
            { id: "menu-1-sub-menu-1", name: "Our Journey", path: "/our-journey/" },
            // { id: "menu-1-sub-menu-2", name: "Our Process", path: "/our-process/" },
            { id: "menu-1-sub-menu-3", name: "Our Portfolio", path: "/portfolio/" },
            // { id: "menu-1-sub-menu-4", name: "Case Study", path: "/case-study/" },
        ]
    }

    return (
        <>
            <ul onClick={handleOnClick} className={`${click ? 'dropdownMenu clicked' : 'dropdownMenu'} bg-secondary-2 mobMenu`} style={{ width: "100%" }}>
                {
                    dropdownMenu[dropdownfor].map(submenuItem => <li className="mb-2 d-flex justify-content-center" key={submenuItem.id} onClick={() => { setClick(false); closeMobileMenu() }}>
                        <Link href={submenuItem.path} className='text-white'>
                            {submenuItem.name}
                        </Link>
                    </li>)
                }
            </ul>
        </>
    )
}

export default DropdownMenu