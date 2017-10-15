
Ext.define('CrmApp.view.tab.BasicTabs',{

    extend: 'Ext.tab.Panel',
    xtype: 'basic-tabs',
    /*controller: 'tab-view',*/

    requires: [
        'CrmApp.view.tab.BasicTabsController',
        'CrmApp.view.tab.BasicTabsModel'
    ],

    viewModel: {
        type: 'tab-basictabs'
    },
    
    items: [
        Ext.create('CrmApp.view.merchant.BaseView'),
    {
        title: 'Inactive Tab',
        html: 'KitchenSink.DummyText.extraLongText'
    }, {
        title: 'Disabled Tab',
        disabled: true
    }, {
        title: 'Closable Tab',
        closable: true,
        html: 'KitchenSink.DummyText.longText'
    }, {
        title: 'Another inactive Tab',
        html: 'KitchenSink.DummyText.extraLongText'
    }]
});
