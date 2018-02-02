<template>
  <div id="wrap">
        
    </div>  
</template>
<script>
import Carousel from "./js/carousel.js"
import axios from "axios"
  export default {
      name:"table",
       data(){
           return{
               msg:"8888"
           }
       },
       mounted(){
           this.getJson();
       },
       methods:{
           getJson(){
               axios.get("http://localhost:8080/mock")
               .then((result)=>{
                       console.log(result.data);
                       new Carousel(result.data)
               })
           }
       }
  }
</script>
<style>
*{
    margin:0;
    padding:0;
    list-style:none;
}
#wrap{
    width:350px;
    height:350px;
    overflow:hidden;
    margin-left:300px;
    position:relative;
}
 img{
    width:100%;
}
#wrap ul{
    width:3000px;
}
#wrap ul li{
    width:350px;
    float:left;
}
.left{
    position:absolute;
    left:0;
    top:35%;
}
 .right{
     position:absolute;
    right:20px;
    top:35%;
} 
i{
    font-size:25px;
}
</style>