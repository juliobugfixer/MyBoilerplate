//*********Copyright - Footer************
const data = new Date();
let d = data.getFullYear().toString();
let html = `<p>Todos os direitos reservados &copy; ${d}</p>`;
const p = document.querySelector('#copyright');
p.innerHTML = html;
