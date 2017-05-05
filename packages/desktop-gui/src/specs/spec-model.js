import { observable } from 'mobx'
import { SpecsCollection } from './specs-collection'

export default class Spec {
  @observable name
  @observable isChosen = false
  @observable children = new SpecsCollection([])

  constructor ({ name, displayName }) {
    this.name = name
    this.displayName = displayName
  }
}