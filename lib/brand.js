import fs from 'fs'
import path from 'path'

export function getBrandConfig(brandSlug = 'afya-ray') {
  const configPath = path.join(process.cwd(), 'brands', brandSlug, 'config.json')
  const configFile = fs.readFileSync(configPath, 'utf8')
  return JSON.parse(configFile)
}