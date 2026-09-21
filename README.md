# Cave Oops!

A funny, difficult pixel platformer with five large continuous cave maps. Each 1,660-pixel-wide route snakes across connected tiled chambers, descends through clearly framed character-sized openings, and continues through maps up to 3,000 pixels tall. Deterministic cave rules build gently changing ceilings, connected side walls, supported chamber edges, and open transition routes. Platforms use original ChatGPT-generated clay-and-dark-rock art based on the supplied cave reference. This is a separate project; Town Raid and Lantern Realms remain untouched.

Run `npm start`, then open <http://localhost:8792>.

## Controls

- Move: A/D, arrows, either stick, or D-pad
- Jump: Space, X, or Cross
- Dash: Shift, C, Square, Circle, or right trigger
- Drop from ledges: S, down, or down on left stick
- Restart stage: R or Triangle
- Pause: Escape, Start, or Options

PS5 DualSense controllers work through Chrome with either a USB cable or Bluetooth. The title screen changes to **PS5 CONTROLLER READY** when Chrome detects it.

The game saves unlocked stages, best times, gold, and total deaths in the browser.

Terrain always renders at one fixed pixel scale. Narrow ledges crop the cave texture instead of squeezing it. Player physics use fine substeps, separate horizontal and vertical collision resolution, ceiling-corner correction, coyote time, and solid push-out so moving blocks cannot leave the player trapped inside terrain.

The courier, enemies, traps, checkpoints, and portals use individually cut `sprites-v3` artwork with crisp fully transparent edges. Five cause-specific courier death animations provide twenty different frames for spikes, falls, enemy hits, arrows, and boulders. Death poses are clamped inside the camera so every animation remains visible before the checkpoint reset.
