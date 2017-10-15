Ext.define('CrmApp.model.Merchant', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'site_url', type: 'string' },
        { name: 'work_hours', type: 'string' },
        { name: 'phone_number', type: 'bool' }
    ]
});
