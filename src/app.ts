import {
  ArcRotateCamera,
  Camera,
  Engine,
  HemisphericLight,
  Mesh,
  MeshBuilder,
  Scene,
  Vector3,
} from 'babylonjs'

class App {
  private _engine: Engine
  private _scene: Scene

  private _mainCamera: Camera

  constructor() {
    var canvas = document.createElement('canvas')
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.id = 'gameCanvas'

    document.body.appendChild(canvas)

    this._engine = new Engine(canvas, true)
    this._scene = new Scene(this._engine)

    this._mainCamera = new ArcRotateCamera(
      'mainCamera',
      Math.PI / 2,
      Math.PI / 2,
      2,
      Vector3.Zero(),
      this._scene
    )

    this._mainCamera.attachControl(canvas, true)

    var light1: HemisphericLight = new HemisphericLight(
      'light1',
      new Vector3(1, 1, 0),
      this._scene
    )
    var sphere: Mesh = MeshBuilder.CreateSphere(
      'sphere',
      { diameter: 1 },
      this._scene
    )

    window.addEventListener('keydown', (event: KeyboardEvent) => {
      // Ctrl + Alt + Shift + i
      if (
        event.ctrlKey &&
        event.altKey &&
        event.shiftKey &&
        event.key === 'I'
      ) {
        if (this._scene.debugLayer.isVisible()) {
          console.log('Debug Layer [INACTIVE')
          this._scene.debugLayer.hide()
          return
        }

        console.log('Debug Layer [ACTIVE]')
        this._scene.debugLayer.show()
      }
    })

    this._engine.runRenderLoop(() => {
      this._scene.render()
    })
  }
}

new App()
