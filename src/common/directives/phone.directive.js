/**
* Chilean PHONE module for angular
* @version v1.0.0 - 2017-08-29
* @link
* @author Jose Osorio <juvanen@gmail.com>
* @license MIT License, http://www.opensource.org/licenses/MIT
*/

(function(angular) {
 'use strict';
 function cleanPhone(_value) {
   let out = "";
   if(typeof(_value) === 'string'){
     out = _value.replace(/(\D)/g,'');
   }else if(typeof( _value) === 'number'){
     out = _value.toString();
   }
   out = out.substring(0, 11);
   out= '+'+out;
   return out;
 }

 function formatPhone(_value, _default) {
   _value = cleanPhone(_value);
   if(!_value) return _default;
   if(_value.length <= 1) return _value;

   var result = _value.slice(-12, -9) + ' ' + _value.slice(-9, -8) + ' ' +_value.slice(-8, -4) + ' ' +_value.substr(-4);

   return result;
 }

 function validatePhone(_value) {
   var validate = true;
   if(typeof _value !== 'string') {
     validate = false;
   }
   if(_value.length < 12) {
     validate = false;
   }
   return validate;
 }

 function addValidatorToNgModel(ngModel){
   var validate = function(value) {
     var valid = (value.length > 0) ? validatePhone(value) : true;
     ngModel.$setValidity('phone', valid);
     return valid;
   };

   var validateAndFilter = function(_value) {
     _value = cleanPhone(_value);
     return validate(_value) ? _value : null;
   };

   var validateAndFormat = function(_value) {
     _value = cleanPhone(_value);
     validate(_value);
     return formatPhone(_value);
   };

   ngModel.$parsers.unshift(validateAndFilter);
   ngModel.$formatters.unshift(validateAndFormat);
 }

 function formatPhoneOnWatch($scope, ngModel) {
   $scope.$watch(function() {
     return ngModel.$viewValue;
   }, function() {
     ngModel.$setViewValue(formatPhone(ngModel.$viewValue));
     ngModel.$render();
   });
 }

 function formatPhoneOnBlur($element, ngModel) {
   $element.on('blur', function(){
     ngModel.$setViewValue(formatPhone(ngModel.$viewValue));
     ngModel.$render();
   });
 }

 angular.module('medipass.phone', [])

   .directive('ngPhone', function() {
     return {
       restrict: 'A',
       require: 'ngModel',
       link: function($scope, $element, $attrs, ngModel) {
         if ( typeof $attrs.phoneFormat === 'undefined' ) {
           $attrs.phoneFormat = 'live';
         }

         addValidatorToNgModel(ngModel);

         switch($attrs.phoneFormat) {
           case 'live':
             formatPhoneOnWatch($scope, ngModel);
             break;
           case 'blur':
             formatPhoneOnBlur($element, ngModel);
             break;
         }
       }
     };
   })

   .filter('phone', function() {
     return formatPhone;
   })

   .constant('PhoneHelper', {
     format: formatPhone,
     clean: cleanPhone,
     validate: function(value) {
       return validatePhone(cleanPhone(value));
     }
   });
 })(angular);
