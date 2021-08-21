// 1 open connection with firebase
// bool = signedIN
// User's google image and name and rating
// background stores signed in user's history previous contests --top 'n'
// backgrounds stores question if contest is running (check it from current time)
// 
// 2 create function for posting data to table


// (amarnath)
let user_signed_in = false;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse){
    if(request.message === 'is_user_signed_in'){
        sendResponse({
            message: 'success',
            payload: user_signed_in
        });
    } else if( request.message === 'sign_out'){
        user_signed_in = false;
        sendResponse({message: 'success'});
    }
    return true;
})

// (ashwin)
// another dashboard Page and load according the variable signedIN,username,img-link, score
// independent timer
// some buttons related to signin/signout


// independent timer in leaderBoard



chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // listening to content message
    console.log(message);
    // POST it to firebase
    // send info questionBoards page (Khushi)
    
});





