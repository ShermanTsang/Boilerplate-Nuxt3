import { defineStore } from 'pinia'

export const useExampleStore = defineStore(
    'example',
    () => {
        const state = reactive({
            example: {}
        })

        return { example: toRef(state, 'example') }
    },
    {
        persist: {
            storage: persistedState.localStorage
        }
    }
)
