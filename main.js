Vue.config.devtools = true;

var app = new Vue ({
  el:'#root',
  data: {
    selezione: '',
    albums: [],
    generi: [
      'Rock',
      'Pop',
      'Jazz',
      'Metal',
    ],
  },
  mounted () {
    let origine = this
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then(function (response) {
    origine.albums = response.data.response;
    console.log(origine.albums);
    });
  },
  methods: {
  }
})
