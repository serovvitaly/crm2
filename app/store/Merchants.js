Ext.define('CrmApp.store.Merchants', {
    extend: 'Ext.data.Store',

    alias: 'store.merchants',

    model: 'CrmApp.model.Merchant',

    autoLoad: true,

    pageSize: 50,

    fields: [
        'name', 'email', 'phone'
    ],

    proxy: {
        type: 'ajax',
        url: '/api/merchant',
        reader: {
            type: 'json',
            rootProperty: 'data',
            totalProperty: 'total'
        }
    }
});
