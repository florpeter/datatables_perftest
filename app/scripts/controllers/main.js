'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('MainCtrl', function ($scope, $resource, DTOptionsBuilder, DTColumnDefBuilder, DTColumnBuilder) {
    
    var vm = this;
    
    vm.dtOptions = DTOptionsBuilder.fromSource('data/objects_lite.json')
        .withPaginationType('simple_numbers')
        .withDisplayLength(50)
        .withOption('lengthMenu', [[10, 25, 50, 2000, -1],[10, 25, 50, 2000, "All"]])
    
    vm.dtColumns = [
       DTColumnBuilder.newColumn('SoldTo').withTitle('Sold To #'),
       DTColumnBuilder.newColumn('ShipTo').withTitle('Ship To #'),
       DTColumnBuilder.newColumn('SoldToName').withTitle('Ship To Name'),
       DTColumnBuilder.newColumn('CustomerPO').withTitle('Customer PO #'),
       DTColumnBuilder.newColumn('B2BOrder').withTitle('B2B Order #'),
       DTColumnBuilder.newColumn('SalesOrderNumber').withTitle('Sales Order #'),
       DTColumnBuilder.newColumn('OrderDate').withTitle('Order Date'),
       DTColumnBuilder.newColumn('ShipDate').withTitle('Ship Date'),
       DTColumnBuilder.newColumn('CancelDate').withTitle('Cancel Date'),
       DTColumnBuilder.newColumn('OrderType').withTitle('Order Type'),
       DTColumnBuilder.newColumn('PurchaseOrderType').withTitle('PO Type'),
       DTColumnBuilder.newColumn('OrderReason').withTitle('Order Reason'),
       DTColumnBuilder.newColumn('Division').withTitle('Division'),
       DTColumnBuilder.newColumn('Rep_Name').withTitle('Sales Rep'),
       DTColumnBuilder.newColumn('FactoryDirect').withTitle('Factory Direct Shipment'),
       DTColumnBuilder.newColumn('FactoryPO').withTitle('Factory PO #'),
       DTColumnBuilder.newColumn('ProductDivision').withTitle('Product Division'),
       DTColumnBuilder.newColumn('OrderLine').withTitle('Item'),
       DTColumnBuilder.newColumn('Material').withTitle('Style'),
       DTColumnBuilder.newColumn('Description').withTitle('Description'),
       DTColumnBuilder.newColumn('Color').withTitle('Color'),
       DTColumnBuilder.newColumn('TotalOrderQty').withTitle('Total Order Qty'),
       DTColumnBuilder.newColumn('OpenQty').withTitle('Open Qty'),
       DTColumnBuilder.newColumn('UnavailableQty').withTitle('Unvailable Qty'),
       DTColumnBuilder.newColumn('AllocatedQty').withTitle('Allocated Qty'),
       DTColumnBuilder.newColumn('InvoicedQty').withTitle('Invoiced Qty'),
       DTColumnBuilder.newColumn('FutureQty').withTitle('Future Qty'),
       DTColumnBuilder.newColumn('DeliveryQty').withTitle('Delivery Qty'),
       DTColumnBuilder.newColumn('ShippedQty').withTitle('Shipped Qty'),
       DTColumnBuilder.newColumn('LastInvoiceNo').withTitle('Latest Invoice #'),
       DTColumnBuilder.newColumn('TotalOrderAmount').withTitle('Total Order Cost'),
       DTColumnBuilder.newColumn('TotalAmountShipment').withTitle('Total Cost of Shipment'),
       DTColumnBuilder.newColumn('TotalFreightCharge').withTitle('Total Freight Charge'),
       DTColumnBuilder.newColumn('LatestETA').withTitle('Latest ETA'),
       DTColumnBuilder.newColumn('LatestDeliveryNoteDate').withTitle('Latest Delivery Note Date'),
       DTColumnBuilder.newColumn('LatestWarehouseStatus').withTitle('Latest Warehouse Status'),
       DTColumnBuilder.newColumn('ScheduledFactoryShipDate').withTitle('Scheduled Factory Ship Date')
    ];
    
    
  });
