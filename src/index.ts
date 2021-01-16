
import { EXPONENT_CSS_STYLES, Panel } from "@repcomm/exponent-ts";
import { Renderer } from "./components/renderer";
import { PerspectiveCamera, Scene } from "three";

//Because top level await is a mess
async function main() {
  
  //Wait on ammo to load (imported w/ html tag)
  await Ammo();

  //Create a vector to test
  let vec = new Ammo.btVector3(0, 0, 0);
  console.log(vec);

  //Append exponent styles
  EXPONENT_CSS_STYLES.mount(document.head);

  //Create a div to contain the ui
  const container = new Panel()
  .setId("container")
  .mount(document.body);

  //3d rendering
  const camera = new PerspectiveCamera(75, 1, 1, 100);
  const scene = new Scene();

  //Renderer mixes exponent system with three js renderer
  const renderer = new Renderer()
  .mount(container)
  .setScene(scene)
  .setCamera(camera);
}

main();
