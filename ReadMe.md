## app、web通用函数

本仓库放置的为通用的工具函数

#### 使用方法

 - package.json中增加

`"baie-vutils": "latest"
`

 - 使用`import {isNumber} from 'baie-vutils'`来调用

 - 每个方法的具体使用方法可以查看`./test/`目录下的测试用例；


### lib 目录下的代码不要改，因为都是通过`npm run compile`,生成的