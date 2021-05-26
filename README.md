![vue-logo](res/logo.png)
#  VPaginate

> simple vue pagination plugin :rocket: .
 * version: 1.0.1
 * Author: m4rcTr3y
 * Email: marktrevis61@gmail.com
 
 

## configuration:

### javascript:
```javascript

  //default config
  var config = {
      perPage:3,
      componentName:'v-paginate',
      className:'v-paginate',
      links_class:'vplinks',
      default_styling:true
  };
  
  //activate plugin
  Vue.use(Vpaginate,config);
  
  new Vue({
    el: "#vue-app",
    data(){ 
      return{
         mydata:[{name:'jquery'},{name:"ruby"},
         {name:"algorithm"},{name:"datascience"},
         {name:"haskel"},{name:"python"},
         {name:"java"},{name:"google"},
         {name:"stackoverflow"},{name:"php"},
         {name:"js"},{name:"c"},
         {name:"django"}],
         text: "vue paginate."}
      
    },
    
  });
  

```

### html:
> We use the "v-paginate" component provided by default from the vpaginate library.

> Data to be paginated can then be bond to the element using the "vdata" prop

> Then we can define an element/component to output the content that will be paginated wrapped in the "template" tag inside the "vpaginate" component.

> The data can then be accessed from the value passed in the "v-slot" attrubute on the template then  passed down to component or element in this case "li"
```html

  <v-paginate :vdata="mydata">
      <template v-slot="{data}">
        <li>{{data.name}}</li>
      </template>
  </v-paginate>

```
## output:
![example](res/screenshot.png)


> ## Configuration Options:

Option | value
-------|------
**perPage**   |    _default_: 3 "sets how many item to display per page"
**componentName** |   _default_: ("v-paginate")  sets the name of the pagination component that renders and paginates the items
**className**     |  _default_: ("v-paginate")  sets the class name to be used to apply css to the pagination component.
**links_class**   | _default_: ("vplinks") styping class for the page links
**default_styling**| _default: 'true'  enable default links styling or not
   
 
##  Changelog:
> links pagination next and forward button.

> showing active link on pagination links.

> added styling to the links and can be disabled in the configurations 