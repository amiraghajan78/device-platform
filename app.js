const $ = document;

let result = $.querySelector('#result');

const UA = navigator.userAgent;
const devices = {
    iPad: /iPad/.test(UA),
    iPhone: /iPhone/.test(UA),
    Android: /Android/.test(UA),
    windows: /Windows/.test(UA),
};
for (device in devices) {
    if (devices[device]) {
        result.innerHTML = device;
    };
};
