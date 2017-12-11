angular.module('coinsaver')
  .component('transactions', {
    bindings: {
      info: '<',
    },
    controller: function () {
      const ctrl = this;

      this.toggle = {};
    },
    template: `
    <md-list flex>
      <md-list-item ng-click="$ctrl.toggle.list1 = !$ctrl.toggle.list1">
        <md-icon>local_atm</md-icon>
        <span flex><b>{{$ctrl.info.name}} ({{$info.totalRound}}) ({{$info.totalSum}})</b></span>
        <md-icon ng-show="!$ctrl.toggle.list1">expand_more</md-icon>
        <md-icon ng-show="$ctrl.toggle.list1">expand_less</md-icon>
      </md-list-item>
      <md-list-item ng-show="$ctrl.toggle.list1">Date, Transation, Rounded Amount</md-list-item>
      <md-list-item ng-repeat="item in $ctrl.info.transactions" ng-show="$ctrl.toggle.list1">
        <span flex-offset="5">{{item.date}}, {{item.name}}, {{item.round}}</span>
      </md-list-item>
   </md-list>
  `,
  });
