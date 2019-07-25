
import React, { Component } from 'react'
import { Menu, Icon} from 'antd'
const { SubMenu } = Menu;
class MyMenu extends Component {
  constructor(props){
    super(props);
    this.state={
      menuData:[{
        key:'home',
        name:'首页'
        },{
          key:'dataCenter',
          name:'数据中心'
        },{
          key:'goodsManage',
          name:'商品管理',
          children:[{
            key:'addGoods',
            name:'添加商品'
          },{
            key:'goodsList',
            name:'商品列表'
          },{
            key:'stockManage',
            name:'库存管理'
          }]
        },{
          key:'orderManage',
          name:'订单管理'
        }]
    }
  }
  componentWillMount(){
  }
  onMenuClick(obj){
    let data=this.getMenuArr(this.state.menuData,obj.keyPath);
    this.props.onMenuClick(data)
  }
  getMenuArr(allArr,obj){
    let arr=[];
    allArr.forEach(val=>{
      if(obj.indexOf(val.key)>=0){
        arr.push({
          key:val.key,
          name:val.name
        })
      }
      if(val.children&&val.children.length){
        arr.push(...this.getMenuArr(val.children,obj))
      }
    })
    return arr;
  }
  render() { 
    return ( <Menu theme="dark" onClick={this.onMenuClick.bind(this)} defaultSelectedKeys={['home']} mode="inline">
      {this.state.menuData.map(val=>{
        if(val.children){
          return (<SubMenu
            key={val.key}
            title={
              <span>
                <Icon type="user" />
                <span>{val.name}</span>
              </span>
            }
          >
            {val.children.map(item=>(
              <Menu.Item key={item.key}>
                <Icon type="pie-chart" />
                <span>{item.name}</span>
              </Menu.Item>
            ))}
          </SubMenu>)
        }else{
          return (
            <Menu.Item key={val.key}>
              <Icon type="pie-chart" />
              <span>{val.name}</span>
            </Menu.Item>
          )
        }
      })}
  </Menu> );
  }
}
 
export default MyMenu;