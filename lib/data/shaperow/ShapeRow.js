﻿Xr.data = Xr.data || {};

/**  
 * @classdesc 공간 데이터 Row에 대한 부모 클래스입니다.
 * @class
 * @param {int} id - 공간 데이터 Row에 대한 고유 ID
 * @param {Xr.data.IShapeData} shapeData - 공간 데이터 Row의 실제 구체적인 데이터에 대한 클래스
 * @copyright [(주)지오서비스]{@link http://www.geoservice.co.kr}
 * @license LGPL
 */
Xr.data.ShapeRow = Xr.Class({
	name: "ShapeRow",

    construct: function (/* int */ fid, /* IShapeData */ shapeData) {
        if (arguments[0] === __XR_CLASS_LOADING_TIME__) return; // for preventing Error in Xr.Class

		this._fid = fid;
		this._shapeData = shapeData;
	},
 	
	methods: {
		/* int */ fid: function() {
			return this._fid;
		},
		
	    /* IShapeData */ shapeData: function () {
			return this._shapeData; 
		}
	}
});