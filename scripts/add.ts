const path = require('path')
const glob = require('glob')
const fs = require('fs-extra')
const chalk = require('chalk')
const { spawn } = require('child_process')
const handlebars = require('handlebars')
// const fetch = require('node-fetch')

/**
 * abc-xyz => AbcXyz
 * @param {*} str
 */
const varCase = (str) => str.replace(/-[a-z]/g, (m) => m[1].toUpperCase()).replace(/^.{1}/, (m) => m.toUpperCase())
const lowCase = (str) => str.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`).replace(/^-/, '')

const add = async () => {
  const component = process.argv[2]

  const dirName = lowCase(component)
  const componentName = varCase(component)

  spawn('mkdir', ['-p', path.join(process.cwd(), `src/${componentName}`)])

  const tplFiles = glob.sync(path.join(__dirname, 'template/*.hbs'))

  tplFiles.forEach(async (filePath) => {
    const content = await fs.readFile(filePath, 'utf-8')

    const tempalte = handlebars.compile(content)
    const result = tempalte({
      dirName,
      componentName
    })
    const newPath = filePath.replace('scripts/template', `src/${componentName}`).replace('component.', `${componentName}.`).replace('Component.', `${componentName}.`).replace('.hbs', '')

    await fs.writeFile(newPath, result)
    console.log(chalk.green(`write ${newPath} success`))
  })
}

add()
