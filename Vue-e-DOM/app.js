new Vue ({
  el: '#app',
  data: {
    title: 'Hello World',
    link: 'https://google.com',
    finishedLink: '<a href="https://google.com" target="_blank">Google</a>'
  },
  methods: {
    sayHello: function () {
      return this.title;
    }
  }
})
