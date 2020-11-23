function attachEventsListeners() {
    document.getElementById("convert").addEventListener("click", (e) => {
        const objFromMeters = {
            km: function (m) {
                return m / 1000;
            },
            m: function (m) {
                return m;
            },
            cm: function (m) {
                return m / 0.01;
            },
            mm: function (m) {
                return m / 0.001;
            },
            mi: function (m) {
                return m / 1609.34;
            },
            yrd: function (m) {
                return m / 0.9144;
            },
            ft: function (m) {
                return m / 0.3048;
            },
            in: function (m) {
                return m / 0.0254;
            }
        };


        const objToMeters = {
            km: function (km) {
                return km * 1000;
            },
            m: function (m) {
                return m;
            },
            cm: function (cm) {
                return cm * 0.01;
            },
            mm: function (mm) {
                return mm * 0.001;
            },
            mi: function (mi) {
                return mi * 1609.34;
            },
            yrd: function (yrd) {
                return yrd * 0.9144;
            },
            ft: function (ft) {
                return ft * 0.3048;
            },
            in: function (inch) {
                return inch * 0.0254;
            }
        };


        let from = document.getElementById("inputUnits").value;
        let inputDistance = Number(document.getElementById("inputDistance").value);
        let to = document.getElementById("outputUnits").value;

        let result;
        if (to === "m") {
            result = objToMeters[from](inputDistance);
        } else {
            let metres = objToMeters[from](inputDistance);
            result = objFromMeters[to](metres);
        }
        
        document.getElementById("outputDistance").value = result;
    });
}
/*if (from === "m") {
            console.log(objFromMeters[to](inputDistance));
        }*/



/*
if (from === "km") {
            if (from === to) {
                result = inputDistance;
            }
        } else if (from === "m") {
            if (from === to) {
                result = inputDistance;
            }
        } else if (from === "cm") {
            if (from === to) {
                result = inputDistance;
            }
        } else if (from === "mm") {
            if (from === to) {
                result = inputDistance;
            }
        } else if (from === "mi") {
            if (from === to) {
                result = inputDistance;
            }
        } else if (from === "yrd") {
            if (from === to) {
                result = inputDistance;
            }
        } else if (from === "ft") {
            if (from === to) {
                result = inputDistance;
            }
        } else if (from === "in") {
            if (from === to) {
                result = inputDistance;
            }
        }
*/