/// <reference path="../ThirdParty/DefinitelyTyped/node/node.d.ts" />
var Configuration;
(function (Configuration) {
    Configuration.APIs = [
        {
            name: "Contacts",
            repositoryName: "webinos-api-contacts",
            specificationName: "contacts",
            keywords: ""
        },
        {
            name: "Vehicle",
            repositoryName: "webinos-api-vehicle",
            specificationName: "vehicle",
            keywords: "CAN bus, odb, simulator, vehicle, obdsim, car"
        },
        {
            name: "File",
            repositoryName: "webinos-api-file",
            //TODO: Multiple specs out of webinos http://www.w3.org/TR/FileAPI/ , http://www.w3.org/TR/file-writer-api/ , http://www.w3.org/TR/file-system-api/
            keywords: "local file systems, dropbox, virtual, read, writer, directories, files"
        },
        {
            name: "App2App",
            repositoryName: "webinos-api-app2app",
            specificationName: "app2app",
            keywords: "messaging, communication, channels, exchange message"
        },
        {
            name: "IoT Sensors - Actuators",
            repositoryName: "webinos-api-iot",
            specificationName: "actuators",
            keywords: "actuator, sensors, iot, obd, temperature, light"
        },
        {
            name: "Web Notifications",
            repositoryName: "webinos-api-webNotifications",
            specificationName: "notifications",
            keywords: "instant notifications, user interaction"
        },
        {
            name: "Device Orientation",
            repositoryName: "webinos-api-deviceOrientation",
            //TODO: out of webinos
            //specificationName: "http://www.w3.org/TR/2011/WD-orientation-event-20111201/",
            keywords: "compass, calibration, motion"
        },
        {
            name: "NFC",
            repositoryName: "webinos-api-nfc",
            specificationName: "nfc",
            keywords: "payments, interface, tag"
        },
        {
            name: "App Launcher",
            repositoryName: "webinos-api-applauncher",
            specificationName: "launcher",
            keywords: "new process, executables, start widgets"
        },
        {
            name: "Device Discovery",
            repositoryName: "webinos-api-deviceDiscovery",
            keywords: "discover devices, bluetooth, wifi, p2p, peers"
        },
        {
            name: "Geolocation",
            repositoryName: "webinos-api-geolocation",
            //TODO out of webinos specs
            keywords: "latitude, longitude, altitude, accuracy, heading, speed"
        },
        {
            name: "TV",
            repositoryName: "webinos-api-tv",
            specificationName: "tv",
            keywords: "television, setop box, remote control, streaming content"
        },
        {
            name: "Payment",
            repositoryName: "webinos-api-payment",
            specificationName: "payment",
            keywords: "wallet, shopping, simulator"
        },
        {
            name: "Events",
            repositoryName: "webinos-api-events",
            specificationName: "events",
            keywords: "messaging, communication"
        },
        {
            name: "Device status",
            repositoryName: "webinos-api-deviceStatus",
            specificationName: "devicestatus",
            keywords: "battery, cpu, memory, aspect is supported, device type"
        },
        {
            name: "Media content",
            repositoryName: "webinos-api-mediaContent",
            specificationName: "MediaContent",
            keywords: "media info, local folders, find media, metadata"
        },
        {
            name: "Media play",
            repositoryName: "webinos-api-mediaplay",
            keywords: "omx, mplayer, upnp scan, xbmc, upnp media renderer"
        }
    ];
    Configuration.Core = [
        {
            name: "Utilities",
            repositoryName: "webinos-utilities"
        },
        {
            name: "Policy",
            repositoryName: "webinos-api-policy"
        },
        {
            name: "Discovery",
            repositoryName: "webinos-api-serviceDiscovery"
        }
    ];

    Configuration.Platform = [
        {
            name: "Pzp",
            repositoryName: "webinos-pzp",
            specificationName: "webinoscore",
            keywords: "personal zone proxy, webinos"
        },
        {
            name: "Pzh",
            repositoryName: "webinos-pzh",
            keywords: "personal zone hub, webinos"
        }
    ];

    if (typeof (exports) !== "undefined") {
        exports["APIs"] = Configuration.APIs;
        exports["Core"] = Configuration.Core;
        exports["Platform"] = Configuration.Platform;
    }
})(Configuration || (Configuration = {}));
//# sourceMappingURL=configuration.js.map
