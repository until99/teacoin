const pb = new PocketBase('https://strechout.pockethost.io');

document.querySelector('#task_form').addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());

  console.log(data);
  
  // createNewTask(data);
})

async function createNewTask(data) {
  try {
    await pb.collection('tasks').create(data);
    console.log('Atividade criada');
  }
  catch {
    console.error('Erro ao criar atividade:', error);
  }
}