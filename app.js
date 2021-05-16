Vue.use(Vpaginate,{perPage:4,default_styling:false});

var study = new Vue({
  el: "#vue-app",
  data: {
    heading: "Vue.js",
    mydata:[{name:'jquery'},
    {name:"ruby"},
    {name:"algorithm"},
    {name:"datascience"},
    {name:"haskel"},
    {name:"python"},
    {name:"java"},
    {name:"google"},
    {name:"stackoverflow"},
    {name:"php"},
    {name:"js"},
    {name:"c"},
    {name:"django"}
    ],
    text: "vue paginate."
  },
  computed:{
    tre(){
      return this.$tre
    }
  }
});
