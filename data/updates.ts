import React from 'react';

/*
 * TEMPLATE - Copy and paste this to add a new entry:
 *
 * {
 *     date: "2025-01-23",
 *     title: "Your Title Here",
 *     content: ["Plain text, ", { text: "linked text", href: "https://..." }, "."],  // or just a string
 *     category: "update",  // Options: "paper", "post", "update", "project"
 *     thumbnail: "/your-image.png",  // Optional - put image in /public/
 *     thumbnailContain: false,  // Optional - set to true if image needs padding
 * },
 */

export type UpdateCategory = 'paper' | 'post' | 'update' | 'project';

export interface LinkedText {
    text: string;
    href: string;
}

export interface Update {
    date: string;
    title: string;
    content: string | Array<string | LinkedText>;
    category: UpdateCategory;
    thumbnail?: string;
    thumbnailContain?: boolean;
}

export const updates: Update[] = [
    {
        date: "2026-03-01",
        title: "Research at Chai Discovery",
        content: [
            "Moved back to San Francisco and ",
            { text: "joined Chai", href: "https://www.nytimes.com/2026/07/14/business/dealbook/chai-discovery-ai-drug-development.html" },
            " as a researcher to work on generative models for antibody design.",
        ],
        category: "update",
    },
    {
        date: "2025-11-02",
        title: "Life Elixir",
        content: [
            "I found my ",
            { text: "new favourite drink", href: "https://carlosinator.substack.com/p/life-elixir" },
            ".",
        ],
        category: "post",
        thumbnail: "/boba_img.jpg",
    },
    {
        date: "2025-09-30",
        title: "Research Internship at Ligo",
        content: [
            "I spent the summer in San Francisco with the wonderful people at ",
            { text: "Ligo Biosciences", href: "https://research.ligo.bio/posts/building-artios/" },
            " working on generative models in biology.",
        ],
        category: "update",
        thumbnail: "/ligo_img.png",
    },
    {
        date: "2025-07-02",
        title: "TABASCO: Making Molecules Faster and Better",
        content: [
            "We train a SOTA model for molecule generation without equivariance. Presented at GenBio @ ICML 2025 and published in TMLR. (",
            { text: "arxiv", href: "https://arxiv.org/abs/2507.00899" },
            ")",
        ],
        category: "paper",
        thumbnail: "/pink-animation-3-transparent.webp",
        thumbnailContain: true,
    },
    {
        date: "2025-06-12",
        title: "AI x Bio Unconference in San Francisco",
        content: [
            "A friend and I organized an ",
            { text: "AI for Bio unconference", href: "https://www.linkedin.com/posts/soo-jeongkim_had-so-much-fun-hosting-a-roundtable-featuring-activity-7343243699935473665-Zv9E?utm_source=share&utm_medium=member_desktop&rcm=ACoAADMpNN4B2_gNsSU93SO3Rm0TI8p7VyEaPEY" },
            " with John Jumper, Sam Rodriques, and Simon Kohl!",
        ],
        category: "update",
        thumbnail: "/unconference_img.png"
    },
    {
        date: "2024-08-29",
        title: "Next Level Message-Passing with Hierarchical Support Graphs",
        content: [
            "We introduce ",
            { text: "hierarchical support graphs", href: "https://arxiv.org/abs/2406.15852" },
            ", a fast alternative to graph transformers. Best Paper Award at MLG 2024. (",
            { text: "arxiv", href: "https://arxiv.org/abs/2406.15852" },
            ")",
        ],
        category: "paper",
        thumbnail: "/hsg_2d.png",
        thumbnailContain: true
    },
    {
        date: "2024-04-28",
        title: "1st Place @ Switzerlands largest AI Hackathon",
        content: [
            "Our team won the ",
            { text: "ETH Datathon 2024", href: "https://www.linkedin.com/posts/analytics-club-eth_three-intense-days-of-datathon-2024-and-activity-7191099942159953920-ByMV/" },
            " predicting energy consumption with time series data.",
        ],
        category: "update",
        thumbnail: "/datathon_img.png"
    },
    // Hidden entries, uncomment to show again:
    // {
    //     date: "2023-11-15",
    //     title: "Automated Policy Analysis with the OECD",
    //     content: [
    //         "We took part in the two month long ",
    //         { text: "Hack4Good", href: "https://github.com/dvdblk/hack4good-oecd" },
    //         " program at ETH to automate policy analysis for the OECD with data extraction, trend analysis and a web tool.",
    //     ],
    //     category: "project",
    // },
    // {
    //     date: "2023-03-03",
    //     title: "Scholarship",
    //     content: "Was awarded the merit scholarship from the German Academic Scholarship Foundation.",
    //     category: "update"
    // },
    // {
    //     date: "2023-07-01",
    //     title: "Pixel Life",
    //     content: [
    //         "A very small project that shows ",
    //         { text: "genetic algorithms and plantoid evolution", href: "https://github.com/carlosinator/pixel-life" },
    //         " with nice visuals.",
    //     ],
    //     category: "project",
    //     thumbnail: "/pixel_life_img.png"
    // },
]
