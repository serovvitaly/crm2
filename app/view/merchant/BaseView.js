
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
                reference: 'merchantsGrid',
                requires: [
                    'Ext.toolbar.Paging',
                    'CrmApp.store.Merchants'
                ],
                flex: 1,
                columnLines: true,
                store: {
                    type: 'merchants'
                },
                listeners: {
                    rowclick: function (self, record, element, rowIndex, e, eOpts) {
                        var sourceDataStore = Ext.getStore('merchantsDataSourcesStore');
                        sourceDataStore.filter('merchant_id', record.id);
                        sourceDataStore.load();
                    }
                },
                columns: [{
                        text: '#',
                        dataIndex: 'id',
                        flex: 1,
                        align: 'left'
                    }, {
                        text: 'Партнер',
                        dataIndex: 'name',
                        flex: 2,
                        align: 'left'
                    }, {
                        text: 'Сайт',
                        dataIndex: 'site_url',
                        flex: 2,
                        xtype: 'templatecolumn',
                        tpl: '<a href="{site_url}" target="_blank">{site_url}</a>',
                        align: 'left'
                    },
                    { text: 'Оборот', dataIndex: 'total_sum', flex: 1 },
                    { text: 'Количество', dataIndex: 'total_count', flex: 1 }
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
                flex: 2,
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
                                handler: 'showMerchantDataSourceWin'
                            }]
                        },
                        items: [{
                            xtype: 'gridpanel',
                            title: 'Список источников данных',
                            autoLoad: false,
                            columns: [
                                { text: 'Ссылка',  dataIndex: 'src', flex: 3},
                                { text: 'Тип ресурса', dataIndex: 'type', flex: 1},
                                {
                                    text: 'Активен',
                                    dataIndex: 'is_active',
                                    editor: {
                                        xtype: 'checkbox',
                                        cls: 'x-grid-checkheader-editor'
                                    }
                                }
                            ],
                            requires: [
                                'CrmApp.store.MerchantsDataSources'
                            ],
                            store: {
                                type: 'merchants_data_sources'
                            }
                        }]
                    }
                ]
            }
        ]
    }]
});
