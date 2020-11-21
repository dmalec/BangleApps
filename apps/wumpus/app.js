let centerX = g.getWidth() / 2;
let centerY = g.getHeight() / 2;
let caveRadius = Math.min(g.getWidth(), g.getHeight()) / 4;
let caveWall = 4;
let tunnelWidth = 38;
let halfTunnel = tunnelWidth / 2;
let innerTunnelWidth = tunnelWidth - caveWall * 2;
let innerTunnelHalfWidth = innerTunnelWidth / 2;

// Draw Cave
g.clear(true)
 .setColor(0, 1, 0)
 .fillCircle(centerX, centerY, caveRadius)
 .fillRect(centerX, centerY - halfTunnel, g.getWidth(), centerY + halfTunnel)

 .fillRect(centerX, 30, g.getWidth(), 30 + tunnelWidth)
 .fillCircle(centerX, 30 + halfTunnel, halfTunnel)
 .fillRect(centerX - halfTunnel, 30 + halfTunnel, centerX + halfTunnel, centerY)

 .fillRect(centerX, g.getHeight() - 30 - tunnelWidth, g.getWidth(), g.getHeight() - 30)
 .fillCircle(centerX, g.getHeight() - 30 - halfTunnel, tunnelWidth / 2)
 .fillRect(centerX - halfTunnel, centerY, centerX + halfTunnel, g.getHeight() - 30 - halfTunnel);

let caves = Uint8Array([
   2,  8, 14,    //  0
   7, 13, 19,    //  1
  12, 18,  0,    //  2
  16, 17, 19,    //  3
  11, 14, 18,    //  4
  13, 15, 18,    //  5
   9, 14, 16,    //  6
   1, 15, 17,    //  7
   0, 10, 16,    //  8
   6, 11, 19,    //  9
   8, 12, 17,    // 10
   4,  9, 13,    // 11
   2, 10, 15,    // 12
   1,  5, 11,    // 13
   0,  4,  6,    // 14
   5,  7, 12,    // 15
   3,  6,  8,    // 16
   3,  7, 10,    // 17
   2,  4,  5,    // 18
   1,  3,  9     // 19
]);

function drawCave() {
  // Clear cave internals
  g.setColor(0, 0, 0)
   .fillCircle(centerX, centerY, caveRadius - caveWall)
   .fillRect(centerX, centerY - innerTunnelHalfWidth, g.getWidth(), centerY + innerTunnelHalfWidth)

   .fillRect(centerX, 30 + caveWall, g.getWidth(), 30 + caveWall + innerTunnelWidth)
   .fillCircle(centerX, 30 + caveWall + innerTunnelHalfWidth, innerTunnelHalfWidth)
   .fillRect(centerX - innerTunnelHalfWidth, 30 + caveWall + innerTunnelHalfWidth, centerX + innerTunnelHalfWidth, centerY)

   .fillRect(centerX, g.getHeight() - 30 - caveWall - innerTunnelWidth, g.getWidth(), g.getHeight() - 30 - caveWall)
   .fillCircle(centerX, g.getHeight() - 30 - caveWall - innerTunnelHalfWidth, innerTunnelHalfWidth)
   .fillRect(centerX - innerTunnelHalfWidth, centerY, centerX + innerTunnelHalfWidth, g.getHeight() - 30 - caveWall - innerTunnelHalfWidth);

  // Draw Cave Number
  g.setColor(0, 1, 0)
   .setFont("Vector", 48)
   .setFontAlign(0, 0)
   .drawString(playerCave + 1, centerX, centerY);

  // Draw Connecting Cave Number #1
  g.setFont("Vector", 32)
   .setFontAlign(1, 1)
   .drawString(caves[playerCave * 3] + 1, g.getWidth() - 4, 30 + caveWall + innerTunnelWidth + 2);

  // Draw Connecting Cave Number #2
  g.setFont("Vector", 32)
   .setFontAlign(1, 0)
   .drawString(caves[playerCave * 3 + 1] + 1, g.getWidth() - 4, centerY);

  // Draw Connecting Cave Number #3
  g.setFont("Vector", 32)
  .setFontAlign(1, 1)
  .drawString(caves[playerCave * 3 + 2] + 1, g.getWidth() - 4, g.getHeight() - 30);
}

setWatch(() => {
  playerCave = caves[playerCave * 3];
  drawCave();
}, BTN1, {repeat:true});

setWatch(() => {
  playerCave = caves[playerCave * 3 + 1];
  drawCave();
}, BTN2, {repeat:true});

setWatch(() => {
  playerCave = caves[playerCave * 3 + 2];
  drawCave();
}, BTN3, {repeat:true});

let playerCave = Math.floor(Math.random() * Math.floor(20));
drawCave();
