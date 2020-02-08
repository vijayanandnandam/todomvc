module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);
  await require('./clickAndHoverHelper')(page, scenario);

  // add more ready handlers here...
  if(scenario.label == 'Todo Homepage') {
    await page.focus('.new-todo')
    await page.keyboard.type("Todo example 1\n")
  }
};
