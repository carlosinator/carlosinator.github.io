export type UpdateCategory = 'paper' | 'post' | 'contribution' | 'update';

export interface Update {
    date: string;
    title: string;
    content: string;
    category: UpdateCategory;
    link?: string;
}

export const categoryColors: Record<UpdateCategory, string> = {
    paper: 'text-gray-600',
    post: 'text-gray-600',
    contribution: 'text-gray-600',
    update: 'text-gray-600'
};

export const updates: Update[] = [
    {
        date: "2024-10-15",
        title: "Started the Thesis at Cambridge",
        content: "Began my master's thesis research at the University of Cambridge under the supervision of Professor Pietro Liò, working on GFlowNets.",
        category: "update"
    },
    {
        date: "2024-09-09",
        title: "Best Paper Award",
        content: "Our paper won the best paper award at the MLG Workshop @ ECMLPKDD 2024 :)",
        category: "update",
        link: "https://mlg-europe.github.io/2024/#awards"
    },
    {
        date: "2024-08-29",
        title: "Next Level Message-Passing with Hierarchical Support Graphs",
        content: "My semester thesis was published. We introduce hierarchical support graphs as a performant low cost alternative to graph transformers.",
        category: "paper",
        link: "https://arxiv.org/abs/2406.15852"
    },
    {
        date: "2024-04-28",
        title: "1st Place @ Datathon 2024",
        content: "Our team of four won Switzerland's largest AI and ML hackathon. Our model predicted fine-grained hourwise energy consumption from time series data at scale.",
        category: "update",
        link: "https://www.linkedin.com/posts/analytics-club-eth_three-intense-days-of-datathon-2024-and-activity-7191099942159953920-ByMV/"
    },
    {
        date: "2023-11-15",
        title: "Automated Policy Analysis with the OECD",
        content: "We took part in the two month long Hack4Good program at ETH, where we built a tool to automate policy analysis for the OECD including data extraction, trend analysis and a web app.",
        category: "contribution",
        link: "https://github.com/dvdblk/hack4good-oecd"
    },
    {
        date: "2023-07-01",
        title: "Pixel Life",
        content: "A small repo that plays with genetic algorithms and plant evolution. The visuals are pretty.",
        category: "contribution",
        link: "https://github.com/carlosinator/pixel-life"
    },
    {
        date: "2023-03-03",
        title: "Scholarship from the German Studienstiftung",
        content: "I was awarded the competitive merit scholarship from the German Studienstiftung. It's nice to have some financial support for my studies.",
        category: "update"
    }
]
