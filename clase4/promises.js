// Promises based
function loadTimeline() {
    return getUsers() .then( function( users ) {
        return getPosts( filteredUsers(users) ).then( function( posts ) {
            showTimeline( posts );
            return posts;
        });
    }) .catch( error ) {
        handleError(error);
    });
}

// Refactored Promises based
function loadTimeline() {
    return getUsers()
        .then( function( users ) {
            return getPosts(filteredUsers(users))
        })
        .then( function( posts ) {
            showTimeline( posts );
            return posts;
        })
        .catch( function (error) {
            handleError(error);
        });
}