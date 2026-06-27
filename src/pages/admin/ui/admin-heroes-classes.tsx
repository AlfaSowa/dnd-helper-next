'use client'

import { useGetClassesQuery } from '@/containers/classes'

export const AdminHeroesClasses = () => {
  const { data } = useGetClassesQuery()

  console.log(data)

  const handleDelete = (uuid: string, type: 'class' | 'subclass') => {
    console.log(uuid)
    if (type === 'class') {
    }
    if (type === 'subclass') {
    }
  }

  return (
    <div>
      {data?.map((i) => (
        <div key={i.uuid}>
          <div className="flex gap-4">
            <div>{i.uuid}</div>
            <div>{i.name}</div>
            <div className="ml-auto">
              <button
                className="cursor-pointer hover:text-teal-700"
                onClick={() => handleDelete(i.uuid, 'class')}
              >
                удалить
              </button>
            </div>
          </div>

          {i.subclasses.length > 0 && (
            <div className="bg-amber-300 p-2">
              {i.subclasses.map((s) => (
                <div className="flex gap-4" key={s.uuid}>
                  <div>{s.uuid}</div>
                  <div>{s.name}</div>
                  <div className="ml-auto">
                    <button
                      className="cursor-pointer hover:text-teal-700"
                      onClick={() => handleDelete(s.uuid, 'subclass')}
                    >
                      удалить
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
