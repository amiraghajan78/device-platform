## Get Device Platform
<p>
    This is an app to get different device platform. You can see how to do this in the code snippet below.
</p>

```javascript
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
```