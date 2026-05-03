Add-Type -AssemblyName System.Drawing

$assetDir = Join-Path $PSScriptRoot "..\src\assets\drone-parts"
if (-not (Test-Path $assetDir)) {
  New-Item -ItemType Directory -Path $assetDir | Out-Null
}

$width = 1000
$height = 650

function New-Layer {
  $bitmap = New-Object System.Drawing.Bitmap $width, $height, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
  $graphics.Clear([System.Drawing.Color]::Transparent)
  return @{ Bitmap = $bitmap; Graphics = $graphics }
}

function Save-Layer($layer, $name) {
  $path = Join-Path $assetDir $name
  $layer.Bitmap.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
  $layer.Graphics.Dispose()
  $layer.Bitmap.Dispose()
}

function New-Pen($color, $width) {
  $pen = New-Object System.Drawing.Pen $color, $width
  $pen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
  $pen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
  return $pen
}

function Fill-RoundedRect($graphics, $brush, $x, $y, $w, $h, $r) {
  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $path.AddArc($x, $y, $r, $r, 180, 90)
  $path.AddArc($x + $w - $r, $y, $r, $r, 270, 90)
  $path.AddArc($x + $w - $r, $y + $h - $r, $r, $r, 0, 90)
  $path.AddArc($x, $y + $h - $r, $r, $r, 90, 90)
  $path.CloseFigure()
  $graphics.FillPath($brush, $path)
  $path.Dispose()
}

$carbon = [System.Drawing.Color]::FromArgb(232, 32, 42, 58)
$carbonDeep = [System.Drawing.Color]::FromArgb(235, 14, 20, 31)
$edge = [System.Drawing.Color]::FromArgb(210, 112, 219, 255)
$violet = [System.Drawing.Color]::FromArgb(120, 160, 102, 255)
$softBlue = [System.Drawing.Color]::FromArgb(78, 116, 229, 255)
$metal = [System.Drawing.Color]::FromArgb(205, 138, 154, 174)

$arms = New-Layer
$g = $arms.Graphics
$armPen = New-Pen $carbon 34
$armEdge = New-Pen $edge 3
@(
  @(500, 326, 246, 160),
  @(500, 326, 754, 160),
  @(500, 326, 246, 490),
  @(500, 326, 754, 490)
) | ForEach-Object {
  $g.DrawLine($armPen, $_[0], $_[1], $_[2], $_[3])
  $g.DrawLine($armEdge, $_[0], $_[1], $_[2], $_[3])
}
$hubBrush = New-Object System.Drawing.SolidBrush $carbonDeep
$accentBrush = New-Object System.Drawing.SolidBrush $softBlue
@(
  @(218, 128), @(726, 128), @(218, 458), @(726, 458)
) | ForEach-Object {
  Fill-RoundedRect $g $hubBrush $_[0] $_[1] 56 56 18
  $g.FillEllipse($accentBrush, ($_[0] + 18), ($_[1] + 18), 20, 20)
}
Save-Layer $arms "arms.png"

$body = New-Layer
$g = $body.Graphics
$bodyPath = New-Object System.Drawing.Drawing2D.GraphicsPath
$bodyPath.AddPolygon(@(
  [System.Drawing.PointF]::new(500, 210),
  [System.Drawing.PointF]::new(605, 284),
  [System.Drawing.PointF]::new(620, 382),
  [System.Drawing.PointF]::new(500, 456),
  [System.Drawing.PointF]::new(380, 382),
  [System.Drawing.PointF]::new(395, 284)
))
$bodyBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
  [System.Drawing.RectangleF]::new(360, 200, 280, 270),
  [System.Drawing.Color]::FromArgb(245, 52, 64, 84),
  [System.Drawing.Color]::FromArgb(245, 12, 18, 30),
  90
)
$g.FillPath($bodyBrush, $bodyPath)
$g.DrawPath((New-Pen $edge 4), $bodyPath)
$g.DrawLine((New-Pen $metal 5), 435, 306, 565, 306)
$g.DrawLine((New-Pen $violet 3), 458, 385, 542, 385)
$g.FillEllipse((New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(120, 112, 219, 255))), 462, 244, 76, 20)
$bodyBrush.Dispose()
$bodyPath.Dispose()
Save-Layer $body "body.png"

$props = New-Layer
$g = $props.Graphics
$ringPen = New-Pen ([System.Drawing.Color]::FromArgb(118, 112, 219, 255)) 5
$bladeBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(186, 188, 205, 222))
$coreBrush = New-Object System.Drawing.SolidBrush $carbonDeep
@(
  @(246, 156), @(754, 156), @(246, 486), @(754, 486)
) | ForEach-Object {
  $cx = $_[0]
  $cy = $_[1]
  $g.DrawEllipse($ringPen, $cx - 82, $cy - 82, 164, 164)
  $g.TranslateTransform($cx, $cy)
  foreach ($angle in @(0, 90, 180, 270)) {
    $g.RotateTransform($angle)
    $g.FillEllipse($bladeBrush, -15, -78, 30, 92)
    $g.ResetTransform()
    $g.TranslateTransform($cx, $cy)
  }
  $g.ResetTransform()
  $g.FillEllipse($coreBrush, $cx - 19, $cy - 19, 38, 38)
  $g.FillEllipse((New-Object System.Drawing.SolidBrush $edge), $cx - 7, $cy - 7, 14, 14)
}
Save-Layer $props "propellers.png"

$camera = New-Layer
$g = $camera.Graphics
$caseBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(238, 18, 25, 38))
$glassBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(210, 74, 199, 255))
Fill-RoundedRect $g $caseBrush 444 410 112 76 22
$g.DrawRectangle((New-Pen $edge 3), 468, 430, 64, 36)
$g.FillEllipse($glassBrush, 482, 436, 36, 24)
$g.FillEllipse((New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(120, 255, 255, 255))), 493, 441, 10, 7)
Save-Layer $camera "camera.png"
