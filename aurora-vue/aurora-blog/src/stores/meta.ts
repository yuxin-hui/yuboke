import { defineStore } from 'pinia'

export const useMetaStore = defineStore('metaStore', {
  state: () => {
    return {
      title: '余的个人博客'
    }
  }
})
