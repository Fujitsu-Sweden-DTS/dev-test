<script setup>
import { computed, ref } from "vue";

const props = defineProps(["data"]);
const filterInput = ref("");

const computedDataKeys = computed(() => {
    return Object.keys(props.data[0]);
});

const filteredData = computed(() => {
    return props.data.filter((row) => {
        const filterInputLower = filterInput.value.toLowerCase();

        let match = false;

        computedDataKeys.value.forEach((key) => {
            console.log(key);
            const column = row[key].toString().toLowerCase();
            if (column.includes(filterInputLower)) {
                match = true;
            }
        });

        return match;
    });
});
</script>

<template>
    <input v-model="filterInput" placeholder="Filter" />
    <table class="table">
        <thead>
            <tr>
                <th v-for="key in computedDataKeys">{{ key }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="dataRow in filteredData">
                <td v-for="key in computedDataKeys">{{ dataRow[key] }}</td>
            </tr>
        </tbody>
    </table>
</template>
