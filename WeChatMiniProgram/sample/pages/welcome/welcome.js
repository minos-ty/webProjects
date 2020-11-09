Page(
  {
    onTap:function(){
      // wx.navigateTo({ //页面跳转 navigateTo有返回上一层页面按钮,切跳转后当前页面声明周期执行onHide
      //   url: '../posts/posts', //不用写页面后缀名
      // })

      wx.redirectTo({ //页面跳转 redirectTo的返回按钮是直接返回HOME页面 生命周期：onUnLoad
        url: '../posts/posts',
      })
    },

    onUnLoad:function(){
      console.log('Welcome page is Unload')
    },

    onHide:function(){
      console.log('Welcome page is Hide')
    }


  }
)