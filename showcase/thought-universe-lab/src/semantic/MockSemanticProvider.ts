import {cosine,type SemanticProvider} from './SemanticProvider';
export class MockSemanticProvider implements SemanticProvider{async embed(text:string){const v=Array(16).fill(0);[...text].forEach((c,i)=>{const n=c.codePointAt(0)??0;v[(n+i*7)%16]+=Math.sin(n*.017+i)});const m=Math.hypot(...v)||1;return v.map(x=>x/m)}similarity=cosine}
