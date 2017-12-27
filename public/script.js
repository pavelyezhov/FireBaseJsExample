function readFromFireBaseAndLogData(){
    console.log('Data: ')
    this.auth = firebase.auth();
    this.database = firebase.database();
    this.storage = firebase.storage();

    // Reference to the /messages/ database path.
    this.messagesRef = this.database.ref('messages');
    // Make sure we remove all previous listeners.
    this.messagesRef.off();
    this.messagesRef.once("value", function(dataSnapshot){
        console.log(dataSnapshot.val());
    });
}

