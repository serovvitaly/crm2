
Ext.define('CrmApp.view.merchant.BaseView',{
    extend: 'Ext.panel.Panel',

    title: 'Мерчанты',

    requires: [
        'CrmApp.view.merchant.BaseViewController',
        'CrmApp.view.merchant.BaseViewModel'
    ],

    controller: 'merchant-baseview',
    viewModel: {
        type: 'merchant-baseview'
    },
    layout: 'fit',
    items: [{
        layout: {
            type: 'hbox',
            pack: 'start',
            align: 'stretch'
        },
        items: [
            {
                title: 'Список партнеров',
                xtype: 'gridpanel',
                autoLoad: true,
                loadMask: true,
                requires: [
                    'Ext.toolbar.Paging',
                    'CrmApp.store.Merchants'
                ],
                flex: 1,
                columnLines: true,
                store: {
                    type: 'merchants'
                },
                columns: [
                    { text: 'Партнер',  dataIndex: 'name', flex: 1 },
                    { text: 'Сайт', dataIndex: 'site_url', flex: 1 },
                    { text: 'Часы работы', dataIndex: 'work_hours', flex: 2 },
                    { text: 'Номер телефона', dataIndex: 'phone_number', flex: 2 }
                ],
                tbar: {
                    xtype: 'pagingtoolbar',
                    displayInfo: false,
                    items: ['->', {
                        text: 'Добавить',
                        tooltip: 'Добавить нового партнера'/*,
                        toggleHandler: 'onToggleExpanded'*/
                    }]
                },
                bbar: {
                    xtype: 'pagingtoolbar',
                    displayInfo: true,
                    displayMsg: 'Displaying topics {0} - {1} of {2}',
                    emptyMsg: "No topics to display"
                }
            },
            {
                xtype: 'splitter'
            },
            {
                xtype: 'tabpanel',
                flex: 1,
                items: [
                    {
                        title: 'Описание',
                        html: 'Описание'
                    },
                    {
                        title: 'Источники данных',
                        tbar: {
                            items: [{
                                text: 'Добавить источник',
                                tooltip: 'Добавить источник данных',
                                toggleHandler: function (button, state) {
                                    //
                                }
                            }]
                        },
                        items: [{
                            xtype: 'gridpanel',
                            title: 'Список источников данных',
                            autoLoad: true,
                            columns: [
                                { text: 'Ссылка',  dataIndex: 'src', flex: 3},
                                { text: 'Тип ресурса', dataIndex: 'type', flex: 1},
                                { text: 'Активен', dataIndex: 'is_active'},
                            ],
                            requires: [
                                'CrmApp.store.MerchantsDataSources'
                            ],
                            store: {
                                type: 'merchants_data_sources'
                            },
                        }]
                    },
                ]
            }
        ]
    }]
});
