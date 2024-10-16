<template>
  <div id="cesiumContainer"></div>
</template>

<script setup>
import 'cesium/Build/Cesium/Widgets/widgets.css'
import { onMounted } from 'vue'
import * as Cesium from 'cesium'
Cesium.Ion.defaultAccessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2NGM4MDcxOS05Zjk3LTQ2YmMtYjAxYi0zYTczNWFkYzFlN2EiLCJpZCI6NzY0NTcsImlhdCI6MTYzOTQ2ODI2NH0.Zsp28WnnCpj4wlAIQwIwcSob228zSaz510QE3zKQN58'

onMounted(() => {
  const viewer = new Cesium.Viewer('cesiumContainer', {
    homeButton: false,
    sceneModePicker: false,
    baseLayerPicker: false,
    navigationHelpButton: false,
    animation: false,
    timeline: false,
    fullscreenButton: false,
    vrButton: false,
    infoBox: true,
    scene3DOnly: true,
    shadows: true
  })

  viewer.scene.globe.depthTestAgainstTerrain = false
  viewer.scene.backgroundColor = Cesium.Color.BLACK
  viewer.scene.globe.enableLighting = true
  viewer.shadows = true
  viewer._cesiumWidget._creditContainer.style.display = 'none'

  viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(85, 24, 2500000),
    orientation: {
      heading: Cesium.Math.toRadians(0),
      pitch: Cesium.Math.toRadians(-60),
      roll: Cesium.Math.toRadians(0)
    }
  })

  // 加载GeoJson数据
  const promise = Cesium.GeoJsonDataSource.load('/sj.json').then(function (dataSource) {
    viewer.dataSources.add(dataSource)
    const entities = dataSource.entities.values

    // 创建一个 primitive 的集合
    const primitives = new Cesium.PrimitiveCollection()
    viewer.scene.primitives.add(primitives)

    for (let i = 0; i < entities.length; i++) {
      const entity = entities[i]
      if (entity.polygon) {
        const positions = entity.polygon.hierarchy.getValue(Cesium.JulianDate.now()).positions

        // 创建一个自定义的几何体
        const geometry = new Cesium.PolygonGeometry({
          polygonHierarchy: new Cesium.PolygonHierarchy(positions),
          extrudedHeight: Math.floor(Math.random() * 40000 + 20000), // 单位是米
          vertexFormat: Cesium.PerInstanceColorAppearance.VERTEX_FORMAT
        })

        const material = new Cesium.Material({
          fabric: {
            uniforms: {
              uTime: 0
            },
            source: `
        czm_material czm_getMaterial(czm_materialInput materialInput)
        {
          // 生成默认的基础材质
          czm_material material = czm_getDefaultMaterial(materialInput);
          // material.diffuse = vec3(materialInput.st+uTime, 0.0);
          float strength = mod((materialInput.s-uTime) * 10.0, 1.0);
          material.diffuse = vec3(strength, 0.0, 0.0);
          return material;
        }
      `
          }
        })

        const appearance = new Cesium.PerInstanceColorAppearance({
          closed: false,
          translucent: false,
          material: material
        })

        const primitive = new Cesium.Primitive({
          geometryInstances: new Cesium.GeometryInstance({
            geometry: geometry,
            attributes: {
              color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.fromCssColorString('rgba(30, 65, 121, 1)'))
            }
          }),
          appearance: appearance,
          asynchronous: false
        })

        primitives.add(primitive)
      }
    }

    viewer.shadows = true
    viewer.shadowMap.enabled = true
    viewer.shadowMap.size = 2048 * 2
    viewer.shadowMap.darkness = 0.6
    viewer.shadowMap.softShadows = true
    viewer.shadowMap.maximumDistance = 10000.0
    viewer.clock.currentTime = Cesium.JulianDate.fromDate(new Date())
    viewer.zoomTo(promise)
  })
})
</script>

<style scoped>
#cesiumContainer {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
:deep(.cesium-viewer-bottom) {
  display: none;
}
</style>
