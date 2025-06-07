const base = {
    get() {
        return {
            url : "http://localhost:8080/diqnqiweixiuxitong/",
            name: "diqnqiweixiuxitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/diqnqiweixiuxitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "电器维修系统"
        } 
    }
}
export default base
