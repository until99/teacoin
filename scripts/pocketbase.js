const pb = new PocketBase('https://strechout.pockethost.io');

async function fetchAllTasks() {
    try {
        const records = await pb.collection('tasks').getFullList({
          sort: '-created',
        });

        return records;
    } catch (error) {
        console.error('Erro ao listar atividades:', error);
    }
}

let tasks = fetchAllTasks();
