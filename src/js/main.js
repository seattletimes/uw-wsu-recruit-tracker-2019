require("./lib/social");
require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
require("angular");

var app = angular.module("uw-wsu-recruits", []);

app.controller("uwController", ["$scope", function($scope) {
  $scope.recruits = huskiesData;

  $scope.headers = [
    { title: "Name", short: "uwlastname" },
    { title: "Position", short: "uwposition" },
    { title: "Rating", short: "uwstars" },
    { title: "Height", short: "uwheight" },
    { title: "Weight", short: "uwweight" },
    { title: "School", short: "uwschool" },
    { title: "Hometown", short: "uwhometown" },
    { title: "Signed?", short: "uwsigned" }
  ];

  $scope.selected = $scope.headers[0];
  $scope.sortOrder = -1;

  $scope.sortTable = function(header) {
    if (header.short == "offers") return;

    if ($scope.selected == header) {
      $scope.sortOrder *= -1;
    } else {
      $scope.selected = header;
      $scope.sortOrder = 1;
    }

    $scope.recruits.sort(function(a, b) {
      a = a[header.short] || ( header.short == "rivals" ? 999999999 : "ZZZZZZZZZZ" );
      b = b[header.short] || ( header.short == "rivals" ? 999999999 : "ZZZZZZZZZZ" );

      if (a > b) {
        return 1 * $scope.sortOrder;
      } else if (a < b) {
        return -1 * $scope.sortOrder;
      } else if (a == b) {
        return 0;
      }
    });
  };
  $scope.sortTable($scope.selected);
}]);

app.controller("wsuController", ["$scope", function($scope) {
  $scope.recruits = cougarsData;

  $scope.headers = [
    { title: "Name", short: "wsulastname" },
    { title: "Position", short: "wsuposition" },
    { title: "Rating", short: "wsustars" },
    { title: "Height", short: "wsuheight" },
    { title: "Weight", short: "wsuweight" },
    { title: "School", short: "wsuschool" },
    { title: "Hometown", short: "wsuhometown" },
    { title: "Signed?", short: "wsusigned" }
  ];

  $scope.selected = $scope.headers[0];
  $scope.sortOrder = -1;

  $scope.sortTable = function(header) {
    if (header.short == "offers") return;

    if ($scope.selected == header) {
      $scope.sortOrder *= -1;
    } else {
      $scope.selected = header;
      $scope.sortOrder = 1;
    }

    $scope.recruits.sort(function(a, b) {
      a = a[header.short] || ( header.short == "rivals" ? 999999999 : "ZZZZZZZZZZ" );
      b = b[header.short] || ( header.short == "rivals" ? 999999999 : "ZZZZZZZZZZ" );

      if (a > b) {
        return 1 * $scope.sortOrder;
      } else if (a < b) {
        return -1 * $scope.sortOrder;
      } else if (a == b) {
        return 0;
      }
    });
  };
  $scope.sortTable($scope.selected);
}]);

var Share = require("share");
new Share(".share-bottom", {
  ui: {
    flyout: "top left"
  }
});
