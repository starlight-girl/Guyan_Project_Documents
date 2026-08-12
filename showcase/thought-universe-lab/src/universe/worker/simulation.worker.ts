/// <reference lib="webworker" />
import {SimulationEngine}from'../engine/SimulationEngine';import {MockSemanticProvider}from'../../semantic/MockSemanticProvider';import{experimentThoughts}from'../../data/experimentThoughts';import type{PhysicsParams,UniverseSnapshot}from'../models/types';
let engine=new SimulationEngine(101),timer=0;const semantic=new MockSemanticProvider();
async function init(seed=101){engine=new SimulationEngine(seed);for(const t of experimentThoughts)engine.add(t,await semantic.embed(t),false);send()}
function send(){postMessage({type:'snapshot',payload:engine.snapshot()})}
self.onmessage=async({data})=>{if(data.type==='init')await init(data.seed);if(data.type==='step'){engine.step(1/60);if(engine.tick%2===0)send()}if(data.type==='add'){engine.add(data.text,await semantic.embed(data.text));send()}if(data.type==='pause')engine.paused=data.value;if(data.type==='params')Object.assign(engine.params,data.value as Partial<PhysicsParams>);if(data.type==='reset')await init(data.seed??engine.seed);if(data.type==='load'){engine.load(data.value as UniverseSnapshot);send()}};
timer=self.setInterval(()=>{engine.step(1/60);if(engine.tick%2===0)send()},1000/60);
