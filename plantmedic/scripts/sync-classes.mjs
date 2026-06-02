import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

function norm(s) {
  return String(s ?? '')
    .toLowerCase()
    .replace(/[—–]/g, '-')
    .replace(/_/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'))
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf-8')
}

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const plantmedicRoot = path.resolve(scriptDir, '..')
const frontendDiseasesPath = path.join(plantmedicRoot, 'frontend', 'src', 'diseasesData.js')
const backendClassesPath = path.join(plantmedicRoot, 'backend', 'app', 'data', 'classes.json')

// Import frontend diseases (ESM)
const { diseases } = await import(pathToFileUrl(frontendDiseasesPath).href)

const classes = readJson(backendClassesPath)
if (!Array.isArray(classes)) throw new Error('backend classes.json must be an array')

const byNameEn = new Map()
for (const d of diseases) {
  byNameEn.set(norm(d.nameEn), d)
}

let matched = 0
const unmatched = []
const updated = classes.map((c) => {
  const nameEn = c.name_en || c.nameEn || ''
  const d = byNameEn.get(norm(nameEn))
  if (!d) {
    unmatched.push(String(nameEn || c.api_label || ''))
    return c
  }
  matched += 1
  return {
    ...c,
    name_en: d.nameEn,
    name_ur: d.nameUr,
    plant_en: d.plantEn,
    plant_ur: d.plantUr,
    desc_en: d.descEn,
    desc_ur: d.descUr,
  }
})

writeJson(backendClassesPath, updated)

console.log(`Synced ${matched}/${classes.length} classes from frontend -> backend.`)
if (unmatched.length) {
  console.log('Unmatched:')
  for (const u of unmatched) console.log('-', u)
}

function pathToFileUrl(p) {
  let pathname = path.resolve(p).replace(/\\/g, '/')
  if (!pathname.startsWith('/')) pathname = '/' + pathname
  return new URL('file://' + pathname)
}

