import {Page} from 'ionic-angular';
import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';


@Page({
  templateUrl: 'build/pages/page2/page2.html'
})
export class Page2 {
  static get parameters() {
    return [[Http]];
  }
  constructor(http) {
    this.username="Join";
    console.log(http)
    this.http=http;
    setTimeout(()=>this.init(),3000)
  }
  init(){
    this.http.get('./test.json').subscribe(res => {
        console.log(res.json())
        this.username=res.json().test
      });
  }
  sub(){
    var data = JSON.stringify({
      username:this.username
    })
    console.log(data)
    this.http.post('http://jsonplaceholder.typicode.com/posts',data).subscribe(res => {
        console.log(res.json())
        alert("id:"+res.json().id)
      });
  }
}
