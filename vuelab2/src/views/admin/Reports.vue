<script setup>
import ReportsTable from '../../components/ReportsTable.vue'

const data = [
  { id: 1, title: 'Sales', value: 120 },
  { id: 2, title: 'Users', value: 42 }
]
</script>

<template>
  <div>
    <h2>Reports</h2>

    <ReportsTable :items="data">
      <template #row="{ item }">
        <tr>
          <td>{{ item.id }}</td>
          <td><strong>{{ item.title }}</strong></td>
          <td>{{ item.value }}</td>
        </tr>
      </template>
    </ReportsTable>
  </div>
</template>
