<script setup>
import { ref, computed, watch } from 'vue'
import { VueDatePicker } from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

// Дані для форми
const newTitle = ref('')
const newDescription = ref('')
const newPriority = ref('medium')

// Список задач
const tasks = ref([])

// Фільтри
const filterTitle = ref('')
const filterDescription = ref('')
const filterStatus = ref('all')
const filterPriority = ref('all')
const filterDateFrom = ref(null)
const filterDateTo = ref(null)

// Пагінація
const currentPage = ref(1)
const tasksPerPage = 5

// Ініціалізація з LocalStorage
if (localStorage.getItem('tasks')) {
  tasks.value = JSON.parse(localStorage.getItem('tasks')).map(t => ({
    ...t,
    createdAt: new Date(t.createdAt),
    editing: false
  }))
}

// Watch для LocalStorage
watch(tasks, (newVal) => {
  localStorage.setItem('tasks', JSON.stringify(newVal))
}, { deep: true })

// Методи
const addTask = () => {
  const title = newTitle.value.trim()
  if (!title) return
  tasks.value.push({
    id: Date.now(),
    title,
    description: newDescription.value.trim(),
    status: 'active',
    createdAt: new Date(),
    priority: newPriority.value,
    editing: false
  })
  newTitle.value = ''
  newDescription.value = ''
  newPriority.value = 'medium'
}

const deleteTask = (id) => {
  tasks.value = tasks.value.filter(t => t.id !== id)
}

const editTask = (task) => {
  task.editing = true
}

const saveTask = (task) => {
  task.editing = false
  task.title = task.title.trim()
  if (!task.title) deleteTask(task.id)
}

const clearFilters = () => {
  filterTitle.value = ''
  filterDescription.value = ''
  filterStatus.value = 'all'
  filterPriority.value = 'all'
  filterDateFrom.value = null
  filterDateTo.value = null
  currentPage.value = 1
}

// Фільтрація
const filteredTasks = computed(() =>
  tasks.value.filter(task =>
    (!filterTitle.value || task.title.toLowerCase().includes(filterTitle.value.toLowerCase())) &&
    (!filterDescription.value || task.description.toLowerCase().includes(filterDescription.value.toLowerCase())) &&
    (filterStatus.value === 'all' || task.status === filterStatus.value) &&
    (filterPriority.value === 'all' || task.priority === filterPriority.value) &&
    (!filterDateFrom.value || task.createdAt >= filterDateFrom.value) &&
    (!filterDateTo.value || task.createdAt <= filterDateTo.value)
  )
)

// Пагінація
const pages = computed(() =>
  Array.from({ length: Math.ceil(filteredTasks.value.length / tasksPerPage) }, (_, i) => i + 1)
)

const paginatedTasks = computed(() => {
  const start = (currentPage.value - 1) * tasksPerPage
  return filteredTasks.value.slice(start, start + tasksPerPage)
})

// Лічильники
const total = computed(() => tasks.value.length)
const activeCount = computed(() => tasks.value.filter(t => t.status === 'active').length)
const doneCount = computed(() => tasks.value.filter(t => t.status === 'done').length)
</script>

<template>
  <div class="todo-app">
    <h1>To-Do App</h1>

    <!-- Форма додавання -->
    <div class="add-task">
      <input v-model="newTitle" placeholder="Назва завдання" />
      <input v-model="newDescription" placeholder="Опис завдання" />
      <select v-model="newPriority">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button @click="addTask">Додати</button>
    </div>

    <!-- Фільтри -->
    <div class="filters">
      <input v-model="filterTitle" placeholder="Фільтр по назві" />
      <input v-model="filterDescription" placeholder="Фільтр по опису" />
      <select v-model="filterStatus">
        <option value="all">Всі</option>
        <option value="active">Активні</option>
        <option value="done">Виконані</option>
      </select>
      <select v-model="filterPriority">
        <option value="all">Всі пріоритети</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <VueDatePicker v-model="filterDateFrom" placeholder="Від дати"/>
      <VueDatePicker v-model="filterDateTo" placeholder="До дати"/>
      <button @click="clearFilters">Очистити</button>
    </div>

    <!-- Список задач -->
    <ul>
      <li v-for="task in paginatedTasks" :key="task.id" :class="{ done: task.status === 'done' }">
        <input type="checkbox" v-model="task.status" true-value="done" false-value="active" />
        <div class="task-info">
          <strong v-if="!task.editing" @dblclick="editTask(task)">{{ task.title }}</strong>
          <input v-if="task.editing" v-model="task.title" @keyup.enter="saveTask(task)" @blur="saveTask(task)" />
          <p>{{ task.description }}</p>
          <p>Пріоритет: {{ task.priority }} | Створено: {{ task.createdAt.toLocaleString() }}</p>
        </div>
        <button @click="deleteTask(task.id)">🗑️</button>
      </li>
    </ul>

    <!-- Пагінація -->
    <div class="pagination" v-if="pages.length > 1">
      <button v-for="page in pages" :key="page" @click="currentPage = page" :class="{ active: currentPage === page }">
        {{ page }}
      </button>
    </div>

    <!-- Лічильники -->
    <div class="task-counts">
      <p>Всього: {{ total }}</p>
      <p>Активні: {{ activeCount }}</p>
      <p>Виконані: {{ doneCount }}</p>
    </div>
  </div>
</template>
