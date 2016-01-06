/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'fond',
                            type: 'image',
                            rect: ['0', '0', '1103px', '406px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fond.jpg",'0px','0px']
                        },
                        {
                            id: 'textimg3Copy',
                            type: 'image',
                            rect: ['753px', '0', '347px', '406px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"3-text-img3.jpg",'0px','0px']
                        },
                        {
                            id: 'img3Copy',
                            type: 'image',
                            rect: ['90px', '0', '756px', '406px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"3-img3.jpg",'0px','0px']
                        },
                        {
                            id: 'textimg3',
                            type: 'image',
                            rect: ['753px', '0', '347px', '406px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"3-text-img3.jpg",'0px','0px']
                        },
                        {
                            id: 'img3',
                            type: 'image',
                            rect: ['90px', '0', '756px', '406px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"3-img3.jpg",'0px','0px']
                        },
                        {
                            id: 'textimg2',
                            type: 'image',
                            rect: ['753px', '0', '350px', '406px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"2-text-img2.jpg",'0px','0px']
                        },
                        {
                            id: 'img2',
                            type: 'image',
                            rect: ['90px', '0', '753px', '406px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"2-img2.jpg",'0px','0px']
                        },
                        {
                            id: 'textimg1',
                            type: 'image',
                            rect: ['756px', '0px', '347px', '406px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1-text-img1.jpg",'0px','0px']
                        },
                        {
                            id: 'img1',
                            type: 'image',
                            rect: ['90px', '0px', '756px', '406px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1-img1.jpg",'0px','0px']
                        },
                        {
                            id: 'botonDr',
                            type: 'image',
                            rect: ['1044px', '166px', '59px', '74px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"boton.png",'0px','0px'],
                            transform: [[],['180']]
                        },
                        {
                            id: 'botonIz',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '166px', '59px', '74px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"boton.png",'0px','0px']
                        },
                        {
                            id: 'botonIzCopy2',
                            display: 'block',
                            type: 'image',
                            rect: ['0px', '166px', '59px', '74px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"boton.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '1103px', '406px'],
                            overflow: 'hidden',
                            fill: ["rgba(230,231,226,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid20",
                            "left",
                            0,
                            500,
                            "easeInOutBack",
                            "${img1}",
                            '0px',
                            '90px'
                        ],
                        [
                            "eid27",
                            "left",
                            500,
                            500,
                            "easeInOutBack",
                            "${img1}",
                            '90px',
                            '-1230px'
                        ],
                        [
                            "eid60",
                            "display",
                            0,
                            0,
                            "easeInOutBack",
                            "${botonIzCopy2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid61",
                            "display",
                            500,
                            0,
                            "easeInOutBack",
                            "${botonIzCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16",
                            "left",
                            2000,
                            500,
                            "easeInOutBack",
                            "${textimg3}",
                            '753px',
                            '923px'
                        ],
                        [
                            "eid25",
                            "left",
                            2500,
                            500,
                            "easeInOutBack",
                            "${textimg3}",
                            '923px',
                            '-397px'
                        ],
                        [
                            "eid22",
                            "left",
                            2000,
                            500,
                            "easeInOutBack",
                            "${img3}",
                            '0px',
                            '90px'
                        ],
                        [
                            "eid28",
                            "left",
                            2500,
                            500,
                            "easeInOutBack",
                            "${img3}",
                            '90px',
                            '-1230px'
                        ],
                        [
                            "eid44",
                            "left",
                            3000,
                            500,
                            "easeInOutBack",
                            "${textimg3Copy}",
                            '-397px',
                            '923px'
                        ],
                        [
                            "eid43",
                            "left",
                            3500,
                            500,
                            "easeInOutBack",
                            "${textimg3Copy}",
                            '923px',
                            '753px'
                        ],
                        [
                            "eid42",
                            "left",
                            3000,
                            500,
                            "easeInOutBack",
                            "${img3Copy}",
                            '-1230px',
                            '90px'
                        ],
                        [
                            "eid41",
                            "left",
                            3500,
                            500,
                            "easeInOutBack",
                            "${img3Copy}",
                            '90px',
                            '0px'
                        ],
                        [
                            "eid14",
                            "left",
                            1000,
                            500,
                            "easeInOutBack",
                            "${textimg2}",
                            '753px',
                            '923px'
                        ],
                        [
                            "eid23",
                            "left",
                            1500,
                            500,
                            "easeInOutBack",
                            "${textimg2}",
                            '923px',
                            '-397px'
                        ],
                        [
                            "eid21",
                            "left",
                            1000,
                            500,
                            "easeInOutBack",
                            "${img2}",
                            '0px',
                            '90px'
                        ],
                        [
                            "eid26",
                            "left",
                            1500,
                            500,
                            "easeInOutBack",
                            "${img2}",
                            '90px',
                            '-1230px'
                        ],
                        [
                            "eid62",
                            "display",
                            500,
                            0,
                            "easeInOutBack",
                            "${botonIz}",
                            'none',
                            'block'
                        ],
                        [
                            "eid15",
                            "left",
                            0,
                            500,
                            "easeInOutBack",
                            "${textimg1}",
                            '756px',
                            '926px'
                        ],
                        [
                            "eid24",
                            "left",
                            500,
                            500,
                            "easeInOutBack",
                            "${textimg1}",
                            '926px',
                            '-394px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("banner-definitivo_edgeActions.js");
})("EDGE-684295");
