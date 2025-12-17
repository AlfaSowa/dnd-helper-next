import { CharacterCharacteristic, CharacterInfo } from '../ui'

export const CharacterDetailsPage = () => {
  return (
    <div className="flex flex-col gap-3">
      <CharacterInfo />
      <CharacterCharacteristic />
    </div>
  )
}
