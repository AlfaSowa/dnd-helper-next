import { CharacterCharacteristic, CharacterInfo } from '../ui'

export const DetailsPage = () => {
  return (
    <div className="flex flex-col gap-3">
      <CharacterInfo />
      <CharacterCharacteristic />
    </div>
  )
}
