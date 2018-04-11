/*
 * Programming Quiz: Facebook Friends (7-5)
 */

var facebookProfile = {
    name: "Nick",
    friends: 342,
    messages: ["These are messages from Facebook", "Seriously, look at these messages", "Check this out"],
    postMessage: function postMessage(message) {
        var posting = facebookProfile.messages;
        posting.push(message);
        return posting;
    },
    deleteMessage: function deleteMessage(index) {
        var deleting = facebookProfile.messages;
        deleting.splice(index,1);
        return deleting;
    },
    addFriend: function addFriend(add) {
        facebookProfile.friends++;
        return facebookProfile.friends;
    },
    removeFriend: function removeFriend(remove) {
        facebookProfile.friends--;
        return facebookProfile.friends;
    }
};
