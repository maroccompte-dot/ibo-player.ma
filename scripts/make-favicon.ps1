Add-Type -AssemblyName System.Drawing

function New-BrandBitmap([int]$size) {
  $bmp = New-Object System.Drawing.Bitmap $size, $size
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $blue = [System.Drawing.Color]::FromArgb(255, 0, 35, 149)
  $white = [System.Drawing.Color]::White
  $red = [System.Drawing.Color]::FromArgb(255, 237, 41, 57)
  $dark = [System.Drawing.Color]::FromArgb(230, 15, 23, 42)

  $w = [Math]::Floor($size / 3)
  $g.Clear($blue)
  $g.FillRectangle((New-Object System.Drawing.SolidBrush $blue), 0, 0, $w, $size)
  $g.FillRectangle((New-Object System.Drawing.SolidBrush $white), $w, 0, $w, $size)
  $g.FillRectangle((New-Object System.Drawing.SolidBrush $red), ($w * 2), 0, ($size - $w * 2), $size)

  $pad = [Math]::Floor($size * 0.25)
  $box = $size - ($pad * 2)
  $g.FillRectangle((New-Object System.Drawing.SolidBrush $dark), $pad, $pad, $box, $box)

  # Play triangle
  $cx = [Math]::Floor($size * 0.42)
  $cy = [Math]::Floor($size / 2)
  $h = [Math]::Floor($size * 0.28)
  $pts = @(
    (New-Object System.Drawing.Point ($cx), ($cy - $h)),
    (New-Object System.Drawing.Point ($cx), ($cy + $h)),
    (New-Object System.Drawing.Point ([Math]::Floor($size * 0.72)), $cy)
  )
  $g.FillPolygon((New-Object System.Drawing.SolidBrush $white), $pts)
  $g.Dispose()
  return $bmp
}

$root = Split-Path -Parent $PSScriptRoot
if (-not $root) { $root = "C:\Users\DELL\Desktop\iptv-iboplayer.fr" }
# When run from repo root via -File scripts\make-favicon.ps1
$root = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path

$public = Join-Path $root "public"
$app = Join-Path $root "app"

$icoBmp = New-BrandBitmap 32
$icoPath = Join-Path $public "favicon.ico"
# Save as PNG first then also icon via Icon
$png32 = Join-Path $public "favicon-32.png"
$png180 = Join-Path $public "apple-touch-icon.png"
$appIcon = Join-Path $app "icon.png"

$icoBmp.Save($png32, [System.Drawing.Imaging.ImageFormat]::Png)

$icon = [System.Drawing.Icon]::FromHandle($icoBmp.GetHicon())
$fs = [System.IO.File]::Open($icoPath, [System.IO.FileMode]::Create)
$icon.Save($fs)
$fs.Close()
$icon.Dispose()
$icoBmp.Dispose()

$big = New-BrandBitmap 180
$big.Save($png180, [System.Drawing.Imaging.ImageFormat]::Png)
$big.Dispose()

$mid = New-BrandBitmap 32
$mid.Save($appIcon, [System.Drawing.Imaging.ImageFormat]::Png)
$mid.Dispose()

Write-Host "Wrote $icoPath"
Write-Host "Wrote $png32"
Write-Host "Wrote $png180"
Write-Host "Wrote $appIcon"
