(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8b444eb8"],{2762:function(e,a,n){"use strict";n.r(a);var t=n("7a23"),o=(n("e877"),n("a9a8")),i=n("16f2"),s=n("bd8d"),r=n("be18"),c=n("93da"),d=n("c822"),l=n("738d"),m=n("5ed2"),u=n("4914"),p=n("1757"),h=n("3a8e"),f=n("aea3"),w=n("894b"),g=n("d940"),b=n("9541");const I={id:"cesiumContainer"};var z={__name:"test",setup(e){return o["a"].defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2NGM4MDcxOS05Zjk3LTQ2YmMtYjAxYi0zYTczNWFkYzFlN2EiLCJpZCI6NzY0NTcsImlhdCI6MTYzOTQ2ODI2NH0.Zsp28WnnCpj4wlAIQwIwcSob228zSaz510QE3zKQN58",Object(t["m"])(()=>{const e=new i["a"]("cesiumContainer",{homeButton:!1,sceneModePicker:!1,baseLayerPicker:!1,navigationHelpButton:!1,animation:!1,timeline:!1,fullscreenButton:!1,vrButton:!1,infoBox:!0,scene3DOnly:!0,shadows:!0});e.scene.globe.depthTestAgainstTerrain=!1,e.scene.backgroundColor=s["a"].BLACK,e.scene.globe.enableLighting=!0,e.shadows=!0,e._cesiumWidget._creditContainer.style.display="none",e.camera.flyTo({destination:r["a"].fromDegrees(85,24,25e5),orientation:{heading:c["a"].toRadians(0),pitch:c["a"].toRadians(-60),roll:c["a"].toRadians(0)}});const a=d["a"].load("/sj.json").then((function(n){e.dataSources.add(n);const t=n.entities.values,o=new l["a"];e.scene.primitives.add(o);for(let e=0;e<t.length;e++){const a=t[e];if(a.polygon){const e=a.polygon.hierarchy.getValue(m["a"].now()).positions,n=new u["a"]({polygonHierarchy:new p["a"](e),extrudedHeight:Math.floor(4e4*Math.random()+2e4),vertexFormat:h["a"].VERTEX_FORMAT}),t=new f["a"]({fabric:{uniforms:{uTime:0},source:"\n        czm_material czm_getMaterial(czm_materialInput materialInput)\n        {\n          // 生成默认的基础材质\n          czm_material material = czm_getDefaultMaterial(materialInput);\n          // material.diffuse = vec3(materialInput.st+uTime, 0.0);\n          float strength = mod((materialInput.s-uTime) * 10.0, 1.0);\n          material.diffuse = vec3(strength, 0.0, 0.0);\n          return material;\n        }\n      "}}),i=new h["a"]({closed:!1,translucent:!1,material:t}),r=new w["a"]({geometryInstances:new g["a"]({geometry:n,attributes:{color:b["a"].fromColor(s["a"].fromCssColorString("rgba(30, 65, 121, 1)"))}}),appearance:i,asynchronous:!1});o.add(r)}}e.shadows=!0,e.shadowMap.enabled=!0,e.shadowMap.size=4096,e.shadowMap.darkness=.6,e.shadowMap.softShadows=!0,e.shadowMap.maximumDistance=1e4,e.clock.currentTime=m["a"].fromDate(new Date),e.zoomTo(a)}))}),(e,a)=>(Object(t["o"])(),Object(t["d"])("div",I))}},T=(n("cf11"),n("6b0d")),y=n.n(T);const M=y()(z,[["__scopeId","data-v-6b1d08de"]]);a["default"]=M},"85d0":function(e,a,n){},cf11:function(e,a,n){"use strict";n("85d0")}}]);