export async function getHTML(url,main){
 try{
  let res = await fetch(url),
  html = await res.text();
  
  const $main = document.getElementById(main)
  $main.innerHTML = html;
 }catch(err){
  const message = err.statusText || "ocurrio un error";
  main.innerHTML = `<h3>${err.status} : ${message}</h3>`;
 }
}