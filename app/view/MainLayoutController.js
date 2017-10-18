Ext.define('CrmApp.view.MainLayoutController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainlayout',

    onFormSave: function() {
        var formPanel = this.lookupReference('windowForm'),
            form = formPanel.getForm();
        if (form.isValid()) {
            var sourceDataStore = Ext.getStore('merchantsDataSourcesStore');
            sourceDataStore.add(form.getValues());
            sourceDataStore.save();
            this.onFormCancel();
            /*
            var sourceData = Ext.create(
                'MerchantDataSource',
                {
                    src: 'Ed Spencer',
                    type: 'ed@sencha.com'
                }
            );
            sourceData.save();*/

            //form.submit();
            //form.reset();
        }
    },

    onFormCancel: function() {
        this.lookupReference('popupWindow').destroy();
    }

});
