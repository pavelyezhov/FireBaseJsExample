function readFromFireBaseAndLogData(){

    var dao = new DAO();
    dao.init();

    var newItem = {
        id: 13,
        name: 'Pavel',
        text: 'Happy new year!'
    };

    var itemForUpdate = {
        id: 1,
        name: 'Pavel updated',
        text: 'Updated text from Pavel'
    };

    dao.saveItem(newItem);
    dao.updateItem(itemForUpdate);
    dao.removeItem(5);
    dao.loadItems([]);
    dao.getItemById(12);


}

