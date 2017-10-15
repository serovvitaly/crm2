Ext.define('CrmApp.store.MerchantsDataSources', {
    extend: 'Ext.data.Store',

    alias: 'store.merchants_data_sources',

    model: 'CrmApp.model.MerchantDataSource',

    autoLoad: true,

    pageSize: 50,

    fields: [
        'src', 'type', 'is_active'
    ],

    proxy: {
        type: 'ajax',
        url: '/api/merchants_data_sources',
        reader: {
            type: 'json',
            rootProperty: 'data',
            totalProperty: 'total'
        }
    }
});
