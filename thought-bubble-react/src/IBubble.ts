export interface IBubble{
    id: number,
    title: string,
    description: string,
    submitter: string,
    onClick: (thought: number) => void
}