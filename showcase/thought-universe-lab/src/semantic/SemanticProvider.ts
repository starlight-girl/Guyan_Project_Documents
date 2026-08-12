export interface SemanticProvider{embed(text:string):Promise<number[]>;similarity(a:number[],b:number[]):number}
export const cosine=(a:number[],b:number[])=>{let d=0,aa=0,bb=0;for(let i=0;i<a.length;i++){d+=a[i]*b[i];aa+=a[i]*a[i];bb+=b[i]*b[i]}return d/(Math.sqrt(aa*bb)||1)};
