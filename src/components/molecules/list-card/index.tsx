// main tools
import Link from 'next/link'

// bootstrap components
import { BagCheck, Trash, Pencil } from 'react-bootstrap-icons'
import { Button } from 'react-bootstrap'

// hooks
import { useApp } from 'hooks/app/useApp'

// styles
import classes from './styles.module.scss'

// types
import { ListDataType } from 'types/List'
import { FC } from 'react'

export const ListCard: FC<ListDataType> = ({ href, label }) => {
  const { confirmDialog, lists, updateLists, handleShowManageList } = useApp()

  const handleDelete = () =>
    confirmDialog({
      accept: () => {
        const newLists = lists?.filter((item) => item.href !== href)
        localStorage.setItem('lists', JSON.stringify(newLists))
        updateLists()
      }
    })

  const handleUpdate = () => handleShowManageList({ href, label })

  return (
    <div className={classes.container}>
      <Link href={href} className={classes.content}>
        <BagCheck size={32} className={classes.icon} />{' '}
        <span className={classes.text}>{label}</span>
      </Link>
      <Button onClick={handleUpdate} className={classes.pencil}>
        <Pencil size={16} />
      </Button>
      <Button onClick={handleDelete} className={classes.trash}>
        <Trash size={16} />
      </Button>
    </div>
  )
}
