// pages/afterClassList/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    goDetail() {
        wx.navigateTo({
            url: '/pages/afterClassdetail/index',
        })
    }
})