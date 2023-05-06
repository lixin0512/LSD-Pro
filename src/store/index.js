import { defineStore } from "pinia";

const useEchartStore = defineStore('echarts', {
    state: () => {},
    getters: {},
    actions: {
        getEchartsData() {
            return new Promise((resolve, reject) => {
                this.$api.getEcharts().then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        }
    },
})
export default useEchartStore