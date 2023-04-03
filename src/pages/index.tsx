// hooks
import { useApp } from 'hooks/app/useApp'

// components
import { ListCard } from '@molecules/list-card'

// prime components
import { Skeleton } from 'primereact/skeleton'

// bootstrap components
import { AlignStart, PlusCircle } from 'react-bootstrap-icons'
import { Row, Col, Button } from 'react-bootstrap'

// styles
import classes from '@styles/pages/home.module.scss'

// types
import { NextPage } from 'next/types'

const Home: NextPage = () => {
  const { handleShowManageList, lists } = useApp()

  return (
    <main className={classes.main}>
      <h1 className={classes.title}>
        Shopping list
        <span className={classes.title_label}>Made by</span>
        <span className={classes.title_name}>JoseJMV</span>
      </h1>

      <section>
        <h2 className={classes.subtitle}>
          <AlignStart /> List
        </h2>

        <Row>
          {!lists && (
            <Col xs={2}>
              <Skeleton className={classes.skeleton} height='6rem' />
            </Col>
          )}
          {lists &&
            lists.map((item) => (
              <Col key={item.href} xs={12} sm={6} md={3}>
                <ListCard {...item} />
              </Col>
            ))}
          <Col xs={12} sm={6} md={3}>
            <Button
              className={classes.button_outline}
              onClick={() => handleShowManageList()}>
              <PlusCircle className={classes.icon} size={32} />
              <span className={classes.text}>Agregar lista</span>
            </Button>
          </Col>
        </Row>
      </section>
    </main>
  )
}

export default Home
