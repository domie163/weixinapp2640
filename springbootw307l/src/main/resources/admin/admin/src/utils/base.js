const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootw307l/",
            name: "springbootw307l",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootw307l/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "云匹面粉直供微信小程序"
        } 
    }
}
export default base
