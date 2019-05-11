Vue.use(SocialSharing);
var app = new Vue({
  el: '#app',
  data () {
    return {
        catioros: null
    }
  },
  methods:{
    getCatioro: function() {
      axios.get('https://dog.ceo/api/breeds/image/random/30')
           .then(response => (this.catioros = response.data.message))
           .catch(function (error) {
             // handle error
             console.log(error);
           })
    },
    scrollToTop() {
          window.scrollTo(0,0);
     },
     getCatioroAndScrollTop() {
       this.getCatioro();
       this.scrollToTop();
     }
  },
  mounted(){
    this.getCatioro()
  }
})
