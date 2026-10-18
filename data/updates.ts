import React from 'react';

/*
 * TEMPLATE - Copy and paste this to add a new entry:
 *
 * {
 *     date: "2025-01-23",
 *     title: "Your Title Here",
 *     content: "Your description here.",
 *     category: "update",  // Options: "paper", "post", "update", "project"
 *     link: "https://...",  // Optional
 *     thumbnail: "/your-image.png",  // Optional - put image in /public/
 *     thumbnailContain: false,  // Optional - set to true if image needs padding
 * },
 */

export type UpdateCategory = 'paper' | 'post' | 'update' | 'project';

export interface Update {
    date: string;
    title: string;
    content: string;
    category: UpdateCategory;
    link?: string;
    thumbnail?: string;
    thumbnailContain?: boolean;
}

export const updates: Update[] = [
    {
        date: "2026-03-01",
        title: "Research at Chai Discovery",
        content: "Moved back to San Francisco and joined Chai as a researcher to work on generative models for antibody design :)",
        category: "update",
        link: "https://www.chaidiscovery.com/news/series-c",
    },
    {
        date: "2025-09-30",
        title: "Deep Learning Research Internship",
        content: "I spent the summer in San Francisco with the wonderful people at Ligo Biosciences working on generative models in biology :)",
        category: "update",
        thumbnail: "/ligo_img.png",
    },
    {
        date: "2025-07-02",
        title: "TABASCO: Making Molecules Faster and Better",
        content: "My Master's thesis shows that non-equivariant transformers generate higher quality molecules. Presenting it at GenBio @ ICML 2025!",
        category: "paper",
        link: "https://github.com/carlosinator/tabasco",
        thumbnail: "/pink-animation-3.gif",
    },
    {
        date: "2025-06-12",
        title: "AI x Bio Unconference in San Francisco",
        content: "A friend and I organized an AI for Bio unconference with John Jumper, Sam Rodriques, and Simon Kohl!",
        category: "update",
        link: "https://www.linkedin.com/posts/soo-jeongkim_had-so-much-fun-hosting-a-roundtable-featuring-activity-7343243699935473665-Zv9E?utm_source=share&utm_medium=member_desktop&rcm=ACoAADMpNN4B2_gNsSU93SO3Rm0TI8p7VyEaPEY",
        thumbnail: "/unconference_img.png"
    },
    {
        date: "2025-01-13",
        title: "Started the Thesis at Cambridge",
        content: "I'm joining Prof. Liò's lab at Cambridge as a visitor to work on my masters thesis.",
        category: "update"
    },
    {
        date: "2024-09-09",
        title: "Best Paper Award",
        content: "Our paper won the best paper award at the MLG Workshop @ ECMLPKDD 2024 :)",
        category: "update",
        link: "https://mlg-europe.github.io/2024/#awards",
        thumbnail: "/best_paper_img.jpeg"
    },
    {
        date: "2024-08-29",
        title: "Next Level Message-Passing with Hierarchical Support Graphs",
        content: "My semester thesis was published. We introduce hierarchical support graphs as a performant low cost alternative to graph transformers.",
        category: "paper",
        link: "https://arxiv.org/abs/2406.15852",
        thumbnail: "/hsg_2d.png",
        thumbnailContain: true
    },
    {
        date: "2024-04-28",
        title: "1st Place @ Switzerlands largest AI Hackathon",
        content: "Our team of four won the Analytics Club's Datathon 2024. Our model was the best at predicting fine-grained energy consumption from time series data at scale.",
        category: "update",
        link: "https://www.linkedin.com/posts/analytics-club-eth_three-intense-days-of-datathon-2024-and-activity-7191099942159953920-ByMV/",
        thumbnail: "/datathon_img.png"
    },
    {
        date: "2023-11-15",
        title: "Automated Policy Analysis with the OECD",
        content: "We took part in the two month long Hack4Good program at ETH to automate policy analysis for the OECD with data extraction, trend analysis and a web tool.",
        category: "project",
        link: "https://github.com/dvdblk/hack4good-oecd"
    },
    {
        date: "2023-03-03",
        title: "Scholarship",
        content: "Was awarded the merit scholarship from the German Academic Scholarship Foundation.",
        category: "update"
    },
    {
        date: "2023-07-01",
        title: "Pixel Life",
        content: "A very small project that shows genetic algorithms and plantoid evolution with nice visuals.",
        category: "project",
        link: "https://github.com/carlosinator/pixel-life",
        thumbnail: "/pixel_life_img.png"
    }
]
