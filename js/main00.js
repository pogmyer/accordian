const ipsums = [
  {
    title: '<a href="01.html">getElementById("")</a>',
    content: '<a href="01.html">addEventListener("")</a> | <a href="01.html">.innerText</a> | ',
  },
  {
    title: 'C',
    content: 'Crop circles are Chuck Norris way of .',
  },
  {
    title: 'CH',
    content: 'Blue castello lancashire paneer.',
  },
  {
    title: 'Lops',
    content: 'Lorem ipsum dolor sit amet, consectetur a. ',
  },
  {
    title: 'Lor',
    content: 'Lor rr',
  },
  {
    title: 'Sit',
    content: 'sit xx',
  },
  {
    title: 'Zr',
    content: 'Lor rr',
  },
  {
    title: 'It',
    content: 'sit xx',
  }
];

const updateAccordian = (e) => {
  $('.tabs__tab').removeAttr('id');

  $(e.target).attr('id', 'tabs--active');

  accordianText();
};

const accordianText = () => {
  const index =  $('#tabs--active').val();
  const info = ipsums[index];

  $('.accordian__content-box').html(
    `
      <h3 class="accordian__title">${info.title}</h3>
      <p class="accordian__content">${info.content}</p>
    `
  );
}

// on page load
accordianText();

$('.tabs__tab').on('click', updateAccordian);