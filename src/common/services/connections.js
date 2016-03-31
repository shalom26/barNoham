/**
 * Created by Shalom on 1/25/2016.
 */

'use strict';


angular.module('bn.connections')

	.factory('Connections', function ($http) {
		//function that builds URL

		function buildURL(entityType, id, attrs, action) {
			var URI = "/api/";
			// var URI = 'http://api.sdservices.co.il/api/';
			var strAttrs;
			var url = URI + entityType;
			if (action) url += '/' + action;
			if (id) url += '/' + id;
			if (attrs) {
				attrs.forEach(function (att) {

					strAttrs += att.key + "=" + att.value + "&"
				});
				strAttrs = strAttrs.substr(strAttrs.length - 1);

				//[{"id":23},{"ret":"kjhdkj"}]
				//id=23&ret=kjhfdkj
				if (strAttrs.length > 0) {
					url += "?" + strAttrs;

				}
			}
// url encoding
//                url = encodeURIComponent(url);
			return url
		}

		return {
			get: function (controller, attr) {

				var url = buildURL(controller, null, attr);

				return $http({
					method: 'get',
					url: url,
					responseType: 'json'
				}).then(function (res) {
					return res.data
				});
			},

			update: function (obj, controller, attr) {

				var url = buildURL(controller, null, attr, 'update');

				return $http({
					method: 'post',
					url: url,
					data: obj,
					responseType: 'json'
				}).then(function (res) {
					console.log('res', res);
					return res.data
				});
			},

			create: function (obj, controller, attr) {

				var url = buildURL(controller, null, attr);

				return $http({
					method: 'post',
					url: url,
					data: obj,
					responseType: 'json'
				}).then(function (res) {
					return res.data
				});
			},
			delete: function (obj, entityType, attrs) {

				var url = buildURL(entityType, obj.id, attrs, 'delete');

				return $http({
					method: 'get',
					url: url,
					//data: obj
					//responseType: 'json'
				}).then(function (res) {
					console.log('resDelete', res);
					return res.data
				});

			}

		}
	});




