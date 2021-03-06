'use strict';

module.exports = {

  index(ctx) {
    const referrals = [{
      title: "资源多",
      msg: "主流航线全覆盖 数十万差旅酒店<br>火车票快速预订 会奖旅游路线多"
    }, {
      title: "财力省",
      msg: "因公出差 因私旅游 均享受协议价<br>一站式审批预订结算  提升办公效率"
    }, {
      title: "预订快",
      msg: "掌上办公 微信/PC双渠道预订<br>酒店即时确认  机票1分钟出票"
    }, {
      title: "体验好",
      msg: "专属客户经理1对1  月结服务无压力<br>出差流程规范化  差旅报表可视化"
    }];

    const travelData = [{
      title: "差旅资金压力大?",
      caption: "月结支付免员工垫资",
      msg: "提供授信额度减轻企业资金压力",
      options: [
        "蜘蛛差旅垫付差旅费用，无需预支企业资金和员工个人垫付",
        "月结企业差旅费用，提供统一发票，简化报销流程",
        "专属财务对账，提供月结账单，类目清晰"
      ]
    }, {
      title: "差旅审批流程慢?",
      caption: "微信审批  移动办公",
      msg: "支持双平台操作 事务动态实时提醒",
      options: [
        "无需下载APP，关注“蜘蛛差旅”微信公众号即可使用差旅管理服务",
        "随时随地预订和管理审批，灵活移动办公更便捷",
        "支持双平台操作，多种方式登录，差旅事务动态，支持微信及短信实时提醒"
      ]
    }, {
      title: "差旅风险管控难?",
      caption: "资源全覆盖 标准可控 ",
      msg: "一站式预订  订单真实可循",
      options: [
        "蜘蛛差旅覆盖全国13家主流航线，数十万家差旅酒店资源，直连12306火车票全线预订接口",
        "一站式预订核销，避免员工通过其它渠道预订，难核实费用数据",
        "根据员工级别配置费用标准和权限，严格把控员工差旅行为"
      ]
    }, {
      title: "报表更新慢 制作难?",
      caption: "报表可视化 微信实时查看",
      msg: "多维度分析 分类清晰",
      options: [
        "报表实时更新，支持微信按月查看，管理层随时掌控公司差旅和报销动态",
        "多维度分析差旅报表，预订种类、标准金额及所占比例、部门及员工差旅明细，提前预订、分布城市及支付偏好等",
        "多维度分析报销报表，类型、城市、时间、部门层级、部门员工及占比等"
      ]
    }, {
      title: "日常报销繁琐 借款慢?",
      caption: "一站式借款 预订 报销",
      msg: "费用明细全记录 差旅更轻松",
      options: [
        "出差费用在线申请借款，报销/现金还款，灵活多样",
        "随时随地记录费用明细，不漏掉每一笔费用，报销更轻松",
        "打通差旅预订和费用报销，高效便捷，费用可控"
      ]
    }, {
      title: "差旅管理效率低?",
      caption: "轻量化管理 双平台操作",
      msg: "一站式预订  订单真实可循",
      options: [
        "部门独立管理，集中结算审批，权责分明，提升管理效率。扁平化操作流程，避免差旅事务堆积，节省财务人力",
        "双平台操作：PC尺寸大功能多，微信办公效率高。多种方式登录，安全方便",
        "无纸化办公，差旅数据线上留存，简化行政管理，系统友好易操作，大幅削减培训沟通成本"
      ]
    }, {
      title: "公司游比价烦 质量难把控?",
      caption: "定制服务 全程质控",
      msg: "承接会奖会展 团建拓展 个人旅游",
      options: [
        "蜘蛛与上万家旅行社合作，拥有丰富的周边游 海外游及高端旅游资源",
        "特设经验丰富的定制团队为企业提供会奖旅游 团建旅游及员工旅游的定制方案",
        "专属定制管家全程跟进接待服务，确保接待质量和旅游体验"
      ]
    }, {
      title: "节省20%差旅成本",
      link: true,
      options: [
        "80%机票比其它渠道便宜20元-200元/张",
        "经济酒店价格为其它平台85折",
        "航班低价提醒功能筛选出行时间前后<br>60分钟内最低价航班"
      ]
    }];

    const memberData = [{
      title: '免费注册使用',
      msg: '注册成功即送1000元机票，激活后可使用',
      text: '免费注册',
      path: '/member/experience',
      options: [
        "不限量以会员价预订任意航班的机票",
        "不限量以会员价预订任意酒店的客房",
        "不限量预订任意火车的火车票",
        "可邀请同事共享会员价预订机票和酒店优惠",
        "下单得现金奖励",
        "(升级黄金会员享更多权益)"
      ]
    }, {
      title: '提交企业资质免费使用',
      msg: '最高100万授信额度',
      text: '申请升级',
      path: '/get-vip/platinum',
      options: [
        '不限量以白金会员价预订任意航班的机票',
        '不限量以白金会员价预订任意酒店的客房',
        '不限量预订任意火车的火车票',
        '管控内部出差情况',
        '3倍授信额度，根据资质和业务进行评估最高100万授信额度',
        '(含有所有黄金会员特权)'
      ]
    }, {
      title: '3600元年费',
      msg: '赠送1000元酒店优惠券',
      text: '申请升级',
      path: '/get-vip/gold',
      options: [
        '不限量以黄金会员价预订任意航班的机票',
        '不限量以黄金会员价预订任意酒店的客房',
        '不限量预订任意火车的火车票',
        '可邀请任意同事加入共享会员价预订机票和酒店优惠',
        '预订机票/酒店得现金奖励',
        '发起定制出行需求，获得个性化出行方案',
        '查看公司每月差旅报表',
        '专属服务顾问，解决你差旅的各种问题',
        '(含有所有普通会员特权)'
      ]
    }];

    return ctx.render('travel/index', {
      referrals,
      travelData,
      memberData
    });
  }
};
