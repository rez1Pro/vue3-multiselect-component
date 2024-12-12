<script setup lang="ts">
import Multiselect from 'vue-multiselect';

const props = defineProps<{
    options: any[];
    modelValue: any;
    multiple?: boolean;
    label?: string;
    trackBy?: string;
}>();

const emit = defineEmits(['update:modelValue']);

const toggleSelectAll = () => {
    if (props.multiple) {
        if (props.modelValue?.length === props.options.length) {
            emit('update:modelValue', []);
        } else {
            emit('update:modelValue', props.options);
        }
    }
};
</script>

<template>
    <Multiselect :modelValue="modelValue" :options="props.options" :multiple="multiple" :label="label"
        :track-by="label || trackBy" @update:modelValue="emit('update:modelValue', $event)" :selectLabel="'Select'"
        :selectedLabel="'Selected'" :allow-empty="false" :deselectLabel="'Remove'">
        <template #beforeList v-if="multiple">
            <div class="multiselect__option" @click="toggleSelectAll">
                <div class="flex items-center gap-2">
                    <input type="checkbox" :checked="modelValue?.length === options.length"
                        class="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800">
                    <span>Select All</span>
                </div>
            </div>
        </template>
        <template #option="{ option }">
            <div class="flex items-center gap-2">
                <input type="checkbox" :checked="multiple ? modelValue?.includes(option) : modelValue === option"
                    class="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800">
                <span>{{ option[label || 'name'] }}</span>
            </div>
        </template>
    </Multiselect>
</template>

<style lang="scss">
@import 'vue-multiselect/dist/vue-multiselect.css';

// Custom theme styles
.multiselect {
    min-height: 44px;
    margin-top: 0.5rem;

    &__tags {
        min-height: 44px;
        padding: 0.5rem 0.75rem;
        border-radius: 0.375rem;
        border: 1px solid #e5e7eb;
        background-color: #ffffff;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

        .dark & {
            background-color: #111827;
            border-color: #4b5563;
        }
    }

    &__single {
        margin-bottom: 0;
        font-size: 0.875rem;
        line-height: 1.25rem;

        .dark & {
            color: #d1d5db;
        }
    }

    &__placeholder {
        margin-bottom: 0;
        color: #9ca3af;

        .dark & {
            color: #6b7280;
        }
    }

    &__input {
        margin-bottom: 0;
        border: none;

        .dark & {
            color: #d1d5db;
            background-color: transparent;
        }

        &:focus {
            outline: none;
            box-shadow: none;

            .dark & {
                background-color: transparent;
            }
        }
    }

    &__content-wrapper {
        border: 1px solid #e5e7eb;
        border-radius: 0.375rem;
        margin-top: 0.25rem;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        background-color: #ffffff;

        .dark & {
            background-color: #111827;
            border-color: #4b5563;
        }
    }

    &__option {
        padding: 0.5rem 0.75rem;
        font-size: 0.9rem;
        line-height: 1.25rem;
        font-weight: 500;

        .dark & {
            color: #d1d5db;
        }

        &--highlight {
            background-color: #f3f4f6;
            color: inherit;

            .dark & {
                background-color: #374151;
            }
        }

        &--selected {
            background-color: #e5e7eb;
            color: inherit;
            font-weight: 500;

            .dark & {
                background-color: #4b5563;
            }
        }
    }

    &:focus-within &__tags {
        border-color: #6366f1;
        box-shadow: 0 0 0 1px #6366f1;

        .dark & {
            border-color: #818cf8;
            box-shadow: 0 0 0 1px #818cf8;
        }
    }
}
</style>
