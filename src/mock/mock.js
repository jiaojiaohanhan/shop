import Mock from 'mockjs'
import data from './data.json'

Mock.mock('http://www.xxxx.com/getList',{data:data.list});

Mock.mock('http://www.xxxx.com/getUser',{
    "name|2":"ha",
    "age|18-35":20
});

Mock.mock('http://www.xxxx.com/regexp',{
    'regexp1':/[a-z][A-Z][0-9]/,
    'regexp2':/\d{5,10}/
});

Mock.mock('http://www.xxxx.com/theList',{
    'info|10-20':[
        {
            'index|+1':1,
            'name':'@first @last',
            'id':'@integer(1000,10000)',
            'date':'@datetime',
            'img':'@image("200*200")',
            'text':'@sentence(6,22)'
        }
    ]
})

let Random = Mock.Random;
let productData = req =>{
    let productList = [];
    for(let i=0;i<100;i++){
        let product = {
            name:Random.ctitle(5,20),
            img:Random.dataImage('100x100','农机'+Random.integer(1,100)),
            price:Random.integer(1000,10000),
            owner:Random.cname()
        };
        productList.push(product);
    }
    return productList;
}
Mock.mock('http://www.xxxx.com/getVarietyItem',productData)