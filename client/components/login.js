angular.module('coinsaver')
.component('login', {
  bindings: {
  },
  controller() {
  },
  template: `
  <div>
    <html ng-app="sampleApp">
      <body ng-controller="SampleCtrl">
      <!-- anything typed in here is magically saved to our Firebase database! -->
      <input type="text" ng-model="data.text"/>
      <!-- all changes from our Firebase database magically appear here! -->
      <h1>You said: {{ data.text }}</h1>
    </body>
    </html>
  </div>
`,
});
