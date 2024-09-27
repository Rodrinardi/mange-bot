<script setup lang="ts">
  import { useCart } from '@/stores/Cart';

</script>

<template>
  <main>
    <h1>Cart Page!</h1>

    <table>
      <thead>
        <th>Item</th>
        <th>Head</th>
        <th>Torso</th>
        <th>Base</th>
        <th>Left Arm</th>
        <th>Right Arm</th>
        <th>Custo</th>
        <th>Ação</th>
      </thead>
      <tbody>
        <tr v-for="(robot,index) in useCart().robots" :key="index">
            <td>{{ index }}</td>
            <td>{{ robot.head.id }} - {{ robot.head.title }}</td>
            <td>{{ robot.torso.id }} - {{ robot.torso.title }}</td>
            <td>{{ robot.base.id }} - {{ robot.base.title }}</td>
            <td>{{ robot.leftArm.id }} - {{ robot.leftArm.title }}</td>
            <td>{{ robot.rightArm.id }} - {{ robot.rightArm.title }}</td>
            <td>R${{ robot.cost }}</td>
            <td><button @click="useCart().removeCart(index)">
              Excluir
            </button></td>
        </tr>
        <tr>
          <td colspan="5"><strong>Valor Total:</strong></td>
          <td><strong>{{ useCart().getTotalCost }}</strong></td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
