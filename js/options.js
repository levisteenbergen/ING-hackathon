// Saves options to chrome.storage
function save_options() {

    //console.log($("number-of-transactions"));
    //var nrOfTransShown = $('#number-of-transactions').val();
    console.log($('#limitNotification').val());
    chrome.storage.sync.set({
        numberOfTransactions: $('#numberOfTransactions').val()
    }, function () {
        // Update status to let user know options were saved.
        //var status = document.getElementById('status');
        //status.textContent = 'Options saved.';
        setTimeout(function () {
            //status.textContent = '';
        }, 750);
    });
}
// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
        numberOfTransactions: 4

    }, function (items) {
        $('#numberOfTransactions').val(items.numberOfTransactions);
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
//document.getElementById('save').addEventListener('click', save_options


// $("#save").click(function(){

//   $("#options").submit();

// });

$("#options").submit(function(e){
  e.preventDefault();
  //console.log($(this));
  save_options();
  return false;
})