function DAO(){

    this.auth = firebase.auth();
    this.database = firebase.database();
    this.storage = firebase.storage();

    this.init = function (){
        console.log('INIT: ');

        // Reference to the /messages/ database path.
        this.messagesRef = this.database.ref('messages');
        // Make sure we remove all previous listeners.
        this.messagesRef.off();
    },

    this.loadItems = function(items) {
        console.log('Data: ')


        // Reference to the /messages/ database path.
        this.messagesRef = this.database.ref('messages');
        // Make sure we remove all previous listeners.
        this.messagesRef.off();

        // select *
        this.messagesRef.once("value", function(dataSnapshot){
            console.log(dataSnapshot.val());
        });
    },

    this.saveItem = function(item){
        this.database.ref('messages/' + item.id).set({
            "text": item.text,
            "name": item.name
        });
    },

    this.updateItem = function(item){
        var updates = {};
        updates['/messages/' + item.id] = {
            "text": item.text,
            "name": item.name
        };
        this.database.ref().update(updates);
    },

    this.removeItem = function(id){
        this.database.ref('messages/'+ id).remove();
    },

    this.getItemById = function(id){
        console.log('by id')
        var messagesRef = this.database.ref('messages/'+id);
        messagesRef.off();

        messagesRef.once('value').then(element=>{
            element=element.val();
            if (element!=null){
                result = {
                    id: element.id,
                    text: element.text,
                    name: element.name
                };
            }
            console.log(result.id + ' ' + result.name + ' ' + result.text);
        });
    }
}