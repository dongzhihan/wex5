define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var pick = window.pickMessage;
	var Model = function() {
		this.user = justep.Bind.observable("用");
		this.name = justep.Bind.observable("");
		this.pickName = justep.Bind.observable("");
		this.Efficiency = justep.Bind.observable("");
		this.time = justep.Bind.observable("");
		this.lostQty = justep.Bind.observable("");
		this.pickQty = justep.Bind.observable("");
		this.qty = justep.Bind.observable("");
		this.BatchNo = justep.Bind.observable("");
		this.pickCar = justep.Bind.observable("");
		this.pickType = justep.Bind.observable("");
		this.nextStorageLocation = justep.Bind.observable("");
		this.callParent();

	};

	Model.prototype.bottom1Click = function(event) {
		this.comp('windowReceiveruser').windowEnsure();
	};

	Model.prototype.button10Click = function(event) {
		this.comp('windowReceiveruser').windowEnsure();
	};

	Model.prototype.modelLoad = function(event) {
		pick = window.pickMessage;
		this.name.set(sessionStorage["working"])

		// this.Efficiency.set()
		// this.time= justep.Bind.observable("");
		this.pickType.set(pick.pickType)
		this.lostQty.set(pick.lostQty);
		this.pickQty.set(pick.qty - pick.lostQty);
		this.qty.set(pick.qty)
		this.BatchNo.set(pick.BatchNo)
		this.pickCar.set(pick.pickCar)
		if (pick.picks.next != null) {
			this.nextStorageLocation.set(pick.picks.next.locationName)
		} else {
			this.nextStorageLocation.set("无")
		}
	};

	return Model;
});