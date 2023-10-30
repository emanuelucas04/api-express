import 'dotenv/config'
import 'reflect-metadata'
import { app } from './app'
import { dataSource } from '../typeorm'

const port = process.env.PORT

dataSource.initialize().then(() => {
  app.listen(port, () => {
    console.log(`Server started on port ${port}!`)
  })
})
