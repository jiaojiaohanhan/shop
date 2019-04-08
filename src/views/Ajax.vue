<template>
    <div>
        <van-button type="primary" @click="getData">获取数据</van-button>
        <van-button type="danger" @click="clearData">清除数据</van-button>
        <ul>
            <li v-for="(item, index) in list" :key="index">
                {{index+1}}:{{item.title}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[]
        }
    },
    methods: {
        clearData(){
            this.list = [];
        },
        ajax(){
            //ajax原理
            let movieUrl = "https://bird.ioliu.cn/v2?url=https://api.douban.com/v2/movie/top250"
            //创建XMLHttpRequest对象
            let xmlHttp;
            if(window.XMLHttpRequest){
                xmlHttp = new XMLHttpRequest();
            }else{
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            //发送请求
            xmlHttp.open('GET',movieUrl,true);
            xmlHttp.send();
            //服务器端相应
            xmlHttp.addEventListener('readystatechange',()=>{
                if(xmlHttp.readyState==4 && xmlHttp.status==200){
                    let obj = JSON.parse(xmlHttp.responseText);
                    console.log(obj);
                    this.list = obj.subjects;
                }
            });
        },
        getData(){
            this.ajax();
        }
    },
}
</script>
<style lang="scss">

</style>


