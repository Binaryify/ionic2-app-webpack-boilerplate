# ionic2 App Demo
this is a app demo,build with ionic2 & angular2!

[demo](http://binaryify.github.io/demo/ionic2/)

![image1 (demo)](http://binaryify.github.io/images/ionic2/1.png)
![image2 (actionSheet)](http://binaryify.github.io/images/ionic2/2.png)
![image3 (alert)](http://binaryify.github.io/images/ionic2/3.png)
![image4 (params)](http://binaryify.github.io/images/ionic2/4.png)
# start
```
0 . npm install -g ionic@beta
1 . git clone https://github.com/Binaryify/ionic2AppDemo.git
2 . npm install or cnpm install
3 . ionic serve
```

# hide tabs
[how to hide tabs](https://forum.ionicframework.com/t/ionic2-hide-tabs/37998/5)

```js
@Page(
{
    templateUrl: '...',
})
export class PageWithoutTabBar
{

    constructor()
    {

        this.tabBarElement = document.querySelector('#tabs ion-tabbar-section');

    }

    onPageWillEnter()
    {

        this.tabBarElement.style.display = 'none';

    }

    onPageWillLeave()
    {

        this.tabBarElement.style.display = 'block';

    }

}
```

enjoy it !

附:

[ionic自带命令生成各种分辨率图标](http://ionichina.com/topic/54e455ab2be672f1111c01e2)

[ionic2 中文文档](https://github.com/Raineye/ionic2)
