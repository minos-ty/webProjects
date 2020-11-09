// pages/posts/posts.js
Page({

  //处理用户实际的步骤
  //产生事件 用回调函数 捕捉事件和处理事件

  /**
   *自定义函数
   */
  process:function(){
    // 小程序中不支持网页常规的网页传值
    // var date = 'Nov 18 2019'
    // var date_ele = document.getElementById('id') //获取网页的DOM节点
    // date_ele = date //设置相应的值（即把数据传输到页面）

    // 小程序中数据传送数据是通过数据绑定，在data中写数据即可
  },

  /**
   * Page initial data
   */
  data: {
    //数据绑定
    //数据优先的思维而不是传统DOM优先
    //只有出现在data下的数据才能进行数据绑定，自定义的不能进行数据绑定
    //这里的数据绑定方式为单项数据绑定，即更改页面的值JS中的值不会自动改变（需通过事件的技术实现改变），更改JS中的值页面的值会自动改变
    date1:'Nov 18 2019',
    title1:'比利林恩的中场战事'
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    //模拟从服务器加载到的数据
    // var post_content1 = {
    //   date:"Nov 18 2019",
    //   title:"正是虾肥蟹壮时",
      
    //   content:'比利林恩的中场战事比利林恩的中场战事比利林恩的中场战事比利林恩的中场战事比利林恩的中场战事比利林恩的中场战事比利林恩的中场战事比利林恩的中场战事比利林恩的中场战事比利林恩的中场战事比利林恩的中场战事比利林恩的中场战事比利林恩的中场战事比利林恩的中场战事',
    //   view_num:'112',
    //   collect_num:'96',
    //   img:{
    //     post_img:"/images/post/crab.png",
    //     auther_img:'/images/avatar/1.png'
    //   },

    //   title_condition:true 
    // }

    var post_contents = [{
      date:"Nov 18 2019",
      title:"比利林恩的中场战事",
      
      content:'比利林恩的中场战事比利林恩的中场战事比利林恩的中场战事比利林恩的中场战事比利林恩的中场战事比利林恩的中场战事比利林恩的中场战事比利林恩的中场战事比利林恩的中场战事比利林恩的中场战事比利林恩的中场战事比利林恩的中场战事比利林恩的中场战事比利林恩的中场战事',
      view_num:'112',
      collect_num:'96',
      img:{
        post_img:"/images/post/bl.png",
        author_img:'/images/avatar/1.png'
      } 
    }, 
    {
      date:"Nov 18 2019",
      title:"可爱的小猫咪",
      
      content:'比利林恩的中场战事比利林恩的中场战事比利林恩的中场战事比利林恩的中场战事比利林恩的中场战事比利林恩的中场战事比利林恩的中场战事比利林恩的中场战事比利林恩的中场战事比利林恩的中场战事比利林恩的中场战事比利林恩的中场战事比利林恩的中场战事比利林恩的中场战事',
      view_num:'112',
      collect_num:'96',
      img:{
        post_img:"/images/post/cat.png",
        author_img:'/images/avatar/2.png'
      } 
    }]

    //setData传递数据时无论如何到要保证传递的是一个JavaScript对象
    // this.setData(post_content1)//把所有的数据拷贝的data中，以实现数据绑定
    this.setData(
        {posts_key:post_contents} //当数据
      ) 

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})