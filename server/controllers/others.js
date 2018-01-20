'use strict';

const OTHER_NAV = [{
  name: '公司简介',
  path: '/others/index.html',
}, {
  name: '发展历程',
  path: '/others/experiences.html'
}, {
  name: '核心业务',
  path: '/others/services.html'
}, {
  name: '企业文化',
  path: '/others/culture.html'
}, {
  name: '商务合作',
  path: '/others/business.html'
}, {
  name: '加入我们',
  path: '/others/team.html'
}, {
  name: '联系我们',
  path: '/others/contact.html'
}];

const recruitments = [{
  id: 'operation',
  label: '运营',
  active: 1,
  value: [{
    label: '高级运营经理',
    releaseTime: '发布时间：2018年01月01日',
    introductions: [
      '职位月薪：18,000-25,000元/月',
      '工作地点：深圳-南山区',
      '工作性质：全职',
      '最低学历：本科',
      '工作经验：3-5年',
      '招聘人数：1人'
    ],
    responsibilities: [{
      label: '工作职责：',
      value: [
        '1. 负责蜘蛛差旅平台（B2B）运营方案的制定和推进，带领团队完成运营目标；',
        '2. 协调内外部资源，通过各种运营手段推动企业用户的拉新和盘活；',
        '3. 与产品团队紧密配合，完善平台功能，提升用户体验；',
        '4. 对平台各项运营数据进行深度分析，梳理阶段性运营策略；',
        '5. 参与平台阶段性战略规划，提出可行性思路。'
      ]
    }, {
      label: '任职要求：',
      value: [
        '1. 本科以上学历，至少5年以上互联网行业运营经验，熟悉移动互联网运营和传播；',
        '2. 对B2B平台的运营有自己的理解，较强运营思路与实战经验；',
        '3. 较强的职业素养与团队精神，较好的管理与资源整合能力，并能影响他人；',
        '4. 具备良好的数据分析能力，优秀的文案撰写能力，沟通逻辑思维佳，接地气. 有创新意识；',
        '5. 熟悉企业差旅行业者优先。'
      ]
    }]
  }]
}, {
  id: 'development',
  label: '研发',
  value: [{
    label: '高级java工程师',
    releaseTime: '发布时间：2018年01月01日',
    introductions: [
      '职位月薪：20,000-30,000元/月',
      '工作地点：深圳-南山区',
      '工作性质：全职',
      '最低学历：本科',
      '工作经验：5年以上',
      '招聘人数：1人'
    ],
    responsibilities: [{
      label: '工作职责：',
      value: [
        '1. 负责/参与公司整体技术架构设计. 重构. 优化，根据业务规划及技术规划制定应用架构方案；',
        '2. 负责/参与产品平台系统的架构设计，系统设计. 详细设计，并带领整个JAVA开发团队进行实现；',
        '3. 主导/参与解决重点技术难题，持续优化核心系统在高用户并发. 海量数据情况下的高处理性能；',
        '4. 主导/参与核心功能代码的重构和调优，负责维护整个产品技术平台的核心模块；',
        '5. 主导JAVA团队的各项管理，全程负责开发计划的制定和实施；',
        '6. 为公司的JAVA团队制定专业的培训与指导方案，来提高成员的技术水平；',
        '7. 协助公司CTO管理研发部门/开发团队的各项事务。'
      ]
    }, {
      label: '任职要求：',
      value: [
        '1. 7年以上大型JAVA项目的开发经验，熟悉在线电商/旅游等业务平台的核心功能；',
        '2. 具有扎实的面向对象编程基础，熟悉各类常用的设计模式；',
        '3. 精通Java开发的常用框架，如Struts. Hibernate. Spring MVC. MyBatis等；',
        '4. 掌握常用的关系型数据库，如Mysql. Oracle. SQL Server等，并对数据处理和分析有丰富经验；',
        '5. 熟悉常见NoSQL数据库，如MongoDB等；',
        '6. 精通各类常用的Web服务器，如WebLogic. JBoss. Tomcat等；',
        '7. 精通各种大型平台系统中常用的技术架构，如消息机制，SOA，SSO，数据搜索等；',
        '8. 精通高并发. 高性能的分布式系统的设计及应用，熟悉性能调优；',
        '9. 熟悉虚拟化，云计算，大数据等最新前沿技术趋势；',
        '10. 3年以上敏捷开发的项目管理经验；',
        '11. 良好的沟通. 学习及团队协作能力。'
      ]
    }]
  }, {
    label: 'web前端工程师',
    releaseTime: '发布时间：2018年01月01日',
    introductions: [
      '职位月薪：18,000-25,000元/月',
      '工作地点：深圳-南山区',
      '工作性质：全职',
      '最低学历：本科',
      '工作经验：3-5年',
      '招聘人数：1人'
    ],
    responsibilities: [{
      label: '工作职责：',
      value: [
        '1. 负责WEB网站以及手机HTML页面构建；',
        '2. 使用html&css，高质量的完成静态页面的制作，保证项目的按时完成；',
        '3. 根据产品需求，负责整体页面结构及样式层结构设计. 优化；',
        '4. 使用页面脚本与后端程序工程师配合完成WEB页面前后台交互逻辑；',
        '5. 认真测试，保证工作输出结果。'
      ]
    }, {
      label: '任职要求：',
      value: [
        '1. 计算机相关专业毕业；',
        '2. 3年以上网站前端设计工作经验，有互联网项目作品优先；',
        '3. 熟练掌握html/css，页面布局逻辑清晰. 命名规范. 代码冗余率低. 有良好延展性且便于维护；',
        '4. 具备像素级还原设计图，兼容各主流浏览器的能力，熟知各浏览器特性并熟练应用；',
        '5. 熟悉DIV+CSS布局和HTML5的新特性，在视觉和效率方面实现最优；',
        '6. 精通photoshop/Flash/Dreamweaver/Illustrator/Fireworks等设计软件工具；',
        '7. 精通网页脚本语言（jQuery），对后端语言有一定了解，能够按照设计图准确呈现符合逻辑. 便于开发. 循环的样式和页面结构；',
        '8. 项目经验丰富. 有大型交互类网站工作经验（博客. 电商. 微博等），有独立完成大型产品的工作能力，对响应式设计有较深入的理解；',
        '9. 对互联网以及业内新动向有一定的关注度，有团队合作精神，善于总结分享。'
      ]
    }]
  }]
}, {
  id: 'sales',
  label: '销售',
  value: [{
    label: '高级销售经理',
    releaseTime: '发布时间：2018年01月01日',
    introductions: [
      '职位月薪：10,000-15,000元/月',
      '工作地点：深圳/北京/上海',
      '工作性质：全职',
      '最低学历：本科',
      '工作经验：3-5年',
      '招聘人数：3-5人'
    ],
    responsibilities: [{
      label: '工作职责：',
      value: [
        '1. 挖掘并跟踪潜在客户，介绍并销售蜘蛛旅游产品及服务；',
        '2. 利用上门拜访. 客户见面会等多元化的方式进行销售，为客户提供专业化解决方案；',
        '3. 根据客户的不同需求，有针对性的为客户设计合适的产品和服务。'
      ]
    }, {
      label: '任职要求：',
      value: [
        '1. 具备B2B行业销售经验，有网络差旅服务销售经验优先；',
        '2. 4年以上销售经验，具备丰富的团队管理经验；',
        '3. 团队销售业绩出色；',
        '4. 有激情，抗压能力强；',
        '5. 本科以上学历，能力优秀者可放宽该条件；',
        '6. 男女不限。'
      ]
    }]
  }]
}];

module.exports = {

  index(ctx) {
    return ctx.render('others/index', {
      OTHER_NAV
    });
  },

  experiences(ctx) {
    return ctx.render('others/experiences', {
      OTHER_NAV
    });
  },

  services(ctx) {
    return ctx.render('others/services', {
      OTHER_NAV
    });
  },

  culture(ctx) {
    return ctx.render('others/culture', {
      OTHER_NAV
    });
  },

  business(ctx) {
    return ctx.render('others/business', {
      OTHER_NAV
    });
  },

  team(ctx) {
    return ctx.render('others/team', {
      OTHER_NAV,
      recruitments
    });
  },

  contact(ctx) {
    return ctx.render('others/contact', {
      OTHER_NAV
    });
  }

};
