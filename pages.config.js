
// 抽象公共模块的配置

module.exports ={
  data: {
    menus: [
      {
        name: "Home",
        icon: "aperture",
        link: "index.html"
      },
      {
        name: "Features",
        link: "features.html"
      },
      {
        name: "About",
        link: "about.html"
      }
    ],
    pkg: require('./package.json'),
    date: new Date()
  }
}