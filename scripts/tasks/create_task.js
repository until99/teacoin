const pb = new PocketBase('https://strechout.pockethost.io');

// TODO:
// Não deixar enviar nenhum campo vazio
// Indicador visual
document.querySelector('#task_form').addEventListener('submit', (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(e.target).entries());

  let data_formated = {
    task_title: data.task_title,
    task_description: data.task_description,
    steps: [],
    task_start_time: formatedDateTime(data.start_time)
  };

  let step_index = 1;
  while (data[`step_title_${step_index}`] && data[`step_description_${step_index}`]) {
    data_formated.steps.push({
      title: data[`step_title_${step_index}`],
      description: data[`step_description_${step_index}`]
    });
    step_index++;
  };

  createNewTask(data_formated);
})

async function createNewTask(data) {
  try {
    await pb.collection('tasks').create(data);
    console.log('Atividade criada');
  }
  catch (error) {
    console.error('Erro ao criar atividade:', error);
  }
}

function formatedDateTime(date_time) {
  let dt = new Date(date_time);
  let tzoffset = (new Date()).getTimezoneOffset() * 60000;
  let localISOTime = (new Date(dt - tzoffset)).toISOString().slice(0,-5).replace("T", " ");

  return localISOTime;
}
