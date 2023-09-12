## JS Modules
JS had Native import and export statements.  Browsers now support this feature natively

## Browsers
```
<script type="module"></script>
```
Browser would parse the js as ES modules. It will import(download) other modules referred in the file.
> Note: Browser can understand relative imports only

For, library files ie. node_modules. we can either refer them the full path `./node_modules/package/..` or use **import maps**
ImportMaps is a JS feature for referring files in Nodejs style or shorthand notation

```
<script type='importmap'> 
{
  "imports": {
    "lodash": "/node_modules/lodash-es/lodash.js",
    "lodash/": "/node_modules/lodash-es/"
  }
}
</script>

import _ from "lodash";
import fp from "lodash/fp.js";
```

## Dynamic module loading
```
import("./modules/myModule.js").then((module) => {
  // Do something with the module.
});
```
can be declared conditionally in the code. returns with a promise which resolved to Module Object.


## Top-level await
While declaring exports we can *await* resources so the importing file will wait for the await to resolve. 
The other unrelated imports would import in parallel
```
const colors = fetch("../data/colors.json").then((response) => response.json());

export default await colors;
```

