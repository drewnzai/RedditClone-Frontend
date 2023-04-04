import { Subreddit } from "./Subreddit";

export interface TrendingItem{
    image_src: string;
    title: string;
    description: string;
    subreddit: Subreddit;
}