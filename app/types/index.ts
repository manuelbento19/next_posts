export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
    tags: string[],
    reactions: number;
  }