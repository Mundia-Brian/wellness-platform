import fs from 'fs'
import path from 'path'

function detectBrandFromEnvironment() {
  // Check for brand slug in environment variable first
  if (process.env.BRAND_SLUG) {
    return process.env.BRAND_SLUG
  }
  
  // Default to afya-ray if no environment variable is set
  return 'afya-ray'
}

export function getBrandConfig(brandSlug) {
  const slug = brandSlug || detectBrandFromEnvironment()
  const configPath = path.join(process.cwd(), 'brands', slug, 'config.json')
  
  try {
    const configFile = fs.readFileSync(configPath, 'utf8')
    return JSON.parse(configFile)
  } catch (error) {
    console.error(`Failed to load brand config for ${slug}:`, error)
    // Fallback to afya-ray if the requested brand doesn't exist
    if (slug !== 'afya-ray') {
      const fallbackPath = path.join(process.cwd(), 'brands', 'afya-ray', 'config.json')
      const fallbackFile = fs.readFileSync(fallbackPath, 'utf8')
      return JSON.parse(fallbackFile)
    }
    throw error
  }
}

export function getServiceDescriptions(brandSlug) {
  const brand = getBrandConfig(brandSlug)
  return brand.services || []
}

export function getAllBrands() {
  const brandsDir = path.join(process.cwd(), 'brands')
  try {
    const brandDirs = fs.readdirSync(brandsDir, { withFileTypes: true })
    return brandDirs
      .filter(dirent => dirent.isDirectory())
      .map(dirent => {
        try {
          const config = getBrandConfig(dirent.name)
          return { slug: dirent.name, config }
        } catch {
          return null
        }
      })
      .filter(Boolean)
  } catch {
    return []
  }
}