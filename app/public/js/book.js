/*!
 * tablesort v5.2.1 (2020-06-02)
 * http://tristen.ca/tablesort/demo/
 * Copyright (c) 2020 ; Licensed MIT
*/
const SomeApp = {
    data() {
      return {
        books: []
      }
    },
    computed: {},
    methods: {
        prettyData(d) {
            return dayjs(d)
            .format('D MMM YYYY')
        },
        prettyDollar(n) {
            const d = new Intl.NumberFormat("en-US").format(n);
            return "$ " + d;
        },
        
        fetchbookData() {
            fetch('/api/book/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.books = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
        }
    },
            created() {
                this.fetchbookData();
            }
        };
        Vue.createApp(SomeApp).mount('#offerApp');