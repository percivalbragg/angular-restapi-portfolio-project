export class Experience {
    id: number;
    company: string;
    title: string;
    dates: string;
    responsibilities: { id: number, responsibility: string}[];
}