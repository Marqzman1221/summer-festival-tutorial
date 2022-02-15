type Vector3Model = {
  x: number
  y: number
  z: number
}

type GadgetModel = {
  type: string
  quantity: number
}

type PlacementModel = {
  type: string
  positions: Vector3Model[]
  rotations: Vector3Model[]
}

type OperatorModel = {
  position: Vector3Model
  rotation: Vector3Model
}

type SavePayload = {
  map: string
  operators: [
    string | OperatorModel,
    string | OperatorModel,
    string | OperatorModel,
    string | OperatorModel,
    string | OperatorModel
  ]
  site: number
  inventory: GadgetModel[]
  placements: PlacementModel[]
}

async function initializeApp() {
  const params = {
    map: 'bank',
    site: 1,
    operators: ['smoke', 'jager', 'bandit', 'rook', 'doc'],
    inventory: {},
  }
}
