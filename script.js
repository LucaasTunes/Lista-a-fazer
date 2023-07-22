document.addEventListener('DOMContentLoaded', () => {
    const prafazer = document.querySelectorAll('.conteudo input[type="checkbox"]');
    const feito = document.querySelector('.Do form');
  
    prafazer.forEach((tarefa) => {
      tarefa.addEventListener('click', () => {
        if (tarefa.checked) {
          feito.appendChild(tarefa.parentElement);
        } else {
          document.querySelector('.conteudo form').appendChild(tarefa.parentElement);
        }
      });
    });
  });
  