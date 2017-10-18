Ext.define('CrmApp.store.MerchantsDataSources', {
    extend: 'Ext.data.Store',

    alias: 'store.merchants_data_sources',

    storeId: 'merchantsDataSourcesStore',

    model: 'CrmApp.model.MerchantDataSource',

    autoLoad: false,

    pageSize: 50,

    fields: [
        'src', 'type', 'is_active'
    ],

    proxy: {
        type: 'ajax',
        url: '/api/merchant_data_source',
        reader: {
            type: 'json',
            rootProperty: 'data',
            totalProperty: 'total'
        }
    }
});
