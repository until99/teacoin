const pb = new PocketBase('https://strechout.pockethost.io');

// DOM Elements
let task_list = document.getElementById("task_list")

// Return all tasks ordered by created date
async function fetchAllTasks() {
    try {
        const records = await pb.collection('tasks').getFullList({
            sort: '-created',
        });

        records.map((record) => createTaskCard(record.id, record.task_title, record.task_description, record.task_start_time));

        return records;
    } catch (error) {
        console.error('Erro ao listar atividades:', error);
    }
}

function createTaskCard(task_id, task_title, task_description, task_start_time) {
    let task = document.createElement('a');
    task.setAttribute('href', `/pages/tasks/${task_id}`);
    task.setAttribute('class', 'task')

    let task_body = document.createElement('div');
    task_body.setAttribute('class', 'task_body');

    let task_header = document.createElement('div');
    task_header.setAttribute('class', 'task_header');

    let task_header_title = document.createElement('p');
    task_header_title.appendChild(document.createTextNode(task_start_time));
    task_header.appendChild(task_header_title);

    let task_content = document.createElement('div');
    task_content.setAttribute('class', 'task_content');

    let task_content_title = document.createElement('p');
    task_content_title.appendChild(document.createTextNode(task_title));
    task_content.appendChild(task_content_title);

    let task_content_description = document.createElement('p');
    task_content_description.appendChild(document.createTextNode(task_description));
    task_content.appendChild(task_content_description);

    task_body.appendChild(task_header);
    task_body.appendChild(task_content);
    task.appendChild(task_body);

    task_list.appendChild(task);
}

// Fetch all tasks when windown load
fetchAllTasks()