// script only adds bird and div if they don't already exist
if (document.getElementById('3GTZU3RrSlHhcocahnuken') === null) {

  // create new div
  const newDiv = document.createElement('div');

  // add unique id to new div
  // this is meant to ensure that the id could likely never already exist on a page
  // id is used to make sure script runs only once per page load
  const divID = document.createAttribute('id');
  divID.value = '3GTZU3RrSlHhcocahnuken';
  newDiv.setAttributeNode(divID);

  // determining y placement of div
  // add half of the veiwport height to the current scroll y (y at top of veiwport)
  // then subtract half height of div to properly center
  const topValue = window.scrollY + (window.innerHeight / 2) - 60;

  // style new div
  const divStyles = document.createAttribute('style');
  divStyles.value = `height: 120px; left: 50%; margin: 0 auto; margin-left: -50px; position: absolute; text-align: center; top: ${topValue}px; width: 100px; z-index: 2147483647;`;
  newDiv.setAttributeNode(divStyles);

  // add div to end of body
  document.body.appendChild(newDiv);

  // create new image
  const bird = document.createElement('img');

  // add src to bird
  const birdSource = document.createAttribute('src');
  birdSource.value = 'https://img.icons8.com/ios-filled/100/000000/dove.png';
  bird.setAttributeNode(birdSource);

  // add styles to bird
  const birdStyles = document.createAttribute('style');
  birdStyles.value = 'filter: invert(16%) sepia(89%) saturate(6990%) hue-rotate(359deg) brightness(103%) contrast(110%); -webkit-filter: invert(16%) sepia(89%) saturate(6990%) hue-rotate(359deg) brightness(103%) contrast(110%);';
  bird.setAttributeNode(birdStyles);

  // add bird to new div at top of body
  document.getElementById('3GTZU3RrSlHhcocahnuken').appendChild(bird);

  // create credit link
  const credit = document.createElement('a');

  // add href to credit link
  const creditHref = document.createAttribute('href');
  creditHref.value = 'https://icons8.com/icon/41006/dove';
  credit.setAttributeNode(creditHref);

  // add styles to credit link
  const creditStyles = document.createAttribute('style');
  creditStyles.value = 'color: #3ca4ff; display: block; font-size: .6rem; text-decoration: none;';
  credit.setAttributeNode(creditStyles);

  credit.innerText = 'Dove icon by Icons8';

  // add credit to new div at top of body
  document.getElementById('3GTZU3RrSlHhcocahnuken').appendChild(credit);

} else {

  // if bird and div already exist, remove them
  const element = document.getElementById('3GTZU3RrSlHhcocahnuken');
  element.parentNode.removeChild(element);
}
