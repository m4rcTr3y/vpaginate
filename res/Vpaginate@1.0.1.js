// SIMPLE VUE PAGINATION PLUGIN
// Author: m4rcTr3y
// Email: 'marktrevis61@gmail.com'
// Version :1.0.1


var default_options = {
  perPage:3,
  componentName:'v-paginate',
  className:'v-paginate',
  links_class:'vplinks',
  default_styling:true
};


var Vpaginate = function(Vue,options){
  Vue.VERSION = 'v2.6.12';
  var useOptions = {...default_options,...options};
  var Cpage='';
  
  var addCss = ()=>{
    var custom_css = `
      .${useOptions.links_class} {
        width:50%;
        height:8vh;
        display:flex;
        overflow:hidden;
        border-radius:5px;
      }
      
      .${useOptions.links_class} .link {
        color:blue;
        background:lightblue;
        height:inherit;
        width:inherit;
        display:flex;
        text-align:center;
        justify-content:center;
        align-items:center;
        text-decoration:none;
      }
      .${useOptions.links_class} a:hover{
        outline:none;
      }
      .${useOptions.links_class} a:clicked{
        outline:none;
      }
      
      .${useOptions.links_class} .active {
        color:white;
        background:blue;
        height:inherit;
        width:inherit;
        display:flex;
        text-align:center;
        justify-content:center;
        align-items:center;
        text-decoration:none;
      }
      .disabled{
        color:white;
        background:#ccc;
        height:inherit;
        width:inherit;
        display:flex;
        text-align:center;
        justify-content:center;
        align-items:center;
        text-decoration:none;
        opacity:.4;
      }
    `;

    var css = document.createElement('style');
    css.setAttribute('c-css','Vpaginate');
    css.innerText = custom_css;
    document.head.append(css);
  };
  
  Vue.prototype.$currentPage = '';
  var mixin = Vue.mixin({
    data(){
      return {
        className: useOptions.className,
        count:useOptions.perPage,
        vplinks: useOptions.links_class,
        page:{},
        Cpage:''
      }
    }
  })
 
 function currentPage(e){
   Vue.prototype.$currentPage = e
 }
  Vue.component(useOptions.componentName,{
    props:['vdata'],
    mixin:[mixin],
    methods:{
      setPage(n,p){
          this.page = n;
          this.Cpage = p+1;
          currentPage(this.Cpage)
          
      },
      back(){
        var newp = {...this.page};
        newp.fro -= this.count;
        this.Cpage -= 1;
        this.page = newp;
        currentPage(this.Cpage)
          
      },
      forward(){
        var newp = {...this.page};
        newp.fro += this.count;
        this.page = newp;
        if(this.cPage-1 != this.count)
        {
          this.Cpage += 1;
        }
        currentPage(this.Cpage)
      },
      
      isEmpty(pmap, cpage){
        var crnt = null;
        var empty = false;
        pmap.forEach(function(item){
          if(item.page == parseInt(cpage)){
            crnt = item
          }
        })
        var newobj = [...this.vdata]
        if(crnt == null){
          empty = true
        }
        
        return empty
      },
    
      
    
      
  },
    computed: {
    compData(){
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
    if(useOptions.default_styling){
      addCss();
    }
    else null
      
    
    
  
  },
    template:`
     <div>
      <ul :class="className">
        <slot v-for='(dat,indx) in compData' v-bind:data.sync="dat"></slot>
      </ul>
      <div :class="vplinks">
            <a href="#" v-if="Cpage > 1" @click="back()" class="link"> < </a>
            <a href="#"  v-else class="disabled"> < </a>
            <a href="#"  v-for="(link,ind) in pageMap" @click="setPage(link.range, link.page)" :key="ind" :class=" Cpage-1 == link.page ? 'active' : 'link' " >{{link.page+1}}</a>
            <a href="#" v-if="count > Cpage && isEmpty(pageMap,Cpage) == false" @click="forward()" class="link"> > </a>
            <a href="#"  v-else class="disabled"> > </a>
      </div>
    </div>
    `
  });
  
  
  
};