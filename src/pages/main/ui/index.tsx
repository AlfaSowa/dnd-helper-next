'use client'
import { AppRoutes } from '@/app/routes'
//TODO убрать Card в другой компонент и убрать use client
import { IconAdd } from '@/shared/icons'
import { Button, Card, LinkTo, Section } from '@/shared/ui'
import { useRouter } from 'next/navigation'

export const MainPage = () => {
  const router = useRouter()

  return (
    <div className="flex flex-col gap-6">
      {/* <EntitiesGrid<Character>
        items={characters}
        render={(character) => {
          return (
            <EntitiesGridCard
              entity={character}
              to={RoutePaths.characters.item.onNavigate(character.id)}
              key={character.id}
            />
          );
        }}
      /> */}
      <Section
        title="Готовые персонажи (популярное)"
        RightContent={
          <div className="flex items-center gap-4">
            <Button onClick={() => router.push(AppRoutes.characters.create.path)} LeftIcon={<IconAdd />} />
            <LinkTo to="/characters">Посмотреть все</LinkTo>
          </div>
        }
      >
        <div className="grid grid-cols-5 gap-4">
          <Card onClick={() => {}} title="lorem6 lorem6lorem6lo rem6lor em6lorem6lorem6 ">
            123123
          </Card>
          <Card onClick={() => {}} title="lorem6 lorem6lorem6lo rem6lor em6lorem6lorem6 ">
            123123
          </Card>
          <Card onClick={() => {}} title="lorem6 lorem6lorem6lo rem6lor em6lorem6lorem6 ">
            123123
          </Card>
          <Card onClick={() => {}} title="lorem6 lorem6lorem6lo rem6lor em6lorem6lorem6 ">
            123123
          </Card>
          <Card onClick={() => {}} title="lorem6 lorem6lorem6lo rem6lor em6lorem6lorem6 ">
            123123
          </Card>
        </div>
      </Section>

      <Section
        title="Комнаты (популярное)"
        RightContent={
          <div className="flex items-center gap-4">
            <Button onClick={() => router.push(AppRoutes.rooms.create.path)} LeftIcon={<IconAdd />} />
            <LinkTo to="/rooms">Посмотреть все</LinkTo>
          </div>
        }
      >
        <div className="grid grid-cols-5 gap-4">
          <Card onClick={() => {}} title="lorem6 lorem6lorem6lo rem6lor em6lorem6lorem6 ">
            123123
          </Card>
          <Card onClick={() => {}} title="lorem6 lorem6lorem6lo rem6lor em6lorem6lorem6 ">
            123123
          </Card>
          <Card onClick={() => {}} title="lorem6 lorem6lorem6lo rem6lor em6lorem6lorem6 ">
            123123
          </Card>
          <Card onClick={() => {}} title="lorem6 lorem6lorem6lo rem6lor em6lorem6lorem6 ">
            123123
          </Card>
          <Card onClick={() => {}} title="lorem6 lorem6lorem6lo rem6lor em6lorem6lorem6 ">
            123123
          </Card>
        </div>
      </Section>
    </div>
  )
}
