import { CharacterCharacteristic, CharacterInfo } from '../ui'

export const CharactersDetailsPage = () => {
  return (
    <div className="flex flex-col gap-3">
      <CharacterInfo />
      <CharacterCharacteristic />
    </div>
  )
}
