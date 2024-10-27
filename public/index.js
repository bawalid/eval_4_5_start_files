const API_URL = "http://localhost:3000/tasks";

// Fonction pour afficher les tâches
async function fetchTasks() {
  const response = await fetch(API_URL);
  const tasks = await response.json();
  const taskList = document.getElementById("tasks");
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    taskList.innerHTML += `
            <div class="task">
                <div class="task-title">${task.title}</div>
                <div class="task-description">${task.description || ""}</div>
                <div class="task-status">Statut: ${task.status}</div>
                <div class="task-controls">
                    <button class="edit" onclick="editTask('${
                      task._id
                    }')">Modifier</button>
                    <button class="delete" onclick="deleteTask('${
                      task._id
                    }')">Supprimer</button>
                </div>
            </div>
        `;
  });
}

// Fonction pour ajouter une tâche
async function addTask() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description }),
  });
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  fetchTasks();
}

// Fonction pour modifier une tâche
async function editTask(id) {
  const newTitle = prompt("Entrez le nouveau titre de la tâche :");
  const newDescription = prompt("Entrez la nouvelle description :");
  const newStatus = prompt(
    "Entrez le nouveau statut (à faire, en cours, terminée) :"
  );
  if (newTitle && newStatus) {
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: newTitle,
        description: newDescription,
        status: newStatus,
      }),
    });
    fetchTasks();
  }
}

// Fonction pour supprimer une tâche
async function deleteTask(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  fetchTasks();
}

// Charger les tâches au chargement de la page
window.onload = fetchTasks;
