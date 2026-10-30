import { env } from 'cloudflare:workers';
export async function GET() {
 const headers={'Cache-Control':'no-store'};
 if(!env.DB) return Response.json({count:null,error:'El contador no está disponible.'},{status:503,headers});
 try {
  const result=await env.DB.prepare('SELECT COUNT(*) AS total FROM subscriptions').bind().first<{total:number}>();
  return Response.json({count:Number(result?.total??0)},{headers});
 } catch { return Response.json({count:null,error:'El contador no está disponible.'},{status:503,headers}); }
}
