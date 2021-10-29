/*!
 * tablesort v5.2.1 (2020-06-02)
 * http://tristen.ca/tablesort/demo/
 * Copyright (c) 2020 ; Licensed MIT
*/
const SomeApp = {
    data() {
      return {
     "books": {
    id: {},
    title: {},
    author: {},
    yearpublshed: {},
    publisher: {},
    pagecount: {},
    msrp: {},
},
"selectedBook": null,
"bookForm": {}
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
        },
        postNewBook(evt) {
            // this.bookForm.studentId = this.selectedStudent.id;        
            
            // console.log("Creating!", this.bookForm);
    
            fetch('api/book/create.php', {
                method:'POST',
                body: JSON.stringify(this.bookForm),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.books = json;
                
                this.bookForm = {};
              });
          },
          postEditBook(evt) {     
            
            console.log("Updating!", this.bookForm);

            fetch('api/book/update.php', {
                method:'POST',
                body: JSON.stringify(this.bookForm),
                headers: {
                "Content-Type": "application/json; charset=utf-8"
                }
            })
            .then( response => response.json() )
            .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.books = json;
                
                this.resetBookForm();
            });
        },
        postDeleteBook(o) {
            if (!confirm("Are you sure you want to delete the book titled "+o.booktitle+"?")) {
                return;
            }
            
            fetch('api/book/delete.php', {
                method:'POST',
                body: JSON.stringify(o),
                headers: {
                "Content-Type": "application/json; charset=utf-8"
                }
            })
            .then( response => response.json() )
            .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.books = json;
                
                this.resetBookForm();
            });
        },
        selectBook(o) {
            this.selectedBook = o;
            this.bookForm = Object.assign({}, this.selectedBook);
        },

        resetBookForm() {
            this.selectedBook = null;
            this.bookForm = {};
        },
        postBook(evt) {
            if (this.selectedBook === null) {
                this.postNewBook(evt);
            } else {
                this.postEditBook(evt);
            }
          }
    },
            created() {
                this.fetchbookData();
            }
        };
        Vue.createApp(SomeApp).mount('#offerApp');



        
        

        // postOffer(evt) {
        //     if (this.selectedBook === null) {
        //         this.postNewBook(evt);
        //     } else {
        //         this.postEditBook(evt);
        //     }
        //   },