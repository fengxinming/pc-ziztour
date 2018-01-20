'use strict';

module.exports = {
  // async index(ctx) {
  //   console.log('222');
  //   await ctx.render('index');
  // }
  index(ctx) {
    const referrals = [{
      title: '海量目的地资源',
      msg: '终端直采 成本低'
    }, {
      title: '全网销售 多渠道平台',
      msg: '微信商城 APP PC &nbsp; API对接OTA'
    }, {
      title: '覆盖差旅 定制 个人游用户',
      msg: '为1000+企业提供差旅管理服务'
    }, {
      title: '信用采购 差旅月结',
      msg: '优化公司现金流收益'
    }];
    const resourceList1 = [{
      count: '312,000+',
      type: '酒店'
    }, {
      count: '120+',
      type: '旅游景区'
    }, {
      count: '16,000+',
      type: '旅行社'
    }, {
      count: '13',
      type: '直连航司'
    }];
    const resourceList2 = [{
      count: '3,500+',
      type: '企业用户'
    }, {
      count: '56,000+',
      type: '个人用户'
    }, {
      count: '1',
      type: '政府合作'
    }, {
      link:'#business-anchor',
      count: '更多',
      type: '商务合作'
    }];
    return ctx.render('home/index', {
      referrals,
      resourceList1,
      resourceList2
    });
  }
};
