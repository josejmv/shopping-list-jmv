// main tools
import { useState } from 'react'

// bootstrap components
import { Container, Button } from 'react-bootstrap'

// prime components
import { InputText } from 'primereact/inputtext'

// utils
import { INITIAL_STATE } from './utils'

// hooks
import { useApp } from 'hooks/app/useApp'

// styles
import classes from './styles.module.scss'

// types
import { ListDataType } from 'types/List'
import { ChangeType } from 'types'
import type { FC } from 'react'

type ListManagementProps = {
  list?: ListDataType
}

export const ListManagement: FC<ListManagementProps> = ({ list }) => {
  const [data, setData] = useState<ListDataType>(list ?? INITIAL_STATE)
  const { lists, updateLists, handleShowManageList } = useApp()
  const [error, setError] = useState('')

  const handleChange = (ev: ChangeType) =>
    setData((prev) => ({
      ...prev,
      [ev.target.name]: ev.target.value,
      href: `/${ev.target.value.toLowerCase().replace(/ /g, '-')}`
    }))

  const verify = () => {
    if (list) return true
    else {
      const verify = lists?.find((item) => item.href === data?.href)

      return !!verify
    }
  }

  const handleCreate = () => [...(lists ?? []), data]

  const handleUpdate = () => {
    const index = lists?.findIndex((item) => item.href === list?.href) ?? -1

    if (lists?.length && index !== -1) lists[index] = { ...data }
    else return handleCreate()

    return lists
  }

  const handleSubmit = () => {
    if (lists && lists.length < 5) {
      const updateList = verify() ? handleUpdate() : handleCreate()
      window.localStorage.setItem('lists', JSON.stringify(updateList))

      updateLists()
      handleShowManageList()
    } else setError('No puedes tener más de 5 listas')
  }

  return (
    <Container>
      <h3 className={classes.title}>{list ? 'Editar' : 'Crear'} Lista</h3>
      <label htmlFor='label' className={classes.label}>
        Nombre de la lista
      </label>
      <InputText
        id='label'
        name='label'
        value={data?.label}
        placeholder='Nombre'
        onChange={handleChange}
        className={classes.input}
      />
      <Button onClick={handleSubmit} className={classes.button}>
        Guardar lista
      </Button>
      {error && <p className={classes.error}>{error}</p>}
    </Container>
  )
}
