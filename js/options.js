var Options = {
    defaultOptions: {
        numberOfTransactions: 4,
        limitNotification: false,
        paymentUnit: "euro"
    },
    saveOptions: function () {
        console.log($('#limitNotification').is(':checked'));
        chrome.storage.sync.set({
            numberOfTransactions: $('#numberOfTransactions').val(),
            limitNotification: $('#limitNotification').is(':checked')
        }, function () {
            var status = $('#status');
            status.text('Opgeslagen');
            setTimeout(function () {
                status.empty();
            }, 750);
        });
    },
    getOptions: function(success) {
        chrome.storage.sync.get(Options.defaultOptions, function (items) {
            success(items);
        });
    },
    restoreOptions: function () {
        chrome.storage.sync.get(Options.defaultOptions, function (items) {
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