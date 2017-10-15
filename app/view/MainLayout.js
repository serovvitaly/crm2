
Ext.define('CrmApp.view.MainLayout',{
    extend: 'Ext.panel.Panel',

    requires: [
        'CrmApp.view.MainLayoutController',
        'CrmApp.view.MainLayoutModel',
        'Ext.layout.container.VBox',
        'CrmApp.view.tab.BasicTabs'
    ],

    controller: 'mainlayout',
    viewModel: {
        type: 'mainlayout'
    },

    xtype: 'layout-vertical-box',

    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },
    items: [
        {
            title: 'Админко',
            tools: [
                { type: 'pin' },
                { type: 'refresh' },
                { type: 'search' },
                { type: 'save' }
            ]
        },
        {
            xtype: 'basic-tabs',
            flex: 1
        }
    ]
});
