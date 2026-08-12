export type Vec3={x:number;y:number;z:number};
export type ParticleSnapshot={position:Vec3;velocity:Vec3;tick:number};
export interface ThoughtParticle{id:string;rawText:string;createdAt:number;position:Vec3;velocity:Vec3;acceleration:Vec3;mass:number;visualRadius:number;energy:number;naturalFrequency:number;phase:number;activity:number;age:number;embedding:number[];history:ParticleSnapshot[]}
export interface PhysicsParams{semantic:number;repulsion:number;rotation:number;boundary:number;damping:number;noise:number;resonance:number;speed:number}
export interface UniverseSnapshot{seed:number;tick:number;particles:ThoughtParticle[];couplings:Record<string,number>;params:PhysicsParams}
