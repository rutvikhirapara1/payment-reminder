import { cookies } from 'next/headers';
import { createHash, randomBytes } from 'crypto';
import { db } from './db';
export const hashToken=(v:string)=>createHash('sha256').update(v).digest('hex');
export async function currentUser(){const jar=await cookies();const token=jar.get('paytrack_session')?.value;if(!token)return null;const s=await db.session.findUnique({where:{tokenHash:hashToken(token)},include:{user:true}});if(!s||s.expiresAt<new Date()||s.user.status!=='ACTIVE')return null;return s.user;}
export async function createSession(userId:string){const token=randomBytes(32).toString('hex');await db.session.create({data:{userId,tokenHash:hashToken(token),expiresAt:new Date(Date.now()+1000*60*60*24*14)}});return token;}
export function safeUser(u:any){return {id:u.id,name:u.name,email:u.email,role:u.role};}
