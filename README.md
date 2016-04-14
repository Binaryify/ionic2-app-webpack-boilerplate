# ionic2 App Demo
this is a app demo,build with ionic2 & angular2!

[demo](http://binaryify.github.io/demo/ionic2/)

![image1 (demo)](http://binaryify.github.io/images/ionic2/1.png)
![image2 (actionSheet)](http://binaryify.github.io/images/ionic2/2.png)
![image3 (alert)](http://binaryify.github.io/images/ionic2/3.png)
![image4 (params)](http://binaryify.github.io/images/ionic2/4.png)
# start
```
1 . git clone this repository
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
[ionic2 中文文档](https://github.com/Raineye/ionic2)
