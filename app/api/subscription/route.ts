import { env } from 'cloudflare:workers';
const options = {headers:{'Cache-Control':'no-store'}};
function identity(req:Request) { return {id:req.headers.get('oai-authenticated-user-id'),email:req.headers.get('oai-authenticated-user-email')}; }
function validOrigin(req:Request) { return req.headers.get('Origin')===new URL(req.url).origin; }
export async function GET(req:Request) {
 const {id,email}=identity(req);
 if(!id) return Response.json({authenticated:false,subscribed:false},options);
 if(!env.DB) return Response.json({error:'El registro no está disponible. Inténtalo más tarde.'},{status:503,...options});
 const row=await env.DB.prepare('SELECT created_at FROM subscriptions WHERE user_id = ?').bind(id).first();
 return Response.json({authenticated:true,subscribed:!!row,email,createdAt:row?.created_at??null},options);
}
export async function POST(req:Request) {
 if(!validOrigin(req)) return Response.json({error:'Solicitud no permitida.'},{status:403,...options});
 const {id,email}=identity(req);
 if(!id||!email) return Response.json({error:'Inicia sesión con ChatGPT para suscribirte.',signin:true},{status:401,...options});
 if(!env.DB) return Response.json({error:'El registro no está disponible. Inténtalo más tarde.'},{status:503,...options});
 let input:unknown; try {input=await req.json();} catch {return Response.json({error:'Solicitud incompleta.'},{status:400,...options});}
 if(!input || typeof input!=='object' || !('consent' in input) || input.consent!==true) return Response.json({error:'Confirma que deseas suscribirte.'},{status:400,...options});
 const now=new Date().toISOString();
 await env.DB.prepare('INSERT INTO subscriptions (user_id,email,consent_version,created_at,updated_at) VALUES (?,?,?,?,?) ON CONFLICT(user_id) DO UPDATE SET email=excluded.email,consent_version=excluded.consent_version,updated_at=excluded.updated_at').bind(id,email,'2026-10-29-v1',now,now).run();
 return Response.json({subscribed:true,message:'Ya formas parte de BambiBlush ♡ Tu suscripción gratuita quedó registrada. Los avisos por correo comenzarán cuando se active el servicio de novedades.'},options);
}
export async function DELETE(req:Request) {
 if(!validOrigin(req)) return Response.json({error:'Solicitud no permitida.'},{status:403,...options});
 const {id}=identity(req);
 if(!id) return Response.json({error:'Inicia sesión para gestionar tu suscripción.'},{status:401,...options});
 if(!env.DB) return Response.json({error:'Inténtalo más tarde.'},{status:503,...options});
 await env.DB.prepare('DELETE FROM subscriptions WHERE user_id = ?').bind(id).run();
 return Response.json({subscribed:false,message:'Tu suscripción y correo se han eliminado de la lista.'},options);
}
