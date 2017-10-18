Ext.define('CrmApp.model.MerchantDataSource', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'src', type: 'string' },
        { name: 'type', type: 'string' },
        { name: 'is_active', type: 'bool' },
        { name: 'merchant_id', reference: 'CrmApp.model.Merchant' }
    ]
});
