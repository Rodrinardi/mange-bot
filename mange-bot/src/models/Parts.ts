
export enum PartTypes {
    "heads", "torsos", "arms", "bases"
}

//o type não tem valor inicial, o que às vezes é ruim, pois
/*export type PartType = {
    id: number;
    description: string;
    title: string;
    src: string;
    type: PartTypes;
    cost: number;
}
const testeType: PartType = {
    cost: 0.0,
    description: "",
    id: 0,
    src: "", 
    title:"",
    type: PartTypes.arms
}; */

export class Part {
    id: number = 0;
    description: string = "";
    title: string = "";
    src: string = "";
    type: PartTypes = PartTypes.heads;
    cost: number = 0.0;
}
export class PartsResponse {
    heads: Array<Part> = [];
    arms: Array<Part> = [];
    bases: Array<Part> = [];
    torsos: Array<Part> = [];
}


