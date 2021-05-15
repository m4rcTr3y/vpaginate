// SIMPLE VUE PAGINATION PLUGIN
// Author: m4rcTr3y
// Email: 'marktrevis61@gmail.com'
// Version :1.0.0


var default_options = {
  perPage:3,
  componentName:'v-paginate',
  className:'v-paginate'
  
};

var Vpaginate = function(Vue,options){
  Vue.VERSION = 'v2.6.12';
  var useOptions = {...default_options,...options};
  var Cpage='';
  
  Vue.component(useOptions.componentName,{
    props:['vdata'],
    data(){
      return {
        className: useOptions.className,
        count:useOptions.perPage,
        page:{},
        Cpage:''
      }
    },
    methods:{
      setPage(n,p){
          this.page = n;
          this.Cpage = p+1;
      }
  },
    computed: {
    compEl(){
        var newd = [...this.vdata];
        return newd.splice(this.page.fro,this.page.to);
    },
    pageMap(){
        let len = this.vdata.length;
        let counter = 0;
        
        let Pmap = [];
        let dv = Math.ceil(len/this.count);
        for(var i=0; i<=dv; i++){
            if(Pmap.length!=dv){
             if(i == 0){
                 Pmap.push({page:i, range:{'fro':counter,'to':this.count}})
             }
             else{
                 counter+= parseInt(this.count);
                 Pmap.push({page:i,range:{'fro':counter,'to':this.count}})
             }
            }
        }
        return Pmap
    }
  },
    created(){
      this.setPage(this.pageMap[0].range,this.pageMap[0].page);
      Vue.prototype.$currentPage = this.cPage;
  
  },
    template:`
     <div>
      <ul :class="className">
        <slot v-for='dat in compEl' v-bind:data="dat"></slot>
      </ul>
      
      <div class="v-paginate-links">
            <a href="#" v-for="link in pageMap" @click="setPage(link.range, link.page)">{{link.page+1}}</a>
        
      </div>
    </div>
    `
  });
  
  Vue.prototype.$currentPage = Cpage
   
  
};