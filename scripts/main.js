// DOM Elements
let task_steps_wrapper = document.getElementById("task_steps_wrapper");
let create_task_step_button = document.getElementById("task_create_new_step_button");

let step_id = 1;

function taskCreateStep(step_id) {
  let step_html = document.createElement('div');
  step_html.setAttribute('class', 'step');
  step_html.setAttribute('id', `step_${step_id}`);

  let step_title_label = document.createElement('label');
  step_title_label.setAttribute('class', 'step_title_label');
  step_title_label.setAttribute('id', 'step_title_label');
  step_title_label.appendChild(document.createTextNode(`Etapa ${step_id}`));

  let step_title_input_html = document.createElement('input');
  step_title_input_html.setAttribute('class', 'step_title_input');
  step_title_input_html.setAttribute('id', `step_title_${step_id}`);
  step_title_input_html.setAttribute('type', 'text');
  step_title_input_html.setAttribute('name', `step_title_${step_id}`);
  step_title_input_html.setAttribute('placeholder', 'Nome da Etapa');

  let step_description_textarea_html = document.createElement('textarea');
  step_description_textarea_html.setAttribute('class', 'step_description_textarea');
  step_description_textarea_html.setAttribute('id', `step_description_${step_id}`);
  step_description_textarea_html.setAttribute('name', `step_description_${step_id}`);
  step_description_textarea_html.setAttribute('placeholder', 'Descreva a Etapa');

  let step_remove_button_html = document.createElement('button');
  step_remove_button_html.setAttribute('class', 'steo_remove_button');
  step_remove_button_html.setAttribute('id', `step_remove_button_${step_id}`);
  step_remove_button_html.setAttribute('name', `step_remove_button_${step_id}`);
  step_remove_button_html.setAttribute('onclick', `stepRemove(${step_id})`);
  step_remove_button_html.appendChild(document.createTextNode('remove'))

  step_html.appendChild(step_title_label);
  step_html.appendChild(step_title_input_html);
  step_html.appendChild(step_description_textarea_html);
  step_html.appendChild(step_remove_button_html);

  task_steps_wrapper.appendChild(step_html);
}

// TODO:
// Limitar a 5
create_task_step_button.addEventListener("click", () => {
  taskCreateStep(step_id);
  step_id++;
  console.log(step_id);
})

// TODO:
// Ajustar numeração dinamicamente
function stepRemove(step_id) {
  document.getElementById(`step_${step_id}`).remove();
}