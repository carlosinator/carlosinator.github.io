import React from 'react';

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

export const categoryColors: Record<UpdateCategory, string> = {
    paper: 'bg-red-500 text-white',
    post: 'bg-emerald-500 text-white',
    project: 'bg-indigo-500 text-white',
    update: 'bg-sky-500 text-white'
};

export const updates: Update[] = [
    {
        date: "2025-06-12",
        title: "AI x Bio Unconference in San Francisco",
        content: "A friend and I randomly decided to host an AI for bio meetup. Now its an unconference with Simon Kohl, Sam Rodriques and Brandon Wood!",
        category: "update",
        link: "https://www.linkedin.com/posts/soo-jeongkim_aixbio-unconference-genai-activity-7338621119265980418-_UoY?utm_source=share&utm_medium=member_desktop&rcm=ACoAADMpNN4B2_gNsSU93SO3Rm0TI8p7VyEaPEY",
        thumbnail: "/unconference_img.png"
    },
    {
        date: "2025-01-13",
        title: "Started the Thesis at Cambridge",
        content: "Began my master's thesis at the University of Cambridge under the supervision of Professor Pietro Liò.",
        category: "update"
    },
    {
        date: "2024-09-09",
        title: "Best Paper Award",
        content: "Our paper won the best paper award at the MLG Workshop @ ECMLPKDD 2024 :)",
        category: "update",
        link: "https://mlg-europe.github.io/2024/#awards",
        thumbnail: "/best_paper_img.jpg"
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
        content: "Got awarded the merit scholarship from the German Academic Scholarship Foundation.",
        category: "update"
    },
    {
        date: "2023-07-01",
        title: "Pixel Life",
        content: "A small repo that shows genetic algorithms and plantoid evolution with nice visuals.",
        category: "project",
        link: "https://github.com/carlosinator/pixel-life",
        thumbnail: "/pixel_life_img.png"
    }
]
