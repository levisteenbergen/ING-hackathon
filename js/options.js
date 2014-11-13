var Options = {
    defaultOptions: {
        numberOfTransactions: 4,
        limitNotification: false
    },
    initialise: function () {
        chrome.storage.sync.set(defaultOptions);
    },
    saveOptions: function () {
        console.log($('#limitNotification').is(':checked'));
        chrome.storage.sync.set({
            numberOfTransactions: $('#numberOfTransactions').val(),
            limitNotification: $('#limitNotification').is(':checked')
        }, function () {
            // Update status to let user know options were saved.
            var status = $('#status');
            status.text('Opgeslagen')
            setTimeout(function () {
                status.empty();
            }, 750);
        });
    },
    restoreOptions: function () {
        chrome.storage.sync.get({
            numberOfTransactions: 4,
            limitNotification: false
        }, function (items) {
            $('#numberOfTransactions').val(items.numberOfTransactions);
            $('#limitNotification').prop('checked', items.limitNotification);
        });
    }
}
document.addEventListener('DOMContentLoaded', Options.restoreOptions);


$("#options").submit(function (e) {
    e.preventDefault();
    Options.saveOptions();
    return false;
})