function downloadProject(name) {
  const link = document.createElement('a');
  link.href = name; // caminho do arquivo (ex: 'gato-preto.pdf')
  link.download = name; // força o download
  link.style.display = 'none';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}