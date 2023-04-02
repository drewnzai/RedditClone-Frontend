import { Subreddit } from "./Subreddit";

export interface TredningItem{
    image_src: string;
    title: string;
    description: string;
    subreddit: Subreddit;
}