const http=require('node:http');
const fs=require('node:fs');
const path=require('node:path');
const root=path.join(__dirname,'public');
const port=Number(process.env.PORT||process.env.CAVE_OOPS_PORT||8792);
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.png':'image/png'};
function safeFile(url){const pathname=decodeURIComponent((url||'/').split('?')[0]);const wanted=pathname==='/'?'/index.html':pathname;const file=path.resolve(root,'.'+wanted);return file.startsWith(root+path.sep)?file:null;}
const server=http.createServer((req,res)=>{
  if(req.url==='/health'){res.writeHead(200,{'content-type':'application/json','cache-control':'no-store'});return res.end(JSON.stringify({ok:true,game:'Cave Oops!',version:'0.2.4'}));}
  const file=safeFile(req.url);if(!file){res.writeHead(403);return res.end('Forbidden');}
  fs.stat(file,(error,stat)=>{if(error||!stat.isFile()){res.writeHead(404);return res.end('Not found');}res.writeHead(200,{'content-type':types[path.extname(file)]||'application/octet-stream','cache-control':path.extname(file)==='.html'?'no-store':'public, max-age=3600'});fs.createReadStream(file).pipe(res);});
});
if(require.main===module)server.listen(port,'0.0.0.0',()=>console.log(`Cave Oops!: http://localhost:${port}`));
module.exports={server,safeFile};
