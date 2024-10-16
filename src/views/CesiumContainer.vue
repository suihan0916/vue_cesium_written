<template>
  <div id="cesiumContainer"></div>
</template>

<script setup>
import 'cesium/Build/Cesium/Widgets/widgets.css'
import { onMounted } from 'vue'
import { parabolaFlowInit } from '../assets/LineFlowMaterialProperty.js'
import * as Cesium from 'cesium'
import { alirl, aboutValue } from '../utils'
Cesium.Ion.defaultAccessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2NGM4MDcxOS05Zjk3LTQ2YmMtYjAxYi0zYTczNWFkYzFlN2EiLCJpZCI6NzY0NTcsImlhdCI6MTYzOTQ2ODI2NH0.Zsp28WnnCpj4wlAIQwIwcSob228zSaz510QE3zKQN58'
const webKey = '4582d79e65a0c47ac2e041509430b984'

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
  // viewer.scene.globe.depthTestAgainstTerrain = false
  // viewer.scene.backgroundColor = Cesium.Color.BLACK

  // viewer.scene.globe.enableLighting = true
  // viewer.scene.globe.shadows = true

  // // 设置阴影贴图
  // viewer.shadowMap.enabled = true
  // viewer.shadowMap.size = 2048 * 2
  // viewer.shadowMap.darkness = 0.6
  // viewer.shadowMap.softShadows = true
  // viewer.shadowMap.maximumDistance = 10000.0

  // // 设置光源
  // viewer.scene.sun = new Cesium.Sun()
  // // 设置当前时间，阴影角度随时间变化
  // viewer.clock.currentTime = Cesium.JulianDate.fromDate(new Date())
  // viewer.clock.shouldAnimate = true
  viewer._cesiumWidget._creditContainer.style.display = 'none' // 去掉左下角图标
  // 影像底图
  viewer.imageryLayers.addImageryProvider(
    new Cesium.WebMapTileServiceImageryProvider({
      url:
        'http://t0.tianditu.com/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=' +
        webKey,
      layer: 'tdtBasicLayer',
      style: 'default',
      format: 'image/jpeg',
      tileMatrixSetID: 'GoogleMapsCompatible',
      show: false
    })
  )

  // 影像注记
  viewer.imageryLayers.addImageryProvider(
    new Cesium.WebMapTileServiceImageryProvider({
      url:
        'http://t0.tianditu.com/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg&tk=' +
        webKey,
      layer: 'tdtAnnoLayer',
      style: 'default',
      format: 'image/jpeg',
      tileMatrixSetID: 'GoogleMapsCompatible',
      show: false
    })
  )

  // 将三维球定位到中国
  viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(85, 24, 2500000),
    orientation: {
      heading: Cesium.Math.toRadians(0),
      pitch: Cesium.Math.toRadians(-60),
      roll: Cesium.Math.toRadians(0)
    },
    compconste: function callback() {
      // 定位完成之后的回调函数
    }
  })
  // 加载GeoJson数据并应用材质, 该json数据不能设置材质通过光照显示阴影，我这边需要3d titles数据可以？
  // viewer.scene.primitives.add(new Cesium.Cesium3DTileset({url: '/sj.json'}));
  const promise = Cesium.GeoJsonDataSource.load('/sj.json').then(function (dataSource) {
    viewer.dataSources.add(dataSource)
    const entities = dataSource.entities.values
    for (let i = 0; i < entities.length; i++) {
      const entity = entities[i]
      if (entity.polygon) {
        entity.shadowMode = Cesium.ShadowMode.CAST_AND_RECEIVE
        entity.polygon.extrudedHeight = Math.floor(Math.random() * 40000 + 20000) // 单位是米
        const color = Cesium.Color.fromCssColorString('rgba(30, 65, 121, 1)') // 暗蓝色
        // entity.polygon.material = color
        entity.polygon.outlineColor = Cesium.Color.fromCssColorString('rgba(11, 26, 51,0.8)')
        entity.polygon.material = new Cesium.GridMaterialProperty({
          color: color,
          cellAlpha: 1,
          lineCount: new Cesium.Cartesian3(8, 8, 8),
          lineThickness: new Cesium.Cartesian3(2.0, 2.0, 2.0)
        })
        entity.shadowMode = Cesium.ShadowMode.CAST_AND_RECEIVE
      }
    }

    viewer.zoomTo(promise)
  })

  // 添加抛物飞线效果
  alirl.forEach((line, i) => {
    const start = {
      longitude: line[0][0],
      latitude: line[0][1],
      height: 80000
    }

    const end = {
      longitude: line[1][0],
      latitude: line[1][1],
      height: 90000
    }
    let color
    let material
    let depthFailMaterial
    if (aboutValue[i] === 0) {
      color = { r: 255, g: 127, b: 80 }
      // 虚线样式
      material = new Cesium.PolylineDashMaterialProperty({
        color: new Cesium.Color(color.r / 255.0, color.g / 255.0, color.b / 255.0, 0.8)
      })
      depthFailMaterial = new Cesium.PolylineDashMaterialProperty({
        color: new Cesium.Color(color.r / 255.0, color.g / 255.0, color.b / 255.0, 0.2) // 两端的透明度
      })
    } else {
      // 实线样式
      color = { r: 100, g: 255, b: 80 }
      material = new Cesium.LineFlowMaterialProperty({
        color: new Cesium.Color(color.r / 255.0, color.g / 255.0, color.b / 255.0, 0.8),
        speed: 10,
        gradient: 0.7
      })
      depthFailMaterial = new Cesium.PolylineDashMaterialProperty({
        color: new Cesium.Color(color.r / 255.0, color.g / 255.0, color.b / 255.0, 0.1), // 两端的透明度
        gapColor: new Cesium.Color(color.r / 255.0, color.g / 255.0, color.b / 255.0, 0.1)
      })
    }

    parabolaFlowInit(viewer, 1, start, end, material, depthFailMaterial)

    const startbillboard = Cesium.Cartesian3.fromDegrees(start.longitude, start.latitude, start.height)
    const endbillboard = Cesium.Cartesian3.fromDegrees(end.longitude, end.latitude, end.height)

    const imageUrl = canvasBillboard(i)

    // 使用生成的图像作为 Billboard
    viewer.entities.add({
      position: startbillboard,
      billboard: {
        image: imageUrl,
        width: 77,
        height: 26,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM
      }
    })
    // 在终点添加五角星
    viewer.entities.add({
      position: endbillboard,
      billboard: {
        image: '/五角星圆角.svg',
        width: 40,
        height: 40,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM // 底部对齐
      }
    })
  })
})

function canvasBillboard(i) {
  const canvas = document.createElement('canvas')
  canvas.width = 96
  canvas.height = 70 // 增加高度
  const context = canvas.getContext('2d')

  const gradient = context.createLinearGradient(0, 0, 0, canvas.height)
  if (aboutValue[i] === 0) {
    gradient.addColorStop(0, '#a05d4a')
    gradient.addColorStop(1, '#a05d4a')
  } else {
    gradient.addColorStop(0, 'lightgreen')
    gradient.addColorStop(1, 'darkgreen')
  }

  context.fillStyle = gradient
  context.globalAlpha = 0.6
  context.fillRect(0, 0, canvas.width, canvas.height)

  context.fillStyle = 'white'
  context.font = 'bold 18px Arial'
  context.textAlign = 'center'
  context.textBaseline = 'middle'
  const labelText = 'ABC ' + aboutValue[i]
  context.fillText(labelText, canvas.width / 2, canvas.height / 2)

  return canvas.toDataURL()
}
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
