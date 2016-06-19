$(document).ready(function() {
  var home = $('#home'),
      aboutUs = $('#aboutUs'),
      programs = $('#programs'),
      news = $('#news'),
      contactUs = $('#contactUs'),

      homeBtn = $('#homeBtn'),
      aboutUsBtn = $('#aboutUsBtn'),
      programsBtn = $('#programsBtn'),
      newsBtn = $('#newsBtn'),
      contactUsBtn = $('#contactUsBtn');

  var sections = [home, aboutUs, programs, news, contactUs];

  $('.logo').fadeOut(0);
  $('.logo').fadeIn(3000);

  function sectionDisplay(section) {
      sections.forEach(function(data) {
        data.css('display', 'none');
      });
      section.css('display', 'block');
      section.fadeOut(0);
      section.fadeIn(1000);
      $('.navbar-toggle').trigger('click');
  }

  homeBtn.click(function() {
    sectionDisplay(home);
  });

  aboutUsBtn.click(function() {
    sectionDisplay(aboutUs);
  });

  programsBtn.click(function() {
    sectionDisplay(programs);
  });

  newsBtn.click(function() {
    sectionDisplay(news);
  });

  contactUsBtn.click(function() {
    sectionDisplay(contactUs);
  });
});
