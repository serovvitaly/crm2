Ext.define('CrmApp.view.merchant.BaseViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.merchant-baseview',

    onToggleExpanded: function(){
        alert(200);
    },

    showMerchantDataSourceWin: function () {
        var merchantsGrid = this.lookupReference('merchantsGrid');
        var selectionMerchants = merchantsGrid.getSelection();

        if (selectionMerchants.length < 1) {
            Ext.Msg.alert('Ошибка', 'Не выбран ни один партнер');
            return;
        }
        
        var merchant = selectionMerchants[0];

        Ext.create('Ext.window.Window', {
            title: 'Новый источник данных',
            reference: 'popupWindow',
            width: 800,
            layout: 'fit',
            items: {
                xtype: 'form',
                reference: 'windowForm',
                url: '/api/merchant_data',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                bodyPadding: 10,
                border: false,
                items: [{
                    xtype: 'hidden',
                    name: 'merchant_id',
                    value: merchant.id
                }, {
                    xtype: 'textarea',
                    name: 'src',
                    fieldLabel: 'URL',
                    vtype: 'url',
                    allowBlank: false
                }, {
                    xtype: 'combobox',
                    name: 'type',
                    width: 200,
                    fieldLabel: 'Тип',
                    queryMode: 'local',
                    displayField: 'name',
                    valueField: 'val',
                    store: Ext.create('Ext.data.Store', {
                        fields: ['val', 'name'],
                        data: [
                            {'name': 'Booking.com', 'val': 'booking'},
                            {'name': 'TripAdvisor.ru', 'val': 'tripadvisor'}
                        ]
                    }),
                    allowBlank: false
                }],
                buttons: [{
                    text: 'Сохранить',
                    handler: 'onFormSave'
                }, {
                    text: 'Отмена',
                    handler: 'onFormCancel'
                }]
            }
        }).show();
    }

});
